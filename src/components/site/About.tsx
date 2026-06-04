const pillars = [
  {
    title: "Passionate, Caring Staff",
    body: "Trained, nurturing educators who treat every child as their own — building confidence one smile at a time.",
    icon: "♥",
  },
  {
    title: "Activity-Based Learning",
    body: "Hands-on play, stories and projects that grow curiosity, creativity and confidence the natural way.",
    icon: "✦",
  },
  {
    title: "Holistic Development",
    body: "Cognitive, social, emotional and physical growth — all woven into joyful everyday routines.",
    icon: "✿",
  },
];

export function About() {
  return (
    <section id="about" className="section-pad relative">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-end">
          <div>
            <SectionEyebrow>Our Story</SectionEyebrow>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-primary-deep sm:text-5xl text-balance">
              A warm little world where{" "}
              <span className="gradient-text-gold">big futures begin.</span>
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-foreground/75">
            Little Scholars International Preschool was founded with one simple belief — that the
            earliest years deserve the very best. We blend an international curriculum with the
            warmth of a second home, so every child walks in excited and leaves a little braver,
            kinder and more curious than the day before.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {pillars.map((p, i) => (
            <article
              key={p.title}
              className="hover-lift group relative overflow-hidden rounded-[2rem] bg-card p-8 shadow-[var(--shadow-soft)] ring-1 ring-border"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-accent/15 blur-2xl transition group-hover:bg-accent/25" />
              <div className="relative">
                <div className="grid h-14 w-14 place-items-center rounded-2xl gradient-royal text-2xl text-white shadow-[var(--shadow-soft)]">
                  {p.icon}
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-primary-deep">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/75">{p.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-primary/8 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-primary-deep">
      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
      {children}
    </span>
  );
}
