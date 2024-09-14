"use client";
import { MenuIcon, SearchIcon } from "@heroicons/react/solid";
import { FaMoon, FaSun } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useDarkMode } from "../hooks/useDarkMode";
import Sidebar from "./Sidebar";
// import NotificationDropdown from "./NotificationDropdown";
import LinkDropdown from "./LinkDropdown";
import ProfileDropdown from "./ProfileDropdown";
import Image from 'next/image';
import logo from "../images/logo.svg";
import { fetchGenres } from "../services/fetchGenres";

// Centralized navLinks data
const NAV_LINKS_TEMPLATE = [
  { label: "Genres", dropdownItems: [] },
  { label: "Movies", dropdownItems: ["Popular", "Top Rated", "Upcoming", "Now Playing"] },
  { label: "TV Shows", dropdownItems: ["Popular", "Airing Today", "On TV", "Top Rated"] },
 
];

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [navLinks, setNavLinks] = useState(NAV_LINKS_TEMPLATE);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  // Fetch genres and update the navLinks
  useEffect(() => {
    const updateNavLinksWithGenres = async () => {
      const movieGenres = await fetchGenres(); // Return an array of genre names
      setNavLinks((prevLinks) => prevLinks.map((link) => {
        if (link.label === "Genres") {
          return { ...link, dropdownItems: movieGenres };
        }
        return link;
      }));
    };

    updateNavLinksWithGenres();
  }, []);


  return (
    <header className="bg-white dark:bg-[#032541] text-[#032541] dark:text-white sticky top-0 z-50 shadow-lg">
      <nav className="w-full max-w-screen-xl mx-auto h-16 flex items-center justify-between px-4 md:px-6">
        <div className="flex items-center space-x-4 md:space-x-8">
          {/* Hamburger Icon */}
          <div className="md:hidden">
            <MenuIcon className="w-6 h-6 cursor-pointer" onClick={toggleSidebar} />
          </div>

          {/* Logo */}
          <div className="cursor-pointer flex items-center space-x-2">
            <span className="text-2xl font-bold text-[#21d07a] lg:hidden">TMDB</span>
            <Image className="w-36 h-5 hidden lg:block" src={logo} alt="Logo" />
          </div>

          {/* Links with dropdowns */}
          <div className="hidden md:flex space-x-4 text-sm font-medium">
            {navLinks.map((link, index) => (
              <LinkDropdown key={index} label={link.label} dropdownItems={link.dropdownItems} />
            ))}
            {/* Actors*/} 
             <a href="#" className="hover:text-[#01b4e4] flex items-center">Actors</a>
          </div>
         
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4 md:space-x-6">
          <SearchIcon className="w-6 h-6 hover:text-[#01b4e4] cursor-pointer hidden md:block" />
          {/* <NotificationDropdown /> not-required*/}
          <ProfileDropdown />
          <button onClick={toggleDarkMode} className="bg-[#01b4e4] rounded-full px-3 py-1 text-white">
            {darkMode ? <FaSun className="text-xl" /> : <FaMoon className="text-xl" />}
          </button>
        </div>
      </nav>

      {/* Sidebar */}
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} navLinks={navLinks} />
    </header>
  );
};

export default Navbar;
