"use client";

import { motion, useSpring, useTransform, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const metrics = [
  { label: "CO₂ Captured", value: 5000, suffix: "T+", description: "Annually" },
  { label: "Biomass Generated", value: 1200, suffix: "T", description: "High-quality output" },
  { label: "Oxygen Released", value: 3500, suffix: "T", description: "Clean air contribution" },
  { label: "Energy Produced", value: 850, suffix: "MWh", description: "Renewable power" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  
  const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 });
  const display = useTransform(spring, (current) => Math.round(current).toLocaleString());

  useEffect(() => {
    if (inView) {
      spring.set(value);
    }
  }, [inView, value, spring]);

  return <span className="font-mono text-3xl sm:text-4xl md:text-5xl font-bold text-brand-green tracking-tighter">
    <motion.span ref={ref}>{display}</motion.span>{suffix}
  </span>;
}

export default function ImpactNumbers() {
  return (
    <section className="bg-brand-grey py-16 md:py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="mb-2">
                 <Counter value={metric.value} suffix={metric.suffix} />
              </div>
              <h3 className="mb-1 font-heading text-lg font-semibold text-brand-deep">{metric.label}</h3>
              <p className="text-xs uppercase tracking-wide text-brand-text/60">{metric.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
