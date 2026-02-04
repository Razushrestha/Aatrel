"use client";

import { motion } from "framer-motion";
import { FlaskConical, Recycle, Factory, Building2 } from "lucide-react";

const reasons = [
  {
    icon: FlaskConical,
    title: "Research-Backed",
    description: "Developed in collaboration with premier institutions like IITM Research Park.",
  },
  {
    icon: Recycle,
    title: "Circular Economy",
    description: "Transforming waste emissions into valuable industrial resources.",
  },
  {
    icon: Factory,
    title: "Scalable Infrastructure",
    description: "Modular designs built for rapid industrial deployment and expansion.",
  },
  {
    icon: Building2,
    title: "Industry Aligned",
    description: "Solutions tailored to meet global climate policy and corporate goals.",
  },
];

export default function WhyAatrel() {
  return (
    <section className="bg-brand-white py-24">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
            <h2 className="font-heading text-3xl font-semibold text-brand-deep">Why AATREL</h2>
            <div className="mx-auto mt-4 h-1 w-20 bg-brand-green/20" />
        </div>

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group flex flex-col items-center text-center"
            >
              <div className="mb-6 rounded-2xl bg-brand-grey p-5 transition-transform duration-500 group-hover:scale-110">
                <item.icon className="h-8 w-8 text-brand-deep transition-colors group-hover:text-brand-green" />
              </div>
              <h3 className="mb-3 font-heading text-lg font-semibold text-brand-deep">{item.title}</h3>
              <p className="text-sm leading-relaxed text-brand-text/70">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
