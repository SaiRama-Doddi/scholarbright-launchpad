import { motion } from "motion/react";

// Custom premium vector illustrations for school and cartoon items

function ScholarCapIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 15L90 35L50 55L10 35L50 15Z" fill="#373A98" stroke="#F4B223" strokeWidth="3.5" strokeLinejoin="round" />
      <path d="M25 42.5V65C25 75 36.2 80 50 80C63.8 80 75 75 75 65V42.5" fill="#373A98" stroke="#F4B223" strokeWidth="3.5" strokeLinejoin="round" />
      <path d="M90 35V65M90 65L85 55M90 65L95 55" stroke="#F4B223" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PencilIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 75L35 90L85 40L70 25L20 75Z" fill="#F4B223" stroke="#373A98" strokeWidth="3.5" strokeLinejoin="round" />
      <path d="M20 75L10 85L35 90L20 75Z" fill="#FFE5A3" stroke="#373A98" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M10 85L14 81L19 86L10 85Z" fill="#373A98" />
      <path d="M70 25L75 20C78 17 83 17 86 20C89 23 89 28 86 31L85 30L70 25Z" fill="#FF8DA1" stroke="#373A98" strokeWidth="3.5" strokeLinejoin="round" />
      <path d="M68 27L73 32L76 29L71 24L68 27Z" fill="#D1D5DB" stroke="#373A98" strokeWidth="1.5" />
    </svg>
  );
}

function EraserIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 50L45 20L75 50L45 80L15 50Z" fill="#FF8DA1" stroke="#373A98" strokeWidth="3.5" strokeLinejoin="round" />
      <path d="M45 80L75 50L85 60L55 90L45 80Z" fill="#60A5FA" stroke="#373A98" strokeWidth="3.5" strokeLinejoin="round" />
      <path d="M35 50L55 30L65 40L45 60L35 50Z" fill="#FFFFFF" stroke="#373A98" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M42 43L50 35" stroke="#373A98" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function BookIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 75C30 75 45 80 50 82C55 80 70 75 85 75V25C70 25 55 30 50 32C45 30 30 25 15 25V75Z" fill="#FFFFFF" stroke="#373A98" strokeWidth="3.5" strokeLinejoin="round" />
      <path d="M15 75C30 75 45 80 50 82" stroke="#F4B223" strokeWidth="5" strokeLinecap="round" />
      <path d="M85 75C70 75 55 80 50 82" stroke="#F4B223" strokeWidth="5" strokeLinecap="round" />
      <path d="M50 32V82" stroke="#373A98" strokeWidth="3" />
      <path d="M22 37H38M22 47H38M22 57H38M62 37H78M62 47H78M62 57H78" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function CartoonStarIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 10L62 38L92 41L68 60L76 90L50 73L24 90L32 60L8 41L38 38L50 10Z" fill="#F4B223" stroke="#373A98" strokeWidth="3.5" strokeLinejoin="round" />
      <circle cx="42" cy="48" r="4.5" fill="#373A98" />
      <circle cx="58" cy="48" r="4.5" fill="#373A98" />
      <path d="M46 58C48 60 52 60 54 58" stroke="#373A98" strokeWidth="3.5" strokeLinecap="round" fill="none" />
      <circle cx="35" cy="52" r="3.5" fill="#FF8DA1" />
      <circle cx="65" cy="52" r="3.5" fill="#FF8DA1" />
    </svg>
  );
}

function CartoonTeddyIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="30" cy="30" r="13" fill="#BB8A52" stroke="#373A98" strokeWidth="3.5" />
      <circle cx="30" cy="30" r="7.5" fill="#FCA5A5" />
      <circle cx="70" cy="30" r="13" fill="#BB8A52" stroke="#373A98" strokeWidth="3.5" />
      <circle cx="70" cy="30" r="7.5" fill="#FCA5A5" />
      <circle cx="50" cy="55" r="31" fill="#BB8A52" stroke="#373A98" strokeWidth="3.5" />
      <circle cx="50" cy="62" r="11" fill="#FFFBEB" stroke="#373A98" strokeWidth="2.5" />
      <path d="M50 56L50 62" stroke="#373A98" strokeWidth="2.5" />
      <path d="M48 65C49 66 51 66 52 65" stroke="#373A98" strokeWidth="2.5" strokeLinecap="round" />
      <polygon points="45,56 55,56 50,60" fill="#373A98" />
      <circle cx="39" cy="47" r="5" fill="#373A98" />
      <circle cx="61" cy="47" r="5" fill="#373A98" />
      <circle cx="31" cy="56" r="4.5" fill="#FCA5A5" />
      <circle cx="69" cy="56" r="4.5" fill="#FCA5A5" />
    </svg>
  );
}

function CartoonBalloonIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 75C53 80 47 85 50 90" stroke="#373A98" strokeWidth="3" strokeLinecap="round" />
      <path d="M50 15C30 15 25 35 25 50C25 65 35 75 50 75C65 75 75 65 75 50C75 35 70 15 50 15Z" fill="#F43F5E" stroke="#373A98" strokeWidth="3.5" strokeLinejoin="round" />
      <path d="M46 75L54 75L50 80L46 75Z" fill="#F43F5E" stroke="#373A98" strokeWidth="2.5" />
      <path d="M38 30C32 38 32 46 32 46" stroke="#FFFFFF" strokeWidth="4.5" strokeLinecap="round" opacity="0.65" />
    </svg>
  );
}

function CartoonCloudIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30 65C20 65 15 57 15 48C15 38 23 35 30 35C33 25 43 18 53 18C65 18 73 26 75 35C83 35 88 42 88 50C88 58 82 65 72 65H30Z" fill="#E0F2FE" stroke="#373A98" strokeWidth="3.5" strokeLinejoin="round" />
      <circle cx="42" cy="44" r="4" fill="#373A98" />
      <circle cx="58" cy="44" r="4" fill="#373A98" />
      <path d="M47 50C48 52 52 52 53 50" stroke="#373A98" strokeWidth="3" strokeLinecap="round" fill="none" />
      <circle cx="35" cy="48" r="3.5" fill="#FCA5A5" />
      <circle cx="65" cy="48" r="3.5" fill="#FCA5A5" />
    </svg>
  );
}

type ItemType = "cap" | "book" | "star";

interface DecorItem {
  type: ItemType;
  top: string;
  left?: string;
  right?: string;
  size: string;
  opacity: string;
  delay: number;
}

// Configured with extremely small, delicate sizes and high transparency for subtle integration
const config: Record<string, DecorItem[]> = {
  hero: [
    { type: "cap", top: "15%", left: "4%", size: "w-6 h-6 md:w-8 h-8", opacity: "opacity-[0.09] md:opacity-[0.15]", delay: 0 },
    { type: "book", top: "45%", right: "5%", size: "w-6 h-6 md:w-8 h-8", opacity: "opacity-[0.10] md:opacity-[0.16]", delay: 0.5 },
    { type: "star", top: "75%", left: "5%", size: "w-6 h-6 md:w-8 h-8", opacity: "opacity-[0.08] md:opacity-[0.14]", delay: 1.0 },
    { type: "cap", top: "85%", right: "8%", size: "w-6 h-6 md:w-8 h-8", opacity: "opacity-[0.09] md:opacity-[0.15]", delay: 1.5 },
  ],
  about: [
    { type: "book", top: "20%", right: "6%", size: "w-6 h-6 md:w-8 h-8", opacity: "opacity-[0.10] md:opacity-[0.16]", delay: 0.2 },
    { type: "star", top: "55%", left: "5%", size: "w-6 h-6 md:w-8 h-8", opacity: "opacity-[0.09] md:opacity-[0.15]", delay: 0.7 },
    { type: "cap", top: "80%", right: "7%", size: "w-6 h-6 md:w-8 h-8", opacity: "opacity-[0.08] md:opacity-[0.14]", delay: 1.2 },
  ],
  programs: [
    { type: "star", top: "15%", left: "6%", size: "w-6 h-6 md:w-8 h-8", opacity: "opacity-[0.09] md:opacity-[0.15]", delay: 0.4 },
    { type: "cap", top: "50%", right: "6%", size: "w-6 h-6 md:w-8 h-8", opacity: "opacity-[0.10] md:opacity-[0.16]", delay: 0.9 },
    { type: "book", top: "80%", left: "5%", size: "w-6 h-6 md:w-8 h-8", opacity: "opacity-[0.08] md:opacity-[0.14]", delay: 1.4 },
  ],
  why: [
    { type: "cap", top: "20%", right: "7%", size: "w-6 h-6 md:w-8 h-8", opacity: "opacity-[0.09] md:opacity-[0.15]", delay: 0.1 },
    { type: "book", top: "55%", left: "6%", size: "w-6 h-6 md:w-8 h-8", opacity: "opacity-[0.10] md:opacity-[0.16]", delay: 0.6 },
    { type: "star", top: "80%", right: "6%", size: "w-6 h-6 md:w-8 h-8", opacity: "opacity-[0.08] md:opacity-[0.14]", delay: 1.1 },
    { type: "book", top: "90%", left: "4%", size: "w-6 h-6 md:w-8 h-8", opacity: "opacity-[0.09] md:opacity-[0.15]", delay: 1.6 },
  ],
  learning: [
    { type: "book", top: "15%", left: "5%", size: "w-6 h-6 md:w-8 h-8", opacity: "opacity-[0.10] md:opacity-[0.16]", delay: 0.3 },
    { type: "cap", top: "45%", right: "6%", size: "w-6 h-6 md:w-8 h-8", opacity: "opacity-[0.08] md:opacity-[0.14]", delay: 0.8 },
    { type: "star", top: "75%", left: "6%", size: "w-6 h-6 md:w-8 h-8", opacity: "opacity-[0.09] md:opacity-[0.15]", delay: 1.3 },
  ],
  gallery: [
    { type: "cap", top: "20%", left: "5%", size: "w-6 h-6 md:w-8 h-8", opacity: "opacity-[0.09] md:opacity-[0.15]", delay: 0.2 },
    { type: "star", top: "45%", right: "6%", size: "w-6 h-6 md:w-8 h-8", opacity: "opacity-[0.10] md:opacity-[0.16]", delay: 0.5 },
    { type: "book", top: "70%", left: "6%", size: "w-6 h-6 md:w-8 h-8", opacity: "opacity-[0.08] md:opacity-[0.14]", delay: 0.8 },
  ],
  testimonials: [
    { type: "star", top: "25%", right: "7%", size: "w-6 h-6 md:w-8 h-8", opacity: "opacity-[0.08] md:opacity-[0.14]", delay: 0.5 },
    { type: "cap", top: "50%", left: "5%", size: "w-6 h-6 md:w-8 h-8", opacity: "opacity-[0.09] md:opacity-[0.15]", delay: 0.8 },
    { type: "book", top: "75%", right: "5%", size: "w-6 h-6 md:w-8 h-8", opacity: "opacity-[0.10] md:opacity-[0.16]", delay: 1.0 },
  ],
  admissions: [
    { type: "star", top: "25%", left: "7%", size: "w-6 h-6 md:w-8 h-8", opacity: "opacity-[0.08] md:opacity-[0.14]", delay: 0.3 },
    { type: "book", top: "65%", right: "7%", size: "w-6 h-6 md:w-8 h-8", opacity: "opacity-[0.10] md:opacity-[0.16]", delay: 0.9 },
    { type: "cap", top: "85%", left: "5%", size: "w-6 h-6 md:w-8 h-8", opacity: "opacity-[0.09] md:opacity-[0.15]", delay: 1.2 },
  ],
  contact: [
    { type: "book", top: "25%", right: "6%", size: "w-6 h-6 md:w-8 h-8", opacity: "opacity-[0.10] md:opacity-[0.16]", delay: 0.4 },
    { type: "star", top: "50%", left: "6%", size: "w-6 h-6 md:w-8 h-8", opacity: "opacity-[0.09] md:opacity-[0.15]", delay: 0.7 },
    { type: "cap", top: "75%", right: "7%", size: "w-6 h-6 md:w-8 h-8", opacity: "opacity-[0.08] md:opacity-[0.14]", delay: 1.0 },
  ],
};

function renderIcon(type: ItemType, className: string) {
  switch (type) {
    case "cap":
      return <ScholarCapIcon className={className} />;
    case "book":
      return <BookIcon className={className} />;
    case "star":
      return <CartoonStarIcon className={className} />;
  }
}

export function FloatingDecor({ section }: { section: keyof typeof config }) {
  const items = config[section] || [];

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none">
      {items.map((it, i) => (
        <motion.div
          key={i}
          className={`absolute ${it.size} ${it.opacity} filter drop-shadow-sm`}
          style={{
            top: it.top,
            left: it.left,
            right: it.right,
          }}
          animate={{
            y: [0, -18, 0],
            x: [0, 8, -8, 0],
            rotate: [-12, 12, -12],
          }}
          transition={{
            y: {
              duration: 6 + (i % 3) * 3,
              repeat: Infinity,
              ease: "easeInOut",
            },
            x: {
              duration: 7 + (i % 3) * 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            },
            rotate: {
              duration: 8 + (i % 2) * 4,
              repeat: Infinity,
              ease: "easeInOut",
            },
            delay: it.delay,
          }}
        >
          {renderIcon(it.type, "w-full h-full")}
        </motion.div>
      ))}
    </div>
  );
}
