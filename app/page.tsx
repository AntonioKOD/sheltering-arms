'use client';
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"
import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react"
import { CrossIcon, DoveIcon, PrayingHandsIcon, HaloIcon } from "./icons"

export default function Page() {
  // Animation controls for advanced effects
  const heroControls = useAnimation()
  const aboutControls = useAnimation()
  const donationControls = useAnimation()
  const videoControls = useAnimation()
  const bottomControls = useAnimation()

  useEffect(() => {
    heroControls.start({ opacity: 1, y: 0, transition: { duration: 1, delay: 0.1 } })
    aboutControls.start({ opacity: 1, y: 0, transition: { duration: 1, delay: 0.2 } })
    donationControls.start({ opacity: 1, y: 0, transition: { duration: 1, delay: 0.3 } })
    videoControls.start({ opacity: 1, y: 0, transition: { duration: 1, delay: 0.4 } })
    bottomControls.start({ opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } })
  }, [])

  return (
    <div className="min-h-screen bg-[#f2f2f2] relative overflow-x-hidden">
      {/* Top Header Bar */}
      <div className="bg-[#dba860] text-white py-2 px-4 text-shadow">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <span>Contact: +1-02 836 214 3699 | rapture-readiness.com</span>
          </div>
          <div className="flex items-center space-x-6">
            <span>Warmth. Faith. Assurance.</span>
            <div className="flex items-center space-x-2">
              <span>Follow Us:</span>
              <div className="flex space-x-2">
                <Facebook className="w-4 h-4" />
                <Instagram className="w-4 h-4" />
                <Twitter className="w-4 h-4" />
                <Youtube className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section with floating icons */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={heroControls}
        className="bg-hero-gradient py-24 px-4 relative overflow-hidden"
      >
        {/* Floating icons */}
        <motion.div
          className="hidden md:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.18, y: [0, 20, 0], x: [0, 10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          style={{ position: 'absolute', top: 40, left: 60, zIndex: 1 }}
        >
          <CrossIcon />
        </motion.div>
        <motion.div
          className="hidden md:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.14, y: [0, -30, 0], x: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          style={{ position: 'absolute', top: 120, right: 80, zIndex: 1 }}
        >
          <DoveIcon />
        </motion.div>
        <motion.div
          className="hidden md:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.12, y: [0, 25, 0], x: [0, -15, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          style={{ position: 'absolute', bottom: 60, left: 120, zIndex: 1 }}
        >
          <PrayingHandsIcon />
        </motion.div>
        <motion.div
          className="hidden md:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.16, y: [0, -20, 0], x: [0, 20, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
          style={{ position: 'absolute', bottom: 40, right: 100, zIndex: 1 }}
        >
          <HaloIcon />
        </motion.div>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={heroControls}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-5xl lg:text-6xl font-bold text-[#2b0a0a] leading-tight mb-8 text-shadow">
                Be Ready When You&apos;re Called Home.
              </h1>
              <p className="text-[#2b0a0a] text-xl leading-relaxed mb-8 text-shadow">
                Sheltering Arms ensures your pets, your home, and your final wishes are cared for with compassion and integrity.
              </p>
              <Button className="bg-gradient-to-r from-[#dba860] to-[#aa7446] hover:from-[#aa7446] hover:to-[#dba860] text-white px-10 py-4 text-lg rounded-full shadow-lg transition-all duration-200">Get Started</Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={heroControls}
              transition={{ delay: 0.3 }}
              className="space-y-4"
            >
              {/* Optionally, add a comforting image or illustration here */}
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Disclaimer Section */}
      <div className="max-w-2xl mx-auto bg-yellow-200 border-l-4 border-yellow-600 text-yellow-900 p-6 my-8 rounded-lg glass-card text-center text-lg font-semibold shadow-lg">
        <p className="drop-shadow-sm">We cannot predict when or whether the rapture will occur. We will provide these services if and when it happens.</p>
      </div>

      {/* How It Works Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={aboutControls}
        className="bg-white py-20 px-4"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-14 text-shadow">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }} className="flex flex-col items-center text-center p-8 glass-card hover:scale-105 transition-transform duration-300">
              <CrossIcon />
              <h4 className="font-semibold text-lg mt-4 mb-2 text-[#2b0a0a] text-shadow">Choose Your Plan</h4>
              <p className="text-[#2b0a0a]">Select the level of protection and peace of mind that’s right for you.</p>
            </motion.div>
            <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }} className="flex flex-col items-center text-center p-8 glass-card hover:scale-105 transition-transform duration-300">
              <DoveIcon />
              <h4 className="font-semibold text-lg mt-4 mb-2 text-[#2b0a0a] text-shadow">Share Your Details</h4>
              <p className="text-[#2b0a0a]">Tell us about your pets, your home, and any messages you wish to deliver.</p>
            </motion.div>
            <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }} className="flex flex-col items-center text-center p-8 glass-card hover:scale-105 transition-transform duration-300">
              <PrayingHandsIcon />
              <h4 className="font-semibold text-lg mt-4 mb-2 text-[#2b0a0a] text-shadow">Secure Your Reservation</h4>
              <p className="text-[#2b0a0a]">Pay your one-time fee and monthly support to keep your plan active.</p>
            </motion.div>
            <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }} className="flex flex-col items-center text-center p-8 glass-card hover:scale-105 transition-transform duration-300">
              <HaloIcon />
              <h4 className="font-semibold text-lg mt-4 mb-2 text-[#2b0a0a] text-shadow">Rest Easy</h4>
              <p className="text-[#2b0a0a]">Should the rapture occur, our team will step in immediately to care for what you leave behind.</p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Plans & Pricing Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={donationControls}
        className="bg-accent-gradient py-20 px-4"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-white text-shadow drop-shadow-lg">One Simple Package for Complete Peace of Mind</h2>
          <p className="text-center text-lg mb-4 text-white/90 drop-shadow">We offer a single, comprehensive package to care for your pets and personal property. All funds will be used to provide for your loved ones and belongings in the event of the rapture. No hidden fees, no fine print—just a promise kept.</p>
          <div className="flex justify-center mb-8">
            <div className="bg-[#fffbe6] border border-yellow-400 rounded-lg px-6 py-3 text-yellow-900 font-bold text-lg shadow-md flex items-center gap-2">
              <span className="inline-block w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></span>
              We are currently accepting a limited number of reservations. <span className='underline font-extrabold text-yellow-800'>2,000 spots available</span>.
            </div>
          </div>
          <div className="flex justify-center mb-12">
            <div className="glass-card p-10 flex flex-col items-center hover:scale-105 transition-transform duration-300 max-w-md w-full" style={{background: 'rgba(255,255,255,0.92)'}}>
              <h3 className="text-2xl font-bold mb-2 text-[#2b0a0a] text-shadow drop-shadow">Sheltering Arms Package</h3>
              <ul className="mb-4 text-left list-disc list-inside text-[#2b0a0a]">
                <li>Care for all your pets</li>
                <li>Protection and stewardship of your home and personal property</li>
                <li>Delivery of messages and instructions to loved ones</li>
                <li>Compassionate, faith-based service</li>
              </ul>
              <div className="text-xl font-bold mb-2 text-[#aa7446]">$200 initial fee + $7/month</div>
              <div className="text-sm text-[#2b0a0a] mt-2">All funds are used to care for your pets and property if the rapture occurs.</div>
            </div>
          </div>
          <div className="text-center">
            <Button className="bg-gradient-to-r from-[#dba860] to-[#aa7446] hover:from-[#aa7446] hover:to-[#dba860] text-white px-10 py-4 text-lg rounded-full shadow-lg transition-all duration-200 drop-shadow-lg">Reserve My Place</Button>
          </div>
        </div>
      </motion.div>

      {/* About Us Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={videoControls}
        className="bg-white py-20 px-4"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8 text-[#2b0a0a] text-shadow">A Faith-Based Commitment to Care</h2>
          <p className="text-center text-lg max-w-3xl mx-auto mb-12 text-[#2b0a0a]">
            At Sheltering Arms, we understand the profound hope you carry—and the responsibility you feel for those you’ll leave behind. Our team is united by faith and a mission: to offer trustworthy, compassionate service when it matters most. From experienced animal caretakers to dedicated security partners, every member of our team shares your values of stewardship and love.
          </p>
        </div>
      </motion.div>

      {/* Why Choose Us Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={bottomControls}
        className="bg-[#f2f2f2] py-20 px-4"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8 text-[#2b0a0a] text-shadow">More Than a Service—A Promise.</h2>
          <ul className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-lg text-[#2b0a0a]">
            <li className="glass-card p-6">A mission inspired by faith and love</li>
            <li className="glass-card p-6">Trusted experience caring for pets and properties</li>
            <li className="glass-card p-6">Clear commitments you can count on</li>
            <li className="glass-card p-6">Secure, private handling of your personal instructions</li>
            <li className="glass-card p-6">Always respectful, never judgmental</li>
          </ul>
        </div>
      </motion.div>

      {/* Testimonials Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={bottomControls}
        className="bg-white py-20 px-4"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8 text-[#2b0a0a] text-shadow">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <blockquote className="p-8 glass-card italic text-lg text-[#2b0a0a] shadow-lg">
              “I feel such relief knowing my dogs will be safe and loved if I’m taken. Thank you for this wonderful ministry.”
              <footer className="mt-4 text-sm not-italic text-right">— Rebecca T., Arizona</footer>
            </blockquote>
            <blockquote className="p-8 glass-card italic text-lg text-[#2b0a0a] shadow-lg">
              “The peace of mind is priceless. I’m prepared for whatever God has planned.”
              <footer className="mt-4 text-sm not-italic text-right">— Mark R., Texas</footer>
            </blockquote>
          </div>
        </div>
      </motion.div>

      {/* FAQ Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={bottomControls}
        className="bg-accent-gradient py-20 px-4"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8 text-white text-shadow">FAQs</h2>
          <div className="max-w-2xl mx-auto space-y-8">
            <div className="glass-card p-8">
              <h4 className="font-semibold mb-2 text-[#2b0a0a] text-shadow">Who is this service for?</h4>
              <p className="text-[#2b0a0a]">Sheltering Arms is a preparedness service created specifically for Christians who want to ensure their pets and property are cared for in the event of the rapture.</p>
            </div>
            <div className="glass-card p-8">
              <h4 className="font-semibold mb-2 text-[#2b0a0a] text-shadow">How will you know the rapture has happened?</h4>
              <p className="text-[#2b0a0a]">Imagine a day like any other—people going about their lives, the world moving as it always has. And then, in a moment, everything changes. The Bible paints a picture of the rapture as a sudden, miraculous event: the Lord Himself will descend, a trumpet will sound, and believers will be caught up to meet Him in the air (1 Thessalonians 4:16-17). It will be a day of both awe and hope, a fulfillment of God’s promise. When that day comes, the absence of Christians will be unmistakable, and we will lovingly step in to honor the trust you’ve placed in us.</p>
            </div>
            <div className="glass-card p-8">
              <h4 className="font-semibold mb-2 text-[#2b0a0a] text-shadow">What happens if I move or my circumstances change?</h4>
              <p className="text-[#2b0a0a]">Simply contact our team to update your address or details. We are committed to keeping your information current so we can serve you best.</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Final Call to Action Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={bottomControls}
        className="bg-white py-20 px-4"
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-[#2b0a0a] text-shadow">Be Ready. Be at Peace.</h2>
          <p className="text-lg mb-8 text-[#2b0a0a]">Your faith has prepared your soul. Let us help you prepare everything else.</p>
          <Button className="bg-gradient-to-r from-[#dba860] to-[#aa7446] hover:from-[#aa7446] hover:to-[#dba860] text-white px-10 py-4 text-lg rounded-full shadow-lg transition-all duration-200">Reserve Your Plan Now</Button>
        </div>
      </motion.div>

      {/* Footer Section */}
      <footer className="w-full py-10 bg-[#2b0a0a] text-white flex flex-col items-center gap-4 text-sm glass-card mt-12">
        <div className="flex flex-wrap gap-6 mb-2 justify-center items-center">
          <a href="#" className="hover:underline">Terms &amp; Conditions</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Contact Us</a>
          <a href="#" className="hover:underline"><Facebook className="inline w-4 h-4" /></a>
          <a href="#" className="hover:underline"><Instagram className="inline w-4 h-4" /></a>
          <a href="#" className="hover:underline"><Twitter className="inline w-4 h-4" /></a>
          <a href="#" className="hover:underline"><Youtube className="inline w-4 h-4" /></a>
        </div>
        <button
          className="bg-gradient-to-r from-[#dba860] to-[#aa7446] hover:from-[#aa7446] hover:to-[#dba860] text-white px-8 py-3 text-lg rounded-full shadow-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] mb-2"
          type="button"
          onClick={() => window.open('https://buy.stripe.com/test_dR6cNw0wQ0wQ0w0cMN', '_blank')}
        >
          Donate
        </button>
        <div className="text-center text-callout">“May the peace of God, which surpasses all understanding, guard your hearts and your minds.”</div>
        <div>&copy; {new Date().getFullYear()} Sheltering Arms. All rights reserved.</div>
      </footer>
    </div>
  )
}
