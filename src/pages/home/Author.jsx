import React from "react";
import { Heart, Globe, BookOpen, Users } from "lucide-react";

export default function Author() {
  return (
    <section className="min-h-screen bg-white py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section with Image */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-linear-to-br from-[#CFFAF4]/30 to-[#FF6B4A]/20 rounded-3xl blur-2xl transform -rotate-3"></div>
            <img
              src="iyinpic.jpg"
              alt="Iyin Ojekunle"
              className="relative w-full max-w-md mx-auto rounded-3xl shadow-2xl object-cover"
            />
          </div>

          {/* Title & Intro */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#CFFAF4]/50 backdrop-blur-sm px-4 py-2 rounded-full">
              <Heart size={18} className="text-[#FF6B4A]" />
              <span className="text-sm font-semibold text-[#006D6F]">About Iyin</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-[#006D6F] leading-tight">
              Iyinoluwa Ojekunle
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              A passionate advocate for health equity, community service, and living with purpose driven by faith and a heart for those who need it most.
            </p>
          </div>
        </div>

        {/* Story Section */}
        <div className="space-y-8 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#006D6F]">My Story</h2>
          
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
            <p>
              <strong>Iyin</strong> - short for Iyinoluwa. I was born and raised in Eruwa, a small town in Oyo State, Nigeria, and completed my senior high school in Ibadan before moving to the United States in 2008 with my mom and siblings to reunite with my dad. About a year later, I became a naturalized U.S. citizen, a turning point that opened doors for financial aid, scholarships, and a future filled with purpose.
            </p>

            <p>
              From a young age, I knew I wanted to do something in the health field. In both elementary and high school, I was named the "health official" a title that reflected my early passion for wellness and service. Coincidentally, I was born on World Malaria Day, which felt like a divine hint toward my life's direction.
            </p>

            <p>
              That passion led me to organize my first virtual fundraiser in 2015 for the United Nations Foundation's United to Beat Malaria campaign. Since then, I've continued to support causes close to my heart raising awareness and funds for vulnerable communities in Sub-Saharan Africa, sponsoring a child through Food for the Hungry since 2016, donating school supplies to low-income students in my local community, and many more.
            </p>

            <p>
              Though I started on the pre-med track, I found my true path in public health during my junior year of college. Volunteering in underserved communities helped me see that health is about more than medicine it's about compassion, dignity, and being present where others often look away.
            </p>

            <p>
              Today, I'm a Certified Associate in Project Management (CAPM) and still growing personally, professionally, and spiritually. I see myself as an imperfect daughter with a perfect Heavenly Father, committed to reflecting the hope and compassion of Jesus in all I do.
            </p>

            <p>
              Whether I'm leading a project, supporting a cause, or singing in my church choir (which I've done since before I was 10), the mission in my heart is clear:
            </p>
          </div>

          {/* Mission Statement */}
          <div className="bg-linear-to-br from-[#CFFAF4]/40 to-[#FF6B4A]/10 p-8 md:p-12 rounded-3xl shadow-lg text-center">
            <p className="text-2xl md:text-3xl font-semibold text-[#006D6F] leading-relaxed italic">
              "To live a life of purpose, extend compassion intentionally, and love like Jesus and reflect His hope every single day."
            </p>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="mt-20">
          <h2 className="text-3xl md:text-4xl font-bold text-[#006D6F] mb-10 text-center">Highlights & Milestones</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-[#CFFAF4]/50 hover:border-[#006D6F]/30 transition-all">
              <Globe size={40} className="text-[#FF6B4A] mb-4" />
              <h3 className="text-xl font-bold text-[#006D6F] mb-3">Global Impact</h3>
              <p className="text-gray-700">
                Organized fundraisers for malaria prevention, supported vulnerable communities in Sub-Saharan Africa, and sponsored a child since 2016.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-[#CFFAF4]/50 hover:border-[#006D6F]/30 transition-all">
              <BookOpen size={40} className="text-[#FF6B4A] mb-4" />
              <h3 className="text-xl font-bold text-[#006D6F] mb-3">Public Health Leader</h3>
              <p className="text-gray-700">
                Certified Associate in Project Management (CAPM), dedicated to health equity and serving underserved communities with compassion.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-[#CFFAF4]/50 hover:border-[#006D6F]/30 transition-all">
              <Users size={40} className="text-[#FF6B4A] mb-4" />
              <h3 className="text-xl font-bold text-[#006D6F] mb-3">Faith & Service</h3>
              <p className="text-gray-700">
                Active church choir member since childhood, committed to reflecting Christ's love through service, compassion, and community engagement.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <p className="text-lg text-gray-700 mb-6">
            Want to learn more about my work or collaborate on a project?
          </p>
          <a
            href="/speaking"
            className="group bg-[#FF6B4A] text-white px-10 py-5 rounded-full font-semibold hover:bg-[#ff5a33] hover:shadow-2xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 text-lg"
          >
            Let's Connect
            <Heart size={22} className="group-hover:scale-110 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}