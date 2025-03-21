'use server';

import nodemailer from 'nodemailer';

type ContactFormData = {
  name: string;
  phone: string;
  message: string;
};

type SendEmailResponse = {
  success: boolean;
  message: string;
};

export async function sendEmail(formData: ContactFormData): Promise<SendEmailResponse> {
  try {
    // Create a transporter with Gmail SMTP settings
    const transporter = nodemailer.createTransport({
      service: 'gmail',  // Using 'gmail' as service automatically sets host, port, and secure options
      auth: {
        user: process.env.GMAIL_USER || 'your-gmail@gmail.com',
        pass: process.env.GMAIL_APP_PASSWORD || 'your-app-password', // This must be an App Password, not your regular Gmail password
      },
    });

    // Configure email options
    const mailOptions = {
      from: process.env.EMAIL_FROM || 'website@bykov-attorney.com',
      to: process.env.EMAIL_TO || 'info@bykov-attorney.com',
      subject: `Нове звернення від ${formData.name}`,
      text: `
        Ім'я: ${formData.name}
        Телефон: ${formData.phone}
        
        Повідомлення:
        ${formData.message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 10px;">
          <h2 style="color: #1a237e; margin-bottom: 20px;">Нове звернення з сайту</h2>
          
          <div style="margin-bottom: 20px;">
            <p style="margin: 5px 0;"><strong>Ім'я:</strong> ${formData.name}</p>
            <p style="margin: 5px 0;"><strong>Телефон:</strong> ${formData.phone}</p>
          </div>
          
          <div style="background-color: #f5f7fa; padding: 15px; border-radius: 5px; margin-top: 20px;">
            <h3 style="color: #00bcd4; margin-top: 0;">Повідомлення:</h3>
            <p style="white-space: pre-line;">${formData.message}</p>
          </div>
          
          <div style="margin-top: 30px; font-size: 12px; color: #666;">
            <p>Це повідомлення було надіслано з форми зворотнього зв'язку на сайті.</p>
          </div>
        </div>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Return success response
    return {
      success: true,
      message: 'Email successfully sent',
    };
  } catch (error) {
    console.error('Error sending email:', error);
    
    // Return error response
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Failed to send email',
    };
  }
}