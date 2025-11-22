import React from "react";
import { ArrowRight } from "lucide-react";

function Resources() {
  return (
    <section className="py-24 px-6 bg-linear-to-br from-[#CFFAF4]/30 via-[#CFFAF4]/20 to-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B4A]/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
        {/* Text Section */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full w-fit shadow-sm">
            <span className="text-sm font-semibold text-[#006D6F]">Featured Book</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-[#006D6F] leading-tight">
            From Pain to Promise
          </h2>

          <p className="text-[#374151] text-lg md:text-xl leading-relaxed">
            Discover Iyin Ojekunle’s inspiring journey of faith, service, and redemption. 
            <span className="font-semibold"> "From Pain to Promise"</span> is a must-read for anyone seeking clarity, hope, and purpose in life.
          </p>

          <button className="group bg-[#FF6B4A] text-white px-10 py-5 rounded-full font-semibold hover:bg-[#ff5a33] hover:shadow-2xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 text-lg">
            Order Your Copy
            <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Book Image */}
        <div className="relative flex justify-center">
          <div className="absolute inset-0 bg-linear-to-br from-[#FF6B4A]/20 to-transparent rounded-3xl blur-2xl transform -rotate-6"></div>
          <div className="relative group">
            <img
              src="bookcover.jpeg"
              alt="From Pain to Promise"
              className="w-full max-w-md rounded-3xl shadow-2xl object-cover "
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resources;
