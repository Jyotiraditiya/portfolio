import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  }

  // Check for environment variables - use GMAIL_USER and GMAIL_APP_PASSWORD 
  // which are already set up in your Vercel environment
  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
    return NextResponse.json(
      { error: 'Server configuration error. Please contact directly at misrajyotiraditya@gmail.com' },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.GMAIL_USER, // Use your Gmail as sender
    to: process.env.GMAIL_USER,   // Send to yourself
    subject: `New Contact Message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    replyTo: email, // Allow replying directly to the sender
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Mail error:', error);
    return NextResponse.json({ 
      error: 'Email send failed. Please contact directly at misrajyotiraditya@gmail.com' 
    }, { status: 500 });
  }
}