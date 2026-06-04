import { motion } from "motion/react";

type Item = {
  icon: string;
  top: string;
  left?: string;
  right?: string;
  size?: string;
  color?: string;
  delay?: number;
};

const items: Item[] = [
  { icon: "✦", top: "8%", left: "4%", size: "text-3xl", color: "text-accent/70", delay: 0 },
  { icon: "✿", top: "22%", right: "6%", size: "text-2xl", color: "text-primary/30", delay: 0.6 },
  { icon: "★", top: "55%", left: "2%", size: "text-2xl", color: "text-accent/60", delay: 1.2 },
  { icon: "♥", top: "72%", right: "4%", size: "text-xl", color: "text-primary/30", delay: 0.3 },
  { icon: "✎", top: "88%", left: "8%", size: "text-2xl", color: "text-accent/55", delay: 0.9 },
];

export function FloatingDecor() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {items.map((it, i) => (
        <motion.span
          key={i}
          className={`absolute ${it.size} ${it.color} drop-shadow-sm select-none`}
          style={{ top: it.top, left: it.left, right: it.right }}
          animate={{ y: [0, -16, 0], rotate: [0, 8, -4, 0] }}
          transition={{ duration: 8 + i, repeat: Infinity, ease: "easeInOut", delay: it.delay }}
        >
          {it.icon}
        </motion.span>
      ))}
    </div>
  );
}
