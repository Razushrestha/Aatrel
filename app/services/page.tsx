"use client";

import { motion, Variants } from "framer-motion";
import BreathingEarth from "../components/BreathingEarth";
import { Factory, FlaskConical, Sprout, ArrowRight, Droplets, ThermometerSun, Wind, Zap, Box, Leaf } from "lucide-react";

// --- Animation Variants ---
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

const cardHover: Variants = {
  initial: { y: 0 },
  hover: { y: -10, transition: { duration: 0.3 } }
};

// --- Data ---
const servicesData = [
  {
    id: "01",
    code: "CCS",
    title: "Carbon Capture & Storage",
    icon: Factory,
    imagePlaceholder: "bg-[#0E3B2E]", // Solid brand deep green
    content: "Captures industrial CO2 emissions using bio-inspired, gel-based systems. Designed for high-efficiency capture at source with minimal energy and footprint.",
    color: "text-brand-green",
    accent: "bg-brand-green/10",
    border: "border-brand-green/20"
  },
  {
    id: "02",
    code: "CCU",
    title: "Carbon Capture & Utilization",
    icon: FlaskConical,
    imagePlaceholder: "bg-[#0E3B2E]", // Solid brand deep green
    content: "Converts captured CO2 into high-yield algal biomass through smart photobioreactors. Enables real-time sequestration and lays the foundation for circular carbon use.",
    color: "text-brand-green",
    accent: "bg-brand-green/10",
    border: "border-brand-green/20"
  },
  {
    id: "03",
    code: "B2V",
    title: "Biomass to Value",
    icon: Sprout,
    imagePlaceholder: "bg-[#0E3B2E]", // Solid brand deep green
    content: "Transforms algal biomass into valuable products like proteins, bioenergy, and fertilizers. Drives green revenue streams while supporting zero-waste, sustainable output.",
    color: "text-brand-green", 
    accent: "bg-brand-green/10",
    border: "border-brand-green/20"
  }
];

export default function Services() {
  return (
    <div className="bg-white overflow-hidden font-body text-brand-text">
      
      {/* 1. Hero Section */}
      <section className="relative min-h-[70vh] flex flex-col items-center justify-center pt-24 overflow-hidden">
         {/* Background Decoration */}
         <div className="absolute top-0 left-0 w-full h-full bg-brand-white" />
         <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-brand-green/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />

         <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
            <motion.div
               initial="hidden"
               animate="visible"
               variants={staggerContainer} 
               className="text-center lg:text-left"
            >
                <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-brand-green/10 text-brand-green text-sm font-bold tracking-wider uppercase">
                   <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
                   Our Expertise
                </motion.div>
                
                <motion.h1 variants={fadeInUp} className="font-heading text-5xl md:text-7xl font-bold text-brand-deep mb-8 leading-[1.1]">
                    Three Stage <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-teal-500">APPROACH</span>
                </motion.h1>
                
                <motion.p variants={fadeInUp} className="text-xl text-gray-600 leading-relaxed font-light mb-8 max-w-xl mx-auto lg:mx-0">
                    Comprehensive bio-inspired solutions specifically designed to close the carbon loop and generate value.
                </motion.p>
            </motion.div>

            {/* Earth - Slightly smaller hero presentation for services */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="h-[50vh] w-full flex items-center justify-center"
            >
               <div className="w-full h-full relative">
                 <BreathingEarth />
               </div>
            </motion.div>
         </div>
      </section>

      {/* 2. Three Stage Approach Cards */}
      <section className="py-24 relative">
          <div className="container mx-auto px-6">
             <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={staggerContainer}
                className="grid lg:grid-cols-3 gap-8"
             >
                 {servicesData.map((service, index) => (
                     <motion.div
                        key={service.id}
                        variants={fadeInUp}
                        whileHover="hover"
                        initial="initial"
                        className={`group relative bg-white rounded-3xl border ${service.border} shadow-lg shadow-brand-grey/50 overflow-hidden flex flex-col hover:shadow-2xl transition-all duration-500`}
                     >
                        {/* Top Image Area */}
                        <div className={`h-48 w-full ${service.imagePlaceholder} relative overflow-hidden`}>
                             
                             {/* Icon in top right */}
                             <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md p-3 rounded-xl shadow-lg border border-white/20">
                                <service.icon size={24} className="text-white" />
                             </div>

                             {/* Large Number Watermark - Positioned as requested in left corner */}
                             <span className="absolute top-12 -left-2 text-8xl font-heading font-bold text-white/10 select-none pointer-events-none">
                                {service.id}
                             </span>
                        </div>

                        {/* Content Area */}
                        <div className="p-8 flex-grow flex flex-col relative z-10 bg-white">
                           
                           <div className="mb-4">
                               <h3 className={`font-mono text-xl font-bold ${service.color} mb-1`}>
                                   {service.code}
                               </h3>
                               <p className="text-sm font-bold text-brand-deep/50 uppercase tracking-widest">
                                   {service.title}
                               </p>
                           </div>

                           <motion.div 
                              className={`h-1 w-12 ${service.color.replace('text-', 'bg-')} mb-6`} 
                              variants={{
                                initial: { width: 48 },
                                hover: { width: 96 }
                              }}
                           />

                           <p className="text-brand-text/70 leading-relaxed mb-8 flex-grow">
                               {service.content}
                           </p>

                           {/* Mobile arrow / Decorative */}
                           <div className={`mt-auto flex items-center gap-2 text-sm font-semibold ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-[-10px] group-hover:translate-x-0`}>
                               Learn more <ArrowRight size={16} />
                           </div>
                        </div>
                     </motion.div>
                 ))}
             </motion.div>
          </div>
      </section>

      {/* 4. Direct Carbon Capture Process Diagram */}
      <section className="py-24 bg-brand-deep text-white relative overflow-hidden">
         {/* Background Grid & Noise */}
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

         <div className="container mx-auto px-6 relative z-10">
            {/* Diagram Header */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-center mb-16"
            >
               <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  The <span className="text-brand-green">Bioreactor</span> Core
               </h2>
               <p className="text-gray-400 max-w-2xl mx-auto text-lg pt-4 border-t border-brand-green/20">
                  Our proprietary algae panel technology transforms industrial waste into clean energy through accelerated photosynthesis.
               </p>
            </motion.div>

            {/* Main Interactive Diagram Container */}
            <div className="relative flex flex-col xl:block min-h-[700px] w-full max-w-[1400px] mx-auto px-4 py-12 xl:py-0">
               
               {/* SVG Animation Layer (Desktop Only) */}
               <svg className="hidden xl:block absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible" viewBox="0 0 1400 700">
                  <defs>
                     <filter id="glow-path" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="3" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                     </filter>
                     <linearGradient id="flow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgba(34,177,76,0.1)" />
                        <stop offset="50%" stopColor="rgba(34,177,76,0.5)" />
                        <stop offset="100%" stopColor="rgba(34,177,76,0.1)" />
                     </linearGradient>
                  </defs>

                  {/* --- Connection Paths --- */}

                  {/* 1. Inputs (x~150) to Reactor Left Edge (x~520) */}
                  {/* Center of Bioreactor is 700, width 340. Left Edge is 530. */}
                  
                  <motion.path d="M 180,180 C 350,180 350,350 530,350" stroke="url(#flow-gradient)" strokeWidth="2" fill="none" strokeDasharray="6,4" />
                  <motion.path d="M 180,350 L 530,350" stroke="url(#flow-gradient)" strokeWidth="2" fill="none" strokeDasharray="6,4" />
                  <motion.path d="M 180,520 C 350,520 350,350 530,350" stroke="url(#flow-gradient)" strokeWidth="2" fill="none" strokeDasharray="6,4" />

                  {/* 2. Reactor Right Edge (x~870) to Biomass (x~960) */}
                  <motion.path d="M 870,350 L 910,350" stroke="rgba(255,255,255,0.1)" strokeWidth="2" fill="none" strokeDasharray="4,4" />

                  {/* 3. Biomass (x~1060) to Converter (x~1100) */}
                  <motion.path d="M 1060,350 L 1100,350" stroke="rgba(255,255,255,0.1)" strokeWidth="2" fill="none" strokeDasharray="4,4" />

                  {/* 4. Converter (x~1250) to Electricity (x~1290) */}
                  <motion.path d="M 1250,350 L 1290,350" stroke="#22B14C" strokeWidth="2" fill="none" filter="url(#glow-path)" />

                  {/* --- Animated Particles --- */}
                  
                  {/* Inputs -> Reactor */}
                  <circle r="4" fill="#22B14C" filter="url(#glow-path)">
                     <animateMotion path="M 180,180 C 350,180 350,350 530,350" dur="3s" repeatCount="indefinite" />
                  </circle>
                  <circle r="4" fill="#22B14C" filter="url(#glow-path)">
                     <animateMotion path="M 180,350 L 530,350" dur="2.5s" repeatCount="indefinite" begin="0.5s"/>
                  </circle>
                  <circle r="4" fill="#22B14C" filter="url(#glow-path)">
                     <animateMotion path="M 180,520 C 350,520 350,350 530,350" dur="3s" repeatCount="indefinite" begin="1s"/>
                  </circle>

                  {/* Reactor -> Biomass */}
                  <circle r="3" fill="#fff">
                     <animateMotion path="M 870,350 L 910,350" dur="1s" repeatCount="indefinite" />
                  </circle>

                  {/* Biomass -> Converter */}
                  <circle r="3" fill="#fff">
                     <animateMotion path="M 1060,350 L 1100,350" dur="1s" repeatCount="indefinite" begin="0.5s" />
                  </circle>
               </svg>

               {/* LEFT ZONE: Inputs */}
               <div className="xl:absolute xl:left-0 xl:top-1/2 xl:-translate-y-1/2 flex flex-col gap-6 w-full xl:w-[250px] z-10 mb-12 xl:mb-0 px-4 xl:px-0">
                  {[
                    { icon: Droplets, color: "text-blue-400", bg: "bg-blue-500/10", label: "WASTE WATER", sub: "Input 01" },
                    { icon: ThermometerSun, color: "text-orange-400", bg: "bg-orange-500/10", label: "TEMP REGULATION", sub: "Input 02" },
                    { icon: Wind, color: "text-brand-green", bg: "bg-brand-green/10", label: "AIR / CO2", sub: "Input 03" }
                  ].map((item, idx) => (
                    <motion.div 
                      key={idx}
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="bg-gray-900/80 border border-gray-800 p-4 rounded-xl flex items-center gap-4 shadow-lg backdrop-blur-md hover:border-brand-green/30 transition-colors group"
                    >
                       <div className={`${item.bg} p-3 rounded-lg border border-white/5 group-hover:bg-white/5 transition-colors`}>
                          <item.icon className={item.color} size={28} />
                       </div>
                       <div>
                          <div className="text-[10px] uppercase tracking-widest text-gray-500 font-mono mb-1">{item.sub}</div>
                          <div className="font-bold text-white text-sm">{item.label}</div>
                       </div>
                    </motion.div>
                  ))}
               </div>

               {/* CENTER ZONE: Bioreactor */}
               <div className="xl:absolute xl:left-1/2 xl:-translate-x-1/2 xl:top-1/2 xl:-translate-y-1/2 z-20 flex justify-center w-full mb-12 xl:mb-0">
                  <motion.div 
                     initial={{ scale: 0.95 }}
                     whileInView={{ scale: 1 }}
                     className="w-[340px] h-[500px] bg-gray-950 rounded-[2rem] border-[6px] border-gray-900 relative overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col ring-1 ring-white/10"
                  >
                        {/* Status Bar */}
                        <div className="h-16 border-b border-white/5 bg-gray-900/50 flex items-center justify-between px-6 backdrop-blur-sm z-30">
                           <div className="flex items-center gap-2">
                               <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                               <span className="text-xs font-mono text-gray-400">ONLINE</span>
                           </div>
                           <span className="font-mono text-brand-green font-bold tracking-widest">BIOREACTOR</span>
                        </div>

                        {/* Viewing Window */}
                        <div className="flex-1 relative bg-gray-900 group overflow-hidden">
                           {/* Fluid Body */}
                           <div className="absolute inset-0 bg-gradient-to-t from-brand-deep via-[#166534] to-[#22c55e] opacity-90 z-0"></div>
                           
                           {/* Bubble System - Deterministic Generation to prevent Hydration errors */}
                           {[...Array(40)].map((_, i) => {
                              // Deterministic pseudo-random values based on index
                              const size = 6 + (i % 8); // Bigger bubbles: 6px - 13px
                              const left = (i * 13) % 90 + 5; // Spread 5% to 95%
                              const duration = 2 + (i % 4) + (i * 0.1 % 2); // 2s to 6s
                              const delay = (i * 0.3) % 5; // 0 to 5s delay
                              const wobble = (i % 2 === 0 ? 1 : -1) * (15 + (i % 10));

                              return (
                                 <motion.div
                                    key={i}
                                    className="absolute bg-white/40 rounded-full z-10"
                                    initial={{ top: "100%", opacity: 0, x: 0 }}
                                    animate={{ 
                                       top: "-20%", // Move strictly from down (100%) to top (-20%)
                                       opacity: [0, 1, 1, 0], // Fully visible in middle
                                       x: [0, wobble, -wobble, 0] // Zig-zag
                                    }}
                                    transition={{ 
                                       duration: duration,
                                       repeat: Infinity,
                                       delay: delay,
                                       ease: "linear",
                                    }}
                                    style={{ 
                                       left: `${left}%`, 
                                       width: `${size}px`, 
                                       height: `${size}px`,
                                       boxShadow: "0 0 6px rgba(255,255,255,0.6)"
                                    }}
                                 />
                              );
                           })}

                           {/* Reflection Overlay */}
                           <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-20 pointer-events-none z-20"></div>
                        </div>

                        {/* Metrics Panel */}
                        <div className="h-20 border-t border-white/5 bg-gray-900/80 flex items-center justify-evenly z-30">
                           <div className="text-center group-hover:scale-105 transition-transform">
                              <div className="text-[10px] font-mono text-brand-green mb-1">TEMP</div>
                              <div className="text-2xl font-bold text-white">34°C</div>
                           </div>
                           <div className="w-px h-8 bg-white/10"></div>
                           <div className="text-center group-hover:scale-105 transition-transform">
                              <div className="text-[10px] font-mono text-brand-green mb-1">PH</div>
                              <div className="text-2xl font-bold text-white">8.4</div>
                           </div>
                        </div>
                  </motion.div>
               </div>

               {/* RIGHT ZONE: Process Chain */}
               <div className="xl:absolute xl:right-0 xl:top-1/2 xl:-translate-y-1/2 flex flex-col xl:flex-row gap-6 w-full xl:w-auto items-center z-10 justify-end px-4 xl:px-0">
                   
                   {/* Card 1: Yield */}
                   <motion.div 
                     whileHover={{ y: -5 }}
                     className="w-full xl:w-[140px] h-[180px] bg-gray-900/80 border border-gray-800 rounded-2xl flex flex-col items-center justify-center p-4 relative shadow-lg backdrop-blur-sm hover:border-brand-green/30 hover:shadow-brand-green/10 transition-all"
                   >
                       {/* Left Dot */}
                       <div className="hidden xl:block absolute left-[-5px] top-1/2 -translate-y-1/2 w-2 h-2 bg-gray-600 rounded-full"></div>
                       
                       <div className="bg-brand-green/10 p-3 rounded-full mb-4 ring-1 ring-brand-green/20">
                          <Leaf className="text-brand-green" size={24} />
                       </div>
                       <div className="text-center">
                          <div className="text-[10px] uppercase font-mono text-gray-500 mb-1">YIELD</div>
                          <div className="font-bold text-white">Biomass</div>
                       </div>

                       {/* Right Dot */}
                       <div className="hidden xl:block absolute right-[-5px] top-1/2 -translate-y-1/2 w-2 h-2 bg-gray-600 rounded-full"></div>
                   </motion.div>

                   {/* Card 2: Process */}
                   <motion.div 
                     whileHover={{ y: -5 }}
                     className="w-full xl:w-[140px] h-[180px] bg-gray-900/80 border border-gray-800 rounded-2xl flex flex-col items-center justify-center p-4 relative shadow-lg backdrop-blur-sm hover:border-brand-green/30 hover:shadow-brand-green/10 transition-all"
                   >
                       {/* Left Dot */}
                       <div className="hidden xl:block absolute left-[-5px] top-1/2 -translate-y-1/2 w-2 h-2 bg-gray-600 rounded-full"></div>
                       
                       <div className="bg-white/5 p-3 rounded-full mb-4 ring-1 ring-white/10">
                          <Box className="text-white" size={24} />
                       </div>
                       <div className="text-center">
                          <div className="text-[10px] uppercase font-mono text-gray-500 mb-1">TREATMENT</div>
                          <div className="font-bold text-white">Converter</div>
                       </div>

                       {/* Right Dot */}
                       <div className="hidden xl:block absolute right-[-5px] top-1/2 -translate-y-1/2 w-2 h-2 bg-gray-600 rounded-full"></div>
                   </motion.div>

                   {/* Card 3: Energy (Highlighted) */}
                   <motion.div 
                     whileHover={{ scale: 1.05 }}
                     className="w-full xl:w-[160px] h-[200px] bg-gradient-to-br from-brand-deep to-gray-900 border border-brand-green rounded-2xl flex flex-col items-center justify-center p-4 relative shadow-[0_0_30px_rgba(34,177,76,0.15)] hover:shadow-[0_0_50px_rgba(34,177,76,0.3)] transition-all"
                   >
                       {/* Left Dot */}
                       <div className="hidden xl:block absolute left-[-5px] top-1/2 -translate-y-1/2 w-2 h-2 bg-brand-green rounded-full shadow-[0_0_10px_#22c55e]"></div>
                       
                       <div className="relative mb-4">
                           <div className="absolute inset-0 bg-yellow-400 blur-lg opacity-40 animate-pulse"></div>
                           <Zap className="text-yellow-400 fill-yellow-400 relative z-10" size={40} />
                       </div>
                       <div className="text-center">
                          <div className="text-[10px] uppercase font-mono text-brand-green mb-1">TARGET</div>
                          <div className="text-xl font-bold text-white">Electricity</div>
                       </div>
                   </motion.div>

               </div>

            </div>
         </div>
      </section>

      {/* ABCCU Process Architecture Chart */}
      <section className="bg-white pb-32 pt-10 relative border-t border-gray-100">
         <div className="container mx-auto px-4 max-w-[1400px]">
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               className="text-center mb-16"
            >
               <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">ABCCU <span className="text-brand-green">Ecosystem</span></h2>
               <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                  Advanced Bio-Capture, Conversion & Utilization. A closed-loop system transforming waste into value.
               </p>
            </motion.div>

            {/* Diagram Container - Scrollable for precision preservation */}
            <div className="w-full overflow-x-auto pb-12">
                <div className="relative w-[1300px] h-[900px] mx-auto bg-slate-50 rounded-[3rem] border border-slate-200 p-8 shadow-xl select-none">
                    
                    {/* Background Grid */}
                    <div className="absolute inset-0 opacity-[0.05]" 
                        style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
                    </div>

                    {/* --- CONNECTION LINES LAYER (SVG) --- */}
                    {/* 
                    Coordinate System: 1300 x 900 (Widened)
                    X-GRID RE-SPACING:
                        C1 (Inputs):   100  
                        C2 (Pre):      300  
                        C3 (Core):     550  (Center)
                        C4 (Biomass):  750
                        C5 (Process):  900  (HVP/Digestion)
                        C5b (Wastes):  850 & 1000 (Split from Digestion) -> CHANGED TO: 850 (Liquid) & 1000 (Solid) ?? No, overlap.
                        
                        *** NEW STRATEGY FOR RIGHT SIDE ***
                        Digestion Center: 900
                        Left Branch (Liquid): 800
                        Right Branch (Solid): 1000
                        
                        Gas Purification Center: 1200 (Moved further right to avoid Solid/CNG overlap)
                    */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 1300 900">
                        <defs>
                            <marker id="arrow-blue" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
                                <path d="M0,0 L8,4 L0,8" fill="#2563eb" />
                            </marker>
                            <marker id="arrow-green" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
                                <path d="M0,0 L8,4 L0,8" fill="#15803d" />
                            </marker>
                            <marker id="arrow-gray" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
                                <path d="M0,0 L8,4 L0,8" fill="#64748b" />
                            </marker>
                            <marker id="arrow-orange" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
                                <path d="M0,0 L8,4 L0,8" fill="#f97316" />
                            </marker>
                        </defs>

                        {/* --- PATHS --- */}

                        {/* 1. Waste Water (100, 350) -> Pre1 (300, 350) */}
                        <path d="M 170,350 L 230,350" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-gray)" />

                        {/* 2. Flue Gas (100, 550) -> Pre2 (300, 550) */}
                        <path d="M 170,550 L 230,550" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow-gray)" />

                        {/* 3. Pre1 (300, 350) -> PBR (550, 420) [Top Input] */}
                        {/* Out Right(370), Down to 400, Right to 430 */}
                        <path d="M 370,350 L 400,350 L 400,400 L 420,400" stroke="#2563eb" strokeWidth="3" markerEnd="url(#arrow-blue)" fill="none" strokeLinejoin="round" />

                        {/* 4. DAC (300, 450) -> PBR (550, 420) & Gel (550, 680) */}
                        {/* DAC -> Split Point (370, 450) */}
                        <path d="M 350,450 L 380,450" stroke="#475569" strokeWidth="2" />
                        {/* Split Up to PBR input point (y=440) */}
                        <path d="M 380,450 L 380,440 L 420,440" stroke="#475569" strokeWidth="2" markerEnd="url(#arrow-gray)" fill="none" strokeLinejoin="round" />
                        {/* Split Down to Gel input point (y=660) */}
                        <path d="M 380,450 L 380,660 L 420,660" stroke="#475569" strokeWidth="2" markerEnd="url(#arrow-gray)" fill="none" strokeLinejoin="round" />

                        {/* 5. Pre2 (300, 550) -> Gel (550, 680) */}
                        {/* Out Right(370), Down to 700, Right to 430 */}
                        <path d="M 370,550 L 390,550 L 390,700 L 420,700" stroke="#2563eb" strokeWidth="3" markerEnd="url(#arrow-blue)" fill="none" strokeLinejoin="round" />

                        {/* 6. PBR (550, 420) <-> Gel (550, 680) LOOP */}
                        {/* PBR Bottom (y=500ish) -> Gel Top (y=620) [Dotted] */}
                        <path d="M 520,490 L 520,620" stroke="#15803d" strokeWidth="2" strokeDasharray="6,4" markerEnd="url(#arrow-green)" />
                        {/* Gel Top Right -> PBR Bottom Right [Recycle Solid] */}
                        <path d="M 580,620 L 580,490" stroke="#15803d" strokeWidth="3" markerEnd="url(#arrow-green)" />

                        {/* 7. PBR (550) -> Harvest (550, 250) */}
                        <path d="M 550,350 L 550,290" stroke="#15803d" strokeWidth="4" markerEnd="url(#arrow-green)" />

                        {/* 8. Harvest (550, 250) -> Biomass (750, 150) */}
                        {/* Up and Right */}
                        <path d="M 550,210 L 550,150 L 680,150" stroke="#15803d" strokeWidth="3" markerEnd="url(#arrow-green)" fill="none" strokeLinejoin="round" />

                        {/* 9. Biomass (750, 150) -> HVP (900, 250) */}
                        {/* Right to 900, Down to 210 */}
                        <path d="M 820,150 L 900,150 L 900,210" stroke="#15803d" strokeWidth="3" markerEnd="url(#arrow-green)" fill="none" strokeLinejoin="round" />

                        {/* 10. HVP (900, 250) -> Digestion (900, 400) */}
                        <path d="M 900,290 L 900,360" stroke="#f97316" strokeWidth="3" markerEnd="url(#arrow-orange)" />

                        {/* 11. Digestion (900, 400) -> Outputs */}
                        
                        {/* -> Gas Chain (Right) -> Goes way right to 1200 */}
                        <path d="M 980,400 L 1140,400" stroke="#3b82f6" strokeWidth="3" markerEnd="url(#arrow-blue)" />

                        {/* -> Wastes (Down/Split) */}
                        <path d="M 900,440 L 900,480" stroke="#f97316" strokeWidth="3" />
                        {/* Liquid (Left branch) 800, 530 */}
                        <path d="M 900,480 L 800,480 L 800,530" stroke="#f97316" strokeWidth="2" markerEnd="url(#arrow-orange)" fill="none" strokeLinejoin="round" />
                        {/* Solid (Right branch) 1000, 530 */}
                        <path d="M 900,480 L 1000,480 L 1000,530" stroke="#f97316" strokeWidth="2" markerEnd="url(#arrow-orange)" fill="none" strokeLinejoin="round" />

                        {/* 12. Wastes -> Products */}
                        {/* Liq -> Stim (800, 750) */}
                        <path d="M 800,590 L 800,710" stroke="#84cc16" strokeWidth="2" markerEnd="url(#arrow-green)" />
                        {/* Sol -> Fert (1000, 750) */}
                        <path d="M 1000,590 L 1000,710" stroke="#84cc16" strokeWidth="2" markerEnd="url(#arrow-green)" />

                        {/* 13. Gas Chain (1200) - FAR RIGHT */}
                        {/* Raw (1200, 400) -> CNG (1200, 560) */}
                        <path d="M 1200,440 L 1200,530" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrow-blue)" />
                        {/* CNG -> Elec (1200, 750) */}
                        <path d="M 1200,590 L 1200,710" stroke="#15803d" strokeWidth="2" markerEnd="url(#arrow-green)" />


                        {/* --- ANIMATIONS (Flowing Particles on Every Line) --- */}

                        {/* 1. Inputs */}
                        <circle r="4" fill="#94a3b8">
                            <animateMotion path="M 170,350 L 230,350" dur="2s" repeatCount="indefinite" />
                        </circle>
                        <circle r="4" fill="#94a3b8">
                            <animateMotion path="M 170,550 L 230,550" dur="2.2s" repeatCount="indefinite" />
                        </circle>

                        {/* 2. Pre -> Core */}
                        <circle r="4" fill="#3b82f6">
                            <animateMotion path="M 370,350 L 400,350 L 400,400 L 420,400" dur="3s" repeatCount="indefinite" />
                        </circle>
                        <circle r="4" fill="#64748b">
                            <animateMotion path="M 350,450 L 380,450" dur="1.5s" repeatCount="indefinite" />
                        </circle>
                        <circle r="4" fill="#64748b">
                            <animateMotion path="M 380,450 L 380,440 L 420,440" dur="1.8s" repeatCount="indefinite" />
                        </circle>
                        <circle r="4" fill="#64748b">
                            <animateMotion path="M 380,450 L 380,660 L 420,660" dur="2.5s" repeatCount="indefinite" />
                        </circle>
                        <circle r="4" fill="#3b82f6">
                            <animateMotion path="M 370,550 L 390,550 L 390,700 L 420,700" dur="3s" repeatCount="indefinite" />
                        </circle>

                        {/* 3. Loops & Vertical Flows */}
                        <circle r="3" fill="#15803d">
                            <animateMotion path="M 520,490 L 520,620" dur="2s" repeatCount="indefinite" />
                        </circle>
                        <circle r="4" fill="#15803d">
                            <animateMotion path="M 580,620 L 580,490" dur="2s" repeatCount="indefinite" />
                        </circle>

                        {/* 4. Upstream Biomass Flow */}
                        <circle r="4" fill="#15803d">
                            <animateMotion path="M 550,350 L 550,290" dur="1.5s" repeatCount="indefinite" />
                        </circle>
                        <circle r="4" fill="#15803d">
                            <animateMotion path="M 550,210 L 550,150 L 680,150" dur="3s" repeatCount="indefinite" />
                        </circle>
                        <circle r="4" fill="#15803d">
                            <animateMotion path="M 820,150 L 900,150 L 900,210" dur="2.5s" repeatCount="indefinite" />
                        </circle>

                        {/* 5. Processing Flow */}
                        <circle r="4" fill="#f97316">
                            <animateMotion path="M 900,290 L 900,360" dur="1.8s" repeatCount="indefinite" />
                        </circle>
                        <circle r="4" fill="#3b82f6">
                            <animateMotion path="M 980,400 L 1140,400" dur="2.5s" repeatCount="indefinite" />
                        </circle>

                        {/* 6. Waste Distribution */}
                        <circle r="4" fill="#f97316">
                            <animateMotion path="M 900,440 L 900,480" dur="1s" repeatCount="indefinite" />
                        </circle>
                        <circle r="4" fill="#f97316">
                            <animateMotion path="M 900,480 L 800,480 L 800,530" dur="2.5s" repeatCount="indefinite" />
                        </circle>
                        <circle r="4" fill="#f97316">
                            <animateMotion path="M 900,480 L 1000,480 L 1000,530" dur="2.5s" repeatCount="indefinite" />
                        </circle>

                        {/* 7. Final Products */}
                        <circle r="4" fill="#84cc16">
                            <animateMotion path="M 800,590 L 800,710" dur="1.5s" repeatCount="indefinite" />
                        </circle>
                        <circle r="4" fill="#84cc16">
                            <animateMotion path="M 1000,590 L 1000,710" dur="1.5s" repeatCount="indefinite" />
                        </circle>
                        <circle r="4" fill="#3b82f6">
                            <animateMotion path="M 1200,440 L 1200,530" dur="2s" repeatCount="indefinite" />
                        </circle>
                        <circle r="4" fill="#15803d">
                            <animateMotion path="M 1200,590 L 1200,710" dur="2s" repeatCount="indefinite" />
                        </circle>
                    </svg>


                    {/* --- NODE LAYER (Absolute Positioning on 1300x900 Grid) --- */}
                    
                    {/* COL 1: INPUTS (X=100) */}
                    <div className="absolute left-[100px] top-[350px] -translate-x-1/2 -translate-y-1/2 w-[140px] bg-slate-600 text-white py-3 rounded-full text-xs font-bold text-center shadow-lg border-2 border-slate-400 z-10">
                        WASTE WATER
                    </div>
                    <div className="absolute left-[100px] top-[550px] -translate-x-1/2 -translate-y-1/2 w-[140px] bg-slate-600 text-white py-3 rounded-full text-xs font-bold text-center shadow-lg border-2 border-slate-400 z-10">
                        FLUE GAS
                    </div>

                    {/* COL 2: PRE-TREAT (X=300) */}
                    <div className="absolute left-[300px] top-[350px] -translate-x-1/2 -translate-y-1/2 w-[140px] bg-blue-600 text-white py-4 rounded-xl text-xs font-bold text-center shadow-lg border-2 border-blue-400 z-10">
                        PRE-TREATMENT
                    </div>
                    <div className="absolute left-[300px] top-[450px] -translate-x-1/2 -translate-y-1/2 w-[100px] bg-slate-700 text-white py-3 rounded-lg text-xs font-bold text-center shadow-lg border border-slate-500 z-10">
                        DAC
                    </div>
                    <div className="absolute left-[300px] top-[550px] -translate-x-1/2 -translate-y-1/2 w-[140px] bg-blue-600 text-white py-4 rounded-xl text-xs font-bold text-center shadow-lg border-2 border-blue-400 z-10">
                        PRE-TREATMENT
                    </div>

                    {/* COL 3: CORE (X=550) */}
                    <div className="absolute left-[550px] top-[250px] -translate-x-1/2 -translate-y-1/2 w-[180px] bg-lime-500 text-white py-3 rounded-full text-sm font-bold text-center shadow-lg border-2 border-white z-10">
                        BIOMASS HARVESTING
                    </div>
                    {/* PBR MAIN */}
                    <div className="absolute left-[550px] top-[420px] -translate-x-1/2 -translate-y-1/2 w-[240px] h-[140px] bg-gradient-to-br from-brand-green to-green-700 text-white flex flex-col items-center justify-center rounded-2xl shadow-2xl border-4 border-white z-20">
                        <span className="text-xl font-bold tracking-tight">PHOTOBIOREACTOR</span>
                        <span className="text-[10px] opacity-80 mt-1 uppercase tracking-widest">Core Technology</span>
                    </div>
                    <div className="absolute left-[550px] top-[680px] -translate-x-1/2 -translate-y-1/2 w-[200px] bg-green-900 text-white py-4 rounded-xl text-sm font-bold text-center shadow-lg border-2 border-green-700 z-10">
                        GEL COLUMNS
                    </div>

                    {/* COL 4: BIOMASS (X=750, Y=150) */}
                    <div className="absolute left-[750px] top-[150px] -translate-x-1/2 -translate-y-1/2 w-[140px] bg-green-950 text-white py-4 rounded-lg text-sm font-bold text-center shadow-xl border border-green-800 z-10">
                        BIOMASS
                    </div>

                    {/* COL 5: PROCESSING (X=900) */}
                    <div className="absolute left-[900px] top-[250px] -translate-x-1/2 -translate-y-1/2 w-[160px] bg-orange-500 text-white py-3 rounded-lg text-xs font-bold text-center shadow-lg border border-orange-300 z-10">
                        HVP EXTRACTION
                    </div>
                    <div className="absolute left-[900px] top-[400px] -translate-x-1/2 -translate-y-1/2 w-[160px] bg-orange-600 text-white py-4 rounded-lg text-sm font-bold text-center shadow-lg border-2 border-white z-10">
                        ANAEROBIC DIGESTION
                    </div>

                    {/* COL 6: WASTES (X=800/1000) - Tight Group Left */}
                    <div className="absolute left-[800px] top-[560px] -translate-x-1/2 -translate-y-1/2 w-[120px] bg-lime-200 text-green-900 py-3 rounded-md text-xs font-bold text-center shadow-sm border border-lime-300 z-10">
                        LIQUID WASTE
                    </div>
                    <div className="absolute left-[1000px] top-[560px] -translate-x-1/2 -translate-y-1/2 w-[120px] bg-lime-200 text-green-900 py-3 rounded-md text-xs font-bold text-center shadow-sm border border-lime-300 z-10">
                        SOLID WASTE
                    </div>

                    {/* WASTES PRODUCTS (Y=750) - LOWERED to ALIGN */}
                    <div className="absolute left-[800px] top-[750px] -translate-x-1/2 -translate-y-1/2 w-[140px] bg-green-800 text-white py-3 rounded-lg text-xs font-bold text-center shadow-md z-10">
                        BIO STIMULANT
                    </div>
                    <div className="absolute left-[1000px] top-[750px] -translate-x-1/2 -translate-y-1/2 w-[140px] bg-green-800 text-white py-3 rounded-lg text-xs font-bold text-center shadow-md z-10">
                        BIO FERTILIZER
                    </div>


                    {/* COL 7: ENERGY (X=1200) - Pushed Far Right */}
                    <div className="absolute left-[1200px] top-[400px] -translate-x-1/2 -translate-y-1/2 w-[120px] bg-blue-700 text-white py-3 rounded-lg text-xs font-bold text-center shadow-lg border border-blue-500 z-10">
                        RAW GAS PURIF.
                    </div>
                    <div className="absolute left-[1200px] top-[560px] -translate-x-1/2 -translate-y-1/2 w-[120px] bg-green-900 text-white py-3 rounded-lg text-xs font-bold text-center shadow-lg z-10">
                        CNG
                    </div>
                    <div className="absolute left-[1200px] top-[750px] -translate-x-1/2 -translate-y-1/2 w-[140px] bg-brand-deep text-white py-4 rounded-xl text-sm font-bold text-center shadow-xl border-t-4 border-brand-green z-20 whitespace-nowrap">
                        ELECTRICITY
                    </div>

                </div>
            </div>
         </div>
      </section>

      {/* 4. Integration/Process Flow Banner */}
      <section className="bg-white py-32 text-brand-deep relative overflow-hidden border-t border-brand-green/10">
           {/* Exact Dotted Grid Background - Optimized for White */}
           <div className="absolute inset-0 opacity-40" 
                style={{ 
                    backgroundImage: 'radial-gradient(#22B14C 1.5px, transparent 1.5px)', 
                    backgroundSize: '40px 40px' 
                }}
           ></div>
           
           <div className="container mx-auto px-6 text-center relative z-10">
               <motion.div
                 initial={{ opacity: 0, scale: 0.95 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8 }}
               >
                   <p className="text-brand-text/80 max-w-3xl mx-auto text-xl md:text-2xl leading-relaxed mb-16 font-light">
                       Our technology stack is designed to work as a unified ecosystem. From the smokestack to the final product, AATREL ensures zero waste and maximum efficiency.
                   </p>
                   
                   <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 font-mono text-brand-green tracking-wider text-sm md:text-base uppercase font-bold">
                       {/* Capture Step */}
                       <div className="flex items-center gap-3 bg-brand-green/5 px-8 py-4 rounded-full border border-brand-green/20 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 cursor-default">
                           <Factory size={20} /> <span>Capture</span>
                       </div>
                       
                       <div className="hidden md:block w-16 h-px bg-brand-green/30"></div>
                       <div className="md:hidden h-12 w-px bg-brand-green/30"></div>

                       {/* Convert Step */}
                       <div className="flex items-center gap-3 bg-brand-green/5 px-8 py-4 rounded-full border border-brand-green/20 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 cursor-default">
                           <FlaskConical size={20} /> <span>Convert</span>
                       </div>

                       <div className="hidden md:block w-16 h-px bg-brand-green/30"></div>
                       <div className="md:hidden h-12 w-px bg-brand-green/30"></div>

                       {/* Create Step */}
                       <div className="flex items-center gap-3 bg-brand-green/5 px-8 py-4 rounded-full border border-brand-green/20 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 cursor-default">
                           <Sprout size={20} /> <span>Create</span>
                       </div>
                   </div>
               </motion.div>
           </div>
      </section>
    </div>
  );
}
