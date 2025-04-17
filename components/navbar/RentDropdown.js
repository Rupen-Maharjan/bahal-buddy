"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Building, House, Store } from "lucide-react";

const RentDropdown = ({ setIsRentOpen, dropdownRef }) => {
  // Animation variants for the dropdown
  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.2 }
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.div
      ref={dropdownRef}
      variants={dropdownVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="absolute top-full -left-32 mt-2 h-48 w-[30rem] bg-white rounded-lg shadow-xl flex items-center p-2"
    >
      <Link
        href="/apartment"
        onClick={() => setIsRentOpen(false)}
        className="rounded-lg h-full w-[50%] px-2 bg-gray-100 transition-colors flex items-center justify-center"
      >
        <div className="gap-2 flex flex-col">
          <div className="flex items-center gap-3">
            <span className="text-blue-600">
              <Building className="w-5 h-5" />
            </span>
            <span className="font-medium text-gray-800">
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
          href="/rooms"
          onClick={() => setIsRentOpen(false)}
          className="p-2 w-[90%] rounded-lg hover:bg-gray-100 flex items-center"
        >
          <div className="flex items-center gap-3 my-auto">
            <span className="text-blue-600">
              {/* You can add an icon for rooms if desired */}
              <Building className="w-5 h-5" />
            </span>
            <span className="font-medium text-gray-800">
              Room
            </span>
          </div>
        </Link>

        <Link
          href="/houses"
          onClick={() => setIsRentOpen(false)}
          className="p-2 w-[90%] rounded-lg hover:bg-gray-100 flex items-center"
        >
          <div className="flex items-center gap-3 my-auto">
            <span className="text-blue-600">
              <House className="w-5 h-5" />
            </span>
            <span className="font-medium text-gray-800">
              Houses
            </span>
          </div>
        </Link>

        <Link
          href="/commercial"
          onClick={() => setIsRentOpen(false)}
          className="p-2 w-[90%] rounded-lg hover:bg-gray-100 flex items-center"
        >
          <div className="flex items-center gap-3 my-auto">
            <span className="text-blue-600">
              <Store className="w-5 h-5" />
            </span>
            <span className="font-medium text-gray-800">
              Commercial
            </span>
          </div>
        </Link>
      </div>
    </motion.div>
  );
};

export default RentDropdown;
