import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { SectionEyebrow } from "./About";

const programs = [
  { slug: "day-care", name: "Day Care", age: "8 months – 5 yrs", color: "from-amber-200 to-yellow-300", desc: "Safe, loving care all day long with structured play, naps and nutrition." },
  { slug: "play-group", name: "Play Group", age: "1.5 – 2.5 yrs", color: "from-rose-200 to-pink-300", desc: "First steps into social learning — songs, sensory play and lots of giggles." },
  { slug: "nursery", name: "Nursery", age: "2.5 – 3.5 yrs", color: "from-sky-200 to-blue-300", desc: "Language, motor skills and early concepts through stories and exploration." },
  { slug: "junior-kg", name: "Junior KG", age: "3.5 – 4.5 yrs", color: "from-violet-200 to-purple-300", desc: "Letters, numbers and confidence — the joyful runway to formal school." },
  { slug: "senior-kg", name: "Senior KG", age: "4.5 – 5.5 yrs", color: "from-emerald-200 to-teal-300", desc: "Reading, writing and reasoning — ready for big school, the LSIP way." },
];

export function Programs() {
  return (
    <section id="programs" className="section-pad relative overflow-hidden bg-cream">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute top-10 left-10 h-72 w-72 rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="max-w-3xl">
          <SectionEyebrow>Our Programs</SectionEyebrow>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-primary-deep sm:text-5xl text-balance">
            A program for every little stage of growing up.
          </h2>
          <p className="mt-4 text-lg text-foreground/75">
            From first words to first friendships — each curriculum is designed around what your child needs right now.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
          {programs.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1, ease: [0.2, 0.8, 0.2, 1] }}
              whileHover={{ y: -6 }}
              className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] bg-card p-7 shadow-[var(--shadow-soft)] ring-1 ring-border transition-shadow hover:shadow-[var(--shadow-glow)]"
            >
              <div className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${p.color}`} />
              <div aria-hidden className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-accent/10 blur-2xl transition group-hover:bg-accent/25" />
              <div className="relative flex items-start justify-between gap-3">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                    {p.age}
                  </span>
                  <h3 className="mt-2 font-display text-2xl font-bold text-primary-deep">
                    {p.name}
                  </h3>
                </div>
                <div className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${p.color} text-primary-deep font-display font-bold shadow-[var(--shadow-soft)]`}>
                  {p.name.charAt(0)}
                </div>
              </div>
              <p className="relative mt-4 text-sm leading-relaxed text-foreground/75">
                {p.desc}
              </p>
              <div className="relative mt-auto pt-6 flex items-center gap-2 text-sm font-semibold text-primary transition-all group-hover:gap-3">
                Learn more <span aria-hidden>→</span>
              </div>
            </motion.article>
          ))}

          {/* Elegant CTA tile fills the 6th slot — no more empty space */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative flex h-full flex-col justify-between overflow-hidden rounded-[2rem] gradient-royal p-7 text-white shadow-[var(--shadow-glow)]"
          >
            <div aria-hidden className="absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-accent/30 blur-3xl" />
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] ring-1 ring-white/25">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                Admissions 2025–26
              </span>
              <h3 className="mt-4 font-display text-2xl font-bold leading-tight">
                Not sure which program fits your little one?
              </h3>
              <p className="mt-2 text-sm text-white/80">
                Our team will guide you to the perfect class with a friendly campus tour.
              </p>
            </div>
            <a
              href="#admissions"
              className="relative mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-primary-deep shadow-[var(--shadow-gold)] transition hover:gap-3"
            >
              Book a visit <span aria-hidden>→</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
