"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Home, Compass, Bell, Building, Bed, House, Store } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();
  const [isRentOpen, setIsRentOpen] = useState(false);
  const dropdownRef = useRef(null);
  const rentButtonRef = useRef(null);
  const [login, setLogin] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
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

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div
        className={`flex items-center justify-between w-[90%] mx-auto ${!login && "py-3"}`}
        id="Main"
      >
        <Link
          href="/"
          className="hover:cursor-pointer text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          Rent Spaces
        </Link>

        {login ? (

<>

<div className="flex gap-6 items-center relative text-lg font-medium">
          {/* Home Button */}
          <Link
            href="/"
            className={`flex items-center gap-1.5 py-3 px-2 ${
              pathname === "/"
                ? "text-blue-600"
                : "text-gray-600 hover:text-blue-600"
            } transition-colors`}
          >
            <Home className="w-5 h-5" />
            Home
          </Link>

          <div className="relative">
            <button
              ref={rentButtonRef}
              onClick={() => setIsRentOpen(!isRentOpen)}
              className={`flex items-center gap-1.5 py-3 px-2 hover:cursor-pointer
                ${
                    isRentOpen
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-blue-600"
                    } transition-colors`}
                    >
              <Building className="w-5 h-5" />
              Rent
            </button>
                
            {/* Rent Dropdown */}

            {isRentOpen && (
              <motion.div
                ref={dropdownRef}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-full -left-32 mt-2 h-48 w-[30rem] bg-white rounded-lg shadow-xl flex items-center border p-2"
              >
                <Link
                  key="/apartment"
                  href="/apartment"
                  onClick={() => setIsRentOpen(false)}
                  className="rounded-lg h-full w-[50%] px-2 bg-gray-100 transition-colors flex items-center justify-center"
                >
                  <div className=" gap-2 flex flex-col">
                    <div className="flex items-center gap-3">
                      <span className="text-blue-600">
                        <Building className="w-5 h-5" />
                      </span>
                      <span className="font-medium text-gray-800 group-hover:text-blue-600">
                        Apartment
                      </span>
                    </div>
                    <p className="text-sm text-gray-500">
                    Find your perfect apartment in prime locations
                    </p>
                  </div>
                </Link>

                <div className="h-full w-[50%] flex flex-col items-center justify-between">

                <Link
                  key="/Room"
                  href="/Room"
                  onClick={() => setIsRentOpen(false)}
                  className="p-2 w-[90%] rounded-lg hover:bg-gray-100 flex items-center"
                >
                    <div className="flex items-center gap-3 my-auto">
                      <span className="text-blue-600">
                      <Bed className="w-5 h-5" />
                      </span>
                      <span className="font-medium text-gray-800 group-hover:text-blue-600">
                        Room
                      </span>
                    </div>
                  
                </Link>

                <Link
                  key="/houses"
                  href="/houses"
                  onClick={() => setIsRentOpen(false)}
                  className="p-2 w-[90%] rounded-lg hover:bg-gray-100 flex items-center"
                >
                    <div className="flex items-center gap-3 my-auto">
                      <span className="text-blue-600">
                      <House className="w-5 h-5" />
                      </span>
                      <span className="font-medium text-gray-800 group-hover:text-blue-600">
                        Houses
                      </span>
                    </div>
                  
                </Link>

                <Link
                  key="/commercial"
                  href="/commercial"
                  onClick={() => setIsRentOpen(false)}
                  className="p-2 w-[90%] rounded-lg hover:bg-gray-100 flex items-center"
                >
                    <div className="flex items-center gap-3 my-auto">
                      <span className="text-blue-600">
                      <Store className="w-5 h-5" />
                      </span>
                      <span className="font-medium text-gray-800 group-hover:text-blue-600">
                        Commercial
                      </span>
                    </div>
                  
                </Link>
                
                </div>
              </motion.div>
            )}
          </div>

          {/* Explore Button */}
          <Link
            href="/explore"
            className={`flex items-center gap-1.5 ${
              pathname === "/explore"
                ? "text-blue-600"
                : "text-gray-600 hover:text-blue-600 py-3 px-2"
            } transition-colors`}
          >
            <Compass className="w-5 h-5" />
            Explore
          </Link>

          {/* Notification Button */}
          <Link
            href="/notifications"
            className={`flex items-center gap-1.5 ${
              pathname === "/notifications"
                ? "text-blue-600"
                : "text-gray-600 hover:text-blue-600 py-3 px-2"
            } transition-colors`}
          >
            <Bell className="w-5 h-5" />
            Notifications
          </Link>
        </div>

          <button className="text-lg tracking-wide bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 text-white py-1 px-3 rounded-2xl">
            User
          </button>
</>
        ) : (
          <div className="gap-5 flex text-lg tracking-wide items-center">
            <Link href="/login">Login</Link>
            <Link
              href="/signup"
              className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 text-white py-1 px-3 rounded-2xl"
            >
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
