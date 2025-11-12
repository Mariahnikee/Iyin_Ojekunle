import React from 'react';
import {
   ArrowRight,
   Book
 } from "lucide-react";

const missionFlier = '/womanward.jpeg'; // your main flier image

const Events = () => {
  return (
    <div className="bg-white">

      {/* Women & World Mission Highlight Section */}
      <section className="py-16 bg-[#FAFAFA]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Women & World Mission
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Empowering women and transforming communities through faith, education, and outreach.
            The <strong>Women & World Mission</strong> initiative is dedicated to uplifting women and children,
            providing programs that foster healing, growth, and global impact.
          </p>

          {/* Flier Display */}
          <div className="mt-10 flex justify-center">
            <img
              src={missionFlier}
              alt="Women & World Mission Event Flier"
              className="rounded-xl shadow-xl w-full max-w-3xl object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

         {/* Featured Resource */}
<div className="mt-10 flex items-center justify-center gap-3 text-gray-700">
  <div className="text-[#F97D1C]">
    <Book className="h-7 w-7" />
  </div>
  <p className="text-base">
    <span className="font-semibold">Featured Resource:</span>{' '}
    <a
      href="https://1drv.ms/p/c/35e065e78b66be56/EQb0zp-yMZ1OrQ2bFPS-mG0B5UdoOR2z82BDAWkwcPDv6Q"
      target="_blank"
      rel="noopener noreferrer"
      className="text-purple-700 font-medium hover:underline"
    >
      Teaching on Marriage (Presentation Slides)
    </a>
  </p>
</div>


          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-10">
            <a
              href="https://share.google/kVI8UBFAZcyjGPwmb"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-gray-200 text-black px-8 py-2 rounded-lg font-semibold hover:bg-purple-800 hover:text-white transition-colors flex items-center justify-center"
            >
              Learn More
            </a>
            <a
              href="https://share.google/yZOei4odPboL5UB61"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-800 px-8 py-2 rounded-lg font-semibold hover:text-gray-500 transition-colors flex items-center justify-center"
            >
              Sign Up
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Upcoming Events & Programs Section */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Upcoming Events & Programs
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
            Stay tuned for our upcoming gatherings and prayer sessions. Each meeting is designed
            to empower women, strengthen families, and nurture faith in Christ.
          </p>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Prophetic Parenting Prayer",
                desc: "A gathering dedicated to guiding parents in raising children with wisdom, faith, and blessing.",
              },
              {
                title: "Women & Children Conference",
                desc: "Annual conference equipping women and children through teaching, worship, and fellowship.",
              },
              {
                title: "Prayers for Blessed Mum Altars",
                desc: "Weekly online prayer sessions for mothers seeking strength, encouragement, and renewal.",
              },
            ].map((event, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl p-6 bg-gray-50 hover:shadow-md transition"
              >
                <p className="text-lg font-semibold text-gray-900">{event.title}</p>
                <p className="mt-3 text-base text-gray-600">{event.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Events;
