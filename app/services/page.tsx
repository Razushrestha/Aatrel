"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CloudRain, Repeat, Leaf, Lightbulb } from "lucide-react";
import clsx from "clsx";

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
    <div className="min-h-screen pt-24 pb-24 bg-brand-white">
      <div className="container mx-auto px-6">
        <div className="mb-16">
           <h1 className="font-heading text-4xl font-bold text-brand-deep mb-4">Our Services</h1>
           <p className="text-brand-text/70 max-w-2xl">
             Comprehensive solutions for the carbon economy. From capture to valuation, we handle the entire lifecycle.
           </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Tabs Navigation */}
          <div className="space-y-4">
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

          {/* Content Area */}
          <div className="lg:col-span-2 relative min-h-[400px]">
            <AnimatePresence mode="wait">
              {services.map((service) => (
                service.id === activeTab && (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                    className="bg-brand-grey p-8 md:p-12 rounded-2xl h-full border border-white"
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
        </div>
      </div>
    </div>
  );
}
