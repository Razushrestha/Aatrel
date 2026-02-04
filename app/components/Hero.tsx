"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  visible: { transition: { staggerChildren: 0.2 } },
};

export default function Hero() {
  return (
    <section className="relative flex min-h-[90vh] flex-col justify-center overflow-hidden bg-brand-white px-6 pt-20">
      <div className="container mx-auto max-w-5xl text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="space-y-8"
        >
            {/* Logo Mark - optional specific placement if needed, simplified here */}
            
            <motion.h1 
                variants={fadeInUp} 
                className="font-heading text-4xl font-bold leading-tight text-brand-deep md:text-6xl text-balance"
            >
                Building Scalable Climate Solutions <br className="hidden md:block"/>
                Through Advanced Carbon Technologies
            </motion.h1>

            <motion.p 
                variants={fadeInUp}
                className="mx-auto max-w-3xl text-lg text-brand-text/80 md:text-xl font-light leading-relaxed text-balance"
            >
                AATREL delivers bio-inspired carbon capture, utilization, and biomass valorization for a net-zero future.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/services"
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-md border border-brand-green bg-transparent px-8 py-3 text-base font-medium text-brand-green transition-all duration-300 hover:bg-brand-green hover:text-white"
                >
                  <span className="relative z-10">Our Services</span>
                </Link>
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-md border border-brand-deep bg-brand-deep px-8 py-3 text-base font-medium text-white transition-all duration-300 hover:bg-transparent hover:text-brand-deep"
                >
                   <span className="relative z-10">Contact Us</span>
                </Link>
            </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 h-16 w-[1px] -translate-x-1/2 overflow-hidden bg-brand-grey"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <motion.div 
            className="h-full w-full bg-brand-green"
            animate={{ y: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
        />
      </motion.div>
    </section>
  );
}
