import { SectionEyebrow } from "./About";

const reviews = [
  {
    name: "Sneha R.",
    role: "Mother of Aarav, Nursery",
    quote:
      "The teachers are incredibly patient and warm. Aarav has grown so confident in just a few months — we genuinely feel he's in the safest place.",
  },
  {
    name: "Karthik M.",
    role: "Father of Diya, Senior KG",
    quote:
      "Clean campus, attentive caregivers and a curriculum that actually engages the kids. Worth every bit of our trust.",
  },
  {
    name: "Lakshmi P.",
    role: "Mother of Vihaan, Play Group",
    quote:
      "From sanitisation to CCTV to the daily reports — Little Scholars sets a new benchmark for preschools in Srikakulam.",
  },
];

export function Testimonials() {
  return (
    <section className="section-pad relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-20 right-1/4 h-80 w-80 rounded-full bg-accent/15 blur-3xl" />
        <div className="absolute bottom-0 left-10 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <SectionEyebrow>Parents Speak</SectionEyebrow>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-primary-deep sm:text-5xl text-balance">
            Loved by the families who matter most.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="hover-lift relative rounded-[2rem] bg-card p-8 shadow-[var(--shadow-soft)] ring-1 ring-border"
            >
              <span className="absolute -top-5 left-7 grid h-12 w-12 place-items-center rounded-2xl gradient-gold font-display text-2xl font-bold text-primary-deep shadow-[var(--shadow-gold)]">
                "
              </span>
              <div className="mb-3 text-accent">★★★★★</div>
              <blockquote className="text-foreground/80 leading-relaxed">{r.quote}</blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <div className="grid h-10 w-10 place-items-center rounded-full gradient-royal text-sm font-bold text-white">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-semibold text-primary-deep">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
