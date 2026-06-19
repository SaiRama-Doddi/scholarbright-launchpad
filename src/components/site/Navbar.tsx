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
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
      
      const scrollPosition = window.scrollY + 160;
      
      for (const link of links) {
        const id = link.href.replace("#", "");
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.href);
            return;
          }
        }
      }
      
      if (window.scrollY < 100) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
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
        open
          ? "bg-white border-b border-border/20 shadow-lg h-auto pb-6"
          : scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-border/20 h-[90px]"
          : "bg-transparent h-[90px]"
      }`}
    >
      <nav className="mx-auto flex h-[90px] max-w-[1440px] items-center justify-between px-6 md:px-12">
        <a href="#top" className="flex items-center gap-3">
          <div className="grid h-16 w-16 place-items-center p-1">
            <img src={logoAsset} alt="Little Scholars" className="h-full w-full object-contain" />
          </div>
          <div className="leading-tight">
            <div className="font-display text-[16px] font-semibold text-[#081B7A] tracking-tight">Little Scholars</div>
            <div className="text-[10px] uppercase tracking-[0.28em] text-[#081B7A]/70 font-semibold">International Preschool</div>
          </div>
        </a>

        {/* nav links */}
        <ul className="hidden lg:flex items-center gap-[24px]">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                  activeSection === l.href
                    ? "bg-[#0B2286]/8 text-[#0B2286]"
                    : "text-foreground/80 hover:bg-primary/8 hover:text-primary-deep"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* actions & mobile button */}
        <div className="flex items-center gap-3">
          <a
            href="#admissions"
            className="hidden md:inline-flex h-[56px] w-[180px] items-center justify-center rounded-full bg-[#0B2286] text-[16px] font-semibold text-white shadow-[0_16px_40px_rgba(11,34,134,0.18)] transition hover:bg-[#091A72]"
          >
            Apply Now →
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
      </nav>

      {/* mobile menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-2 max-w-7xl lg:hidden overflow-hidden px-6"
          >
            <motion.ul
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: { transition: { staggerChildren: 0.04 } },
                closed: { transition: { staggerChildren: 0.03, staggerDirection: -1 } },
              }}
              className="glass rounded-3xl p-3 space-y-1"
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
                    className={`block rounded-2xl px-4 py-3 text-sm font-semibold transition-colors ${
                      activeSection === l.href
                        ? "bg-[#0B2286]/8 text-[#0B2286]"
                        : "text-foreground/80 hover:bg-primary/8 hover:text-primary-deep"
                    }`}
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
                className="pt-2 md:hidden"
              >
                <a
                  onClick={(e) => handleMobileClick(e, "#admissions")}
                  href="#admissions"
                  className="flex items-center justify-center rounded-full bg-primary py-3 text-sm font-semibold text-primary-foreground shadow-md transition hover:bg-primary-deep"
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
