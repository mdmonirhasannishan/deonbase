// app/api/sendEmail/route.ts
import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

interface EmailRequestBody {
  to: string;
  from: string;
  subject: string;
  message: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: EmailRequestBody = await req.json();
    

    const { to, from, subject, message } = body;

    if (!to || !subject || !message) {
      console.error('❌ Missing required fields:', { to, subject, message });
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 },
      );
    }

    const apiKey = process.env.ELASTIC_EMAIL_API_KEY;
    if (!apiKey) {
      console.error('❌ Missing Elastic Email API key');
      return NextResponse.json({ success: false, message: 'Missing API key' }, { status: 500 });
    }

    const response = await axios.post('https://api.elasticemail.com/v2/email/send', null, {
      params: {
        apikey: apiKey,
        from,
        to,
        subject,
        bodyHtml: message,
        isTransactional: true,
      },
    });


    return NextResponse.json({
      success: true,
      message: 'Email sent successfully',
      data: response.data,
    });
  } catch (error: any) {
    console.error('❌ Email send error:', error.message);
    if (error.response) {
      console.error('📨 Elastic Email error response:', error.response.data);
    }
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to send email',
        error: error.message,
        response: error.response?.data || null,
      },
      { status: 500 },
    );
  }
}
