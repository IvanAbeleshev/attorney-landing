#!/bin/bash
set -e

# Configuration
DOMAIN="bykov.org.ua"
EMAIL="bykov.pravo@gmail.com"

# Create required directories
mkdir -p ./certbot/www ./certbot/conf

# Stop any running Nginx that might be using port 80
echo "Stopping any services that might be using port 80..."
docker compose down 2>/dev/null || true

# Run certbot in standalone mode to get the certificate
echo "Requesting Let's Encrypt certificate..."
docker run --rm \
  -v "$(pwd)/certbot/conf:/etc/letsencrypt" \
  -v "$(pwd)/certbot/www:/var/www/certbot" \
  -p 80:80 \
  certbot/certbot certonly --standalone \
  --preferred-challenges http \
  --email $EMAIL \
  --agree-tos \
  --no-eff-email \
  -d $DOMAIN -d www.$DOMAIN

# Check if it worked
if [ -d "./certbot/conf/live/$DOMAIN" ]; then
  echo "✅ Certificate successfully obtained!"
  echo "Certificate files are available at: ./certbot/conf/live/$DOMAIN/"
  echo "   - fullchain.pem: Full certificate chain"
  echo "   - privkey.pem: Private key"
  echo "   - chain.pem: CA chain certificates"
else
  echo "❌ Certificate request failed. Check the error messages above."
  exit 1
fi

# chmod +x get-cert.sh
# ./get-cert.sh