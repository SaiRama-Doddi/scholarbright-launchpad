import { useEffect, useState } from "react";
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
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        className={`w-full flex items-center justify-between transition-all duration-500 ${
          scrolled 
            ? "glass border-b border-border/40 py-2.5 px-6 md:px-12 shadow-[var(--shadow-soft)]" 
            : "bg-transparent py-3.5 px-6 md:px-12"
        }`}
      >
        <a href="#top" className="flex items-center gap-3">
          <div className="grid h-20 w-20 place-items-center p-1">
            <img src={logoAsset} alt="Little Scholars" className="h-full w-full object-contain" />
          </div>
          <div className="hidden sm:block leading-tight">
            <div className="font-display text-[15px] font-bold text-primary-deep">Little Scholars</div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">International Preschool</div>
          </div>
        </a>

        <ul className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-4 py-2 text-sm font-semibold text-primary-deep/95 transition hover:bg-primary/8 hover:text-primary-deep"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#admissions"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-primary-deep px-5 py-2.5 text-sm font-semibold text-white shadow-[var(--shadow-soft)] transition hover:bg-primary hover:shadow-[var(--shadow-glow)]"
          >
            Apply Now
            <span aria-hidden>→</span>
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden grid h-10 w-10 place-items-center rounded-full glass"
          >
            <span className="relative block h-3 w-5">
              <span className={`absolute inset-x-0 top-0 h-0.5 rounded-full bg-primary-deep transition ${open ? "translate-y-[6px] rotate-45" : ""}`} />
              <span className={`absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-primary-deep transition ${open ? "-translate-y-[6px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </nav>

      {open && (
        <div className="w-full lg:hidden px-6 pb-4 bg-white/95 backdrop-blur-md border-b border-border/40 shadow-md">
          <ul className="flex flex-col gap-1 pt-2">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  onClick={() => setOpen(false)}
                  href={l.href}
                  className="block rounded-xl px-4 py-3 text-sm font-semibold text-primary-deep hover:bg-primary/8"
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
