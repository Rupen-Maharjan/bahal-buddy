"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const Logo = () => {
  return (
    <Link href="/">
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
      >
        Bahaal Buddy
      </motion.div>
    </Link>
  );
};

export default Logo;
