"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import RentDropdown from "./RentDropdown";
import SuggestionDropdown from "./SuggestionDropdown";
import { Bed, House, Store } from "lucide-react";

// List of popular locations in Nepal
const locations = [
  "Kathmandu",
  "Pokhara",
  "Lalitpur",
  "Bhaktapur",
  "Chitwan",
  "Biratnagar",
  "Butwal",
  "Dharan",
  "Janakpur",
  "Hetauda"
];

const SearchBar = () => {
  const [isRentOpen, setIsRentOpen] = useState(false);
  const [isHoveringSearch, setIsHoveringSearch] = useState(false);
  const [query, setQuery] = useState("");
  const [isWhereFocused, setIsWhereFocused] = useState(false);
  const dropdownRef = useRef(null);
  const rentButtonRef = useRef(null);
  const whereInputRef = useRef(null);

  // Filter locations based on the query
  const filteredLocations = locations.filter((location) =>
    location.toLowerCase().includes(query.toLowerCase())
  );

  // Focus handler for Where input container
  const handleWhereContainerClick = () => {
    setIsWhereFocused(true);
    whereInputRef.current?.focus();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        rentButtonRef.current &&
        !rentButtonRef.current.contains(event.target)
      ) {
        setIsRentOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsRentOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  // Animation variants for search bar and buttons
  const searchBarVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.01 },
    tap: { scale: 0.99 }
  };

  const buttonHoverVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
  };

  return (
    <motion.div
      variants={searchBarVariants}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      onHoverStart={() => setIsHoveringSearch(true)}
      onHoverEnd={() => setIsHoveringSearch(false)}
      className="flex items-center gap-2 border border-slate-300 max-w-full rounded-full shadow-sm transition-shadow bg-white relative"
      style={{
        boxShadow: isHoveringSearch
          ? "0 4px 12px rgba(0,0,0,0.1)"
          : "0 1px 3px rgba(0,0,0,0.1)"
      }}
    >
      {/* Where Section (remains inside SearchBar) */}
      <div
        className="relative px-8 py-2 h-full rounded-l-full cursor-text"
        onClick={handleWhereContainerClick}
      >
        <p className="text-xs font-bold">Where</p>
        <input
          ref={whereInputRef}
          type="text"
          placeholder="Search destinations"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsWhereFocused(true)}
          onBlur={() => setTimeout(() => setIsWhereFocused(false), 100)}
          className="w-32 outline-none text-sm bg-transparent"
        />
        {/* Render the SuggestionDropdown as a separate component */}
        <SuggestionDropdown
          suggestions={filteredLocations}
          isOpen={isWhereFocused}
          onSelect={(value) => {
            setQuery(value);
            setIsWhereFocused(false);
          }}
        />
      </div>

      {/* Rent Dropdown Section */}
      <div className="relative">
        <motion.button
          ref={rentButtonRef}
          onClick={(e) => {
            e.stopPropagation();
            setIsRentOpen(!isRentOpen);
          }}
          whileHover={{ backgroundColor: "rgba(0,0,0,0.02)" }}
          className={`flex items-center gap-1.5 px-4 py-2 ${
            isRentOpen ? "text-blue-600" : "text-gray-600 hover:text-blue-600"
          } transition-colors`}
        >
          <div>
            <p className="text-xs font-bold">Type</p>
            <p>All</p>
          </div>
        </motion.button>
        <AnimatePresence>
          {isRentOpen && (
            <RentDropdown
              setIsRentOpen={setIsRentOpen}
              dropdownRef={dropdownRef}
            />
          )}
        </AnimatePresence>
      </div>

      {/* When Section */}
      <motion.div
        whileHover={{ backgroundColor: "rgba(0,0,0,0.02)" }}
        className="px-4 py-2 cursor-pointer"
      >
        <p className="text-xs font-bold">When</p>
        <p className="text-sm text-gray-500">Add dates</p>
      </motion.div>

      {/* Who / Features Section */}
      <motion.div
        whileHover={{ backgroundColor: "rgba(0,0,0,0.02)" }}
        className="px-4 py-2 flex items-center gap-2 rounded-r-full cursor-pointer"
      >
        <div>
          <p className="text-xs font-bold">Features</p>
          <p className="text-sm text-gray-500">Add features</p>
        </div>
        <motion.button
          variants={buttonHoverVariants}
          whileHover="hover"
          whileTap="tap"
          className="bg-red-500 p-2 rounded-full text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path
              fillRule="evenodd"
              d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
              clipRule="evenodd"
            />
          </svg>
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default SearchBar;
