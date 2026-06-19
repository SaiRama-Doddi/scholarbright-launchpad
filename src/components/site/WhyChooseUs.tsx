import { motion } from "motion/react";
import teddyBearToys from "@/assets/teddy-bear-toys.png";
import schoolBackpackGlobe from "@/assets/school-backpack-globe.png";
import mockupSun from "@/assets/mockup-sun.png";
import mockupAirplane from "@/assets/mockup-airplane.png";
import mockupTrain from "@/assets/mockup-train.png";
import mockupBlocks from "@/assets/mockup-blocks.png";

import mockupIcon1 from "@/assets/mockup-icon-1.png";
import mockupIcon2 from "@/assets/mockup-icon-2.png";
import mockupIcon3 from "@/assets/mockup-icon-3.png";
import mockupIcon4 from "@/assets/mockup-icon-4.png";
import mockupIcon5 from "@/assets/mockup-icon-5.png";
import mockupIcon6 from "@/assets/mockup-icon-6.png";
import mockupIcon7 from "@/assets/mockup-icon-7.png";
import mockupIcon8 from "@/assets/mockup-icon-8.png";

// --- Background Decorative Components ---

function SunDecor() {
  return (
    <img 
      src={mockupSun} 
      alt="Sun Decoration" 
      className="w-16 h-16 animate-float object-contain"
      style={{ animationDuration: "8s" }}
    />
  );
}

function TrainDecor() {
  return (
    <img 
      src={mockupTrain} 
      alt="Train Decoration" 
      className="w-24 h-auto opacity-95 animate-float object-contain"
      style={{ animationDuration: "12s" }}
    />
  );
}

function AirplaneDecor() {
  return (
    <div className="relative w-36 h-24">
      {/* Dotted path SVG remains as a background line */}
      <svg viewBox="0 0 200 120" className="absolute inset-0 w-full h-full text-cyan-400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 100 C 60 120, 100 60, 120 40 C 140 20, 170 30, 160 50 C 150 70, 120 90, 140 100 C 155 107, 170 80, 180 65" 
          stroke="#93C5FD" strokeWidth="2" strokeLinecap="round" strokeDasharray="6,6" />
      </svg>
      {/* 3D paper airplane image placed at the end of path */}
      <div className="absolute top-[36px] left-[134px] w-10 h-10 rotate-[-15deg]">
        <img src={mockupAirplane} alt="Paper Airplane" className="w-full h-full object-contain" />
      </div>
    </div>
  );
}

function BlocksDecor() {
  return (
    <img 
      src={mockupBlocks} 
      alt="Blocks Decoration" 
      className="w-24 h-auto animate-float-rev object-contain"
    />
  );
}

function RainbowDecor() {
  return (
    <svg viewBox="0 0 120 70" className="w-24 h-14 opacity-75 animate-float" style={{ animationDuration: "14s" }} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 60 A 50 50 0 0 1 110 60" stroke="#FF8DA1" strokeWidth="5" strokeLinecap="round" />
      <path d="M22 60 A 38 38 0 0 1 98 60" stroke="#FFD269" strokeWidth="5" strokeLinecap="round" />
      <path d="M34 60 A 26 26 0 0 1 86 60" stroke="#7FE492" strokeWidth="5" strokeLinecap="round" />
      <path d="M46 60 A 14 14 0 0 1 74 60" stroke="#87C4FF" strokeWidth="5" strokeLinecap="round" />
      <circle cx="10" cy="60" r="6" fill="#FFFFFF" />
      <circle cx="110" cy="60" r="6" fill="#FFFFFF" />
    </svg>
  );
}

// --- Card Icon Components (Unused but kept to preserve types/structure if needed) ---

function IconClassrooms() {
  return (
    <svg viewBox="0 0 64 64" className="w-[50px] h-[50px]" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Screen background shadow */}
      <rect x="8" y="10" width="48" height="34" rx="4" fill="#8B5CF6" />
      {/* Screen display */}
      <rect x="11" y="13" width="42" height="28" rx="2" fill="#FFE699" />
      {/* Screen content - laptop display */}
      <rect x="15" y="16" width="10" height="10" rx="1.5" fill="#EC4899" />
      <text x="20" y="24" fontFamily="'Outfit', sans-serif" fontWeight="bold" fontSize="8" fill="#FFFFFF" textAnchor="middle">A</text>
      
      <rect x="27" y="16" width="10" height="10" rx="1.5" fill="#3B82F6" />
      <text x="32" y="24" fontFamily="'Outfit', sans-serif" fontWeight="bold" fontSize="8" fill="#FFFFFF" textAnchor="middle">B</text>
      
      <rect x="39" y="16" width="10" height="10" rx="1.5" fill="#10B981" />
      <text x="44" y="24" fontFamily="'Outfit', sans-serif" fontWeight="bold" fontSize="8" fill="#FFFFFF" textAnchor="middle">C</text>
      
      {/* Stylized keyboard base */}
      <path d="M4 44 H60 L56 50 H8 Z" fill="#F43F5E" />
      <rect x="8" y="47" width="48" height="3" rx="1.5" fill="#FB7185" />
      <rect x="24" y="45" width="16" height="1.5" rx="0.75" fill="#FFFFFF" opacity="0.8" />
    </svg>
  );
}

function IconCctv() {
  return (
    <svg viewBox="0 0 64 64" className="w-[50px] h-[50px]" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Bracket / Wall mount */}
      <path d="M12 44 L24 44 L24 34" stroke="#93C5FD" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 48 L16 38" stroke="#3B82F6" strokeWidth="4" strokeLinecap="round" />
      {/* Camera Body */}
      <rect x="20" y="16" width="30" height="18" rx="6" fill="#3B82F6" transform="rotate(-15 35 25)" />
      {/* Lens */}
      <ellipse cx="44" cy="20" rx="5" ry="8" fill="#1D4ED8" transform="rotate(-15 44 20)" />
      <circle cx="44" cy="20" r="3" fill="#000000" />
      <circle cx="45" cy="19" r="1" fill="#FFFFFF" />
      {/* Sunshield/Visor */}
      <path d="M16 16 L42 10" stroke="#60A5FA" strokeWidth="4" strokeLinecap="round" />
      {/* Antenna */}
      <line x1="22" y1="18" x2="16" y2="10" stroke="#93C5FD" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="16" cy="10" r="2" fill="#3B82F6" />
      {/* Red recording dot */}
      <circle cx="28" cy="28" r="2" fill="#EF4444" className="animate-pulse" />
    </svg>
  );
}

function IconSafeHygienic() {
  return (
    <svg viewBox="0 0 64 64" className="w-[50px] h-[50px]" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Green Shield */}
      <path d="M10 14 C22 10, 30 6, 30 6 C30 6, 38 10, 50 14 C50 28, 42 44, 30 50 C18 44, 10 28, 10 14 Z" fill="#10B981" />
      <path d="M18 25 L26 33 L42 17" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Sanitizer Bottle overlaying the bottom right of the shield */}
      <g transform="translate(32, 26)">
        {/* Bottle Body */}
        <rect x="4" y="8" width="16" height="20" rx="4" fill="#F0FDF4" stroke="#047857" strokeWidth="2" />
        {/* Fill level inside bottle */}
        <rect x="6" y="14" width="12" height="12" rx="1" fill="#A7F3D0" />
        {/* Pump cap & dispenser neck */}
        <rect x="9" y="4" width="6" height="4" fill="#E5E7EB" stroke="#047857" strokeWidth="2" />
        {/* Dispenser nozzle spout */}
        <path d="M12 4 L12 1 L6 1" stroke="#047857" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        {/* Small label on bottle */}
        <circle cx="12" cy="20" r="3" fill="#3B82F6" />
        <path d="M12 18.5 V21.5 M10.5 20 H13.5" stroke="#FFFFFF" strokeWidth="1" />
      </g>
    </svg>
  );
}

function IconTeachers() {
  return (
    <svg viewBox="0 0 64 64" className="w-[50px] h-[50px]" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Books Stack */}
      {/* Blue Book */}
      <rect x="10" y="38" width="38" height="10" rx="2" fill="#3B82F6" />
      <rect x="8" y="41" width="38" height="4" fill="#1D4ED8" />
      {/* Yellow Book */}
      <rect x="14" y="30" width="34" height="9" rx="2" fill="#FBBF24" />
      <rect x="12" y="33" width="34" height="3" fill="#D97706" />
      
      {/* Red Apple */}
      <circle cx="48" cy="40" r="6" fill="#EF4444" />
      <path d="M48 34 C47 31, 50 31, 50 31" stroke="#047857" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <circle cx="49" cy="40" r="5" fill="#EF4444" />
      
      {/* Graduation Cap */}
      <g transform="translate(6, 2)">
        {/* Cap base */}
        <path d="M16 22 V27 C16 30, 32 30, 32 27 V22" fill="#374151" stroke="#1F2937" strokeWidth="1.5" />
        {/* Cap Diamond */}
        <path d="M32 10 L54 17 L32 24 L10 17 Z" fill="#1F2937" stroke="#111827" strokeWidth="1.5" />
        {/* Button */}
        <circle cx="32" cy="17" r="1.5" fill="#F59E0B" />
        {/* Tassel */}
        <path d="M33.5 17 L44 23 L44 28" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <circle cx="44" cy="29" r="1" fill="#B91C1C" />
      </g>
    </svg>
  );
}

function IconVentilated() {
  return (
    <svg viewBox="0 0 64 64" className="w-[50px] h-[50px]" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* School/House Body */}
      <rect x="14" y="24" width="36" height="30" rx="4" fill="#FDE047" stroke="#CA8A04" strokeWidth="2" />
      {/* Roof */}
      <path d="M10 26 L32 8 L54 26 Z" fill="#EF4444" stroke="#B91C1C" strokeWidth="2" strokeLinejoin="round" />
      {/* Chimney */}
      <rect x="42" y="12" width="6" height="10" fill="#4B5563" stroke="#1F2937" strokeWidth="1.5" />
      {/* Door */}
      <rect x="28" y="38" width="10" height="16" rx="2" fill="#C2410C" />
      <circle cx="31" cy="46" r="1" fill="#FBBF24" />
      {/* Circular Window */}
      <circle cx="32" cy="20" r="5" fill="#E0F2FE" stroke="#0284C7" strokeWidth="1.5" />
      <line x1="32" y1="15" x2="32" y2="25" stroke="#0284C7" strokeWidth="1" />
      <line x1="27" y1="20" x2="37" y2="20" stroke="#0284C7" strokeWidth="1" />
      {/* Side Windows */}
      <rect x="18" y="32" width="6" height="8" rx="1" fill="#E0F2FE" stroke="#0284C7" strokeWidth="1.5" />
      <rect x="40" y="32" width="6" height="8" rx="1" fill="#E0F2FE" stroke="#0284C7" strokeWidth="1.5" />
    </svg>
  );
}

function IconActivityLearning() {
  return (
    <svg viewBox="0 0 64 64" className="w-[50px] h-[50px]" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Rockers (Curved base) */}
      <path d="M10 46 C20 54, 44 54, 54 46" stroke="#EF4444" strokeWidth="4.5" strokeLinecap="round" fill="none" />
      {/* Rocker legs */}
      <line x1="22" y1="36" x2="16" y2="48" stroke="#B91C1C" strokeWidth="3" strokeLinecap="round" />
      <line x1="42" y1="36" x2="48" y2="48" stroke="#B91C1C" strokeWidth="3" strokeLinecap="round" />
      {/* Horse Body */}
      <rect x="22" y="24" width="20" height="12" rx="4" fill="#F97316" />
      {/* Neck & Head */}
      <path d="M38 24 L46 14 C48 11, 52 14, 50 18 L44 28 Z" fill="#F97316" />
      {/* Saddle */}
      <rect x="26" y="22" width="10" height="6" rx="2.5" fill="#3B82F6" />
      {/* Tail */}
      <path d="M22 26 C16 26, 14 30, 12 28" stroke="#FBBF24" strokeWidth="3.5" strokeLinecap="round" />
      {/* Handlebar */}
      <circle cx="48" cy="13" r="2.5" fill="#FDE047" />
    </svg>
  );
}

function IconHolistic() {
  return (
    <svg viewBox="0 0 64 64" className="w-[50px] h-[50px]" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Glow */}
      <path d="M32 54 C32 54, 8 36, 8 22 C8 12, 18 6, 26 12 C30 15, 32 18, 32 18 C32 18, 34 15, 38 12 C46 6, 56 12, 56 22 C56 36, 32 54, 32 54 Z" fill="#EC4899" />
      {/* Inner Heart body */}
      <path d="M32 51 C32 51, 11 34, 11 22 C11 14, 19 9, 26 14 C29 16, 32 19, 32 19 C32 19, 35 16, 38 14 C45 9, 53 14, 53 22 C53 34, 32 51, 32 51 Z" fill="#F472B6" />
      {/* Eyes */}
      <circle cx="24" cy="22" r="3" fill="#1F2937" />
      <circle cx="40" cy="22" r="3" fill="#1F2937" />
      <circle cx="23" cy="21" r="1" fill="#FFFFFF" />
      <circle cx="39" cy="21" r="1" fill="#FFFFFF" />
      {/* Smile */}
      <path d="M28 27 C30 29.5, 34 29.5, 36 27" stroke="#1F2937" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      {/* Rosy Cheeks */}
      <circle cx="19" cy="25" r="2.5" fill="#F43F5E" opacity="0.6" />
      <circle cx="45" cy="25" r="2.5" fill="#F43F5E" opacity="0.6" />
    </svg>
  );
}

function IconNutritiousMeals() {
  return (
    <svg viewBox="0 0 64 64" className="w-[50px] h-[50px]" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Bento Box Base */}
      <rect x="8" y="14" width="48" height="38" rx="8" fill="#0D9488" stroke="#115E59" strokeWidth="2.5" />
      {/* Bento Box Interior */}
      <rect x="12" y="18" width="40" height="30" rx="4" fill="#F0FDFA" />
      {/* Compartment Dividers */}
      <line x1="30" y1="18" x2="30" y2="48" stroke="#0D9488" strokeWidth="2" />
      <line x1="30" y1="33" x2="52" y2="33" stroke="#0D9488" strokeWidth="2" />
      {/* Left side: Sandwich */}
      <path d="M15 36 L21 22 L27 36 Z" fill="#F59E0B" stroke="#D97706" strokeWidth="1.5" />
      <path d="M17 35 L21 24 L25 35 Z" fill="#FFFBEB" />
      {/* Green lettuce leaf peeking out */}
      <path d="M18 28 C16 28, 16 31, 18 31" fill="#10B981" />
      {/* Right top side: Apple/Strawberry */}
      <circle cx="41" cy="26" r="4.5" fill="#EF4444" />
      <path d="M41 21.5 Q42 20, 44 20" stroke="#047857" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      {/* Right bottom side: Broccoli/Orange slice */}
      <circle cx="41" cy="41" r="4" fill="#22C55E" />
      <circle cx="37" cy="41" r="3" fill="#4ADE80" />
      <circle cx="45" cy="41" r="3" fill="#4ADE80" />
    </svg>
  );
}

// --- Cards Configuration ---

const items = [
  {
    t: "Digital Smart Classrooms",
    d: "Interactive boards turn lessons into adventures.",
    img: mockupIcon1,
    numColor: "text-purple-100/70",
    badgeBg: "bg-purple-50",
    badgeBorder: "border-purple-100",
    accentColor: "from-purple-400 to-transparent",
  },
  {
    t: "24/7 CCTV Surveillance",
    d: "Every space monitored for total peace of mind.",
    img: mockupIcon2,
    numColor: "text-blue-100/70",
    badgeBg: "bg-blue-50",
    badgeBorder: "border-blue-100",
    accentColor: "from-blue-400 to-transparent",
  },
  {
    t: "Safe & Hygienic Campus",
    d: "Sanitised daily with soft-edge, child-first design.",
    img: mockupIcon3,
    numColor: "text-emerald-100/70",
    badgeBg: "bg-emerald-50",
    badgeBorder: "border-emerald-100",
    accentColor: "from-emerald-400 to-transparent",
  },
  {
    t: "Experienced Teachers",
    d: "Trained, certified, endlessly patient educators.",
    img: mockupIcon4,
    numColor: "text-amber-100/70",
    badgeBg: "bg-amber-50",
    badgeBorder: "border-amber-100",
    accentColor: "from-amber-400 to-transparent",
  },
  {
    t: "Fully Ventilated Premises",
    d: "Bright, airy classrooms for healthy little lungs.",
    img: mockupIcon5,
    numColor: "text-pink-100/70",
    badgeBg: "bg-pink-50",
    badgeBorder: "border-pink-100",
    accentColor: "from-pink-400 to-transparent",
  },
  {
    t: "Activity-Based Learning",
    d: "Play, explore, create — the way young minds learn best.",
    img: mockupIcon6,
    numColor: "text-orange-100/70",
    badgeBg: "bg-orange-50",
    badgeBorder: "border-orange-100",
    accentColor: "from-orange-400 to-transparent",
  },
  {
    t: "Holistic Development",
    d: "Mind, body and heart nurtured every single day.",
    img: mockupIcon7,
    numColor: "text-rose-100/70",
    badgeBg: "bg-rose-50",
    badgeBorder: "border-rose-100",
    accentColor: "from-rose-400 to-transparent",
  },
  {
    t: "Nutritious Meals",
    d: "Balanced menus crafted with paediatric guidance.",
    img: mockupIcon8,
    numColor: "text-teal-100/70",
    badgeBg: "bg-teal-50",
    badgeBorder: "border-teal-100",
    accentColor: "from-teal-400 to-transparent",
  },
];

export function WhyChooseUs() {
  return (
    <section 
      id="facilities" 
      className="relative overflow-hidden bg-gradient-to-br from-[#F8FAFF] to-[#FFF9F4] min-h-[900px] lg:h-[1020px] py-16 lg:py-24 flex flex-col justify-between"
    >
      {/* Background/Floating Decorations */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden">
        {/* Soft clouds */}
        <div className="absolute top-[8rem] left-[18%] w-32 h-16 bg-white/60 rounded-full blur-[1px] shadow-sm opacity-60" />
        <div className="absolute top-[18rem] right-[25%] w-24 h-12 bg-white/60 rounded-full blur-[1px] shadow-sm opacity-50" />
        
        {/* Confetti / sparkles / circles */}
        <circle cx="10%" cy="30%" r="6" className="absolute w-3 h-3 rounded-full bg-[#FFB800]/30" />
        <circle cx="85%" cy="25%" r="8" className="absolute w-4 h-4 rounded-full bg-[#FF5C8A]/20" />
        <circle cx="75%" cy="85%" r="6" className="absolute w-3 h-3 rounded-full bg-[#53C46B]/25" />
        <circle cx="20%" cy="75%" r="7" className="absolute w-3.5 h-3.5 rounded-full bg-[#8B5CF6]/20" />

        {/* Floating Stars */}
        <span className="absolute top-[12rem] left-[40%] text-yellow-400 text-lg opacity-60 animate-bounce">⭐</span>
        <span className="absolute top-[28rem] left-[20%] text-amber-400 text-base opacity-50">⭐</span>
        <span className="absolute top-[18rem] right-[38%] text-purple-400 text-sm opacity-60">✨</span>
        <span className="absolute top-[32rem] right-[18%] text-yellow-400 text-lg opacity-70">⭐</span>
        <span className="absolute bottom-[16rem] left-[32%] text-pink-400 text-sm opacity-60">✨</span>
        
        {/* Rainbow element */}
        <div className="absolute top-[12rem] left-[26%] hidden xl:block">
          <RainbowDecor />
        </div>

        {/* --- 3D illustrations positioned in four corners (using viewport margins for safety) --- */}

        {/* Top Left: Teddy Bear, ABC blocks, Ring stacking toy */}
        <div 
          className="absolute top-[9rem] left-12 lg:left-16 xl:left-28 2xl:left-40 w-[11rem] xl:w-[13rem] 2xl:w-[14.5rem] hidden xl:block transition-all duration-300 mix-blend-multiply"
          style={{ mixBlendMode: "multiply" }}
        >
          {/* Sun placed right above teddy bear */}
          <div className="absolute top-[-5rem] left-[2.5rem]">
            <SunDecor />
          </div>
          <img 
            src={teddyBearToys} 
            alt="Teddy Bear, Blocks & Rings" 
            className="w-full h-auto object-contain mix-blend-multiply"
            style={{ mixBlendMode: "multiply" }}
          />
        </div>

        {/* Top Right: Blue school bag, Pencil holder, Globe */}
        <div 
          className="absolute top-[9rem] right-12 lg:right-16 xl:right-28 2xl:right-40 w-[12rem] xl:w-[14rem] 2xl:w-[15.5rem] hidden xl:block transition-all duration-300 mix-blend-multiply"
          style={{ mixBlendMode: "multiply" }}
        >
          {/* Paper Airplane placed right above backpack */}
          <div className="absolute top-[-5rem] right-[2.5rem]">
            <AirplaneDecor />
          </div>
          <img 
            src={schoolBackpackGlobe} 
            alt="School Backpack & Globe" 
            className="w-full h-auto object-contain mix-blend-multiply"
            style={{ mixBlendMode: "multiply" }}
          />
        </div>

        {/* Bottom Left: Toy train, Books */}
        <div className="absolute bottom-[4.5rem] left-12 lg:left-16 xl:left-28 2xl:left-40 w-[8rem] xl:w-[9.5rem] 2xl:w-[10.5rem] hidden xl:block">
          <TrainDecor />
        </div>

        {/* Bottom Right: ABC cubes */}
        <div className="absolute bottom-[4.5rem] right-12 lg:right-16 xl:right-28 2xl:right-40 w-[7.5rem] xl:w-[9.0rem] 2xl:w-[10rem] hidden xl:block">
          <BlocksDecor />
        </div>
      </div>

      <div className="mx-auto max-w-[1360px] px-6 lg:px-8 relative z-10 w-full flex flex-col justify-between h-full">
        
        {/* Content Wrapper */}
        <div className="relative z-10 w-full flex flex-col justify-between h-full">
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-4xl font-extrabold leading-[1.1] text-[#162A8A] sm:text-5xl lg:text-[64px] text-balance">
              Where Little Minds <br className="hidden sm:inline" />
              <span className="text-[#FF5C8A]">Learn</span>{" "}
              <span className="text-[#FFB800]">&</span>{" "}
              <span className="text-[#53C46B]">Grow</span>
            </h2>
            <p className="mt-5 text-sm sm:text-base text-[#162A8A]/70 max-w-[700px] mx-auto font-medium leading-relaxed">
              The little details that make Little Scholars a place children love and parents trust.
            </p>
          </div>

          {/* 8-Card Facilities Grid */}
          <div className="mt-14 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 max-w-[1360px] mx-auto justify-items-center w-full relative z-10">
            {items.map((it, i) => {
              return (
                <motion.article
                  key={it.t}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.55, delay: (i % 4) * 0.08, ease: [0.2, 0.8, 0.2, 1] }}
                  whileHover={{ y: -10 }}
                  className="group relative w-full max-w-[320px] h-[230px] rounded-[28px] bg-white border border-[#EEF2FF] p-6 shadow-[0_12px_30px_rgba(22,42,138,0.02)] transition-all duration-300 hover:shadow-lg flex flex-col justify-between select-none"
                >
                  {/* Right corner transparent number */}
                  <div className="absolute right-6 top-6 font-display text-5xl font-extrabold text-[#162A8A]/5 select-none transition-colors duration-300">
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  <div className="relative z-10 flex flex-col h-full justify-between">
                    <div>
                      {/* Large circular icon (72px) with transparent image */}
                      <div className={`inline-grid h-[72px] w-[72px] place-items-center rounded-full ${it.badgeBg} border ${it.badgeBorder} transition-transform duration-300 group-hover:scale-105 shadow-sm overflow-hidden`}>
                        <img 
                          src={it.img} 
                          alt={it.t} 
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <h3 className="mt-4 font-display text-lg font-bold text-[#162A8A] leading-snug">
                        {it.t}
                      </h3>
                      <p className="mt-1.5 text-[13px] leading-relaxed text-[#162A8A]/70">
                        {it.d}
                      </p>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>

          {/* Bottom center badge bar */}
          <div className="mt-16 w-full text-center relative z-10">
            <div className="mx-auto bg-[#ECEAFE]/95 border border-[#DCD9FF] rounded-full px-10 py-4 shadow-sm inline-flex flex-wrap items-center justify-center gap-6 lg:gap-10">
              <div className="flex items-center gap-2.5 text-sm font-bold text-[#162A8A]">
                <span className="text-base">🛡️</span>
                <span>Safe Environment</span>
              </div>
              
              <div className="flex items-center gap-2.5 text-sm font-bold text-[#162A8A] sm:border-l sm:border-[#C4BFFF]/80 sm:pl-6 lg:pl-10">
                <span className="text-base">👩‍🏫</span>
                <span>Certified Educators</span>
              </div>

              <div className="flex items-center gap-2.5 text-sm font-bold text-[#162A8A] sm:border-l sm:border-[#C4BFFF]/80 sm:pl-6 lg:pl-10">
                <span className="text-base">⭐</span>
                <span>Happy Learning</span>
              </div>

              <div className="flex items-center gap-2.5 text-sm font-bold text-[#162A8A] sm:border-l sm:border-[#C4BFFF]/80 sm:pl-6 lg:pl-10">
                <span className="text-base">💖</span>
                <span>Parent Partnership</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
