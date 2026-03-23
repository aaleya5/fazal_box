import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Load env vars
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Nodemailer transporter setup
// NOTE TO USER: You will need to add your email credentials to a .env file
const transporter = nodemailer.createTransport({
  service: 'gmail', // or use host/port for other providers
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS // App Password if using Gmail
  }
});

// API Endpoint
app.post('/api/quote', async (req, res) => {
  try {
    const { name, company, email, phone, boxType, dimensions, quantity, notes } = req.body;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'fazalboxworks@yahoo.co.in', // Your business email
      subject: `New Quote Request from ${name} (${company || 'No Company'})`,
      html: `
        <h2>New Quote Request via Website</h2>
        <table style="width: 100%; border-collapse: collapse; text-align: left;">
          <tr>
            <th style="padding: 8px; border: 1px solid #ddd;">Name</th>
            <td style="padding: 8px; border: 1px solid #ddd;">${name}</td>
          </tr>
          <tr>
            <th style="padding: 8px; border: 1px solid #ddd;">Company</th>
            <td style="padding: 8px; border: 1px solid #ddd;">${company || '-'}</td>
          </tr>
          <tr>
            <th style="padding: 8px; border: 1px solid #ddd;">Email</th>
            <td style="padding: 8px; border: 1px solid #ddd;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr>
            <th style="padding: 8px; border: 1px solid #ddd;">Phone</th>
            <td style="padding: 8px; border: 1px solid #ddd;">${phone || '-'}</td>
          </tr>
          <tr>
            <th style="padding: 8px; border: 1px solid #ddd;">Box Type</th>
            <td style="padding: 8px; border: 1px solid #ddd;">${boxType || '-'}</td>
          </tr>
          <tr>
            <th style="padding: 8px; border: 1px solid #ddd;">Dimensions</th>
            <td style="padding: 8px; border: 1px solid #ddd;">${dimensions || '-'}</td>
          </tr>
          <tr>
            <th style="padding: 8px; border: 1px solid #ddd;">Quantity</th>
            <td style="padding: 8px; border: 1px solid #ddd;">${quantity || '-'}</td>
          </tr>
          <tr>
            <th style="padding: 8px; border: 1px solid #ddd;">Notes</th>
            <td style="padding: 8px; border: 1px solid #ddd;">${notes || '-'}</td>
          </tr>
        </table>
      `
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);
    
    res.status(200).json({ success: true, message: 'Quote request sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, error: 'Failed to send quote request.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
