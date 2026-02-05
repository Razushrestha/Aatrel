"use client";

import { motion } from "framer-motion";
import { User } from "lucide-react";
import BreathingEarth from "../components/BreathingEarth";

// Types for our tree structure
type TeamMember = {
  name: string;
  role: string;
  image?: string; // Placeholder prop
  children?: TeamMember[]; // Vertical children (Research associates)
};

// Data mirroring the organizational chart
const founder: TeamMember = {
  name: "Arjun Raam",
  role: "Idea Founder"
};

const directors: TeamMember[] = [
  { name: "Mr. Shivaram", role: "Director" },
  { name: "Mr. Rajesh Kannan S P", role: "Director & CFO" },
  { name: "Mr. Jai Shankar Raghava Chandra", role: "Director & CEO" },
  { name: "Mr. Sree Raam", role: "Founder & CTO" },
];

const mentors: TeamMember[] = [
  { 
    name: "Dr. Guhan Jayaraman", 
    role: "Mentor - Biotech",
    children: [
      { 
        name: "Dr. S. Leelavathy Biotech", 
        role: "Senior Research Associate",
        children: [
          { name: "Naveenkumar K B.Tech Biotech", role: "Junior Scientist" }
        ]
      }
    ]
  },
  { name: "Dr. Charu Deepika", role: "Consultant" },
  { name: "Dr. Guhan Jayaraman", role: "Mentor - Biotech" },
];

// Profile Card Component
const ProfileNode = ({ member, isMainRow = false }: { member: TeamMember; isMainRow?: boolean }) => {
  return (
    <div className="flex flex-col items-center relative z-10 px-2">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center text-center max-w-[180px]"
      >
        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-lg bg-gray-200 mb-3 flex items-center justify-center relative group">
          {/* Placeholder Image Support */}
          <div className="absolute inset-0 bg-neutral-300 flex items-center justify-center">
             <User className="h-12 w-12 text-neutral-500" />
          </div>
          {/* Hover effect for future img */}
          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
        </div>
        
        <h3 className={`font-bold ${isMainRow ? 'text-lg md:text-xl' : 'text-base md:text-lg'} text-brand-deep leading-tight`}>
          {member.name}
        </h3>
        <p className="text-brand-green font-semibold uppercase text-xs md:text-sm mt-1">
          {member.role}
        </p>
      </motion.div>
    </div>
  );
};

// Mobile List Component
const MobileSection = ({ title, members }: { title: string, members: TeamMember[] }) => (
  <div className="w-full mb-8">
    <div className="flex items-center gap-4 mb-6">
        <h2 className="font-heading text-2xl font-bold text-brand-deep border-l-4 border-brand-green pl-3">{title}</h2>
        <div className="h-[1px] flex-grow bg-brand-deep/10" />
    </div>
    <div className="grid grid-cols-1 gap-6">
       {members.map((m, i) => (
          <div key={i} className="bg-white p-5 rounded-xl text-center shadow-sm border border-brand-grey flex flex-col items-center">
             <div className="w-20 h-20 rounded-full bg-neutral-200 mb-3 overflow-hidden flex items-center justify-center relative">
                 <div className="absolute inset-0 bg-neutral-300 flex items-center justify-center">
                    <User className="h-8 w-8 text-neutral-500" />
                 </div>
             </div>
             <h3 className="font-bold text-lg text-brand-deep">{m.name}</h3>
             <p className="text-brand-green text-sm font-medium uppercase mb-2">{m.role}</p>
             
             {/* Recursive Children for Mentors */}
             {m.children && (
               <div className="w-full mt-4 pl-4 border-l-2 border-brand-green/20 space-y-4">
                  {m.children.map((child, ci) => (
                     <div key={ci} className="bg-brand-grey/30 p-3 rounded-lg">
                        <h4 className="font-bold text-sm text-brand-deep">{child.name}</h4>
                        <p className="text-xs text-brand-text/70 uppercase">{child.role}</p>
                        {child.children?.map((gChild, gi) => (
                           <div key={gi} className="mt-2 pt-2 border-t border-brand-deep/5">
                              <h5 className="font-bold text-xs text-brand-deep">{gChild.name}</h5>
                              <p className="text-[10px] text-brand-text/60 uppercase">{gChild.role}</p>
                           </div>
                        ))}
                     </div>
                  ))}
               </div>
             )}
          </div>
       ))}
    </div>
  </div>
);

export default function Team() {
  return (
    <div className="min-h-screen bg-brand-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
       
         {/* Hero Section */}
         <section className="relative min-h-[50vh] flex flex-col pt-32 lg:pt-0 overflow-hidden mb-12">
            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center flex-grow">
              {/* Text */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 lg:py-24 text-center lg:text-left"
              >
                 <h1 className="font-heading text-5xl md:text-6xl font-bold text-brand-deep mb-6">Our <span className="text-brand-green">Leadership</span></h1>
                 <p className="text-lg md:text-xl text-brand-text/70 max-w-xl leading-relaxed mx-auto lg:mx-0">
                   Led by experts in biotechnology, chemical engineering, and sustainable infrastructure.
                 </p>
              </motion.div>

              {/* Earth */}
              <div className="h-[40vh] lg:h-[60vh] w-full flex items-center justify-center relative">
                 {/* Importing dynamically to avoid SSR issues if necessary, but direct import works in client components */}
                 <div className="absolute inset-0 w-full h-full scale-110">
                     <BreathingEarth />
                 </div>
              </div>
            </div>
            {/* Gradient Fade */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-brand-white via-brand-white/80 to-transparent z-10" />
          </section>

      {/* Desktop Tree View (> 1024px) */}
      <div className="hidden lg:block container mx-auto px-4 overflow-x-auto pb-24">
        <div className="min-w-[1024px] lg:scale-90 xl:scale-100 origin-top flex flex-col items-center transition-transform duration-300">
          
          {/* Level 1: Idea Founder */}
          <div className="mb-12 relative flex flex-col items-center">
            <ProfileNode member={founder} isMainRow />
            {/* Vertical connector line downwards */}
            <div className="h-12 w-0 border-l-2 border-dashed border-brand-deep/30 absolute -bottom-12 left-1/2 -ml-[1px]" />
          </div>

          {/* Level 2: Directors & Mentors Row */}
          <div className="flex items-start justify-center gap-4 relative">
            
            {/* Directors Group */}
            <div className="flex items-start">
              {directors.map((member, idx) => (
                <div key={idx} className="flex items-center">
                   {/* Dotted line before (except first) */}
                   {idx > 0 && <div className="w-8 md:w-16 border-t-2 border-dashed border-brand-deep/30 h-0 mt-[-60px]" />}
                   <ProfileNode member={member} isMainRow />
                </div>
              ))}
            </div>

            {/* Connecting line between Founder/CTO and Mentors */}
            <div className="w-8 md:w-16 border-t-2 border-dashed border-brand-deep/30 h-0 mt-[60px]" />

            {/* Mentors Group */}
            <div className="flex items-start">
              {mentors.map((member, idx) => (
                 <div key={idx} className="flex flex-col items-center relative">
                    <div className="flex items-center">
                      {/* Note: The first mentor connects to the left via the spacer above. Subsequent ones need a spacer here. */}
                      {idx > 0 && <div className="w-8 md:w-16 border-t-2 border-dashed border-brand-deep/30 h-0 mt-[-60px]" />}
                      
                      <ProfileNode member={member} />
                    </div>

                    {/* Vertical Children (Recursively render 1 level deep for simplicity as per image) */}
                    {member.children && member.children.length > 0 && (
                      <div className="flex flex-col items-center mt-2 w-full">
                         {/* Vertical Line from parent */}
                         <div className="h-8 w-0 border-l-2 border-dashed border-brand-deep/30" />
                         
                         {member.children.map((child, cIdx) => (
                            <div key={cIdx} className="flex flex-col items-center">
                               <ProfileNode member={child} />
                               
                               {/* Render Grandchildren (Junior Scientist) */}
                               {child.children?.map((grandChild, gIdx) => (
                                 <div key={gIdx} className="flex flex-col items-center mt-2">
                                    <div className="h-8 w-0 border-l-2 border-dashed border-brand-deep/30" />
                                    <ProfileNode member={grandChild} />
                                 </div>
                               ))}
                            </div>
                         ))}
                      </div>
                    )}
                 </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Mobile/Tablet List View (< 1024px) */}
      <div className="block lg:hidden container mx-auto px-6 pb-24">
          <MobileSection title="Founding Team" members={[founder]} />
          <MobileSection title="Directors" members={directors} />
          <MobileSection title="Mentors & Advisors" members={mentors} />
      </div>
    </div>
  );
}
