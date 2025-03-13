'use client'

import { HowItWorks, LHeader, PropertySearch, PropertyTypes } from "@/components/export";
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } }
};

export default function Landing() {
  const ref1 = useRef(null);
  
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const isInView1 = useInView(ref1, { once: false });
  const isInView2 = useInView(ref2, { once: false });
  const isInView3 = useInView(ref3, { once: false });

  return (
    <> 
      <LHeader/>
      <div className="container px-4 mx-auto my-12 gap-20 grid">
        <motion.div
          ref={ref1}
          initial="hidden"
          animate={isInView1 ? "visible" : "hidden"}
          variants={sectionVariants}
        >
          <PropertySearch/>
        </motion.div>
        <motion.div
          ref={ref2}
          initial="hidden"
          animate={isInView2 ? "visible" : "hidden"}
          variants={sectionVariants}
        >
          <PropertyTypes/>
        </motion.div>
        <motion.div
          ref={ref3}
          initial="hidden"
          animate={isInView3 ? "visible" : "hidden"}
          variants={sectionVariants}
        >
          <HowItWorks/>
        </motion.div>
      </div>
    </>
  );
}