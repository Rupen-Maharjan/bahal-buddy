'use client'
import Image from "next/image";
import { motion } from 'framer-motion';

const headerVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const LHeader = () => {
  return (
    <header className="min-h-screen flex justify-center items-center">
      <motion.div 
        className="w-[90%] flex flex-col justify-center items-center gap-5 lg:gap-10"
        initial="hidden"
        animate="visible"
        variants={headerVariants}
      >
        <div className="relative flex items-center">
          <div className="absolute -left-32 lg:-left-44 w-52 h-52">
            <Image src="/home-logo.gif" alt="alt" width={50} height={50}  layout="responsive"/>
          </div>
          <h1 className="text-3xl lg:text-6xl font-bold tracking-wider text-center w-[20rem] lg:w-[45rem]">
            Discover the perfect space for your needs
          </h1>
        </div>
        <div className="flex gap-5">
          <input
            type="text"
            id="id"
            name="location"
            placeholder="Location"
            className="w-[300px] border border-slate-200 rounded-full py-1.5 lg:py-3 px-2.5 lg:px-5 outline-none bg-transparent shadow-md"
          />
          <button className="inline-flex items-center justify-center px-4 lg:px-8 py-2 lg:py-4 font-sans font-semibold tracking-wide text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-full lg:h-[60px] shadow-md">
            Search
          </button>
        </div>
      </motion.div>
    </header>
  );
}

export default LHeader;