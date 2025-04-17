"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const UserMenu = ({ isLoggedIn }) => {
  return isLoggedIn ? (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="text-lg tracking-wide bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 text-white py-1 px-3 rounded-2xl"
    >
      User
    </motion.button>
  ) : (
    <div className="gap-5 flex text-lg tracking-wide items-center">
      <motion.div whileHover={{ scale: 1.05 }}>
        <Link href="/login">Login</Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link
          href="/signup"
          className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 text-white py-1 px-3 rounded-2xl"
        >
          Sign Up
        </Link>
      </motion.div>
    </div>
  );
};

export default UserMenu;
