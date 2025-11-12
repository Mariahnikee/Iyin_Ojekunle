import React from "react";
import { Heart, Instagram, Facebook, Twitter, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Resources", href: "#resources" },
    { name: "Speaking", href: "#speaking" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative bg-linear-to-br from-[#006D6F] to-[#004D4F] text-white overflow-hidden">
      {/* Subtle Background Element */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#CFFAF4]/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        {/* Main Content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          {/* Brand */}
          <div className="flex items-center gap-3">
            {/* <div className="w-10 h-10 rounded-full bg-linear-to-br from-[#CFFAF4] to-[#FF6B4A] flex items-center justify-center shadow-lg">
              <Heart size={20} className="text-white" />
            </div> */}
            <span className="text-xl font-bold tracking-wider">Iyin Ojekunle</span>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-white/70 hover:text-white text-sm font-medium transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex gap-3">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-[#FF6B4A] hover:scale-110 transition-all duration-300"
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row justify-center md:justify-start items-center gap-6 mb-8 text-sm text-white/80">
          <div className="flex items-center gap-2">
            <Mail size={16} />
            <a href="mailto:iyin@example.com" className="hover:underline">contact@iyinojekunle.com</a>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={16} />
            <a href="tel:+2348012345678" className="hover:underline">+1 (860) xxx xxx</a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <p>© {currentYear} Iyin Ojekunle. All rights reserved.</p>
            <p className="flex items-center gap-2 font-medium text-white/80">
              <Heart size={14} className="text-[#FF6B4A]" />
              Live Intentionally • Love Deeply • Reflect Christ
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
