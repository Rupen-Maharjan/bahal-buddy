'use client'
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Lock, Eye, EyeOff } from "lucide-react";
import Link from "next/link";


const Login = () => {
  const [activeButton, setActiveButton] = useState("Tenant");
  const [formData, setFormData] = useState({
    phone: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <header className="min-h-screen flex justify-center items-center bg-gradient-to-br from-blue-50 to-indigo-50">
      <motion.div 
        className="w-full max-w-md p-8 bg-white rounded-2xl shadow-xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="space-y-2 mb-8">
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Welcome Back
          </h2>
          <p className="text-gray-500 text-center text-sm">
            Sign in to continue to your account
          </p>
        </motion.div>

        <motion.div 
          className="w-full mx-auto relative flex items-center bg-gray-100 p-1 rounded-xl mb-8"
          variants={itemVariants}
        >
          <motion.div
            className="absolute rounded-lg bg-white h-[90%] w-[49%] shadow-sm"
            animate={{
              x: activeButton === "Tenant" ? 0 : "100%",
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30
            }}
          />
          <div className="flex justify-between items-center w-full z-10">
            <motion.button
              type="button"
              className={`py-2.5 rounded-lg text-sm font-medium transition-colors text-center w-[50%] ${
                activeButton === "Tenant" ? "text-blue-600" : "text-gray-500"
              }`}
              onClick={() => setActiveButton("Tenant")}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Tenant
            </motion.button>
            <motion.button
              type="button"
              className={`py-2.5 rounded-lg text-sm font-medium transition-colors text-center w-[50%] ${
                activeButton === "Landlord" ? "text-blue-600" : "text-gray-500"
              }`}
              onClick={() => setActiveButton("Landlord")}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Landlord
            </motion.button>
          </div>
        </motion.div>

        <motion.form 
          className="space-y-6"
          variants={itemVariants}
        >
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Phone Number</label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="Enter your phone number"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full pl-10 pr-12 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <motion.button
            type="submit"
            className="w-full  bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 text-white py-2.5 rounded-lg font-medium"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Sign In
          </motion.button>

          <div className="text-center">
            <Link href="/forgot-password" className="text-sm text-blue-600 hover:text-blue-700">
              Forgot your password?
            </Link>
          </div>
        </motion.form>

        <motion.div 
          className="mt-8 text-center"
          variants={itemVariants}
        >
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <a href="/signup" className="text-blue-600 hover:text-blue-700 font-medium">
              Sign up
            </a>
          </p>
        </motion.div>
      </motion.div>
    </header>
  );
};

export default Login;