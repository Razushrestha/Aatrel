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

const iconScale: Variants = {
  hidden: { scale: 0, rotate: -45, opacity: 0 },
  visible: { scale: 1, rotate: 0, opacity: 1, transition: { type: "spring", stiffness: 200, damping: 20 } }
};

import { AlertTriangle, Mountain, Leaf, RefreshCw, ArrowRight } from "lucide-react";

type ThemeType = "problem" | "challenge" | "solution" | "approach";

interface AboutSection {
  id: string;
  title: string;
  subtitle: string;
  content: string;
  theme: ThemeType;
  icon: React.ElementType;
}

const aboutData: AboutSection[] = [
  {
    id: "problem",
    title: "PROBLEM IDENTIFIED",
    subtitle: "The Climate Crisis",
    content: "Global warming is having an adverse effect on climate change. With the Earth's temperature rising at an alarming average pace of 0.14°F (0.08°C) every decade since 1880, it has doubled more than that rate since 1981. As a result, the greenhouse gas impact is strengthening, owing mostly to rising CO2 emissions. Notably, CO2 emissions from thermal sectors contribute greatly to this problem.",
    theme: "problem",
    icon: AlertTriangle
  },
  {
    id: "challenge",
    title: "THE CHALLENGE",
    subtitle: "Barriers to Innovation",
    content: "Having identified the problem, the challenges of developing a technology to tackle greenhouse gas emissions is easier said than done. High capital and operational costs remain a barrier, with capture alone accounting for 70-80% of total expenses. Regulatory uncertainty, public skepticism around long-term storage safety, and competition with cheaper renewables further complicate investment decisions. Overcoming these hurdles requires technological innovation, supportive policies, and cross-industry collaboration to scale viable solutions.",
    theme: "challenge",
    icon: Mountain
  },
  {
    id: "solution",
    title: "THE SOLUTION",
    subtitle: "Nature-Inspired Innovation",
    content: "CO2 emissions are converted into essential algal biomass through the technology called Algal-Based Carbon Capture and Utilization (ABCCU) makes use of algae's inherent capacity to consume CO2 through photosynthesis, significantly reducing the greenhouse gas emissions. The procedure not only aids to fight against climate change, but it also has several advantages. Algae biomass has the potential to be a sustainable source of biofuels, animal feed, fertilizers, cosmetics and medicinal products. ABCCU promotes a circular economy by converting CO2 emissions into useful value added products, thereby contributing to a greener and more sustainable future for committed businesses.",
    theme: "solution",
    icon: Leaf
  },
  {
    id: "approach",
    title: "OUR APPROACH",
    subtitle: "Integrated Scalability",
    content: "The ABBCU technology is a three-faceted approach towards carbon capture through the integration of three solutions- Carbon Capture & Storage (CCS), Carbon Capture & Utilization (CCU) and Biomass to Value (B2V). The combined approach is completely novel in the Indian context, while proactively turning sustainability into future-proof scalability and a guaranteed competitive advantage for industries.",
    theme: "approach",
    icon: RefreshCw
  }
];

// --- Theme Helpers ---
const getThemeStyles = (theme: ThemeType) => {
  switch (theme) {
    case "problem":
      return {
        bg: "bg-orange-50/50",
        accent: "bg-orange-500",
        text_accent: "text-orange-600",
        border: "border-orange-200"
      };
    case "challenge":
      return {
        bg: "bg-slate-50/80",
        accent: "bg-slate-500",
        text_accent: "text-slate-600",
        border: "border-slate-200"
      };
    case "solution":
      return {
        bg: "bg-green-50/50",
        accent: "bg-brand-green",
        text_accent: "text-brand-green",
        border: "border-brand-green/20"
      };
    case "approach":
      return {
        bg: "bg-emerald-50/50",
        accent: "bg-brand-deep",
        text_accent: "text-brand-deep",
        border: "border-brand-deep/20"
      };
  }
};

export default function About() {
  return (
    <div className="bg-white overflow-hidden font-body text-brand-text">
      
      {/* 1. Hero / Intro Section with Earth */}
      <section className="relative min-h-[85vh] flex flex-col lg:flex-row items-center pt-24 lg:pt-0 overflow-hidden">
         {/* Background Decoration */}
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-green/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full relative z-10">
            {/* Text Content */}
            <motion.div
               initial="hidden"
               animate="visible"
               variants={staggerContainer} 
               className="relative z-10 order-2 lg:order-1 pb-16 lg:pb-0"
            >
                <motion.div variants={fadeInUp} className="mb-6 flex items-center gap-3">
                   <div className="h-[2px] w-12 bg-brand-green"></div>
                   <span className="text-sm font-bold tracking-[0.2em] text-brand-green uppercase">Who We Are</span>
                </motion.div>
                
                <motion.h1 variants={fadeInUp} className="font-heading text-5xl md:text-7xl font-bold text-brand-deep mb-8 leading-[1.1]">
                    About <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-teal-500">AATREL</span>
                </motion.h1>
                
                <motion.p variants={fadeInUp} className="text-lg md:text-xl text-gray-600 leading-relaxed font-light mb-8 max-w-xl">
                    We are building the climate infrastructure of tomorrow. 
                    Rooted in <span className="font-medium text-brand-deep">science</span> and engineering, we deliver scalable solutions for carbon capture and utilization.
                </motion.p>
            </motion.div>

            {/* Earth Visualization */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.9, x: 50 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="relative h-[50vh] lg:h-[80vh] w-full flex items-center justify-center order-1 lg:order-2"
            >
                <div className="absolute inset-0 w-full h-full scale-110">
                    <BreathingEarth />
                </div>
            </motion.div>
        </div>
      </section>


      {/* 2. Dynamic Story Section */}
      <div className="relative py-20 pb-40">
          
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-brand-green/30 to-transparent" />

          <div className="container mx-auto px-6 flex flex-col gap-24 lg:gap-32">
             {aboutData.map((section, index) => {
                 const isEven = index % 2 === 0;
                 const styles = getThemeStyles(section.theme);
                 
                 return (
                    <motion.div 
                        key={section.id}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className={`relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center ${
                           !isEven ? 'lg:direction-rtl' : ''
                        }`}
                        // Note: tailored direction handling below
                    >
                        {/* 1. Visual / Icon Side */}
                        <motion.div 
                            className={`flex justify-center lg:justify-end ${!isEven ? 'lg:order-2 lg:justify-start' : 'lg:order-1'}`}
                            variants={staggerContainer}
                        >
                             <div className={`relative p-12 rounded-3xl ${styles.bg} border ${styles.border}`}>
                                 {/* Icon */}
                                 <motion.div 
                                    variants={iconScale}
                                    className={`w-24 h-24 rounded-2xl ${styles.accent} flex items-center justify-center text-white shadow-xl shadow-${styles.accent}/20`}
                                 >
                                     <section.icon size={48} strokeWidth={1.5} />
                                 </motion.div>

                                 {/* Decorative Elements */}
                                 <div className={`absolute -top-4 -right-4 w-12 h-12 rounded-full border-2 ${styles.border} opacity-50`} />
                                 <div className={`absolute -bottom-4 -left-4 w-20 h-20 rounded-full border-4 ${styles.border} opacity-30`} />
                             </div>
                        </motion.div>

                        {/* 2. Content Side */}
                        <motion.div 
                           className={`text-center lg:text-left ${!isEven ? 'lg:order-1 lg:text-right' : 'lg:order-2'}`}
                           variants={fadeInUp}
                        >
                            <span className={`block font-mono text-sm uppercase tracking-widest mb-3 ${styles.text_accent} font-bold`}>
                                0{index + 1} — {section.subtitle}
                            </span>
                            
                            <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-deep mb-6">
                                {section.title}
                            </h2>
                            
                            <p className="text-lg text-gray-600 leading-relaxed text-pretty">
                                {section.content}
                            </p>

                            {/* Mobile visual connector */}
                            {index !== aboutData.length - 1 && (
                                <div className="lg:hidden flex justify-center mt-12 mb-0 opacity-20">
                                   <ArrowRight className="rotate-90 text-brand-deep" size={32} />
                                </div>
                            )}
                        </motion.div>

                        {/* Timeline Dot (Desktop Center) */}
                        <motion.div 
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white border-4 border-brand-green rounded-full z-10 shadow-[0_0_0_8px_rgba(255,255,255,1)]"
                        />

                    </motion.div>
                 );
             })}
          </div>
      </div>
    </div>
  );
}
