'use client'
import Link from 'next/link';
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
        <div className="container relative z-10 flex flex-col items-center justify-center py-24 text-center md:py-32">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Find Your Perfect <span className="text-primary">Rental</span> Space
            </h1>
            <p className="mt-6 max-w-[600px] text-muted-foreground md:text-xl">
              Discover and rent properties with ease. Whether you're looking for a room, apartment, or commercial space,
              we've got you covered.
            </p>

            <Link href={'/signup'} className="mt-10 inline-flex items-center justify-center px-4 lg:px-8 py-2 lg:py-4 font-sans font-semibold tracking-wide text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-full lg:h-[60px] shadow-md">
            Get started
          </Link>
          </div>
      </motion.div>
    </header>
  );
}

export default LHeader;