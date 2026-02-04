"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";
import clsx from "clsx";

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

  return (
    <header className="sticky top-0 z-50 w-full border-b border-brand-grey bg-brand-white/95 backdrop-blur-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
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

        {/* Mobile Menu Button (Placeholder) */}
        <div className="md:hidden">
            {/* Simple hamburger can be added here if needed */}
        </div>
      </div>
    </header>
  );
}
