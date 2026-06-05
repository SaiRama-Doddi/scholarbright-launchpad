import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import logoAsset from "@/assets/little.png";

const links = [
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Facilities", href: "#facilities" },
  { label: "Gallery", href: "#gallery" },
  { label: "Admissions", href: "#admissions" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 15);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMobileClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setOpen(false);
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth" });
      }, 50);
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-white/75 backdrop-blur-lg border-b border-border shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)] py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            setOpen(false);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-3 group"
        >
          <div className="relative h-13 w-13 transition-transform duration-300 group-hover:scale-105">
            <img src={logoAsset} alt="Little Scholars" className="h-full w-full object-contain" />
          </div>
          <div className="hidden sm:block leading-tight">
            <div className="font-display text-[15px] font-bold text-primary-deep tracking-tight">Little Scholars</div>
            <div className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground font-semibold">International Preschool</div>
          </div>
        </a>

        {/* nav links */}
        <ul className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative rounded-full px-4 py-2 text-sm font-medium text-foreground/85 transition hover:text-primary-deep"
              >
                <span className="relative z-10">{l.label}</span>
                <span className="absolute inset-0 scale-75 rounded-full bg-primary/6 opacity-0 transition-all duration-300 hover:scale-100 hover:opacity-100" />
              </a>
            </li>
          ))}
        </ul>

        {/* actions & mobile button */}
        <div className="flex items-center gap-3">
          <a
            href="#admissions"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-xs font-bold uppercase tracking-wider text-primary-foreground shadow-[var(--shadow-soft)] transition-all duration-300 hover:bg-primary-deep hover:shadow-[var(--shadow-glow)] hover:-translate-y-[1px]"
          >
            Apply Now
            <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden grid h-9 w-9 place-items-center rounded-xl bg-primary/5 hover:bg-primary/10 active:scale-95 transition-all"
          >
            <div className="relative h-5 w-5">
              {/* Closed State: Waffle grid of 9 dots */}
              <div
                className={`absolute inset-0 grid grid-cols-3 gap-[3px] p-[2px] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  open ? "scale-0 opacity-0 rotate-90" : "scale-100 opacity-100"
                }`}
              >
                {[...Array(9)].map((_, i) => (
                  <span key={i} className="h-1.2 w-1.2 rounded-full bg-primary-deep" />
                ))}
              </div>
              {/* Open State: Elegant Thin Close Icon */}
              <div
                className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  open ? "scale-100 opacity-100 rotate-0" : "scale-0 opacity-0 -rotate-90"
                }`}
              >
                <span className="absolute h-0.5 w-4.5 rounded-full bg-primary-deep rotate-45" />
                <span className="absolute h-0.5 w-4.5 rounded-full bg-primary-deep -rotate-45" />
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* mobile menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="w-full bg-white/95 backdrop-blur-xl border-b border-border lg:hidden overflow-hidden shadow-lg"
          >
            <motion.ul
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: { transition: { staggerChildren: 0.04 } },
                closed: { transition: { staggerChildren: 0.03, staggerDirection: -1 } },
              }}
              className="px-6 py-6 space-y-1.5"
            >
              {links.map((l) => (
                <motion.li
                  key={l.href}
                  variants={{
                    open: { opacity: 1, x: 0 },
                    closed: { opacity: 0, x: -12 },
                  }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                >
                  <a
                    onClick={(e) => handleMobileClick(e, l.href)}
                    href={l.href}
                    className="block rounded-2xl px-4 py-2.5 text-base font-semibold text-primary-deep hover:bg-primary/5 transition-colors"
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                variants={{
                  open: { opacity: 1, x: 0 },
                  closed: { opacity: 0, x: -12 },
                }}
                className="pt-3"
              >
                <a
                  onClick={(e) => handleMobileClick(e, "#admissions")}
                  href="#admissions"
                  className="flex items-center justify-center rounded-full bg-primary py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-md transition hover:bg-primary-deep"
                >
                  Apply Now
                </a>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
