import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SectionEyebrow } from "./About";

const reviews = [
  {
    name: "Sneha R.",
    role: "Mother of Aarav · Nursery",
    quote:
      "The teachers are incredibly patient and warm. Aarav has grown so confident in just a few months — we genuinely feel he's in the safest place.",
    rating: 5,
  },
  {
    name: "Karthik M.",
    role: "Father of Diya · Senior KG",
    quote:
      "Clean campus, attentive caregivers and a curriculum that actually engages the kids. Worth every bit of our trust.",
    rating: 5,
  },
  {
    name: "Lakshmi P.",
    role: "Mother of Vihaan · Play Group",
    quote:
      "From sanitisation to CCTV to the daily reports — Little Scholars sets a new benchmark for preschools in Srikakulam.",
    rating: 5,
  },
  {
    name: "Ramesh K.",
    role: "Father of Anika · Junior KG",
    quote:
      "Anika sings the school song on weekends. That's how much she loves it. The team here is doing something truly special.",
    rating: 5,
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % reviews.length), 6000);
    return () => clearInterval(t);
  }, []);

  const r = reviews[i];

  return (
    <section className="section-pad relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-20 right-1/4 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute bottom-0 left-10 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-5xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <SectionEyebrow>Parents Speak</SectionEyebrow>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-primary-deep sm:text-5xl text-balance">
            Loved by the families who matter most.
          </h2>
        </div>

        <div className="relative mt-14">
          <div className="relative overflow-hidden rounded-[2.25rem] bg-card p-8 sm:p-12 shadow-[var(--shadow-glow)] ring-1 ring-border">
            <span className="absolute -top-6 left-10 grid h-14 w-14 place-items-center rounded-2xl gradient-gold font-display text-3xl font-bold text-primary-deep shadow-[var(--shadow-gold)]">
              "
            </span>
            <AnimatePresence mode="wait">
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4 }}
              >
                <div className="text-2xl text-accent">{"★".repeat(r.rating)}</div>
                <blockquote className="mt-4 font-display text-xl leading-relaxed text-primary-deep sm:text-2xl">
                  "{r.quote}"
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-full gradient-royal font-display text-lg font-bold text-white">
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-primary-deep">{r.name}</div>
                    <div className="text-sm text-muted-foreground">{r.role}</div>
                  </div>
                </figcaption>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex items-center justify-center gap-3">
            <button
              aria-label="Previous"
              onClick={() => setI((v) => (v - 1 + reviews.length) % reviews.length)}
              className="grid h-10 w-10 place-items-center rounded-full bg-card text-primary-deep ring-1 ring-border transition hover:bg-primary hover:text-white"
            >
              ‹
            </button>
            <div className="flex gap-2">
              {reviews.map((_, n) => (
                <button
                  key={n}
                  aria-label={`Go to review ${n + 1}`}
                  onClick={() => setI(n)}
                  className={`h-2 rounded-full transition-all ${
                    n === i ? "w-8 bg-primary" : "w-2 bg-primary/25"
                  }`}
                />
              ))}
            </div>
            <button
              aria-label="Next"
              onClick={() => setI((v) => (v + 1) % reviews.length)}
              className="grid h-10 w-10 place-items-center rounded-full bg-card text-primary-deep ring-1 ring-border transition hover:bg-primary hover:text-white"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
