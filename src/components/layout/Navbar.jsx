import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const SideNavigation = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      {/* ===== Desktop Sidebar (visible ≥768px) ===== */}
      <aside className="hidden md:flex fixed top-0 left-0 h-full w-20 bg-[#FF7F50] text-white flex-col items-center justify-between z-50">
        {/* Logo / Brand */}
        <div className="flex-1 flex items-center justify-center py-4">
          <div className="transform -rotate-90 whitespace-nowrap">
            <span className="text-xs font-bold tracking-[0.3em] hover:text-[#98FF98] transition cursor-pointer">
              Iyin Oyekunle
            </span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col items-center gap-8 pb-8">
          {["HOME", "RESOURCES", "MISSION & EVENTS", "BOOKING"].map(
            (item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase().replace(/ & /g, "-")}`}
                className="transform -rotate-90 whitespace-nowrap text-sm hover:text-[#98FF98] transition tracking-wider font-semibold"
              >
                {item}
              </a>
            )
          )}
        </nav>

        <div className="pb-4 flex flex-col items-center gap-4">
          <div className="w-8 h-[1px] bg-white opacity-30"></div>
        </div>
      </aside>

      {/* ===== Mobile Navigation (visible <768px) ===== */}
      <div className="md:hidden fixed top-0 left-0 w-full bg-[#FF7F50] text-gray-800 shadow-md z-50">
        <div className="flex items-center justify-between px-4 py-8">
          <span className="font-bold tracking-wider text-white">
            Iyin Oyekunle
          </span>

          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-white hover:text-[#ff6a35] transition"
          >
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Dropdown Menu */}
        {isSidebarOpen && (
          <div className="flex flex-col items-center bg-[#FF7F50] text-white py-4 space-y-4 transition-all duration-300">
            {["HOME", "RESOURCES", "MISSION & EVENTS", "BOOKING"].map(
              (item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase().replace(/ & /g, "-")}`}
                  className="text-sm font-semibold hover:text-[#98FF98] transition"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  {item}
                </a>
              )
            )}
          </div>
        )}
      </div>

      {/* Spacer for content (so content isn’t hidden under nav) */}
      <div className="h-14 md:h-auto md:ml-20"></div>
    </>
  );
};

export default SideNavigation;
