import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  // 🛠️ Enhanced logging and error handling for email service debugging
  console.log('🚀 Contact API called at:', new Date().toISOString());
  
  try {
    const { name, email, message } = await req.json();
    console.log('📝 Form data received:', { 
      name: name || 'MISSING', 
      email: email || 'MISSING', 
      messageLength: message?.length || 'MISSING' 
    });

    // Validate required fields
    if (!name || !email || !message) {
      console.log('❌ Missing required fields');
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    // 🛠️ Enhanced environment variable checking with detailed logging
    console.log('🔍 Environment variable check:');
    console.log('- NODE_ENV:', process.env.NODE_ENV);
    console.log('- VERCEL:', process.env.VERCEL ? 'true' : 'false');
    console.log('- GMAIL_USER exists:', !!process.env.GMAIL_USER);
    console.log('- GMAIL_APP_PASSWORD exists:', !!process.env.GMAIL_APP_PASSWORD);
    
    // Log actual values in development for debugging
    if (process.env.NODE_ENV === 'development') {
      console.log('- GMAIL_USER value:', process.env.GMAIL_USER);
      console.log('- GMAIL_APP_PASSWORD length:', process.env.GMAIL_APP_PASSWORD?.length);
    }

    // 🛠️ Fallback logs if environment variables are undefined
    if (!process.env.GMAIL_USER) {
      console.log('🚨 CRITICAL: GMAIL_USER environment variable is undefined!');
      console.log('📋 Available env vars:', Object.keys(process.env).filter(key => key.includes('GMAIL')));
    }
    
    if (!process.env.GMAIL_APP_PASSWORD) {
      console.log('🚨 CRITICAL: GMAIL_APP_PASSWORD environment variable is undefined!');
    }

    // Return 500 with meaningful error if missing
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.log('❌ Missing environment variables - cannot proceed');
      return NextResponse.json(
        { 
          error: 'Server configuration error: Email credentials not found. Please contact directly at misrajyotiraditya@gmail.com',
          debug: process.env.NODE_ENV === 'development' ? {
            gmailUser: !!process.env.GMAIL_USER,
            gmailPassword: !!process.env.GMAIL_APP_PASSWORD
          } : undefined
        },
        { status: 500 }
      );
    }

    console.log('🔧 Creating nodemailer transporter...');
    // 🛠️ Enhanced transporter configuration with Gmail + app password
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD?.replace(/\s/g, ''), // Remove any whitespace
      },
      // Additional config for better serverless compatibility
      pool: true,
      maxConnections: 1,
      maxMessages: 3,
      rateDelta: 20000, // 20 seconds
      rateLimit: 5, // 5 emails per rateDelta
    });

    console.log('📧 Preparing email options...');
    // 🛠️ Enhanced email configuration
    const mailOptions = {
      from: process.env.GMAIL_USER, // Use your Gmail as sender
      to: process.env.GMAIL_USER,   // Send to yourself
      subject: `New Contact Message from ${name}`, // Required format
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`, // Include name, email, and message
      replyTo: email, // Allow replying directly to the sender
      // Enhanced email body with better formatting
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #7c3aed;">New Contact Message from ${name}</h2>
          <div style="background-color: #f3f4f6; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Timestamp:</strong> ${new Date().toLocaleString()}</p>
          </div>
          <div style="background-color: #ffffff; padding: 15px; border-left: 4px solid #7c3aed; margin: 20px 0;">
            <h3>Message:</h3>
            <p style="line-height: 1.6;">${message}</p>
          </div>
          <p style="color: #6b7280; font-size: 12px;">
            This message was sent from your portfolio website contact form.
          </p>
        </div>
      `,
    };

    console.log('📤 Attempting to send email...');
    // 🛠️ Enhanced try-catch with proper error logging for debugging in production
    await transporter.sendMail(mailOptions);
    console.log('✅ Email sent successfully!');
    
    // 🛠️ NextResponse returns success if email sent
    return NextResponse.json({ 
      success: true, 
      message: 'Email sent successfully',
      timestamp: new Date().toISOString()
    }, { status: 200 });

  } catch (error) {
    // 🛠️ Enhanced error logging for debugging in production
    console.error('🚨 Email service error:', error);
    
    let errorMessage = 'Email service temporarily unavailable';
    let errorCode = 'UNKNOWN_ERROR';
    
    if (error instanceof Error) {
      console.error('📋 Error details:', {
        name: error.name,
        message: error.message,
        code: (error as any).code,
        responseCode: (error as any).responseCode,
        response: (error as any).response,
        stack: process.env.NODE_ENV === 'development' ? error.stack : 'Stack trace hidden in production'
      });
      
      // Categorize different error types for better debugging
      if (error.message.includes('Invalid login') || (error as any).code === 'EAUTH') {
        errorMessage = 'Gmail authentication failed. Please check GMAIL_USER and GMAIL_APP_PASSWORD';
        errorCode = 'AUTH_ERROR';
        console.log('🔑 Authentication issue detected - check Gmail credentials');
      } else if (error.message.includes('ENOTFOUND') || error.message.includes('ECONNREFUSED')) {
        errorMessage = 'Network connection failed. Please try again';
        errorCode = 'NETWORK_ERROR';
        console.log('🌐 Network connectivity issue detected');
      } else if (error.message.includes('timeout') || error.message.includes('ETIMEDOUT')) {
        errorMessage = 'Email service timeout. Please try again';
        errorCode = 'TIMEOUT_ERROR';
        console.log('⏰ Timeout issue detected');
      } else if ((error as any).responseCode === 535) {
        errorMessage = 'Gmail login credentials rejected. Please verify app password';
        errorCode = 'CREDENTIALS_REJECTED';
        console.log('🔐 Gmail credentials rejected - verify app password');
      }
    }
    
    // 🛠️ NextResponse returns failure if not sent
    return NextResponse.json({ 
      error: errorMessage,
      code: errorCode,
      fallback: 'Please contact directly at misrajyotiraditya@gmail.com',
      timestamp: new Date().toISOString(),
      debug: process.env.NODE_ENV === 'development' ? {
        originalError: error instanceof Error ? error.message : String(error)
      } : undefined
    }, { status: 500 });
  }
}