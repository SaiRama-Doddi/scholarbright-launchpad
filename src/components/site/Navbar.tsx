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
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500 ${scrolled ? "glass shadow-[var(--shadow-soft)]" : "bg-transparent"
          }`}
      >
        <a href="#top" className="flex items-center gap-3">
          <div className="grid h-20 w-20 place-items-center p-1">
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
                className="rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition hover:bg-primary/8 hover:text-primary-deep"
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
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition hover:bg-primary-deep hover:shadow-[var(--shadow-glow)]"
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
                className={`absolute inset-0 grid grid-cols-3 gap-[3px] p-[2px] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${open ? "scale-0 opacity-0 rotate-90" : "scale-100 opacity-100"
                  }`}
              >
                {[...Array(9)].map((_, i) => (
                  <span key={i} className="h-1.2 w-1.2 rounded-full bg-primary-deep" />
                ))}
              </div>
              {/* Open State: Elegant Thin Close Icon */}
              <div
                className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${open ? "scale-100 opacity-100 rotate-0" : "scale-0 opacity-0 -rotate-90"
                  }`}
              >
                <span className="absolute h-0.5 w-4.5 rounded-full bg-primary-deep rotate-45" />
                <span className="absolute h-0.5 w-4.5 rounded-full bg-primary-deep -rotate-45" />
              </div>
            </div>
          </button>
        </div>
      </nav>
      {open && (
        <div className="mx-auto mt-2 max-w-7xl lg:hidden">
          <ul className="glass rounded-3xl p-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  onClick={() => setOpen(false)}
                  href={l.href}
                  className="block rounded-2xl px-4 py-3 text-sm font-medium text-foreground/80 hover:bg-primary/8"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
