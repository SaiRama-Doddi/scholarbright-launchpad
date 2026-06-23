import { SectionEyebrow } from "./About";
import { FloatingDecor } from "./FloatingDecor";

const address =
  "Plot No: 14, Kalki Nagar, Near Kerala Building, Thotapalem Road, Srikakulam – 532005";
const mapsQuery = encodeURIComponent(address);

export function Contact() {
  return (
    <section
      id="contact"
      className="section-pad relative bg-cream min-h-[70vh] lg:min-h-[75vh] flex items-center overflow-hidden"
    >
      <FloatingDecor section="contact" />
      <div className="mx-auto max-w-7xl px-4 w-full relative z-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <SectionEyebrow>Visit Us</SectionEyebrow>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-primary-deep sm:text-5xl text-balance">
              Come say <span className="gradient-text-gold">hello.</span>
            </h2>
            <p className="mt-4 text-foreground/75 leading-relaxed">
              We'd love to show you around our campus. Drop by, call us, or message us on WhatsApp —
              we're here for every question.
            </p>

            <div className="mt-8 space-y-4">
              <InfoRow
                icon="◎"
                title="Campus Address"
                lines={[address]}
                href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
                cta="Open in Google Maps"
              />
              <InfoRow
                icon="☎"
                title="Call Us"
                lines={["+91 94928 48489", "+91 94917 37399"]}
                href="tel:+919492848489"
                cta="Call now"
              />
              <InfoRow
                icon="✉"
                title="WhatsApp"
                lines={["Chat with admissions, instantly"]}
                href="https://wa.me/919492848489"
                cta="Message us"
              />
              <InfoRow
                icon="⏱"
                title="School Hours"
                lines={[
                  "Preschool · Mon – Sat · 9:00 AM – 3:30 PM",
                  "Day Care · Mon – Sat · 9:00 AM – 3:30 PM",
                ]}
              />
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] ring-1 ring-border shadow-[var(--shadow-soft)] min-h-[420px]">
            <iframe
              title="Little Scholars International Preschool location"
              src={`https://www.google.com/maps?q=${mapsQuery}&output=embed`}
              className="h-full min-h-[420px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({
  icon,
  title,
  lines,
  href,
  cta,
}: {
  icon: string;
  title: string;
  lines: string[];
  href?: string;
  cta?: string;
}) {
  return (
    <div className="hover-lift flex items-start gap-4 rounded-3xl glass p-5">
      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl gradient-royal text-xl text-white shadow-[var(--shadow-soft)]">
        {icon}
      </div>
      <div className="flex-1">
        <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
          {title}
        </div>
        {lines.map((l) => (
          <div key={l} className="mt-0.5 text-sm font-medium text-primary-deep leading-relaxed">
            {l}
          </div>
        ))}
        {href && cta && (
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-primary transition hover:gap-2"
          >
            {cta} →
          </a>
        )}
      </div>
    </div>
  );
}
