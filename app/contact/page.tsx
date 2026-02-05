"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import clsx from "clsx";
import BreathingEarth from "../components/BreathingEarth";

export default function Contact() {
  const [focusedField, setFocusedField] = useState<string | null>(null);
  
  // State for map selection
  const [activeLocation, setActiveLocation] = useState(0);

  const inputClasses = (name: string) => clsx(
    "w-full bg-transparent border-b-2 py-3 px-1 text-brand-deep outline-none transition-colors duration-300",
    focusedField === name ? "border-brand-green" : "border-brand-grey focus:border-brand-green"
  );

  const labelClasses = (name: string, value: string) => clsx(
    "absolute left-0 cursor-text transition-all duration-300",
    focusedField === name || value ? "-top-5 text-xs text-brand-green" : "top-3 text-brand-text/50"
  );
  
  // Simple form state for handling label float
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  
  const handleFocus = (name: string) => setFocusedField(name);
  const handleBlur = () => setFocusedField(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-brand-white">
        
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex flex-col pt-32 lg:pt-0 overflow-hidden mb-12">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center flex-grow">
          {/* Text */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 lg:py-24"
          >
             <h1 className="font-heading text-5xl md:text-6xl font-bold text-brand-deep mb-6">Contact <span className="text-brand-green">Us</span></h1>
             <p className="text-lg md:text-xl text-brand-text/70 max-w-xl leading-relaxed">
               Interested in our technologies or collaboration opportunities? Reach out to our team.
             </p>
          </motion.div>

          {/* Earth */}
          <div className="h-[40vh] lg:h-[60vh] w-full flex items-center justify-center relative">
             <div className="absolute inset-0 w-full h-full scale-110">
                 <BreathingEarth />
             </div>
          </div>
        </div>
        {/* Gradient Fade */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-brand-white via-brand-white/80 to-transparent z-10" />
      </section>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 pb-24">
        
        {/* Contact Info */}
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           whileInView={{ opacity: 1, x: 0 }} // Changed to scroll trigger since it's lower down now
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
          <div className="mb-12">
             {/* Duplicate Title Removed */}
          </div>

          <div className="space-y-8">
            
            {/* Dynamic Address Cards */}
            <div className="space-y-6">
                {[
                    { 
                        title: "Registered Office (R&D)",
                        content: "Cabin #6, Bio Incubator C5-02, C Block 5th Floor, IITM Research Park, Taramani, Chennai, Tamilnadu, 600113.",
                        query: "IITM Research Park, Chennai",
                        icon: MapPin 
                    },
                    { 
                        title: "Corporate Office",
                        content: "The Executive Zone, Sakthi Tower 1, 766, Anna Salai, Thousand Lights, Chennai, Tamil Nadu 600002.",
                        query: "The Executive Zone, Sakthi Tower 1, Chennai",
                        icon: MapPin 
                    }
                ].map((item, idx) => (
                    <motion.div 
                        key={idx}
                        onClick={() => setActiveLocation(idx)}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + (idx * 0.1) }}
                        className={clsx(
                            "flex items-start gap-4 p-4 rounded-xl border bg-white/50 backdrop-blur-sm cursor-pointer transition-all duration-300",
                            activeLocation === idx 
                                ? "border-brand-green shadow-md scale-[1.02]" 
                                : "border-brand-grey hover:border-brand-green/30"
                        )}
                    >
                        <div className={clsx(
                            "p-3 rounded-full shrink-0 transition-colors",
                            activeLocation === idx ? "bg-brand-green text-white" : "bg-brand-green/10 text-brand-green"
                        )}>
                            <item.icon className="h-5 w-5" />
                        </div>
                        <div>
                            <div className="flex items-center gap-2 mb-1">
                                <h3 className="font-semibold text-brand-deep">{item.title}</h3>
                                {activeLocation === idx && (
                                    <span className="text-[10px] bg-brand-green text-white px-2 py-0.5 rounded-full">Viewing on Map</span>
                                )}
                            </div>
                            <p className="text-sm text-brand-text/70 leading-relaxed uppercase">{item.content}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Email Section */}
            <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-start gap-4 p-4 rounded-xl border border-brand-grey bg-white/50"
            >
               <div className="p-3 bg-brand-green/10 rounded-full shrink-0">
                  <Mail className="h-5 w-5 text-brand-green" />
               </div>
               <div>
                  <h3 className="font-semibold text-brand-deep mb-2">Email Us</h3>
                  <div className="space-y-1">
                      <a href="mailto:sreeraam@aatrel.in" className="block text-brand-text/80 hover:text-brand-green transition-colors">sreeraam@aatrel.in</a>
                      <a href="mailto:admin@aatrel.in" className="block text-brand-text/80 hover:text-brand-green transition-colors">admin@aatrel.in</a>
                  </div>
               </div>
            </motion.div>

            {/* Legal Details Grid */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className="grid grid-cols-2 gap-4 mt-8"
            >
                {[
                    { label: "CIN", val: "U35106TN2023PTC160122" },
                    { label: "PAN", val: "AAYCA6416F" },
                    { label: "GST", val: "33AAYCA6416F1ZJ" },
                    { label: "DPIT", val: "DIPP144531" },
                ].map((item, i) => (
                    <div key={i} className="p-3 bg-brand-grey/30 rounded-lg">
                        <span className="block text-xs font-bold text-brand-text/40">{item.label}</span>
                        <span className="block text-xs sm:text-sm font-mono text-brand-deep break-all">{item.val}</span>
                    </div>
                ))}
            </motion.div>

          </div>
        </motion.div>

        {/* Form */}
        <motion.div
           initial={{ opacity: 0, x: 20 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.6, delay: 0.2 }}
           className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-brand-grey"
        >
            <form className="space-y-8">
                <div className="relative pt-4">
                    <label htmlFor="name" className={labelClasses("name", formState.name)}>Name</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        className={inputClasses("name")} 
                        onFocus={() => handleFocus("name")}
                        onBlur={handleBlur}
                        onChange={handleChange}
                    />
                </div>
                
                <div className="relative pt-4">
                    <label htmlFor="email" className={labelClasses("email", formState.email)}>Email Address</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        className={inputClasses("email")} 
                        onFocus={() => handleFocus("email")}
                        onBlur={handleBlur}
                        onChange={handleChange}
                    />
                </div>

                <div className="relative pt-4">
                    <label htmlFor="message" className={labelClasses("message", formState.message)}>Message</label>
                    <textarea 
                        id="message" 
                        name="message" 
                        rows={4}
                        className={clsx(inputClasses("message"), "resize-none")} 
                        onFocus={() => handleFocus("message")}
                        onBlur={handleBlur}
                        onChange={handleChange}
                    />
                </div>

                <button 
                    type="submit" 
                    className="w-full bg-brand-deep text-white font-medium py-4 rounded-lg transition-all hover:bg-brand-green hover:shadow-lg mt-4"
                >
                    Send Message
                </button>
            </form>
        </motion.div>
      </div>

       {/* Map Section */}
       <div className="container mx-auto px-6 mt-16 md:mt-24">
          <motion.div
             key={activeLocation}
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5 }}
             className="w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-xl border border-brand-grey relative"
          >
             {/* Loading Skeleton underneath */}
             <div className="absolute inset-0 bg-brand-grey animate-pulse flex items-center justify-center">
                 <span className="text-brand-text/30 font-medium">Loading Map...</span>
             </div>
             
             <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                marginHeight={0}
                marginWidth={0}
                src={`https://maps.google.com/maps?q=${encodeURIComponent(
                    activeLocation === 0 
                    ? "IITM Research Park, Chennai" 
                    : "The Executive Zone, Sakthi Tower 1, Anna Salai, Chennai"
                )}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                className="relative z-10 w-full h-full grayscale-[50%] hover:grayscale-0 transition-all duration-700"
                title="Office Location Map"
             />
          </motion.div>
       </div>
    </div>
  );
}
