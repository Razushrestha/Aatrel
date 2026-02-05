"use client";

import { motion, Variants } from "framer-motion";
import BreathingEarth from "../components/BreathingEarth";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const scaleIn: Variants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.6 } }
};

export default function About() {
  return (
    <div className="bg-brand-white overflow-hidden">
      
      {/* 1. Hero / Intro Section with Earth */}
      <section className="relative min-h-[90vh] flex flex-col lg:flex-row items-center pt-24 lg:pt-0">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
            
            {/* Text Content */}
            <motion.div
               initial="hidden"
               animate="visible"
               variants={staggerContainer} 
               className="relative z-10"
            >
                <motion.div variants={fadeInUp} className="mb-6 h-[4px] w-24 bg-brand-green rounded-full" />
                <motion.h1 variants={fadeInUp} className="font-heading text-5xl md:text-6xl font-bold text-brand-deep mb-8 leading-tight">
                    About <span className="text-brand-green">AATREL</span>
                </motion.h1>
                <motion.p variants={fadeInUp} className="text-lg md:text-xl text-brand-text/80 leading-relaxed font-light mb-8 text-balance">
                    We are a quiet, confident company building the climate infrastructure of tomorrow. 
                    Rooted in science and engineering, we deliver scalable solutions for carbon capture and utilization.
                </motion.p>

                 <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                    <div className="p-4 bg-brand-grey/50 rounded-lg border border-brand-green/20 backdrop-blur-sm">
                        <span className="block text-2xl font-bold text-brand-deep">Scientific</span>
                        <span className="text-sm text-brand-text/60">Foundation</span>
                    </div>
                    <div className="p-4 bg-brand-grey/50 rounded-lg border border-brand-green/20 backdrop-blur-sm">
                        <span className="block text-2xl font-bold text-brand-deep">Scalable</span>
                        <span className="text-sm text-brand-text/60">Impact</span>
                    </div>
                 </motion.div>
            </motion.div>

            {/* Earth Visualization */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="relative h-[50vh] lg:h-[80vh] w-full flex items-center justify-center grayscale-[20%] hover:grayscale-0 transition-all duration-700"
            >
                {/* Reusing the BreathingEarth component */}
                <div className="absolute inset-0 w-full h-full">
                    <BreathingEarth />
                </div>
            </motion.div>
        </div>
      </section>

      {/* 2. Vision & Mission - Cards */}
      <section className="bg-brand-grey py-24 relative overflow-hidden">
         {/* Decorative background element */}
         <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

         <div className="container mx-auto px-6">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 gap-8"
            >
                <motion.div 
                   variants={fadeInUp}
                   whileHover={{ y: -10 }}
                   className="bg-white p-10 rounded-2xl shadow-xl shadow-brand-deep/5 border-t-4 border-brand-green group transition-all duration-300"
                >
                    <div className="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center mb-6 text-brand-green group-hover:bg-brand-green group-hover:text-white transition-colors">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                    </div>
                    <h3 className="font-heading text-3xl font-bold text-brand-deep mb-4">Our Vision</h3>
                    <p className="text-brand-text/70 leading-relaxed text-lg">
                       To be the global leader in bio-inspired carbon technologies, enabling a circular economy where emissions become value.
                    </p>
                </motion.div>
                
                <motion.div 
                   variants={fadeInUp}
                   whileHover={{ y: -10 }}
                   className="bg-white p-10 rounded-2xl shadow-xl shadow-brand-deep/5 border-t-4 border-brand-deep group transition-all duration-300"
                >
                    <div className="w-16 h-16 bg-brand-deep/10 rounded-full flex items-center justify-center mb-6 text-brand-deep group-hover:bg-brand-deep group-hover:text-white transition-colors">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    </div>
                    <h3 className="font-heading text-3xl font-bold text-brand-deep mb-4">Our Mission</h3>
                    <p className="text-brand-text/70 leading-relaxed text-lg">
                       Developing and deploying scalable infrastructure that captures carbon, generates biomass, and produces renewable energy for a sustainable future.
                    </p>
                </motion.div>
            </motion.div>
         </div>
      </section>

      {/* 3. Research & Innovation */}
      <section className="container mx-auto px-6 py-32">
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           variants={fadeInUp}
           className="text-center max-w-4xl mx-auto mb-16"
        >
           <span className="text-brand-green font-semibold tracking-wider uppercase text-sm">Where Science Meets Scale</span>
           <h2 className="font-heading text-4xl font-bold text-brand-deep my-4">Research & Innovation</h2>
           <p className="text-brand-text/80 text-lg leading-relaxed">
              Our technology is grounded in rigorous scientific research. Developed in collaboration with the 
              <span className="font-bold text-brand-deep"> IITM Research Park</span>, 
              AATREL focuses on long-term deployment and real-world impact.
           </p>
        </motion.div>
        
        <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
             {[ 
                 { title: "Scientific Approach", desc: "Data-driven methodologies backed by peer-reviewed research.", color: "border-brand-green" },
                 { title: "Long-term Focus", desc: "Building infrastructure that lasts for decades, not just pilot projects.", color: "border-brand-deep" },
                 { title: "Scalable Tech", desc: "Designed for industrial integration and massive uptake.", color: "border-neutral-400" }
             ].map((item, i) => (
                <motion.div 
                    key={i}
                    variants={scaleIn}
                    whileHover={{ scale: 1.05 }}
                    className={`p-8 bg-white rounded-xl border-l-4 ${item.color} shadow-lg hover:shadow-xl transition-all duration-300`}
                >
                    <h4 className="font-heading text-xl font-bold text-brand-deep mb-3">{item.title}</h4>
                    <p className="text-brand-text/70">{item.desc}</p>
                </motion.div>
             ))}
        </motion.div>
      </section>
    </div>
  );
}
