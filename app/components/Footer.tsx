import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-deep py-12 text-white font-body">
      <div className="container mx-auto grid gap-8 px-6 md:grid-cols-4">
        {/* Brand Column */}
        <div className="col-span-1 md:col-span-1">
          <h2 className="font-heading text-2xl font-bold text-white mb-4">AATREL</h2>
          <p className="text-sm text-gray-300 leading-relaxed mb-6">
            Building scalable climate solutions through advanced carbon technologies.
          </p>
        </div>

        {/* Links Column */}
        <div>
          <h3 className="mb-4 font-semibold font-heading text-lg">Company</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/about" className="hover:text-brand-green transition-colors">About Us</Link></li>
            <li><Link href="/services" className="hover:text-brand-green transition-colors">Services</Link></li>
            <li><Link href="/team" className="hover:text-brand-green transition-colors">Team</Link></li>
            <li><Link href="/contact" className="hover:text-brand-green transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Legal Column */}
        <div>
          <h3 className="mb-4 font-semibold font-heading text-lg">Legal</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>CIN: U74999TN2020PTC139999</li>
            <li>GST: 33AACTD9999D1Z9</li>
            <li>DPIIT: DIPP99999</li>
          </ul>
        </div>
        
        {/* Contact Column */}
        <div>
             <h3 className="mb-4 font-semibold font-heading text-lg">Contact</h3>
             <p className="text-sm text-gray-300">info@aatrel.com</p>
             <p className="text-sm text-gray-300 mt-2">IITM Research Park, Chennai, India</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="container mx-auto mt-12 border-t border-white/10 pt-6 px-6 text-center text-xs text-gray-400">
        &copy; {new Date().getFullYear()} AATREL. All rights reserved.
      </div>
    </footer>
  );
}
