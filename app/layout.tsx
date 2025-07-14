"use client";

import { Playfair_Display, Open_Sans } from 'next/font/google';
import "./globals.css";
import SecureMyPlaceModal from "./components/SecureMyPlaceModal";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-heading', display: 'swap' });
const openSans = Open_Sans({ subsets: ['latin'], variable: '--font-body', display: 'swap' });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <html lang="en" className={`${playfair.variable} ${openSans.variable}`}>
      <head>
        <link rel="icon" href="/sheltering_arms.png" type="image/png" />
      </head>
      <body className={openSans.className}>
        {/* Top Navigation Bar */}
        <nav className="sticky top-0 z-30 w-full bg-[var(--card-background)]/90 backdrop-blur border-b border-[var(--warm-sand)] shadow-sm">
          <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 text-2xl font-bold tracking-tight text-[var(--accent)]" style={{ fontFamily: 'var(--font-heading)' }}>
              <Image src="/sheltering_arms.png" alt="Sheltering Arms Logo" width={64} height={64} className="w-16 h-16 rounded-full shadow-lg border-2 border-[var(--accent)] bg-white object-cover" />
              Sheltering Arms
            </Link>
            {/* Secure My Place Button */}
            <button
              className="bg-gradient-to-r from-[#dba860] to-[#aa7446] hover:from-[#aa7446] hover:to-[#dba860] text-white px-8 py-3 text-lg rounded-full shadow-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
              type="button"
              id="secure-my-place-btn"
              onClick={() => setModalOpen(true)}
            >
              Secure My Place
            </button>
          </div>
        </nav>
        <SecureMyPlaceModal open={modalOpen} onClose={() => setModalOpen(false)} />
        {/* Main Content */}
        {children}
      </body>
    </html>
  );
}
