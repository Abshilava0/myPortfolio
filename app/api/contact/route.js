import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    console.log("📨 Incoming request body:", body);
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing parameters" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for port 465, false for 587
      auth: {
        user: process.env.SMTP_USER, // your Gmail or SMTP user
        pass: process.env.SMTP_PASS, // your Gmail app password
      },
    });

    await transporter.sendMail({
      from: `"Website Contact" <${process.env.SMTP_USER}>`,
      to: process.env.TO_EMAIL,
      subject: `New message from ${name}`,
      text: `
Name: ${name}
Email: ${email}

${message}
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to send mail" }, { status: 500 });
  }
}
