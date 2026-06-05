import heroImg from "@/assets/hero-children.jpg";
import logoAsset from "@/assets/little.png";

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-28 pb-8 lg:pt-36 lg:pb-12">
      {/* background ornaments */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 h-[480px] w-[480px] rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute top-40 -right-24 h-[420px] w-[420px] rounded-full bg-accent/25 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-[300px] w-[300px] rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-14">
        {/* left: copy */}
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary-deep">
            <span className="relative grid h-2.5 w-2.5 place-items-center">
              <span className="absolute inset-0 rounded-full bg-accent animate-pulse-ring" />
              <span className="relative h-2.5 w-2.5 rounded-full bg-accent" />
            </span>
            Admissions Open · 2026 - 27
          </div>

          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.02] text-primary-deep sm:text-6xl lg:text-7xl text-balance">
            Inspiring the next generation of{" "}
            <span className="relative inline-block">
              <span className="relative z-10">future leaders</span>
              <svg
                aria-hidden
                viewBox="0 0 320 18"
                className="absolute -bottom-2 left-0 z-0 h-3 w-full text-accent"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 12 C 80 2, 180 2, 318 10"
                  stroke="currentColor"
                  strokeWidth="6"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/75">
            A premium international preschool in Srikakulam where curious little minds discover, play and grow —
            through activity-based learning in safe, joyful and digitally-enabled classrooms.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#admissions"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition hover:bg-primary-deep hover:shadow-[var(--shadow-glow)]"
            >
              Book a Campus Visit
              <span className="transition group-hover:translate-x-1">→</span>
            </a>
            <a
              href="https://wa.me/919492848489"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-7 py-3.5 text-sm font-semibold text-primary-deep backdrop-blur transition hover:bg-white"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </div>

          {/* trust stats */}
          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6">
            {[
              { k: "5+", v: "Programs" },
              { k: "12:1", v: "Student–Teacher" },
              { k: "100%", v: "Safe & CCTV" },
            ].map((s) => (
              <div key={s.v}>
                <dt className="font-display text-3xl font-bold text-primary-deep">{s.k}</dt>
                <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* right: visual */}
        <div className="relative animate-fade-up [animation-delay:120ms]">
          <div className="relative">
            <div className="relative overflow-hidden rounded-[2.25rem] shadow-[var(--shadow-glow)] ring-1 ring-white/60">
              <img
                src={heroImg}
                alt="Happy preschool children learning and playing together"
                width={1600}
                height={1200}
                className="h-[460px] w-full object-cover sm:h-[560px]"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-deep/30 via-transparent to-transparent" />
            </div>

            {/* floating logo badge */}
            <div className="absolute -top-8 -left-8 grid h-28 w-28 place-items-center rounded-[2rem] glass p-3 animate-float">
              <img src={logoAsset} alt="" className="h-full w-full object-contain" />
            </div>

            {/* floating cap */}
            <div className="absolute -top-4 right-12 grid h-14 w-14 place-items-center rounded-2xl gradient-gold shadow-[var(--shadow-gold)] animate-float-rev">
              <CapIcon className="h-7 w-7 text-primary-deep" />
            </div>

            {/* floating stars */}
            <div className="absolute bottom-10 -left-8 grid h-16 w-16 place-items-center rounded-2xl glass animate-float-rev">
              <StarIcon className="h-8 w-8 text-accent" />
            </div>

            {/* testimonial card */}
            <div className="absolute -bottom-8 right-4 w-64 rounded-3xl glass p-4 shadow-[var(--shadow-soft)] animate-float">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full gradient-royal text-sm font-bold text-white">
                  PA
                </div>
                <div>
                  <div className="text-sm font-semibold text-primary-deep">Priya A.</div>
                  <div className="text-[11px] text-muted-foreground">Parent · Junior KG</div>
                </div>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-foreground/80">
                "My daughter actually <em>asks</em> to go to school every morning. That says it all."
              </p>
              <div className="mt-2 text-accent">★★★★★</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CapIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M2 9l10-5 10 5-10 5L2 9z" fill="currentColor" />
      <path d="M6 11v4c0 1.5 2.7 3 6 3s6-1.5 6-3v-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M22 9v5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function StarIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 2.5l2.9 6.1 6.6.7-4.9 4.6 1.4 6.6L12 17.3l-6 3.2 1.4-6.6L2.5 9.3l6.6-.7L12 2.5z" />
    </svg>
  );
}

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M20.5 3.5A11 11 0 0 0 3.2 17.2L2 22l4.9-1.3A11 11 0 1 0 20.5 3.5zM12 20.1a8.1 8.1 0 0 1-4.1-1.1l-.3-.2-2.9.8.8-2.8-.2-.3A8.1 8.1 0 1 1 12 20.1zm4.7-6.1c-.3-.1-1.5-.7-1.7-.8s-.4-.1-.6.1c-.2.3-.7.8-.8 1-.1.2-.3.2-.5.1-1.5-.6-2.4-1.1-3.4-2.6-.3-.4.3-.4.7-1.3.1-.1 0-.3 0-.4 0-.1-.6-1.5-.8-2-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 1.9 0 1.1.8 2.2 1 2.4.1.2 1.7 2.6 4.1 3.6 1.4.6 2 .6 2.7.5.4-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.2-.2-.5-.3z"/>
    </svg>
  );
}
