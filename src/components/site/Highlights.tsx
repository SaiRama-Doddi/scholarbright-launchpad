import { motion } from "motion/react";

const stats = [
  { v: "24/7", l: "CCTV Monitored" },
  { v: "100%", l: "AC Campus" },
  { v: "5★", l: "Parent Rated" },
];

export function Highlights() {
  return (
    <section aria-label="Key highlights" className="relative -mt-2">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 gap-3 rounded-[2rem] bg-card p-4 shadow-[var(--shadow-soft)] ring-1 ring-border sm:grid-cols-3 sm:gap-0 sm:p-0"
        >
          {stats.map((s, i) => (
            <div
              key={s.l}
              className="relative flex flex-col items-center justify-center px-4 py-6 text-center sm:py-8"
            >
              {i > 0 && (
                <span
                  aria-hidden
                  className="hidden sm:block absolute left-0 top-1/2 h-12 w-px -translate-y-1/2 bg-border"
                />
              )}
              <div className="font-display text-3xl font-bold text-primary-deep sm:text-4xl">
                <span className="gradient-text-gold">{s.v}</span>
              </div>
              <div className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                {s.l}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
