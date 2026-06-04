import { SectionEyebrow } from "./About";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

const photos = [
  { src: g1, alt: "Children reading a book together", label: "Storytime" },
  { src: g2, alt: "Children painting in art class", label: "Art & Craft" },
  { src: g3, alt: "Teacher reading to children", label: "Circle Time" },
  { src: g4, alt: "Kids playing in the playground", label: "Outdoor Play" },
  { src: g5, alt: "Modern digital classroom", label: "Smart Classroom" },
  { src: g6, alt: "Children building with blocks", label: "Building Skills" },
];

export function Gallery() {
  return (
    <section id="gallery" className="section-pad relative overflow-hidden bg-cream">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <SectionEyebrow>Campus Life</SectionEyebrow>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-primary-deep sm:text-5xl text-balance">
              Little moments. <span className="gradient-text-gold">Big memories.</span>
            </h2>
          </div>
          <p className="max-w-md text-foreground/75">
            A peek into a typical day at Little Scholars — full of giggles, glue sticks and great discoveries.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 md:grid-rows-2">
          {photos.map((p, i) => (
            <figure
              key={p.label}
              className={`group relative overflow-hidden rounded-3xl ring-1 ring-border shadow-[var(--shadow-soft)] ${
                i === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                width={1024}
                height={1024}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/70 via-primary-deep/0 to-transparent" />
              <figcaption className="absolute bottom-3 left-3 rounded-full glass px-3 py-1 text-xs font-semibold text-primary-deep">
                {p.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
