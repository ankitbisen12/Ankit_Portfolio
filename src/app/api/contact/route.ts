import { NextRequest } from 'next/server';
import transporter from '@/lib/mailer';

export async function POST(request: NextRequest) {
    const data = await request.formData();
    // console.log("Reached API endpoint - Form data is ", data);

    const inquiryData: Record<string, FormDataEntryValue | null> = {};

    for (const key of data.keys()) {
        inquiryData[key] = data.get(key);
    }

    const name = String(inquiryData.name ?? '');
    const email = String(inquiryData.email ?? '');
    const message = String(inquiryData.message ?? '');

    const mailOptions = {
        from: email,
        to: process.env.EMAIL_ADDRESS,
        subject: `New contact Us Message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        replyTo: email
    };

    try {
        await transporter.sendMail(mailOptions);
        return new Response(JSON.stringify({ message: 'Message sent successfully' , status: 200 }),);
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ message: 'Something went wrong.Try again later.' }), { status: 500 });
    }

}