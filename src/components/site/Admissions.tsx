import { useState } from "react";
import { SectionEyebrow } from "./About";

export function Admissions() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") || "");
    const phone = String(form.get("phone") || "");
    const program = String(form.get("program") || "");
    const message = String(form.get("message") || "");
    const text = `Hi! I'd like to enquire about admission.%0A%0AName: ${name}%0APhone: ${phone}%0AProgram: ${program}%0AMessage: ${message}`;
    window.open(`https://wa.me/919492848489?text=${text}`, "_blank", "noopener");
    setSent(true);
  };

  return (
    <section id="admissions" className="section-pad relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4">
        <div className="relative overflow-hidden rounded-[2.5rem] gradient-royal p-8 sm:p-12 lg:p-16 text-white shadow-[var(--shadow-glow)]">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-accent/25 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
            <svg className="absolute inset-0 h-full w-full opacity-[0.06]" aria-hidden>
              <defs>
                <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1.4" fill="white" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#dots)" />
            </svg>
          </div>

          <div className="relative grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-white ring-1 ring-white/25">
                <span className="h-2 w-2 rounded-full bg-accent" />
                Admissions Open · 2025 – 26
              </div>
              <h2 className="mt-5 font-display text-4xl font-bold leading-tight sm:text-5xl text-balance">
                Begin your child's <span className="gradient-text-gold">brightest chapter.</span>
              </h2>
              <p className="mt-5 max-w-md text-white/85 leading-relaxed">
                Limited seats per class to preserve our 12:1 ratio. Drop your details and our admissions team
                will reach out within 24 hours — or chat with us instantly on WhatsApp.
              </p>

              <ul className="mt-8 space-y-3 text-sm">
                {[
                  "Personalised campus tour",
                  "Curriculum walk-through",
                  "Fee structure & early-bird discounts",
                ].map((b) => (
                  <li key={b} className="flex items-center gap-3 text-white/90">
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-accent text-primary-deep text-xs font-bold">✓</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            <form
              onSubmit={onSubmit}
              className="rounded-3xl bg-white/95 p-6 sm:p-8 shadow-[var(--shadow-glow)] ring-1 ring-white/40 backdrop-blur"
            >
              <h3 className="font-display text-xl font-bold text-primary-deep">Enquire Now</h3>
              <p className="mt-1 text-sm text-muted-foreground">We reply within 24 hours.</p>

              <div className="mt-5 grid gap-4">
                <Field label="Parent's Name" name="name" required placeholder="Your full name" />
                <Field label="Phone Number" name="phone" required type="tel" placeholder="+91 ..." />
                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-primary-deep">
                    Program of interest
                  </label>
                  <select
                    name="program"
                    required
                    className="w-full rounded-2xl border border-input bg-white px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                  >
                    <option value="">Select a program</option>
                    <option>Day Care</option>
                    <option>Play Group</option>
                    <option>Nursery</option>
                    <option>Junior KG</option>
                    <option>Senior KG</option>
                  </select>
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-primary-deep">
                    Message <span className="text-muted-foreground font-normal normal-case">(optional)</span>
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Anything you'd like us to know about your child..."
                    className="w-full resize-none rounded-2xl border border-input bg-white px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-primary-deep py-3.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary"
                >
                  {sent ? "Sent — opening WhatsApp…" : "Send Enquiry"} <span aria-hidden>→</span>
                </button>
                <p className="text-center text-[11px] text-muted-foreground">
                  By submitting, you agree to be contacted by Little Scholars.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label, name, type = "text", placeholder, required,
}: {
  label: string; name: string; type?: string; placeholder?: string; required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-primary-deep">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        maxLength={120}
        className="w-full rounded-2xl border border-input bg-white px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
    </div>
  );
}
