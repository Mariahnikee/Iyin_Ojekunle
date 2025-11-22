import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Book, Users, Heart, Mail, Sparkles } from "lucide-react";

export default function LandingPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-linear-to-b from-[#F9FAFB] to-white text-[#1F2937]">
      {/* HERO SECTION */}
      <section className="relative bg-linear-to-br from-[#CFFAF4]/70 via-[#FFF5F2] to-[#FFE5E0] py-16 md:pt-32 md:pb-32 px-6 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#CFFAF4] rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-80 h-80 bg-[#FFD4CC] rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          {/* Text Section */}
          <div className="flex flex-col justify-center space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full w-fit shadow-sm">
              <Sparkles size={16} className="text-[#FF6B4A]" />
              <span className="text-sm font-semibold text-[#006D6F]">
                Author • Speaker • Advocate
              </span>
            </div>

            <h1 className="font-heading text-5xl md:text-7xl font-bold leading-tight text-[#006D6F] tracking-tight">
              Living with Purpose, Faith & Compassion
            </h1>

            <p className="text-lg md:text-xl text-[#374151] leading-relaxed">
              Iyin Ojekunle is a{" "}
              <span className="font-semibold text-[#006D6F]">
                Certified Associate in Project Management (CAPM)
              </span>{" "}
              and public health advocate whose story bridges Nigeria and the
              U.S. Through her writing, advocacy, and faith-driven service, she
              inspires others to walk boldly in purpose.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button className="group bg-[#FF6B4A] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#ff5a33] hover:shadow-2xl transition-all duration-300 inline-flex items-center gap-2 transform hover:scale-105">
                BUY THE BOOK
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
              <Link to="/resources">
                <button className="bg-white/90 backdrop-blur-sm text-[#006D6F] px-8 py-4 rounded-full font-semibold hover:bg-white hover:shadow-xl transition-all duration-300 border-2 border-[#006D6F]/20 transform hover:scale-105">
                  Explore Resources
                </button>
              </Link>
            </div>
          </div>

          {/* Book Image */}
          <div className="flex justify-center items-center w-full h-full">
            <div className="relative w-full h-[400px] md:h-[550px] lg:h-[650px] group">
              {/* Glow / Background effect */}
              <div className=" absolute inset-0 blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 -z-10"></div>

              {/* Image */}
              <div
                className="relative w-full h-full transform transition-all duration-700 hover:scale-105 hover:rotate-0"
                style={{
                  transform: `rotate(${Math.min(scrollY * 0.02, 3)}deg)`,
                  transition: "transform 0.3s ease-out",
                }}
              >
                <img
                  src="bookcover-removebg-preview.png"
                  alt="Book cover"
                  className="w-full h-full object-cover "
                />
              </div>
            </div>
          </div>

          {/* 
         
<div className="relative w-full md:w-full flex justify-end items-center">
  <motion.div
    className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden rounded-3xl shadow-2xl"
    whileHover={{ scale: 1.05, rotate: 0 }}
  >
    <img
      src="bookcover-removebg-preview.png"
      alt="Book cover"
      className="w-full h-full object-cover"
    />
  </motion.div>

 
  <div className="absolute inset-0 bg-gradient-to-r from-[#CFFAF4] to-[#FF6B4A] blur-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 -z-10"></div>
</div>

          */}
        </div>
      </section>

      {/* MEET IYIN SECTION */}
      <section className="relative py-24 px-6 md:px-12 bg-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-32 bg-linear-to-b from-[#FFE5E0]/30 to-transparent"></div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">
          {/* Left: Image */}
          <div className="md:w-1/2 relative group">
            <div className="absolute -inset-4 bg-linear-to-r from-[#CFFAF4] to-[#FF6B4A] rounded-3xl opacity-20 group-hover:opacity-30 blur-2xl transition-opacity duration-500"></div>
            <img
              src="iyinpic1.jpg"
              alt="Iyin Ojekunle"
              className="relative w-full h-[550px] object-cover rounded-3xl shadow-2xl transform transition-transform duration-500 group-hover:scale-[1.02]"
            />
            {/* Decorative elements */}
            <div className="absolute -top-8 -left-8 w-40 h-40 bg-[#CFFAF4]/50 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-[#FF6B4A]/30 rounded-full blur-3xl"></div>
          </div>

          {/* Right: Bio Card */}
          <div className="md:w-1/2 relative">
            <div className="absolute inset-0 bg-linear-to-br from-white to-[#CFFAF4]/10 rounded-3xl transform rotate-1"></div>
            <div className="relative bg-white shadow-2xl rounded-3xl p-8 md:p-12 border border-[#CFFAF4]/30">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-1 bg-linear-to-r from-[#006D6F] to-[#FF6B4A] rounded-full"></div>
                <Heart size={24} className="text-[#FF6B4A]" />
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-[#006D6F] mb-6 leading-tight">
                Meet Iyin Ojekunle
              </h2>

              <div className="space-y-4 text-lg text-[#374151] leading-relaxed">
                <p>
                  Born in{" "}
                  <span className="font-semibold text-[#006D6F]">
                    Eruwa, Oyo State, Nigeria
                  </span>
                  , Iyin's journey took her from humble roots to a life filled
                  with purpose, faith, and compassion. Her story reflects a
                  global perspective shaped by service and her calling to uplift
                  others.
                </p>
                <p>
                  She has organized international fundraisers, sponsored
                  children through humanitarian programs, and served in public
                  health projects—uniting compassion with excellence and faith
                  in action.
                </p>
                <p className="font-medium text-[#006D6F] text-xl">
                  Her mission? To extend compassion intentionally and reflect
                  Christ's hope in every community she touches.
                </p>
              </div>

              <button className="mt-8 group bg-linear-to-r from-[#006D6F] to-[#008B8D] text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2">
                Get to Know Iyin
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SPEAKING REQUEST */}
      <section className="py-24 px-6 bg-white text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#CFFAF4]/20 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto relative z-10 space-y-8">
          <div className="inline-flex items-center gap-2 bg-linear-to-r from-[#CFFAF4]/50 to-[#FFE5E0]/50 backdrop-blur-sm px-5 py-2 rounded-full shadow-sm">
            <Users size={18} className="text-[#FF6B4A]" />
            <span className="text-sm font-semibold text-[#006D6F]">
              Speaking Engagements
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-[#006D6F] leading-tight">
            Invite Iyin to Speak
          </h2>

          <p className="text-lg md:text-xl text-[#374151] leading-relaxed max-w-3xl mx-auto">
            Whether it's a conference, church event, or virtual session, Iyin
            brings stories of hope and healing to help others rediscover their
            faith and purpose.
          </p>
            <Link to="/contact">
          <button className="group bg-linear-to-r from-[#006D6F] to-[#008B8D] text-white px-10 py-5 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 text-lg">
            Request Speaking Engagement
            <Mail
              size={22}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
          </Link>
        </div>
      </section>

      {/* RESOURCES SECTION */}
      <section className="py-24 px-6 bg-linear-to-br from-[#CFFAF4]/30 via-[#CFFAF4]/20 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B4A]/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full w-fit shadow-sm">
              <Book size={16} className="text-[#FF6B4A]" />
              <span className="text-sm font-semibold text-[#006D6F]">
                Free Downloads
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-[#006D6F] leading-tight">
              Free Faith Resources
            </h2>

            <p className="text-[#374151] text-lg md:text-xl leading-relaxed">
              Strengthen your faith with Iyin's free downloads including
              <span className="font-semibold text-[#006D6F]">
                {" "}
                "I AM" Declarations, 30 Guided Prayers,
              </span>
              and devotionals for those newly walking with Christ.
            </p>

            <p className="text-[#374151] text-lg leading-relaxed">
              Because every soul deserves to feel seen, loved, and empowered
              through God's Word.
            </p>
            <Link to="/resources">
            <button className="group bg-[#FF6B4A] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#ff5a33] hover:shadow-2xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2">
              Explore Resources
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
            </Link>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute inset-0 bg-linear-to-br from-[#FF6B4A]/20 to-transparent rounded-3xl blur-2xl transform -rotate-6"></div>
            <div className="relative group">
              <img
                src="faith.jpg"
                alt="Faith resources"
                className="w-full max-w-md rounded-3xl shadow-2xl object-cover transform transition-all duration-500 group-hover:scale-105 group-hover:rotate-1"
              />
            </div>
          </div>
        </div>
      </section>

      {/* BOOK PROMO */}
      <section className="relative py-24 px-6 bg-linear-to-br from-[#006D6F] to-[#004D4F] text-center text-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#CFFAF4] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10 space-y-8">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-2 rounded-full">
            <Book size={18} className="text-[#CFFAF4]" />
            <span className="text-sm font-semibold">Featured Book</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            The Book That Started It All
          </h2>

          <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto opacity-90">
            <span className="font-semibold">"From Pain to Promise"</span>{" "}
            reveals Iyin's journey of faith, service, and redemption. A
            must-read for anyone seeking peace and clarity in their own calling.
          </p>

          <button className="group bg-[#FF6B4A] text-white px-10 py-5 rounded-full font-semibold hover:bg-[#ff5a33] hover:shadow-2xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 text-lg">
            Order Your Copy
            <ArrowRight
              size={22}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </div>
      </section>

      {/* TAGLINE SCROLLER */}
      <div className="bg-linear-to-r from-[#FF6B4A] to-[#FF8A70] text-white py-6 overflow-hidden relative">
        <div className="flex animate-scroll whitespace-nowrap font-semibold text-lg">
          <span className="mx-8">
            Faith • Hope • Compassion • Purpose • Service • Integrity •
            Excellence
          </span>
          <span className="mx-8">
            Live Intentionally • Love Deeply • Reflect Christ
          </span>
          <span className="mx-8">
            Faith • Hope • Compassion • Purpose • Service • Integrity •
            Excellence
          </span>
          <span className="mx-8">
            Live Intentionally • Love Deeply • Reflect Christ
          </span>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
}
