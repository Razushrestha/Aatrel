"use client";

import { motion } from "framer-motion";
import { CloudRain, Repeat, Leaf, ArrowRight } from "lucide-react";

const steps = [
  {
    id: "ccs",
    title: "Carbon Capture",
    subtitle: "(CCS)",
    description: "Bio-inspired capture systems.",
    icon: CloudRain,
  },
  {
    id: "ccu",
    title: "Utilization",
    subtitle: "(CCU)",
    description: "Converting carbon into valuable resources.",
    icon: Repeat,
  },
  {
    id: "b2v",
    title: "Biomass to Value",
    subtitle: "(B2V)",
    description: "Sustainable product generation.",
    icon: Leaf,
  },
];

export default function CoreApproach() {
  return (
    <section className="bg-brand-white py-24">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
            <h2 className="font-heading text-3xl font-semibold text-brand-deep">Core Approach</h2>
            <p className="mt-4 text-brand-text/70">Our integrated technological ecosystem</p>
        </div>

        <div className="relative flex flex-col items-center justify-between gap-12 md:flex-row md:items-start md:gap-0">
          
          {/* Connector Line (Desktop) */}
          <div className="absolute top-12 left-0 hidden h-[2px] w-full bg-brand-grey md:block">
            <motion.div
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-full w-full bg-brand-green/30"
            />
          </div>

          {/* Connector Line (Mobile) */}
          <div className="absolute top-0 bottom-0 left-1/2 hidden w-[2px] -translate-x-1/2 bg-brand-grey max-md:block">
            <motion.div
               initial={{ scaleY: 0, originY: 0 }}
               whileInView={{ scaleY: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 1.5, ease: "easeInOut" }}
               className="h-full w-full bg-brand-green/30"
            />
          </div>

          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.4, duration: 0.6 }}
              className="relative z-10 flex flex-1 flex-col items-center text-center group bg-brand-white py-4 w-full md:w-auto md:bg-transparent"
            >
              <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full border-2 border-brand-grey bg-white transition-colors duration-500 group-hover:border-brand-green shadow-sm">
                <step.icon className="h-10 w-10 text-brand-deep transition-colors duration-500 group-hover:text-brand-green" />
              </div>
              
              <h3 className="font-heading text-xl font-bold text-brand-deep">
                {step.title} <span className="text-brand-green text-sm block md:inline">{step.subtitle}</span>
              </h3>
              <p className="mt-3 max-w-xs text-sm text-brand-text/70">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
