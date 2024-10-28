
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';


export async function POST(req :Request){
    const {email,message} = await req.json()
    try {
        const transporter = nodemailer.createTransport({
            service: 'Gmail', // or another email provider
            auth: {
              user: process.env.EMAIL_USER,
              pass: process.env.EMAIL_PASS,
            },
          });

          const mailOptions = {
            from: email,
            to: process.env.EMAIL_USER,
            subject: `Pesan terbaru dari ${email}`,
            text: message,
          };

          await transporter.sendMail(mailOptions);
          return NextResponse.json({status:200})
    } catch (error) {
        return NextResponse.json(error,{status:500})
    }
}