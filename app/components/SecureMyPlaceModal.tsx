"use client";

import React, { useState } from 'react';
// Removed PayPalButtons import

export default function SecureMyPlaceModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    service: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  // Removed initialPaid and subscriptionActive state

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          mode: 'plan',
          name: form.name,
          email: form.email,
          phone: form.phone,
          address: form.address,
          service: form.service,
          message: form.message,
        }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert('Error creating Stripe session: ' + (data.error || 'Unknown error'));
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        alert('Error: ' + err.message);
      } else {
        alert('An unknown error occurred.');
      }
    } finally {
      setSubmitting(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="glass-card max-w-lg w-full p-8 relative animate-fade-in">
        <button
          className="absolute top-4 right-4 text-2xl text-[var(--accent)] hover:text-[var(--warm-brown)] focus:outline-none"
          onClick={onClose}
          aria-label="Close modal"
        >
          &times;
        </button>
        <h2 className="text-3xl font-bold mb-4 text-heading text-center">Secure My Place</h2>
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-900 p-4 mb-4 rounded text-center text-sm font-semibold">
          We cannot predict when or whether the rapture will occur. We will provide these services if and when it happens.<br />
          <span className='block text-yellow-700 mt-2 font-bold'>We are currently accepting a limited number of reservations. 2,000 spots available.</span>
        </div>
        {/* Stripe payment flow placeholder */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-semibold" htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[var(--accent)] bg-white/80 text-black"
              value={form.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold" htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[var(--accent)] bg-white/80 text-black"
              value={form.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold" htmlFor="phone">Phone</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[var(--accent)] bg-white/80 text-black"
              value={form.phone}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold" htmlFor="address">Address</label>
            <input
              id="address"
              name="address"
              type="text"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[var(--accent)] bg-white/80 text-black"
              value={form.address}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold" htmlFor="service">Service</label>
            <select
              id="service"
              name="service"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[var(--accent)] bg-white/80 text-black"
              value={form.service}
              onChange={handleChange}
            >
              <option value="" disabled>Select a service</option>
              <option value="Sheltering Arms Package">Sheltering Arms Package</option>
            </select>
          </div>
          <div>
            <label className="block mb-1 font-semibold" htmlFor="message">Message / Details</label>
            <textarea
              id="message"
              name="message"
              rows={3}
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[var(--accent)] bg-white/80 text-black"
              value={form.message}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#dba860] to-[#aa7446] hover:from-[#aa7446] hover:to-[#dba860] text-white px-8 py-3 text-lg rounded-full shadow-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] mt-2"
            disabled={submitting}
          >
            {submitting ? 'Redirecting...' : 'Proceed to Payment'}
          </button>
        </form>
      </div>
    </div>
  );
} 