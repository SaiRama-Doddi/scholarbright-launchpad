import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FloatingDecor } from "./FloatingDecor";
import parentChildImg from "@/assets/parent_child_testimonial.png";

const reviews = [
  {
    name: "Rajesh K.",
    role: "Parent of Diya (Junior KG)",
    quote:
      "The play-based learning curriculum is fantastic. My daughter has become so expressive, social, and creative within just a few months.",
    rating: 5,
  },
  {
    name: "Sneha R.",
    role: "Mother of Aarav (Nursery)",
    quote:
      "The teachers are incredibly patient and warm. Aarav has grown so confident in just a few months — we genuinely feel he's in the safest place.",
    rating: 5,
  },
  {
    name: "Karthik M.",
    role: "Father of Diya (Senior KG)",
    quote:
      "Clean campus, attentive caregivers and a curriculum that actually engages the kids. Worth every bit of our trust.",
    rating: 5,
  },
  {
    name: "Lakshmi P.",
    role: "Mother of Vihaan (Play Group)",
    quote:
      "From sanitisation to CCTV to the daily reports — Little Scholars sets a new benchmark for preschools in Srikakulam.",
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
    <section className="section-pad relative overflow-hidden bg-background py-16 sm:py-24">
      <FloatingDecor section="testimonials" />
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-20 right-1/4 h-80 w-80 rounded-full bg-accent/15 blur-3xl" />
        <div className="absolute bottom-0 left-10 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Testimonial details & slider */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div>
              {/* Custom styled eyebrow badge to match the image design model */}
              <span className="inline-flex items-center rounded-lg border border-orange-200 bg-orange-50/50 px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-orange-500">
                Parent Testimonials
              </span>
              <h2 className="mt-4 font-display text-4xl font-extrabold leading-[1.15] text-primary-deep sm:text-5xl text-balance">
                What Parents Say <br />
                <span className="text-orange-500">About Us</span>
              </h2>
            </div>

            {/* Testimonial Quote Card */}
            <div className="relative mt-10">
              <div className="relative rounded-[2.25rem] bg-card p-8 pt-10 sm:p-10 shadow-[0_20px_50px_-12px_rgba(7,29,131,0.08)] ring-1 ring-border/50">
                {/* Custom Quote Icon Offset */}
                <span className="absolute -top-6 left-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500 text-white shadow-lg shadow-orange-500/30">
                  <svg className="h-6 w-6 transform scale-x-[-1]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.851h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.851h3.999v10h-10z" />
                  </svg>
                </span>

                <div className="min-h-[180px] sm:min-h-[140px] flex flex-col justify-between">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -16 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                    >
                      {/* Gold Rating Stars */}
                      <div className="flex gap-1 text-xl text-amber-500">
                        {[...Array(r.rating)].map((_, idx) => (
                          <span key={idx}>★</span>
                        ))}
                      </div>

                      {/* Testimonial Quote */}
                      <blockquote className="mt-5 text-slate-700 font-medium italic text-lg leading-relaxed sm:text-xl">
                        "{r.quote}"
                      </blockquote>

                      {/* Author Details */}
                      <div className="mt-6 pt-4 border-t border-slate-100">
                        <div className="font-bold text-primary-deep text-lg">{r.name}</div>
                        <div className="text-sm text-slate-500 font-semibold">{r.role}</div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Slider Pagination Controls underneath the Card */}
              <div className="mt-8 flex items-center gap-3 pl-2">
                {reviews.map((_, n) => (
                  <button
                    key={n}
                    aria-label={`Go to review ${n + 1}`}
                    onClick={() => setI(n)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      n === i ? "w-6 bg-orange-500" : "w-2.5 bg-slate-200 hover:bg-slate-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Circular Portrait Frame */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-full max-w-[340px] sm:max-w-[360px] aspect-square flex items-center justify-center">
              {/* Outer decorative dashed circle */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-orange-300/80 animate-float-rev" />
              
              {/* Inner container with solid circle border */}
              <div className="absolute inset-4 rounded-full border border-orange-200/60 p-2.5 bg-white/70 shadow-[var(--shadow-soft)]">
                {/* Circular image */}
                <div className="h-full w-full rounded-full overflow-hidden shadow-inner">
                  <img
                    src={parentChildImg}
                    alt="Happy mother hugging her daughter"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>

              {/* Overlay Badge: "Loved by Parents" with heart */}
              <div className="absolute -bottom-2 -left-2 sm:-left-4 z-20 flex flex-col items-center justify-center gap-1.5 px-6 py-4 bg-primary-deep rounded-2xl shadow-xl shadow-primary/20 border border-primary/20 min-w-[150px] animate-float">
                <span className="text-xl animate-pulse filter drop-shadow">💖</span>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-white text-center">
                  Loved by Parents
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
