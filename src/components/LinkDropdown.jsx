import { useState } from "react";

const LinkDropdown = ({ label, dropdownItems }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setShowDropdown(true)}
      onMouseLeave={() => setShowDropdown(false)}
    >
      <a href="#" className="hover:text-[#01b4e4] flex items-center">
        {label}
        <span
          className={`ml-2 transform transition-transform ${
            showDropdown ? "rotate-180" : "rotate-0"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </a>

      {/* Dropdown Menu */}
      {showDropdown && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2">
          {/* Arrow */}
          <div className="relative">
            <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-white"></div>
          </div>

          {/* Dropdown Content */}
          <div className="bg-white text-black rounded-md shadow-lg p-4 w-48">
            <ul>
              {dropdownItems?.map((item, idx) => (
                <li key={idx} className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default LinkDropdown;
