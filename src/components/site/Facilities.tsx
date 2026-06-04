import { SectionEyebrow } from "./About";

const items = [
  { t: "Digital Smart Classrooms", d: "Interactive boards bring stories, science and songs to life.", icon: "▣" },
  { t: "CCTV Surveillance", d: "Every corner monitored, every parent at peace.", icon: "◉" },
  { t: "Safe & Hygienic Premises", d: "Sanitised daily, age-appropriate furniture, soft-edge play zones.", icon: "✚" },
  { t: "Fully Ventilated", d: "Bright, airy classrooms designed for healthy little lungs.", icon: "✿" },
  { t: "Nutritious Meals", d: "Wholesome menus crafted by paediatric nutritionists.", icon: "♨" },
  { t: "Trained Caregivers", d: "Educators certified in early childhood and first aid.", icon: "♥" },
];

export function Facilities() {
  return (
    <section id="facilities" className="section-pad relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-center lg:gap-16">
          <div>
            <SectionEyebrow>Learning Environment</SectionEyebrow>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-primary-deep sm:text-5xl text-balance">
              Designed for safety. Built for{" "}
              <span className="gradient-text-gold">wonder.</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-foreground/75">
              Every classroom, corridor and corner of our campus has been thoughtfully crafted so children
              can explore freely while parents stay perfectly at ease.
            </p>
            <a
              href="#contact"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary-deep px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary"
            >
              Schedule a campus tour →
            </a>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2">
            {items.map((it) => (
              <li
                key={it.t}
                className="hover-lift group relative overflow-hidden rounded-3xl glass p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl gradient-gold text-xl text-primary-deep shadow-[var(--shadow-gold)]">
                    {it.icon}
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-primary-deep">{it.t}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-foreground/75">{it.d}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
