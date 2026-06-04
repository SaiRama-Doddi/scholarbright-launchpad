import { SectionEyebrow } from "./About";

const programs = [
  { name: "Day Care", age: "8 months – 5 yrs", color: "from-amber-200 to-yellow-300", desc: "Safe, loving care all day long with structured play, naps and nutrition." },
  { name: "Play Group", age: "1.5 – 2.5 yrs", color: "from-rose-200 to-pink-300", desc: "First steps into social learning — songs, sensory play and lots of giggles." },
  { name: "Nursery", age: "2.5 – 3.5 yrs", color: "from-sky-200 to-blue-300", desc: "Language, motor skills and early concepts through stories and exploration." },
  { name: "Junior KG", age: "3.5 – 4.5 yrs", color: "from-violet-200 to-purple-300", desc: "Letters, numbers and confidence — the joyful runway to formal school." },
  { name: "Senior KG", age: "4.5 – 5.5 yrs", color: "from-emerald-200 to-teal-300", desc: "Reading, writing and reasoning — ready for big school, the LSIP way." },
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

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((p, i) => (
            <article
              key={p.name}
              className={`hover-lift group relative overflow-hidden rounded-[2rem] bg-card p-7 shadow-[var(--shadow-soft)] ring-1 ring-border ${
                i === 0 ? "lg:row-span-2 lg:p-9" : ""
              }`}
            >
              <div
                className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${p.color}`}
              />
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                    {p.age}
                  </span>
                  <h3 className="mt-2 font-display text-2xl font-bold text-primary-deep">
                    {p.name}
                  </h3>
                </div>
                <div
                  className={`grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${p.color} text-primary-deep font-display font-bold shadow-[var(--shadow-soft)]`}
                >
                  {p.name.charAt(0)}
                </div>
              </div>
              <p className={`mt-4 text-sm leading-relaxed text-foreground/75 ${i === 0 ? "lg:text-base" : ""}`}>
                {p.desc}
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-primary transition group-hover:gap-3">
                Learn more <span aria-hidden>→</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
