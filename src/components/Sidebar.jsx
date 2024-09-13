import { XIcon } from "@heroicons/react/solid";
import { useState } from "react";

const SidebarItem = ({ label, dropdownItems }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div>
      <div className="relative">
        <a href="#" onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="block text-white text-lg">
          {label}
        </a>
      </div>

      {isDropdownOpen && dropdownItems.length > 0 && (
        <div className="ml-4 mt-1 space-y-2">
          {dropdownItems.map((item, idx) => (
            <a href="#" key={idx} className="block text-white text-sm">
              {item}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  const sidebarItems = [
    { label: "Movies", dropdownItems: ["Popular", "Top Rated", "Upcoming", "Now Playing"] },
    { label: "TV Shows", dropdownItems: ["Popular", "Airing Today", "On TV", "Top Rated"] },
    { label: "About", dropdownItems: [] },
    { label: "Logout", dropdownItems: [] },
  ];

  return (
    <div className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-transform transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} duration-300 ease-in-out`}>
      <div className="w-64 bg-[#032541] h-full p-4 relative">
        <div className="flex justify-between items-center mb-4">
          <span className="text-2xl font-bold text-[#21d07a]">TMDB</span>
          <XIcon className="w-6 h-6 text-white cursor-pointer" onClick={toggleSidebar} />
        </div>

        <nav className="space-y-4">
          {sidebarItems.map((item, index) => (
            <SidebarItem key={index} label={item.label} dropdownItems={item.dropdownItems} />
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
