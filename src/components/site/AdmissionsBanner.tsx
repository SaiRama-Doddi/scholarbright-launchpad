import { motion } from "motion/react";
import { FloatingDecor } from "./FloatingDecor";

const features = [
  "Passionate, loving and caring staff",
  "Digital classroom facilities",
  "Fully ventilated premises",
  "Activity-based holistic learning",
  "Safety, security & hygiene framework",
  "CCTV surveillance for child safety",
];

export function AdmissionsBanner() {
  return (
    <section className="relative section-pad overflow-hidden">
      <FloatingDecor section="admissions" />
      <div className="mx-auto max-w-7xl px-4">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-[#3b1d6e] p-8 sm:p-12 lg:p-16 text-white shadow-[var(--shadow-glow)]">
          <div aria-hidden className="pointer-events-none absolute inset-0 opacity-90">
            <div className="absolute top-8 right-10 grid grid-cols-6 gap-1.5">
              {Array.from({ length: 24 }).map((_, i) => (
                <span key={i} className="h-1.5 w-1.5 rounded-full bg-accent/70" />
              ))}
            </div>
            <div className="absolute bottom-6 left-10 grid grid-cols-8 gap-1.5">
              {Array.from({ length: 32 }).map((_, i) => (
                <span key={i} className="h-1.5 w-1.5 rounded-full bg-white/25" />
              ))}
            </div>
            <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
            <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
          </div>

          <div className="relative grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-block"
              >
                <span className="inline-block rounded-full bg-accent px-5 py-1.5 font-display text-sm font-bold text-primary-deep shadow-[var(--shadow-gold)]">
                  2026 - 27
                </span>
                <div className="mt-3 rounded-3xl bg-white px-7 py-5 shadow-2xl">
                  <div className="font-display text-4xl font-extrabold tracking-tight text-[#3b1d6e] sm:text-5xl">
                    ADMISSIONS
                  </div>
                  <div className="mt-2 inline-block rounded-2xl bg-accent px-5 py-1.5 font-display text-2xl font-extrabold text-primary-deep sm:text-3xl">
                    OPEN
                  </div>
                </div>
                <div className="mt-4 font-display text-3xl italic text-white sm:text-4xl">
                  Hurry up!!!
                </div>
              </motion.div>

              <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] ring-1 ring-white/20">
                <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                Limited seats available
              </div>
            </div>

            <div>
              <h3 className="font-display text-3xl font-bold leading-tight sm:text-4xl">
                <span className="gradient-text-gold">Fun, exciting</span> learning environment.
              </h3>
              <ul className="mt-6 space-y-3 text-base">
                {features.map((f, i) => (
                  <motion.li
                    key={f}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="flex items-start gap-3 text-white/90"
                  >
                    <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent text-primary-deep text-xs font-bold">
                      ✓
                    </span>
                    {f}
                  </motion.li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#admissions"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-bold text-primary-deep shadow-[var(--shadow-gold)] transition hover:gap-3"
                >
                  Enquire Now <span aria-hidden>→</span>
                </a>
                <a
                  href="tel:+919492848489"
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/25 transition hover:bg-white/20"
                >
                  Call 94928 48489
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
