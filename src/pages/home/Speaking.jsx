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
        <div className="text-center">
          <a
            href="mailto:contact@iyinojekunle.com"
            className="group bg-[#006D6F] text-white px-10 py-5 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 text-lg"
          >
            Request Speaking Engagement
            <Mail size={22} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Optional: Testimonials */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-[#006D6F]">What People Are Saying</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-[#CFFAF4]/20 rounded-2xl shadow-lg">
              <p className="text-gray-700 italic">“Iyin’s talk inspired our whole team to think bigger and act with purpose.”</p>
              <p className="mt-4 font-semibold text-[#006D6F]">— Jane Doe, Event Organizer</p>
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
