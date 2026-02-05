"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import clsx from "clsx";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Team", href: "/team" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [hoveredPath, setHoveredPath] = useState(pathname);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-brand-grey bg-brand-white/95 backdrop-blur-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="flex flex-col">
            <h1 className="font-heading text-2xl font-bold tracking-tight text-brand-green">
              AATREL
            </h1>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "relative py-1 text-sm font-medium transition-colors hover:text-brand-green",
                  isActive ? "text-brand-green" : "text-brand-text"
                )}
                onMouseEnter={() => setHoveredPath(link.href)}
                onMouseLeave={() => setHoveredPath(pathname)}
              >
                {link.name}
                {link.href === hoveredPath && (
                  <motion.div
                    layoutId="navbar-underline"
                    className="absolute bottom-0 left-0 h-[2px] w-full bg-brand-green"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-brand-deep hover:text-brand-green transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden border-b border-brand-grey bg-brand-white"
          >
            <nav className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => {
                 const isActive = pathname === link.href;
                 return (
                   <Link
                     key={link.href}
                     href={link.href}
                     onClick={() => setIsMobileMenuOpen(false)}
                     className={clsx(
                       "text-lg font-medium transition-colors py-2 border-b border-brand-grey/50 last:border-0",
                       isActive ? "text-brand-green" : "text-brand-text hover:text-brand-green"
                     )}
                   >
                     {link.name}
                   </Link>
                 )
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
