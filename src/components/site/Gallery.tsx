import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SectionEyebrow } from "./About";
import { FloatingDecor } from "./FloatingDecor";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

const photos = [
  { src: g1, alt: "Children reading together", label: "Storytime" },
  { src: g2, alt: "Children painting in art class", label: "Art & Craft" },
  { src: g3, alt: "Teacher reading to children", label: "Circle Time" },
  { src: g4, alt: "Kids playing in the playground", label: "Outdoor Play" },
  { src: g5, alt: "Modern digital classroom", label: "Smart Classroom" },
  { src: g6, alt: "Children building with blocks", label: "Building Skills" },
];

export function Gallery() {
  const [idx, setIdx] = useState<number | null>(null);

  useEffect(() => {
    if (idx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIdx(null);
      if (e.key === "ArrowRight") setIdx((i) => (i === null ? null : (i + 1) % photos.length));
      if (e.key === "ArrowLeft")
        setIdx((i) => (i === null ? null : (i - 1 + photos.length) % photos.length));
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [idx]);

  return (
    <section id="gallery" className="section-pad relative overflow-hidden">
      <FloatingDecor section="gallery" />
      <div className="mx-auto max-w-7xl px-4 relative z-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <SectionEyebrow>Campus Life</SectionEyebrow>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-primary-deep sm:text-5xl text-balance">
              Little moments. <span className="gradient-text-gold">Big memories.</span>
            </h2>
          </div>
          <p className="max-w-md text-foreground/75">
            A peek into a typical day — full of giggles, glue sticks and great discoveries. Click
            any photo to enlarge.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 md:grid-rows-2">
          {photos.map((p, i) => (
            <motion.figure
              key={p.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className={`group relative cursor-zoom-in overflow-hidden rounded-3xl ring-1 ring-border shadow-[var(--shadow-soft)] ${
                i === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
              onClick={() => setIdx(i)}
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                width={1024}
                height={1024}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/70 via-primary-deep/0 to-transparent opacity-90 transition group-hover:opacity-100" />
              <figcaption className="absolute bottom-3 left-3 rounded-full glass px-3 py-1 text-xs font-semibold text-primary-deep">
                {p.label}
              </figcaption>
              <div className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-primary-deep opacity-0 transition group-hover:opacity-100">
                ⤢
              </div>
            </motion.figure>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {idx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] grid place-items-center bg-primary-deep/85 p-4 backdrop-blur-md"
            onClick={() => setIdx(null)}
          >
            <button
              aria-label="Close"
              className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white/15 text-white text-2xl ring-1 ring-white/30 transition hover:bg-white hover:text-primary-deep"
              onClick={() => setIdx(null)}
            >
              ×
            </button>
            <NavBtn
              dir="prev"
              onClick={(e) => {
                e.stopPropagation();
                setIdx((i) => (i === null ? null : (i - 1 + photos.length) % photos.length));
              }}
            />
            <NavBtn
              dir="next"
              onClick={(e) => {
                e.stopPropagation();
                setIdx((i) => (i === null ? null : (i + 1) % photos.length));
              }}
            />
            <motion.figure
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="relative max-h-[85vh] max-w-5xl overflow-hidden rounded-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={photos[idx].src}
                alt={photos[idx].alt}
                className="max-h-[85vh] w-auto object-contain"
              />
              <figcaption className="absolute bottom-4 left-4 rounded-full bg-white/90 px-4 py-1.5 text-sm font-semibold text-primary-deep">
                {photos[idx].label}
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function NavBtn({
  dir,
  onClick,
}: {
  dir: "prev" | "next";
  onClick: (e: React.MouseEvent) => void;
}) {
  return (
    <button
      aria-label={dir}
      onClick={onClick}
      className={`absolute ${dir === "prev" ? "left-4" : "right-4"} top-1/2 -translate-y-1/2 grid h-12 w-12 place-items-center rounded-full bg-white/15 text-white text-xl ring-1 ring-white/30 transition hover:bg-white hover:text-primary-deep`}
    >
      {dir === "prev" ? "‹" : "›"}
    </button>
  );
}
