"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CloudRain, Repeat, Leaf, Lightbulb } from "lucide-react";
import clsx from "clsx";
import BreathingEarth from "../components/BreathingEarth";

const services = [
  {
    id: "ccs",
    title: "Carbon Capture Systems",
    icon: CloudRain,
    content: "Our bio-inspired Carbon Capture Systems (CCS) are designed to efficiently capture CO2 from industrial flues. Using proprietary solvents and membrane technologies, we ensure high purity capture with low energy penalties.",
    details: ["90%+ Capture Efficiency", "Modular Industrial Retrofits", "Low Energy Consumption"]
  },
  {
    id: "ccu",
    title: "Carbon Utilization",
    icon: Repeat,
    content: "We don't just capture carbon; we use it. Our CCU technologies transform captured CO2 into valuable chemicals, fuels, and building materials, closing the carbon loop.",
    details: ["Mineralization Pathways", "Algal Synthesis", "Industrial Feedstock"]
  },
  {
    id: "b2v",
    title: "Biomass to Value",
    icon: Leaf,
    content: "Our B2V processes convert biological waste and purpose-grown biomass into high-value products such as biochar, activated carbon, and bio-oils.",
    details: ["Biochar Production", "Soil Enhancers", "Activated Carbon"]
  },
  {
    id: "consulting",
    title: "Renewable Energy & Consulting",
    icon: Lightbulb,
    content: "We provide expert consulting for industries looking to transition to net-zero. From energy audits to roadmap implementation, we guide you every step of the way.",
    details: ["Net-Zero Roadmaps", "LCA & Carbon Footprinting", "Policy Advisory"]
  }
];

export default function Services() {
  const [activeTab, setActiveTab] = useState(services[0].id);

  return (
    <div className="bg-brand-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex flex-col pt-32 lg:pt-0 overflow-hidden">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center flex-grow">
          {/* Text */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 lg:py-24"
          >
             <h1 className="font-heading text-5xl md:text-6xl font-bold text-brand-deep mb-6">Our <span className="text-brand-green">Services</span></h1>
             <p className="text-lg md:text-xl text-brand-text/70 max-w-xl leading-relaxed">
               Comprehensive solutions for the carbon economy. From accurate capture to value creation, we handle the entire lifecycle.
             </p>
          </motion.div>

          {/* Earth */}
          <div className="h-[40vh] lg:h-[60vh] w-full flex items-center justify-center relative">
            <div className="absolute inset-0 w-full h-full scale-110">
               <BreathingEarth />
            </div>
          </div>
        </div>
        
        {/* Gradient Fade to Content */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-brand-white to-transparent z-10" />
      </section>

      <div className="container mx-auto px-6 pb-24">

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Tabs Navigation - Desktop */}
          <div className="hidden lg:block space-y-4">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={clsx(
                  "w-full text-left p-6 rounded-lg border transition-all duration-300 flex items-center gap-4 group hover:border-brand-green/50",
                  activeTab === service.id 
                    ? "bg-brand-deep text-white border-brand-deep shadow-lg" 
                    : "bg-white border-brand-grey text-brand-text"
                )}
              >
                <service.icon className={clsx(
                    "h-6 w-6 transition-colors",
                    activeTab === service.id ? "text-brand-green" : "text-brand-deep group-hover:text-brand-green"
                )} />
                <span className="font-heading font-medium text-lg">{service.title}</span>
              </button>
            ))}
          </div>

          {/* Mobile Accordion / Content Area for Desktop */}
          <div className="lg:col-span-2 relative min-h-[400px]">
            {/* Desktop View */}
            <div className="hidden lg:block h-full">
                <AnimatePresence mode="wait">
                {services.map((service) => (
                    service.id === activeTab && (
                    <motion.div
                        key={service.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.4 }}
                        className="bg-brand-grey p-8 lg:p-8 xl:p-12 rounded-2xl h-full border border-white"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-white rounded-full shadow-sm">
                                <service.icon className="h-8 w-8 text-brand-green" />
                            </div>
                            <h2 className="font-heading text-2xl font-bold text-brand-deep">{service.title}</h2>
                        </div>
                        
                        <p className="text-lg text-brand-text/80 leading-relaxed mb-8">
                        {service.content}
                        </p>

                        <div className="bg-white rounded-xl p-6 shadow-sm">
                            <h3 className="font-semibold text-brand-deep mb-4 border-b border-brand-grey pb-2">Key Features</h3>
                            <ul className="space-y-3">
                                {service.details.map((detail, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-brand-text/70">
                                        <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />
                                        {detail}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                    )
                ))}
                </AnimatePresence>
            </div>

            {/* Mobile View - Stacked Accordion */}
            <div className="lg:hidden space-y-4">
                {services.map((service) => (
                    <div key={service.id} className="rounded-xl border border-brand-grey bg-brand-white overflow-hidden">
                         <button
                            onClick={() => setActiveTab(activeTab === service.id ? "" : service.id)}
                            className={clsx(
                                "w-full text-left p-5 flex items-center justify-between transition-colors",
                                activeTab === service.id ? "bg-brand-deep text-white" : "bg-white text-brand-deep"
                            )}
                         >
                             <div className="flex items-center gap-3">
                                 <service.icon className={clsx("h-5 w-5", activeTab === service.id ? "text-brand-green" : "text-brand-deep")} />
                                 <span className="font-heading font-medium text-lg">{service.title}</span>
                             </div>
                         </button>

                         <AnimatePresence>
                             {activeTab === service.id && (
                                 <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                 >
                                     <div className="p-6 bg-brand-grey border-t border-brand-grey/10">
                                        <p className="text-base text-brand-text/80 leading-relaxed mb-6">
                                            {service.content}
                                        </p>
                                        <div className="bg-white rounded-lg p-5 shadow-sm">
                                            <h4 className="font-semibold text-sm text-brand-deep mb-3 uppercase tracking-wide">Key Features</h4>
                                            <ul className="space-y-2">
                                                {service.details.map((detail, idx) => (
                                                    <li key={idx} className="flex items-start gap-3 text-sm text-brand-text/70">
                                                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green" />
                                                        {detail}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                     </div>
                                 </motion.div>
                             )}
                         </AnimatePresence>
                    </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
