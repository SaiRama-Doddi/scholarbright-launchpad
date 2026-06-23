import { motion } from "motion/react";

// Custom premium 3D vector illustrations for school elements with unique gradient IDs

interface IconProps {
  uniqueId: string;
  className?: string;
}

function ScholarCapIcon({ uniqueId, className = "" }: IconProps) {
  const capGrad = `capGrad-${uniqueId}`;
  const capDark = `capDark-${uniqueId}`;
  const tasselGrad = `tasselGrad-${uniqueId}`;
  return (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={capGrad} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#93C5FD" />
          <stop offset="100%" stopColor="#3B82F6" />
        </linearGradient>
        <linearGradient id={capDark} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#1E3A8A" />
        </linearGradient>
        <linearGradient id={tasselGrad} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FDE047" />
          <stop offset="100%" stopColor="#F59E0B" />
        </linearGradient>
      </defs>
      {/* Cap Top Diamond */}
      <path d="M50 18 L92 38 L50 58 L8 38 Z" fill={`url(#${capGrad})`} />
      {/* Cap Bottom Band */}
      <path
        d="M24 45.5 V63 C24 72 35.6 77 50 77 C64.4 77 76 72 76 63 V45.5 C70 51 60 54.5 50 54.5 C40 54.5 30 51 24 45.5 Z"
        fill={`url(#${capDark})`}
      />
      {/* Tassel */}
      <path
        d="M50 38 L88 50 V68 L84 62 L88 50"
        stroke={`url(#${tasselGrad})`}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path d="M82 61 L86 73 L90 61 Z" fill={`url(#${tasselGrad})`} />
    </svg>
  );
}

function BookIcon({ uniqueId, className = "" }: IconProps) {
  const coverGrad = `coverGrad-${uniqueId}`;
  const pageGrad = `pageGrad-${uniqueId}`;
  const pageShadow = `pageShadow-${uniqueId}`;
  return (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={coverGrad} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C7D2FE" />
          <stop offset="100%" stopColor="#818CF8" />
        </linearGradient>
        <linearGradient id={pageGrad} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#F3F4F6" />
        </linearGradient>
        <linearGradient id={pageShadow} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E5E7EB" />
          <stop offset="100%" stopColor="#D1D5DB" />
        </linearGradient>
      </defs>
      {/* Book Cover (behind pages) */}
      <path
        d="M12 73C27 73 45 78 50 80C55 78 73 73 88 73V27C73 27 55 32 50 34C45 32 27 27 12 27Z"
        fill={`url(#${coverGrad})`}
      />
      {/* Left Page Shadow */}
      <path d="M15 70C28 70 45 74 50 76V30C45 28 28 24 15 24Z" fill={`url(#${pageShadow})`} />
      {/* Right Page Shadow */}
      <path d="M85 70C72 70 55 74 50 76V30C55 28 72 24 85 24Z" fill={`url(#${pageShadow})`} />
      {/* Left Page White */}
      <path d="M17 68C29 68 45 72 49 74V28C45 26 29 22 17 22Z" fill={`url(#${pageGrad})`} />
      {/* Right Page White */}
      <path d="M83 68C71 68 55 72 51 74V28C55 26 71 22 83 22Z" fill={`url(#${pageGrad})`} />
      {/* Bookmark / Ribbon */}
      <path d="M50 34 V70 L53 66 L56 70 V34" fill="#F59E0B" />
    </svg>
  );
}

function CartoonStarIcon({ uniqueId, className = "" }: IconProps) {
  const starGrad1 = `starGrad1-${uniqueId}`;
  const starGrad2 = `starGrad2-${uniqueId}`;
  return (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={starGrad1} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FDE047" />
          <stop offset="100%" stopColor="#FBBF24" />
        </linearGradient>
        <linearGradient id={starGrad2} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FBBF24" />
          <stop offset="100%" stopColor="#F59E0B" />
        </linearGradient>
      </defs>
      {/* 3D Star splits: Meeting in center (50,50) */}
      {/* Left halves (lighter) */}
      <path d="M50 50 L50 8 L65 38 Z" fill={`url(#${starGrad1})`} />
      <path d="M50 50 L96 38 L72 58 Z" fill={`url(#${starGrad1})`} />
      <path d="M50 50 L80 90 L50 72 Z" fill={`url(#${starGrad1})`} />
      <path d="M50 50 L20 90 L28 58 Z" fill={`url(#${starGrad1})`} />
      <path d="M50 50 L4 38 L35 38 Z" fill={`url(#${starGrad1})`} />
      {/* Right halves (darker) */}
      <path d="M50 50 L65 38 L96 38 Z" fill={`url(#${starGrad2})`} />
      <path d="M50 50 L72 58 L80 90 Z" fill={`url(#${starGrad2})`} />
      <path d="M50 50 L50 72 L20 90 Z" fill={`url(#${starGrad2})`} />
      <path d="M50 50 L28 58 L4 38 Z" fill={`url(#${starGrad2})`} />
      <path d="M50 50 L35 38 L50 8 Z" fill={`url(#${starGrad2})`} />
    </svg>
  );
}

// Background Dashed Paths winding between sections to connect elements
function SectionDashedPaths({ section }: { section: string }) {
  if (section === "hero") {
    return (
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none text-accent/20"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        {/* Path 1: Top-Left to Middle-Left */}
        <path
          d="M 5% 18% C 15% 28%, 20% 8%, 32% 12% C 40% 15%, 45% 30%, 50% 22%"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="5 5"
        />
        {/* Path 2: Middle-Left to Bottom-Left to Bottom-Center */}
        <path
          d="M 10% 40% C 5% 60%, 15% 85%, 28% 80% C 35% 78%, 42% 65%, 48% 70%"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="5 5"
        />
        {/* Path 3: Top-Middle to Top-Right */}
        <path
          d="M 38% 12% C 45% 18%, 55% 5%, 65% 15% C 75% 25%, 85% 15%, 92% 18%"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="5 5"
        />
        {/* Path 4: Bottom-Middle to wave */}
        <path
          d="M 28% 82% C 35% 88%, 42% 75%, 50% 90%"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="5 5"
        />
      </svg>
    );
  }
  if (section === "about") {
    return (
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none text-primary/10"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M 10% 20% C 30% 40%, 70% 10%, 90% 30%"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="5 5"
        />
        <path
          d="M 5% 70% C 25% 60%, 55% 85%, 85% 75%"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="5 5"
        />
      </svg>
    );
  }
  if (section === "programs") {
    return (
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none text-accent/15"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M 90% 15% C 70% 35%, 80% 65%, 50% 50% C 20% 35%, 30% 80%, 10% 75%"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="5 5"
        />
      </svg>
    );
  }
  if (section === "why") {
    return (
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none text-primary/10"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M 15% 15% C 45% 25%, 35% 55%, 65% 45% C 95% 35%, 85% 85%, 50% 80%"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="5 5"
        />
      </svg>
    );
  }
  if (section === "learning") {
    return (
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none text-accent/15"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M 5% 20% C 35% 10%, 65% 30%, 95% 15%"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="5 5"
        />
        <path
          d="M 10% 80% C 40% 70%, 50% 90%, 90% 75%"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="5 5"
        />
      </svg>
    );
  }
  if (section === "testimonials") {
    return (
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none text-primary/10"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M 85% 15% C 55% 25%, 65% 55%, 35% 45% C 5% 35%, 15% 85%, 50% 80%"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="5 5"
        />
      </svg>
    );
  }
  if (section === "admissions") {
    return (
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none text-accent/20"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M 5% 25% C 25% 15%, 45% 35%, 95% 20%"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="5 5"
        />
        <path
          d="M 10% 75% C 45% 85%, 65% 65%, 90% 80%"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="5 5"
        />
      </svg>
    );
  }
  if (section === "contact") {
    return (
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none text-primary/10"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M 90% 20% C 60% 40%, 40% 10%, 10% 30%"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="5 5"
        />
      </svg>
    );
  }
  return null;
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

// Configured with slightly larger sizes matching the mockup visual hierarchy
const config: Record<string, DecorItem[]> = {
  hero: [
    {
      type: "cap",
      top: "12%",
      left: "4%",
      size: "w-10 h-10 md:w-16 h-16",
      opacity: "opacity-25 md:opacity-40",
      delay: 0,
    },
    {
      type: "star",
      top: "10%",
      left: "10%",
      size: "w-6 h-6 md:w-8 h-8",
      opacity: "opacity-35 md:opacity-55",
      delay: 0.5,
    },
    {
      type: "book",
      top: "22%",
      left: "25%",
      size: "w-9 h-9 md:w-14 h-14",
      opacity: "opacity-25 md:opacity-40",
      delay: 1.0,
    },
    {
      type: "star",
      top: "6%",
      left: "38%",
      size: "w-6 h-6 md:w-8 h-8",
      opacity: "opacity-35 md:opacity-55",
      delay: 1.5,
    },
    {
      type: "cap",
      top: "8%",
      right: "6%",
      size: "w-10 h-10 md:w-16 h-16",
      opacity: "opacity-25 md:opacity-40",
      delay: 2.0,
    },
    {
      type: "star",
      top: "14%",
      right: "10%",
      size: "w-6 h-6 md:w-8 h-8",
      opacity: "opacity-35 md:opacity-55",
      delay: 2.5,
    },
    {
      type: "book",
      top: "28%",
      right: "22%",
      size: "w-9 h-9 md:w-14 h-14",
      opacity: "opacity-25 md:opacity-40",
      delay: 3.0,
    },
    {
      type: "star",
      top: "34%",
      right: "25%",
      size: "w-6 h-6 md:w-8 h-8",
      opacity: "opacity-35 md:opacity-55",
      delay: 3.5,
    },
    {
      type: "star",
      top: "76%",
      left: "4%",
      size: "w-8 h-8 md:w-10 h-10",
      opacity: "opacity-35 md:opacity-55",
      delay: 4.0,
    },
    {
      type: "cap",
      top: "84%",
      left: "28%",
      size: "w-12 h-12 md:w-18 h-18",
      opacity: "opacity-25 md:opacity-40",
      delay: 4.5,
    },
    {
      type: "book",
      top: "82%",
      left: "45%",
      size: "w-9 h-9 md:w-14 h-14",
      opacity: "opacity-25 md:opacity-40",
      delay: 5.0,
    },
    {
      type: "star",
      top: "86%",
      left: "35%",
      size: "w-6 h-6 md:w-8 h-8",
      opacity: "opacity-35 md:opacity-55",
      delay: 5.5,
    },
    {
      type: "cap",
      top: "72%",
      right: "5%",
      size: "w-10 h-10 md:w-16 h-16",
      opacity: "opacity-25 md:opacity-40",
      delay: 6.0,
    },
  ],
  about: [
    {
      type: "book",
      top: "15%",
      right: "6%",
      size: "w-9 h-9 md:w-12 h-12",
      opacity: "opacity-20 md:opacity-30",
      delay: 0.2,
    },
    {
      type: "star",
      top: "45%",
      left: "5%",
      size: "w-6 h-6 md:w-8 h-8",
      opacity: "opacity-30 md:opacity-45",
      delay: 0.7,
    },
    {
      type: "cap",
      top: "75%",
      right: "8%",
      size: "w-10 h-10 md:w-14 h-14",
      opacity: "opacity-20 md:opacity-30",
      delay: 1.2,
    },
  ],
  programs: [
    {
      type: "star",
      top: "15%",
      left: "6%",
      size: "w-6 h-6 md:w-8 h-8",
      opacity: "opacity-30 md:opacity-45",
      delay: 0.4,
    },
    {
      type: "cap",
      top: "50%",
      right: "6%",
      size: "w-10 h-10 md:w-14 h-14",
      opacity: "opacity-20 md:opacity-30",
      delay: 0.9,
    },
    {
      type: "book",
      top: "80%",
      left: "5%",
      size: "w-9 h-9 md:w-12 h-12",
      opacity: "opacity-20 md:opacity-30",
      delay: 1.4,
    },
  ],
  why: [
    {
      type: "cap",
      top: "20%",
      right: "7%",
      size: "w-10 h-10 md:w-14 h-14",
      opacity: "opacity-20 md:opacity-30",
      delay: 0.1,
    },
    {
      type: "book",
      top: "55%",
      left: "6%",
      size: "w-9 h-9 md:w-12 h-12",
      opacity: "opacity-20 md:opacity-30",
      delay: 0.6,
    },
    {
      type: "star",
      top: "80%",
      right: "6%",
      size: "w-6 h-6 md:w-8 h-8",
      opacity: "opacity-30 md:opacity-45",
      delay: 1.1,
    },
    {
      type: "book",
      top: "90%",
      left: "4%",
      size: "w-9 h-9 md:w-12 h-12",
      opacity: "opacity-20 md:opacity-30",
      delay: 1.6,
    },
  ],
  learning: [
    {
      type: "book",
      top: "15%",
      left: "5%",
      size: "w-9 h-9 md:w-12 h-12",
      opacity: "opacity-20 md:opacity-30",
      delay: 0.3,
    },
    {
      type: "cap",
      top: "45%",
      right: "6%",
      size: "w-10 h-10 md:w-14 h-14",
      opacity: "opacity-20 md:opacity-30",
      delay: 0.8,
    },
    {
      type: "star",
      top: "75%",
      left: "6%",
      size: "w-6 h-6 md:w-8 h-8",
      opacity: "opacity-30 md:opacity-45",
      delay: 1.3,
    },
  ],
  gallery: [
    {
      type: "cap",
      top: "20%",
      left: "5%",
      size: "w-10 h-10 md:w-14 h-14",
      opacity: "opacity-20 md:opacity-30",
      delay: 0.2,
    },
    {
      type: "star",
      top: "45%",
      right: "6%",
      size: "w-6 h-6 md:w-8 h-8",
      opacity: "opacity-30 md:opacity-45",
      delay: 0.5,
    },
    {
      type: "book",
      top: "70%",
      left: "6%",
      size: "w-9 h-9 md:w-12 h-12",
      opacity: "opacity-20 md:opacity-30",
      delay: 0.8,
    },
  ],
  testimonials: [
    {
      type: "star",
      top: "25%",
      right: "7%",
      size: "w-6 h-6 md:w-8 h-8",
      opacity: "opacity-30 md:opacity-45",
      delay: 0.5,
    },
    {
      type: "cap",
      top: "50%",
      left: "5%",
      size: "w-10 h-10 md:w-14 h-14",
      opacity: "opacity-20 md:opacity-30",
      delay: 0.8,
    },
    {
      type: "book",
      top: "75%",
      right: "5%",
      size: "w-9 h-9 md:w-12 h-12",
      opacity: "opacity-20 md:opacity-30",
      delay: 1.0,
    },
  ],
  admissions: [
    {
      type: "star",
      top: "25%",
      left: "7%",
      size: "w-6 h-6 md:w-8 h-8",
      opacity: "opacity-30 md:opacity-45",
      delay: 0.3,
    },
    {
      type: "book",
      top: "65%",
      right: "7%",
      size: "w-9 h-9 md:w-12 h-12",
      opacity: "opacity-20 md:opacity-30",
      delay: 0.9,
    },
    {
      type: "cap",
      top: "85%",
      left: "5%",
      size: "w-10 h-10 md:w-14 h-14",
      opacity: "opacity-20 md:opacity-30",
      delay: 1.2,
    },
  ],
  contact: [
    {
      type: "book",
      top: "25%",
      right: "6%",
      size: "w-9 h-9 md:w-12 h-12",
      opacity: "opacity-20 md:opacity-30",
      delay: 0.4,
    },
    {
      type: "star",
      top: "50%",
      left: "6%",
      size: "w-6 h-6 md:w-8 h-8",
      opacity: "opacity-30 md:opacity-45",
      delay: 0.7,
    },
    {
      type: "cap",
      top: "75%",
      right: "7%",
      size: "w-10 h-10 md:w-14 h-14",
      opacity: "opacity-20 md:opacity-30",
      delay: 1.0,
    },
  ],
};

function renderIcon(type: ItemType, uniqueId: string, className: string) {
  switch (type) {
    case "cap":
      return <ScholarCapIcon uniqueId={uniqueId} className={className} />;
    case "book":
      return <BookIcon uniqueId={uniqueId} className={className} />;
    case "star":
      return <CartoonStarIcon uniqueId={uniqueId} className={className} />;
  }
}

export function FloatingDecor({ section }: { section: keyof typeof config }) {
  const items = config[section] || [];

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none"
    >
      {/* Dashed background lines winding across the section */}
      <SectionDashedPaths section={section} />

      {/* Floating Animated Icons */}
      {items.map((it, i) => {
        const uniqueId = `${section}-${it.type}-${i}`;
        return (
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
            {renderIcon(it.type, uniqueId, "w-full h-full")}
          </motion.div>
        );
      })}
    </div>
  );
}
