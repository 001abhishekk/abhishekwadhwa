import { google } from 'googleapis';

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, subject, message, honeypot } = req.body;

    // Basic validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ 
        error: 'All fields are required',
        details: 'Please fill in all required fields: name, email, subject, and message.'
      });
    }

    // Honeypot spam protection
    if (honeypot) {
      console.log('Spam detected via honeypot');
      return res.status(400).json({ error: 'Spam detected' });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        error: 'Invalid email format',
        details: 'Please enter a valid email address.'
      });
    }

    // Content length validation
    if (name.length > 100 || subject.length > 200 || message.length > 2000) {
      return res.status(400).json({ 
        error: 'Content too long',
        details: 'Please keep your message within reasonable limits.'
      });
    }

    // Additional spam checks
    const spamKeywords = ['viagra', 'casino', 'lottery', 'winner', 'congratulations', 'click here', 'free money'];
    const messageContent = (subject + ' ' + message).toLowerCase();
    const hasSpamKeywords = spamKeywords.some(keyword => messageContent.includes(keyword));
    
    if (hasSpamKeywords) {
      console.log('Spam detected via keyword filter');
      return res.status(400).json({ error: 'Message flagged as spam' });
    }

    // Rate limiting check (simple in-memory store - in production, use Redis or database)
    const clientIP = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const rateLimitKey = `contact_${clientIP}`;
    
    // For demo purposes, we'll just log the submission
    console.log('Contact form submission:', {
      name,
      email,
      subject,
      message: message.substring(0, 100) + '...',
      ip: clientIP,
      timestamp: new Date().toISOString()
    });

if (isNewsletter) {
  try {
    const auth = new google.auth.JWT(
      process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      undefined,
      process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      ['https://www.googleapis.com/auth/spreadsheets']
    );

    const sheets = google.sheets({ version: 'v4', auth });

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID_SUBSCRIBE,
      range: 'Sheet1!A:B',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[email, new Date().toISOString()]],
      },
    });

    console.log(`✅ Subscribed to newsletter: ${email}`);
  } catch (err) {
    console.error('❌ Google Sheets error:', err);
    // Still return success to user, just log this
  }
}

    
    // For now, we'll simulate email sending
    const emailData = {
      to: 'abhishekw47@gmail.com', // Your email
      from: email,
      subject: `Contact Form: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>Submitted at: ${new Date().toLocaleString()}</small></p>
        <p><small>IP Address: ${clientIP}</small></p>
      `
    };

import nodemailer from 'nodemailer';

// Setup the transporter using SMTP credentials from environment variables
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Send the email
await transporter.sendMail({
  from: `"Portfolio Contact Form" <${process.env.SMTP_USER}>`,
  to: 'abhishekw47@gmail.com',
  subject: `Contact Form: ${subject}`,
  html: `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Subject:</strong> ${subject}</p>
    <p><strong>Message:</strong></p>
    <p>${message.replace(/\n/g, '<br>')}</p>
    <hr>
    <p><small>Submitted at: ${new Date().toLocaleString()}</small></p>
    <p><small>IP Address: ${clientIP}</small></p>
  `,
});
npm run dev

    // For demo, we'll just return success
    return res.status(200).json({ 
      success: true, 
      message: 'Thank you for your message! I\'ll get back to you within 24 hours.',
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({ 
      error: 'Internal server error',
      details: 'Something went wrong. Please try again later or contact me directly.'
    });
  }
}