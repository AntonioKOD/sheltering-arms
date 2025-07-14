import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import nodemailer from 'nodemailer';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2022-11-15' });

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { mode, email, name, phone, address, service, message } = body;

  // Send email with form info using Brevo SMTP
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.BREVO_SMTP_HOST,
      port: Number(process.env.BREVO_SMTP_PORT),
      auth: {
        user: process.env.BREVO_SMTP_USER,
        pass: process.env.BREVO_SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.BREVO_SMTP_USER,
      to: 'antonio_kodheli@icloud.com',
      subject: 'New Sheltering Arms Reservation',
      text: `New reservation submitted:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nAddress: ${address}\nService: ${service}\nMessage: ${message}`,
    });
  } catch (err) {
    console.error('Email send error:', err);
  }

  let sessionParams: Stripe.Checkout.SessionCreateParams;

  if (mode === 'donation') {
    sessionParams = {
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Sheltering Arms Donation',
            },
            unit_amount: 2000, // $20 donation for example
          },
          quantity: 1,
        },
      ],
      success_url: `${req.nextUrl.origin}/success`,
      cancel_url: `${req.nextUrl.origin}/?canceled=true`,
      customer_email: email,
    };
  } else if (mode === 'plan') {
    sessionParams = {
      payment_method_types: ['card'],
      mode: 'subscription',
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Sheltering Arms Plan',
            },
            unit_amount: 700, // $7/month
            recurring: { interval: 'month' },
          },
          quantity: 1,
        },
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Sheltering Arms Initial Fee',
            },
            unit_amount: 20000, // $200 initial fee
          },
          quantity: 1,
        },
      ],
      success_url: `${req.nextUrl.origin}/success`,
      cancel_url: `${req.nextUrl.origin}/?canceled=true`,
      customer_email: email,
      metadata: { name },
    };
  } else {
    return NextResponse.json({ error: 'Invalid mode' }, { status: 400 });
  }

  try {
    const session = await stripe.checkout.sessions.create(sessionParams);
    return NextResponse.json({ url: session.url });
  } catch (err: unknown) {
    if (err instanceof Error) {
      return NextResponse.json({ error: err.message }, { status: 500 });
    } else {
      return NextResponse.json({ error: 'Unknown error' }, { status: 500 });
    }
  }
} 