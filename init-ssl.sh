#!/bin/bash
set -e

DOMAIN="bykov.org.ua"
EMAIL="bykov.pravo@gmail.com"

# Create required directories
mkdir -p ./nginx/conf ./nginx/www ./certbot/conf ./certbot/www

# Create temporary Nginx config for HTTP only
cat > ./nginx/conf/default.conf << EOL
server {
    listen 80;
    listen [::]:80;
    server_name ${DOMAIN} www.${DOMAIN};
    
    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
        allow all;
    }
    
    location / {
        return 200 "Let's Encrypt validation server";
    }
}
EOL

# Start ONLY the Nginx container first
echo "Starting Nginx for certificate validation..."
docker compose up -d nginx

# Make sure Nginx is running and ports are exposed
echo "Waiting for Nginx to initialize..."
sleep 10

# Check if Nginx is accessible on port 80
if ! curl -s http://localhost:80 > /dev/null; then
    echo "ERROR: Nginx is not accessible on port 80. Check your Docker and firewall settings."
    exit 1
fi

echo "Nginx is running. Proceeding with certificate request..."

# Request certificates in standalone mode (doesn't require Nginx to be running)
echo "Requesting Let's Encrypt certificates..."
docker compose run --rm \
  -p 80:80 \
  certbot certbot certonly --standalone \
  --preferred-challenges http \
  --email $EMAIL \
  --agree-tos \
  --no-eff-email \
  -d ${DOMAIN} -d www.${DOMAIN}

# Check if certificates were successfully created
if [ ! -d "./certbot/conf/live/${DOMAIN}" ]; then
    echo "ERROR: Certificate generation failed. Check logs above for details."
    exit 1
fi

echo "Certificates successfully obtained!"

# Create final Nginx config with SSL
cat > ./nginx/conf/default.conf << EOL
server {
    listen 80;
    listen [::]:80;
    server_name ${DOMAIN} www.${DOMAIN};
    
    # Redirect HTTP to HTTPS
    location / {
        return 301 https://\$host\$request_uri;
    }
    
    # Let's Encrypt verification
    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
    }
}

server {
    listen 443 ssl;
    listen [::]:443 ssl;
    http2 on;
    server_name ${DOMAIN} www.${DOMAIN};
    
    # SSL Configuration
    ssl_certificate /etc/letsencrypt/live/${DOMAIN}/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/${DOMAIN}/privkey.pem;
    ssl_trusted_certificate /etc/letsencrypt/live/${DOMAIN}/chain.pem;
    
    # SSL Settings
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_prefer_server_ciphers on;
    ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256;
    
    # Main location block for Next.js
    location / {
        proxy_pass http://nextjs:3000;
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
    }
}
EOL

# Restart all services to apply SSL config
echo "Restarting all services with SSL configuration..."
docker compose down
docker compose up -d

# Set up auto-renewal cron job
echo "Setting up auto-renewal cron job..."
CRON_CMD="0 3 * * * cd $(pwd) && docker compose run --rm certbot certbot renew --quiet && docker compose exec nginx nginx -s reload"

# Add to crontab if it doesn't already exist
(crontab -l 2>/dev/null | grep -q "$CRON_CMD") || (crontab -l 2>/dev/null; echo "$CRON_CMD") | crontab -

echo "SSL setup complete! Your site should now be accessible via HTTPS."
echo "Certificates will automatically renew at 3:00 AM daily if needed."