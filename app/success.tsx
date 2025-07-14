'use client';

import Link from 'next/link';

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f2f2f2] px-4">
      <div className="glass-card p-10 max-w-lg w-full text-center shadow-lg">
        <h1 className="text-4xl font-bold mb-4 text-[var(--heading)]">Thank You!</h1>
        <p className="text-lg mb-6 text-[var(--deep-brown)]">
          Your payment was successful.<br />
          We are grateful for your trust in Sheltering Arms.<br />
          You will receive a confirmation email shortly.
        </p>
        <Link href="/" className="inline-block bg-gradient-to-r from-[#dba860] to-[#aa7446] hover:from-[#aa7446] hover:to-[#dba860] text-white px-8 py-3 text-lg rounded-full shadow-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]">
          Return Home
        </Link>
      </div>
    </div>
  );
} 