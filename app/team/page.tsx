"use client";

import { motion } from "framer-motion";
import { User } from "lucide-react";

// Placeholder data
const teamMembers = [
  { name: "Dr. A. Scientist", role: "Chief Scientific Officer" },
  { name: "S. Engineer", role: "Lead Engineer" },
  { name: "M. strategist", role: "Operations Director" },
  { name: "J. Doe", role: "Research Head" },
];

export default function Team() {
  return (
    <div className="min-h-screen pt-24 pb-24 bg-brand-white">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
           <h1 className="font-heading text-4xl font-bold text-brand-deep mb-4">Leadership Team</h1>
           <p className="text-brand-text/70 max-w-2xl mx-auto">
             Led by experts in biotechnology, chemical engineering, and sustainable infrastructure.
           </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl bg-brand-grey aspect-[3/4]"
            >
              {/* Image Placeholder - Grayscale by default */}
              <div className="absolute inset-0 bg-neutral-400 grayscale transition-all duration-500 group-hover:grayscale-0 flex items-center justify-center">
                  <User className="h-24 w-24 text-white/50" />
              </div>
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/90 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />

              {/* Text Content - Slides up */}
              <div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                <h3 className="font-heading text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-brand-green font-medium text-sm opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
