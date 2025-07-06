import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    console.log('Contact API called');
    const { name, email, message } = await request.json();
    console.log('Form data received:', { name, email, messageLength: message?.length });

    // Validate required fields
    if (!name || !email || !message) {
      console.log('Missing required fields');
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check environment variables
    console.log('Checking environment variables...');
    console.log('GMAIL_USER exists:', !!process.env.GMAIL_USER);
    console.log('GMAIL_APP_PASSWORD exists:', !!process.env.GMAIL_APP_PASSWORD);
    
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.log('Missing environment variables');
      return NextResponse.json(
        { error: 'Server configuration error: Missing email credentials. Please contact directly at misrajyotiraditya@gmail.com' },
        { status: 500 }
      );
    }

    console.log('Creating transporter...');
    // Create transporter using Gmail SMTP with explicit settings
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
      tls: {
        ciphers: 'SSLv3'
      }
    });

    // Test the transporter
    console.log('Verifying transporter...');
    try {
      await transporter.verify();
      console.log('Transporter verified successfully');
    } catch (verifyError) {
      console.error('Transporter verification failed:', verifyError);
      return NextResponse.json(
        { error: 'Email service temporarily unavailable. Please contact directly at misrajyotiraditya@gmail.com' },
        { status: 500 }
      );
    }

    // Email content
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER, // Send to your own email
      subject: `Portfolio Contact Form - Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
          <h2 style="color: #7c3aed; text-align: center; margin-bottom: 30px;">New Contact Form Submission</h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #374151; margin-bottom: 15px;">Contact Details:</h3>
            <p style="margin: 8px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 8px 0;"><strong>Email:</strong> ${email}</p>
          </div>
          
          <div style="background-color: #fefefe; padding: 20px; border-left: 4px solid #7c3aed; margin-bottom: 20px;">
            <h3 style="color: #374151; margin-bottom: 15px;">Message:</h3>
            <p style="line-height: 1.6; color: #4b5563;">${message}</p>
          </div>
          
          <div style="text-align: center; margin-top: 30px;">
            <p style="color: #6b7280; font-size: 14px;">
              This message was sent from your portfolio website contact form.
            </p>
          </div>
        </div>
      `,
    };

    // Send email
    console.log('Sending email...');
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    
    // Provide more specific error messages
    let errorMessage = 'Failed to send email';
    if (error instanceof Error) {
      if (error.message.includes('Invalid login')) {
        errorMessage = 'Email service authentication failed. Please contact directly at misrajyotiraditya@gmail.com';
      } else if (error.message.includes('ENOTFOUND') || error.message.includes('ECONNREFUSED')) {
        errorMessage = 'Network connection failed. Please try again or contact directly at misrajyotiraditya@gmail.com';
      } else {
        errorMessage = `Email service temporarily unavailable. Please contact directly at misrajyotiraditya@gmail.com`;
      }
    }
    
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}