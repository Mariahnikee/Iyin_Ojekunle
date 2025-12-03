import React, { useState, useEffect } from "react";
import { Menu, X, Heart, Book, Contact, UserCircle } from "lucide-react";
import { Link, useLocation } from "react-router-dom"; // ✅ Import Link and useLocation

const SideNavigation = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation(); // track current route

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Each nav item now points to a real route
  const navItems = [
    { name: "HOME", icon: Heart, path: "/" },
    { name: "AUTHOR", icon: UserCircle, path: "/author" },
    { name: "RESOURCES", icon: Book, path: "/resources" },
    { name: "SPEAKING", icon: Contact, path: "/speaking" },
  ];

  return (
    <>
      {/* ===== Desktop Sidebar ===== */}
      <aside className="hidden lg:flex fixed top-0 left-0 h-full w-24 bg-linear-to-b from-[#006D6F] to-[#004D4F] text-white flex-col items-center justify-between z-50 shadow-2xl">
        {/* Logo / Brand */}
        <div className="flex-1 flex items-center justify-center py-8">
          <div className="transform -rotate-90 whitespace-nowrap origin-center">
            <Link
              to="/"
              className="text-sm font-bold tracking-[0.4em] hover:text-[#CFFAF4] transition-colors duration-300"
            >
              IYIN OJEKUNLE
            </Link>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col items-center gap-12 pb-16">
          {navItems.map((item, index) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={index}
                to={item.path}
                className={`group relative flex items-center justify-center ${
                  isActive ? "text-[#FF6B4A]" : ""
                }`}
              >
                <div className="absolute left-1/2 transform -translate-x-1/2 -rotate-90 whitespace-nowrap text-xs font-semibold tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  {item.name}
                </div>
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg ${
                    isActive
                      ? "bg-[#FF6B4A]"
                      : "bg-white/10 backdrop-blur-sm hover:bg-[#FF6B4A]"
                  }`}
                >
                  <item.icon size={18} />
                </div>
              </Link>
            );
          })}
        </nav>

        {/* Decorative Element */}
        <div className="pb-6 flex flex-col items-center gap-3">
          <div className="w-10 h-0.5 bg-linear-to-r from-transparent via-[#CFFAF4] to-transparent"></div>
        </div>
      </aside>

      {/* ===== Mobile Nav (Top Bar) ===== */}
      <div
        className={`lg:hidden fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-linear-to-r from-[#006D6F] to-[#004D4F] shadow-xl"
            : "bg-linear-to-r from-[#006D6F]/95 to-[#004D4F]/95 backdrop-blur-md"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5">
          {/* Logo */}
          <Link
            to="/"
            className="font-bold tracking-wider text-white text-lg"
            onClick={() => setIsSidebarOpen(false)}
          >
            Iyin Ojekunle
          </Link>

          {/* Hamburger Button */}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-[#FF6B4A] transition-all duration-300 hover:scale-110"
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
              <Link
                key={index}
                to={item.path}
                className="group flex items-center gap-4 px-4 py-3 rounded-xl text-white font-semibold hover:bg-white/10 transition-all duration-300 transform hover:translate-x-2"
                onClick={() => setIsSidebarOpen(false)}
              >
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#FF6B4A] transition-colors duration-300">
                  <item.icon size={16} />
                </div>
                <span className="text-sm tracking-wider">{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Spacer so content isn't hidden */}
      <div className="h-20 lg:h-0 lg:ml-24"></div>
    </>
  );
};

export default SideNavigation;
