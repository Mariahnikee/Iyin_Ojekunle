import React, { useState, useEffect } from "react";
import { Menu, X, Heart, Book, Users, Mail } from "lucide-react";

const SideNavigation = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "HOME", icon: Heart },
    { name: "ABOUT", icon: Heart },
    { name: "RESOURCES", icon: Book },
    { name: "SPEAKING", icon: Users },
    { name: "CONTACT", icon: Mail },
  ];

  return (
    <>
      {/* ===== Desktop Sidebar (visible ≥1024px) ===== */}
      <aside className="hidden lg:flex fixed top-0 left-0 h-full w-24 bg-linear-to-b from-[#006D6F] to-[#004D4F] text-white flex-col items-center justify-between z-50 shadow-2xl">
        {/* Logo / Brand */}
        <div className="flex-1 flex items-center justify-center py-8">
          <div className="transform -rotate-90 whitespace-nowrap origin-center">
            <span className="text-sm font-bold tracking-[0.4em] hover:text-[#CFFAF4] transition-colors duration-300 cursor-pointer">
              IYIN OJEKUNLE
            </span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col items-center gap-10 pb-12">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={`#${item.name.toLowerCase()}`}
              className="group relative flex items-center justify-center"
            >
              <div className="absolute left-1/2 transform -translate-x-1/2 -rotate-90 whitespace-nowrap text-xs font-semibold tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                {item.name}
              </div>
              <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-[#FF6B4A] hover:scale-110 transition-all duration-300 group-hover:shadow-lg">
                <item.icon size={18} />
              </div>
            </a>
          ))}
        </nav>

        {/* Decorative Element */}
        <div className="pb-6 flex flex-col items-center gap-3">
          <div className="w-10 h-0.5 bg-linear-to-r from-transparent via-[#CFFAF4] to-transparent"></div>
        </div>
      </aside>

      {/* ===== Mobile/Tablet Top Navigation (visible <1024px) ===== */}
      <div className={`lg:hidden fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-linear-to-r from-[#006D6F] to-[#004D4F] shadow-xl' 
          : 'bg-linear-to-r from-[#006D6F]/95 to-[#004D4F]/95 backdrop-blur-md'
      }`}>
        <div className="flex items-center justify-between px-6 py-5">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-linear-to-br from-[#CFFAF4] to-[#FF6B4A] flex items-center justify-center shadow-lg">
              <Heart size={20} className="text-white" />
            </div>
            <span className="font-bold tracking-wider text-white text-lg">
              Iyin Ojekunle
            </span>
          </div>

          {/* Hamburger Button */}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="relative w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-[#FF6B4A] transition-all duration-300 hover:scale-110"
          >
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Dropdown Menu */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isSidebarOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-linear-to-b from-[#004D4F] to-[#003D3F] backdrop-blur-lg px-6 py-6 space-y-1 border-t border-white/10">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={`#${item.name.toLowerCase()}`}
                className="group flex items-center gap-4 px-4 py-3 rounded-xl text-white font-semibold hover:bg-white/10 transition-all duration-300 transform hover:translate-x-2"
                onClick={() => setIsSidebarOpen(false)}
              >
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#FF6B4A] transition-colors duration-300">
                  <item.icon size={16} />
                </div>
                <span className="text-sm tracking-wider">{item.name}</span>
              </a>
            ))}
            
            {/* CTA Button in Mobile Menu */}
            <div className="pt-4 mt-4 border-t border-white/10">
              <a
                href="#book"
                className="flex items-center justify-center gap-2 w-full bg-linear-to-r from-[#FF6B4A] to-[#FF8A70] text-white px-6 py-3 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={() => setIsSidebarOpen(false)}
              >
                <Book size={18} />
                <span>Buy the Book</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer for content (so content isn't hidden under nav) */}
      <div className="h-20 lg:h-0 lg:ml-24"></div>
    </>
  );
};

export default SideNavigation;