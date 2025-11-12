import React from "react";
import { ArrowRight, Book, Users, Heart, Mail } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#F9FAFB] text-[#1F2937]">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-[#CFFAF4]/70 to-[#FFF5F2] py-24 md:pt-56 md:pb-40 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <div className="flex flex-col justify-center">
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6 leading-tight text-[#006D6F]">
              Living with Purpose, Faith & Compassion
            </h1>
            <p className="text-lg mb-8 leading-relaxed text-[#374151]">
              Iyin Ojekunle is a Certified Associate in Project Management (CAPM)
              and public health advocate whose story bridges Nigeria and the U.S.
              Through her writing, advocacy, and faith-driven service, she inspires
              others to walk boldly in purpose and love like Jesus — every single day.
            </p>
            <div>
              <button className="bg-[#FF6B4A] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#ff5a33] transition inline-flex items-center gap-2">
                BUY THE BOOK <ArrowRight size={20} />
              </button>
            </div>
          </div>

          {/* Book Image */}
          <div className="flex justify-center items-center">
            <div className="transform rotate-3 hover:rotate-0 transition-all duration-500 h-full w-full max-w-xs md:max-w-sm">
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="bookcover.jpg"
                  alt="Book cover"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MEET IYIN SECTION */}
      <section className="relative py-20 px-6 md:px-12 bg-[#F9FAFB] overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Left: Image */}
          <div className="md:w-1/2 relative">
            <img
              src="iyinpic2.jpg"
              alt="Iyin Ojekunle"
              className="w-full h-[550px] object-cover rounded-3xl shadow-2xl"
            />
            {/* playful mint + coral blobs */}
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-[#CFFAF4]/60 rounded-full blur-2xl -z-10"></div>
            <div className="absolute bottom-0 -right-8 w-48 h-48 bg-[#FF6B4A]/40 rounded-full blur-2xl -z-10"></div>
          </div>

          {/* Right: Bio Card */}
          <div className="md:w-1/2 bg-white/90 backdrop-blur-md shadow-lg rounded-3xl p-8 md:p-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#006D6F] mb-6">
              Meet Iyin Ojekunle
            </h2>
            <p className="text-lg mb-4 leading-relaxed">
              Born in Eruwa, Oyo State, Nigeria, Iyin’s journey took her from humble roots
              to a life filled with purpose, faith, and compassion. Her story reflects a
              global perspective shaped by service and her calling to uplift others.
            </p>
            <p className="text-lg mb-4 leading-relaxed">
              She has organized international fundraisers, sponsored children through
              humanitarian programs, and served in public health projects—uniting compassion
              with excellence and faith in action.
            </p>
            <p className="text-lg mb-6 leading-relaxed">
              Her mission? To extend compassion intentionally and reflect Christ’s hope
              in every community she touches.
            </p>
            <button className="bg-[#FF6B4A] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#ff5a33] transition">
              Get to Know Iyin
            </button>
          </div>
        </div>
      </section>

      {/* RESOURCES SECTION */}
      <section className="py-20 px-6 bg-[#CFFAF4]/40">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#006D6F] mb-6">
              Free Faith Resources
            </h2>
            <p className="text-[#374151] text-lg mb-6 leading-relaxed">
              Strengthen your faith with Iyin’s free downloads — including
              <span className="font-semibold"> “I AM” Declarations, 30 Guided Prayers,</span>
              and devotionals for those newly walking with Christ.
            </p>
            <p className="text-[#374151] text-lg mb-8 leading-relaxed">
              Because every soul deserves to feel seen, loved, and empowered through God’s Word.
            </p>
            <button className="bg-[#FF6B4A] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#ff5a33] transition">
              Explore Resources
            </button>
          </div>

          <div className="relative flex justify-center">
            <div className="w-64 h-64 bg-[#FF6B4A]/20 rounded-full blur-2xl absolute -top-6 -left-6 -z-10"></div>
            <img
              src="faithresource.jpg"
              alt="Faith resources"
              className="w-full max-w-sm rounded-3xl shadow-xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* SPEAKING REQUEST */}
      <section className="py-20 px-6 bg-[#F9FAFB] text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#006D6F] mb-6">
            Invite Iyin to Speak
          </h2>
          <p className="text-lg text-[#374151] mb-8 leading-relaxed">
            Whether it’s a conference, church event, or virtual session, Iyin brings stories
            of hope and healing to help others rediscover their faith and purpose.
          </p>
          <button className="bg-[#FF6B4A] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#ff5a33] transition">
            Request Speaking Engagement
          </button>
        </div>
      </section>

      {/* BOOK PROMO */}
      <section className="py-20 px-6 bg-[#006D6F] text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            The Book That Started It All
          </h2>
          <p className="text-lg mb-10 leading-relaxed">
            “Walking in Purpose: Faith, Hope & Compassion” reveals Iyin’s journey of faith,
            service, and redemption. A must-read for anyone seeking peace and clarity
            in their own calling.
          </p>
          <button className="bg-[#FF6B4A] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#ff5a33] transition">
            Order Your Copy
          </button>
        </div>
      </section>

      {/* TAGLINE SCROLLER */}
      <div className="bg-[#FF6B4A] text-white py-5 overflow-hidden">
        <div className="flex animate-scroll whitespace-nowrap font-semibold">
          <span className="mx-8 text-lg">Faith • Hope • Compassion • Purpose • Service • Integrity • Excellence</span>
          <span className="mx-8 text-lg">Live Intentionally • Love Deeply • Reflect Christ</span>
        </div>
      </div>
    </div>
  );
}
