import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const { nome, email, mensagem } = await req.json();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS, 
    },
  });

  try {
    await transporter.sendMail({
      from: `Portfolio de Henry <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: process.env.EMAIL_USER,
      subject: `Nova mensagem de ${nome}`,
      text: `Mensagem:\n${mensagem}\n\nEmail de contato: ${email}`,
    });

    return NextResponse.json({ success: true, message: 'Email enviado com sucesso.' });
  } catch (error) {
  console.error('Erro ao enviar email:', error); // 👈 Isso vai aparecer nos logs do Vercel
  return NextResponse.json({ success: false, message: 'Erro ao enviar email.' }, { status: 500 });
}
}
