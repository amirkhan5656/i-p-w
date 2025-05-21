import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';

export default async function handler(req: NextRequest, res: NextResponse) {
  if (req.method !== 'POST') return res.status(405).end('Method Not Allowed');

  const { plan, pages, revisions, deliveryDays, features, totalPrice } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail', // or your SMTP service
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const featureList = Object.entries(features)
    .filter(([_, val]) => val)
    .map(([key]) => `- ${key}`)
    .join('\n');

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.RECEIVER_EMAIL,
    subject: `New Website ${plan} Plan Request`,
    text: `Plan Type: ${plan}\nPages: ${pages}\nRevisions: ${revisions}\nDelivery Days: ${deliveryDays}\nTotal: $${totalPrice}\n\nSelected Features:\n${featureList || 'None'}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Email sending failed' });
  }
}
