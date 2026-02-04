"use client";

import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function About() {
  return (
    <div className="pt-24 pb-12">
      {/* Intro Section */}
      <section className="container mx-auto px-6 mb-24">
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           variants={fadeInUp}
           className="max-w-4xl"
        >
          <div className="mb-6 h-[1px] w-24 bg-brand-green" />
          <h1 className="font-heading text-4xl font-bold text-brand-deep mb-6">About AATREL</h1>
          <p className="text-lg text-brand-text/80 leading-relaxed font-light">
             We are a quiet, confident company building the climate infrastructure of tomorrow. 
             Rooted in science and engineering, we deliver scalable solutions for carbon capture and utilization.
          </p>
        </motion.div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-brand-grey py-24">
         <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16">
            <motion.div
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
            >
                <h3 className="font-heading text-2xl font-bold text-brand-deep mb-4">Our Vision</h3>
                <p className="text-brand-text/70 leading-relaxed">
                   To be the global leader in bio-inspired carbon technologies, enabling a circular economy where emissions become value.
                </p>
            </motion.div>
            
            <motion.div
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, delay: 0.2 }}
            >
                <h3 className="font-heading text-2xl font-bold text-brand-deep mb-4">Our Mission</h3>
                <p className="text-brand-text/70 leading-relaxed">
                   Developing and deploying scalable infrastructure that captures carbon, generates biomass, and produces renewable energy for a sustainable future.
                </p>
            </motion.div>
         </div>
      </section>

      {/* Research & Innovation */}
      <section className="container mx-auto px-6 py-24">
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           variants={fadeInUp}
           className="text-center max-w-3xl mx-auto"
        >
           <h2 className="font-heading text-3xl font-bold text-brand-deep mb-8">Research & Innovation</h2>
           <p className="text-brand-text/80 leading-relaxed mb-8">
              Our technology is grounded in rigorous scientific research. Developed in collaboration with the 
              <span className="font-semibold text-brand-green"> IITM Research Park</span>, 
              AATREL focuses on long-term deployment and real-world impact.
           </p>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="p-6 border border-brand-grey rounded-lg">
                 <h4 className="font-semibold text-brand-deep mb-2">Scientific Approach</h4>
                 <p className="text-sm text-brand-text/60">Data-driven methodologies backed by peer-reviewed research.</p>
              </div>
              <div className="p-6 border border-brand-grey rounded-lg">
                 <h4 className="font-semibold text-brand-deep mb-2">Long-term Focus</h4>
                 <p className="text-sm text-brand-text/60">Building infrastructure that lasts for decades, not just pilot projects.</p>
              </div>
              <div className="p-6 border border-brand-grey rounded-lg">
                 <h4 className="font-semibold text-brand-deep mb-2">Scalable Tech</h4>
                 <p className="text-sm text-brand-text/60">Designed for industrial integration and massive uptake.</p>
              </div>
           </div>
        </motion.div>
      </section>
    </div>
  );
}
