import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#008080] text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">100 DAYS OF BRAVE</h3>
            <p className="text-[#98FF98]">Launch your business in 100 days</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">QUICK LINKS</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#98FF98] transition">Shop</a></li>
              <li><a href="#" className="hover:text-[#98FF98] transition">Resources</a></li>
              <li><a href="#" className="hover:text-[#98FF98] transition">Workshops</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">CONNECT</h4>
            <p className="text-[#98FF98]">hello@100daysofbrave.com</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-[#98FF98] text-center">
          <p>&copy; 2024 100 Days of Brave. All rights reserved.</p>
        </div>
      </footer>
  );
};

export default Footer;
