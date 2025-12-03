import React from "react";
import { Mail, Users, Instagram, Facebook, Twitter, Linkedin, MessageCircle } from "lucide-react";

export default function Speaking() {
  return (
    <section className="min-h-screen bg-white py-24 px-6 md:px-12">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Hero / Intro */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#CFFAF4]/50 backdrop-blur-sm px-4 py-2 rounded-full">
            <Users size={18} className="text-[#FF6B4A]" />
            <span className="text-sm font-semibold text-[#006D6F]">Speaking Engagements</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-[#006D6F] leading-tight">
            Invite Iyin to Speak
          </h1>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Whether it's a conference, church event, or virtual session, Iyin shares stories of hope and healing to inspire audiences.
          </p>
        </div>

        {/* Request Button / CTA */}
        {/* Contact Form */}
        <div className="bg-gradient-to-br from-[#CFFAF4]/30 to-white p-8 md:p-12 rounded-3xl shadow-xl">
          <h2 className="text-3xl font-bold text-[#006D6F] mb-6">Request a Speaking Engagement</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-[#006D6F] mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#006D6F] focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-[#006D6F] mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#006D6F] focus:outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-[#006D6F] mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#006D6F] focus:outline-none transition-colors"
                  placeholder="+234 XXX XXX XXXX"
                />
              </div>
              <div>
                <label htmlFor="organization" className="block text-sm font-semibold text-[#006D6F] mb-2">
                  Organization/Church
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#006D6F] focus:outline-none transition-colors"
                  placeholder="Organization name"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="event-type" className="block text-sm font-semibold text-[#006D6F] mb-2">
                  Event Type *
                </label>
                <select
                  id="event-type"
                  name="event-type"
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#006D6F] focus:outline-none transition-colors"
                >
                  <option value="">Select event type</option>
                  <option value="conference">Conference</option>
                  <option value="church">Church Service</option>
                  <option value="workshop">Workshop/Seminar</option>
                  <option value="virtual">Virtual Event</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="event-date" className="block text-sm font-semibold text-[#006D6F] mb-2">
                  Preferred Event Date
                </label>
                <input
                  type="date"
                  id="event-date"
                  name="event-date"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#006D6F] focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-[#006D6F] mb-2">
                Additional Details *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="5"
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#006D6F] focus:outline-none transition-colors resize-none"
                placeholder="Tell us about your event, audience size, topic preferences, and any other relevant details..."
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="group bg-[#FF6B4A] text-white px-10 py-5 rounded-full font-semibold hover:bg-[#ff5a33] hover:shadow-2xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 text-lg"
              >
                Submit Request
                <Mail size={22} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </form>

          <p className="text-center text-sm text-gray-600 mt-6">
            Or email directly at{" "}
            <a href="mailto:contact@iyinojekunle.com" className="text-[#006D6F] font-semibold hover:text-[#FF6B4A] transition-colors">
              contact@iyinojekunle.com
            </a>
          </p>
        </div>

        {/* Optional: Testimonials */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-[#006D6F]">What People Are Saying</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-[#CFFAF4]/20 rounded-2xl shadow-lg">
              <p className="text-gray-700 italic">“Iyin’s talk inspired our whole team to think bigger and act with purpose.”</p>
              <p className="mt-4 font-semibold text-[#006D6F]">— Jane Eva, Event Organizer</p>
            </div>
            <div className="p-6 bg-[#CFFAF4]/20 rounded-2xl shadow-lg">
              <p className="text-gray-700 italic">“Her story is powerful, relatable, and uplifting for any audience.”</p>
              <p className="mt-4 font-semibold text-[#006D6F]">— John Smith, Church Leader</p>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="text-center mt-12">
          <h3 className="text-xl font-semibold text-[#006D6F] mb-4">Connect with Iyin</h3>
          <div className="flex justify-center gap-6">
            <a href="https://instagram.com/iyinojekunle" target="_blank" rel="noopener noreferrer" className="text-[#C13584] hover:text-[#FF6B4A] transition-colors">
              <Instagram size={28} />
            </a>
            <a href="https://facebook.com/iyinojekunle" target="_blank" rel="noopener noreferrer" className="text-[#1877F2] hover:text-[#FF6B4A] transition-colors">
              <Facebook size={28} />
            </a>
            <a href="https://twitter.com/iyinojekunle" target="_blank" rel="noopener noreferrer" className="text-[#1DA1F2] hover:text-[#FF6B4A] transition-colors">
              <Twitter size={28} />
            </a>
            <a href="https://linkedin.com/in/iyinojekunle" target="_blank" rel="noopener noreferrer" className="text-[#0A66C2] hover:text-[#FF6B4A] transition-colors">
              <Linkedin size={28} />
            </a>
            <a href="https://wa.me/234XXXXXXXXXX" target="_blank" rel="noopener noreferrer" className="text-[#25D366] hover:text-[#FF6B4A] transition-colors">
              <MessageCircle size={28} />
            </a>
          </div>
        </div>

        
      </div>
    </section>
  );
}
