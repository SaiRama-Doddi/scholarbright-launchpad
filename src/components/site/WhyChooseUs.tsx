import { motion } from "motion/react";
import { SectionEyebrow } from "./About";

const items = [
  { t: "Digital Smart Classrooms", d: "Interactive boards turn lessons into adventures.", icon: "▣" },
  { t: "24/7 CCTV Surveillance", d: "Every space monitored for total peace of mind.", icon: "◉" },
  { t: "Safe & Hygienic Campus", d: "Sanitised daily with soft-edge, child-first design.", icon: "✚" },
  { t: "Experienced Teachers", d: "Trained, certified, endlessly patient educators.", icon: "♥" },
  { t: "Fully Ventilated Premises", d: "Bright, airy classrooms for healthy little lungs.", icon: "✿" },
  { t: "Activity-Based Learning", d: "Play, explore, create — the way young minds learn best.", icon: "✦" },
  { t: "Holistic Development", d: "Mind, body and heart nurtured every single day.", icon: "❋" },
  { t: "Nutritious Meals", d: "Balanced menus crafted with paediatric guidance.", icon: "♨" },
];

export function WhyChooseUs() {
  return (
    <section id="facilities" className="section-pad relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/4 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-20 right-1/4 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <SectionEyebrow>Why Choose Us</SectionEyebrow>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-primary-deep sm:text-5xl text-balance">
            Everything a parent could ask for, <span className="gradient-text-gold">under one roof.</span>
          </h2>
          <p className="mt-4 text-lg text-foreground/75">
            The little details that make Little Scholars a place children love and parents trust.
          </p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <motion.article
              key={it.t}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: (i % 4) * 0.08, ease: [0.2, 0.8, 0.2, 1] }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl bg-card p-6 pt-8 shadow-[var(--shadow-soft)] ring-1 ring-border transition-shadow hover:shadow-[var(--shadow-glow)]"
            >
              {/* Top gold accent line */}
              <div aria-hidden className="absolute inset-x-6 top-0 h-[3px] rounded-b-full bg-gradient-to-r from-transparent via-accent to-transparent opacity-70" />
              {/* Soft glow */}
              <div aria-hidden className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-accent/10 blur-2xl transition-all duration-500 group-hover:bg-accent/30 group-hover:scale-125" />
              {/* Number */}
              <div className="absolute right-5 top-5 font-display text-3xl font-bold text-primary/10 tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </div>

              <div className="relative">
                <div className="relative inline-grid h-14 w-14 place-items-center rounded-2xl gradient-royal text-2xl text-white shadow-[var(--shadow-soft)]">
                  <span aria-hidden className="absolute -inset-1 rounded-2xl bg-accent/0 blur-md transition group-hover:bg-accent/40" />
                  <span className="relative">{it.icon}</span>
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-primary-deep">{it.t}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-foreground/70">{it.d}</p>
                <div aria-hidden className="mt-5 h-px w-10 bg-gradient-to-r from-accent to-transparent transition-all group-hover:w-20" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
