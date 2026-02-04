"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import clsx from "clsx";

export default function Contact() {
  const [focusedField, setFocusedField] = useState<string | null>(null);

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
    <div className="min-h-screen pt-24 pb-24 bg-brand-white">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16">
        
        {/* Contact Info */}
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.6 }}
        >
          <div className="mb-12">
            <h1 className="font-heading text-4xl font-bold text-brand-deep mb-6">Contact Us</h1>
            <p className="text-brand-text/70 text-lg leading-relaxed max-w-md">
              Interested in our technologies or collaboration opportunities? Reach out to our team.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
               <div className="p-3 bg-brand-grey rounded-full">
                  <MapPin className="h-6 w-6 text-brand-deep" />
               </div>
               <div>
                  <h3 className="font-semibold text-brand-deep mb-1">Headquarters</h3>
                  <p className="text-brand-text/70">IITM Research Park<br />Chennai, India</p>
               </div>
            </div>

            <div className="flex items-start gap-4">
               <div className="p-3 bg-brand-grey rounded-full">
                  <Mail className="h-6 w-6 text-brand-deep" />
               </div>
               <div>
                  <h3 className="font-semibold text-brand-deep mb-1">Email</h3>
                  <p className="text-brand-text/70">info@aatrel.com</p>
               </div>
            </div>

             <div className="flex items-start gap-4">
               <div className="p-3 bg-brand-grey rounded-full">
                  <Phone className="h-6 w-6 text-brand-deep" />
               </div>
               <div>
                  <h3 className="font-semibold text-brand-deep mb-1">Phone</h3>
                  <p className="text-brand-text/70">+91 44 1234 5678</p>
               </div>
            </div>
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
    </div>
  );
}
