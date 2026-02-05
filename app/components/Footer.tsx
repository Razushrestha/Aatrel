import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#051b14] py-16 text-white font-body border-t border-brand-green/10 relative z-50">
      <div className="container mx-auto grid gap-12 px-6 md:grid-cols-4">
        {/* Brand Column */}
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-brand-green flex items-center justify-center font-bold text-white">A</div>
              <h2 className="font-heading text-xl font-bold text-white tracking-wide">AATREL</h2>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
            Building scalable climate solutions through advanced carbon technologies. Engineering a sustainable future.
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
          <h3 className="mb-4 font-semibold font-heading text-lg">Legal Identity</h3>
          <ul className="space-y-2 text-xs text-gray-300 font-mono">
            <li><span className="text-gray-500">CIN:</span> U35106TN2023PTC160122</li>
            <li><span className="text-gray-500">GST:</span> 33AAYCA6416F1ZJ</li>
            <li><span className="text-gray-500">PAN:</span> AAYCA6416F</li>
            <li><span className="text-gray-500">DPIIT:</span> DIPP144531</li>
          </ul>
        </div>
        
        {/* Contact Column */}
        <div className="col-span-1 md:col-span-1">
             <h3 className="mb-4 font-semibold font-heading text-lg">Contact</h3>
             <div className="space-y-4 text-sm text-gray-300">
               <div>
                  <p className="font-semibold text-white mb-1">Email</p>
                  <a href="mailto:sreeraam@aatrel.in" className="block hover:text-brand-green">sreeraam@aatrel.in</a>
                  <a href="mailto:admin@aatrel.in" className="block hover:text-brand-green">admin@aatrel.in</a>
               </div>
               
               <div>
                 <p className="font-semibold text-white mb-1">Registered Office</p>
                 <p className="text-xs leading-relaxed opacity-80">
                   Cabin #6, Bio Incubator C5-02, C Block 5th Floor, IITM Research Park, Taramani, Chennai, TN 600113.
                 </p>
               </div>
             </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="container mx-auto mt-12 border-t border-white/10 pt-6 px-6 text-center text-xs text-gray-400">
        &copy; {new Date().getFullYear()} AATREL. All rights reserved.
      </div>
    </footer>
  );
}
