import { useEffect, useState } from "react";
import { GraduationCap, ShieldCheck, Users, Globe, Calendar, Star, User } from "lucide-react";
import heroImg from "@/assets/hero-children.jpg";
import logoAsset from "@/assets/little.png";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import { FloatingDecor } from "./FloatingDecor";

const carouselImages = [heroImg, gallery1, gallery2, gallery3, gallery4];

export function Hero() {
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setImgIndex((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="top" className="relative isolate overflow-hidden bg-cream min-h-screen lg:min-h-[120vh] flex flex-col justify-between pt-28 lg:pt-36 pb-0">
      <FloatingDecor section="hero" />
      {/* Background decorations */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Soft leaf branch on left */}
        <svg viewBox="0 0 120 400" className="absolute left-0 top-20 h-[350px] w-24 text-accent/15 pointer-events-none select-none hidden 2xl:block" fill="currentColor">
          <path d="M0,50 Q40,150 10,250 T30,400" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M10,80 C25,70 45,75 50,90 C45,105 25,100 10,80 Z" />
          <path d="M18,140 C35,130 55,135 60,150 C55,165 35,160 18,140 Z" />
          <path d="M15,210 C32,200 52,205 57,220 C52,235 32,230 15,210 Z" />
          <path d="M11,280 C26,270 41,275 46,290 C41,305 26,300 11,280 Z" />
          <path d="M17,350 C32,340 47,345 52,360 C47,375 32,370 17,350 Z" />
          <path d="M5,110 C-5,100 -25,105 -30,120 C-25,135 -5,130 5,110 Z" />
          <path d="M12,175 C2,165 -18,170 -23,185 C-18,200 2,195 12,175 Z" />
          <path d="M11,245 C1,235 -19,240 -24,255 C-19,270 1,265 11,245 Z" />
          <path d="M16,315 C6,305 -14,310 -19,325 C-14,340 6,335 16,315 Z" />
        </svg>

        {/* Floating background blobs */}
        <div className="absolute -top-32 -left-32 h-[480px] w-[480px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute top-40 -right-24 h-[420px] w-[420px] rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-[300px] w-[300px] rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="w-full grid gap-10 px-6 md:px-12 pb-6 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-14 my-auto relative z-10">
        {/* left: copy */}
        <div className="relative animate-fade-up">
          {/* Dotted airplane path SVG */}
          <svg viewBox="0 0 120 100" className="absolute -top-16 right-0 w-32 h-28 text-accent/20 pointer-events-none select-none hidden xl:block" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M10,90 C40,70 20,20 60,30 C80,35 90,15 105,10" strokeDasharray="3 3" />
            <g transform="translate(105, 10) rotate(-15)">
              <path d="M0,0 L-12,8 L-8,2 L-14,0 L0,0" fill="currentColor" stroke="currentColor" strokeWidth="1" />
            </g>
          </svg>

          <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/8 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-primary-deep">
            <Star className="h-3.5 w-3.5 fill-accent text-accent animate-pulse" />
            Admissions Open · 2026 - 27
          </div>

          <h1 className="mt-3 font-display text-[26px] sm:text-5xl lg:text-[62px] font-bold leading-[1.1] text-primary-deep text-balance">
            Little Scholars <br className="hidden sm:inline" />
            <span className="whitespace-nowrap text-primary-deep">International Preschool</span>
          </h1>
          <div className="mt-2 h-1.5 w-20 sm:w-28 rounded-full bg-accent animate-fade-up" />

          <p className="mt-3.5 font-sans text-[9px] font-extrabold uppercase tracking-[0.12em] text-primary-deep/90 sm:text-xs lg:text-sm whitespace-nowrap">
            Nurturing curiosity. Building confidence. Shaping tomorrow.
          </p>

          <p className="mt-3 max-w-xl text-sm leading-relaxed text-foreground/75 sm:text-base">
            A premium international preschool in Srikakulam where curious little minds discover, play and grow —
            through activity-based learning in safe, joyful and digitally-enabled classrooms.
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-4">
            <a
              href="#admissions"
              className="inline-flex items-center gap-3 rounded-full bg-primary-deep px-7 py-3.5 text-sm font-semibold text-white shadow-[var(--shadow-soft)] hover-lift hover:bg-primary transition-all duration-300"
            >
              <Calendar className="h-4 w-4" />
              Book a Campus Visit
            </a>
            <a
              href="https://wa.me/919492848489"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-full border border-border bg-white px-7 py-3.5 text-sm font-semibold text-primary-deep shadow-[var(--shadow-soft)] hover-lift hover:bg-white transition-all duration-300"
            >
              <WhatsAppIcon className="h-4 w-4 text-emerald-500" />
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* right: visual */}
        <div className="relative animate-fade-up [animation-delay:120ms] pb-16 sm:pb-24">
          <div className="relative">
            <div className="relative overflow-hidden rounded-[2.25rem] shadow-[var(--shadow-glow)] ring-1 ring-white/60 h-[300px] w-full sm:h-[380px] lg:h-[420px]">
              {carouselImages.map((img, idx) => (
                <img
                  key={img}
                  src={img}
                  alt="Preschool children learning and playing"
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
                    idx === imgIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                  }`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-deep/30 via-transparent to-transparent z-20" />
              
              {/* Dot Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-30">
                {carouselImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setImgIndex(idx)}
                    className={`h-2 w-2 rounded-full transition-all duration-300 ${
                      idx === imgIndex ? "bg-white w-4" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* floating logo badge */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-30 grid h-16 w-16 sm:h-24 sm:w-24 md:h-28 md:w-28 place-items-center rounded-[1.5rem] sm:rounded-[2rem] glass p-2 sm:p-3 animate-float">
              <img src={logoAsset} alt="" className="h-full w-full object-contain" />
            </div>

            {/* floating cap */}
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-30 grid h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 place-items-center rounded-xl sm:rounded-2xl gradient-gold shadow-[var(--shadow-gold)] animate-float-rev">
              <CapIcon className="h-6 w-6 sm:h-7 sm:w-7 text-primary-deep" />
            </div>

            {/* floating stars */}
            <div className="absolute bottom-20 sm:bottom-24 left-2 sm:left-4 z-30 grid h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 place-items-center rounded-xl sm:rounded-2xl glass animate-float-rev">
              <StarIcon className="h-6 w-6 sm:h-8 sm:w-8 text-accent" />
            </div>

            {/* testimonial card */}
            <div className="absolute -bottom-10 sm:-bottom-12 right-2 sm:right-4 z-30 w-64 sm:w-72 rounded-[2rem] bg-white p-4 sm:p-5 shadow-[var(--shadow-glow)] animate-float">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary-deep text-white">
                  <User className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-bold text-primary-deep truncate">Priya A.</div>
                  <div className="text-[11px] font-semibold text-muted-foreground truncate">Parent • Junior KG</div>
                </div>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-foreground/80">
                "My daughter actually asks to go to school every morning. That says it all!"
              </p>
              <div className="mt-2 text-sm text-accent">★★★★★</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave container with stats */}
      <div className="relative bg-primary-deep pt-12 pb-8 text-white mt-auto w-full">
        {/* SVG Wave */}
        <div className="absolute inset-x-0 top-0 -translate-y-[98%] pointer-events-none overflow-hidden h-20 lg:h-32">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            preserveAspectRatio="none"
            className="w-full h-full"
          >
            <path
              d="M0,80 C320,160 720,0 1120,80 C1280,110 1360,110 1440,80 L1440,120 L0,120 Z"
              fill="var(--primary-deep)"
            />
          </svg>
        </div>

        <div className="w-full px-6 md:px-12 relative overflow-hidden">
          {/* Stats grid */}
          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { k: "5+", v: "Programs", icon: GraduationCap },
              { k: "100%", v: "Safe & CCTV Monitored Campus", icon: ShieldCheck },
              { k: "Expert", v: "Trained & Caring Faculty", icon: Users },
              { k: "Global", v: "Curriculum & International Standards", icon: Globe },
            ].map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={i} className="flex items-start gap-3 sm:gap-4">
                  <div className="grid h-12 w-12 sm:h-14 sm:w-14 shrink-0 place-items-center rounded-2xl bg-white text-primary shadow-[var(--shadow-soft)]">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary-deep" />
                  </div>
                  <div className="min-w-0">
                    <dt className="font-display text-xl sm:text-2xl font-bold text-accent">{s.k}</dt>
                    <dd className="mt-0.5 text-[10px] sm:text-xs font-semibold leading-tight text-white/90 break-words">{s.v}</dd>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function CapIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M2 9l10-5 10 5-10 5L2 9z" fill="currentColor" />
      <path d="M6 11v4c0 1.5 2.7 3 6 3s6-1.5 6-3v-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M22 9v5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function StarIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 2.5l2.9 6.1 6.6.7-4.9 4.6 1.4 6.6L12 17.3l-6 3.2 1.4-6.6L2.5 9.3l6.6-.7L12 2.5z" />
    </svg>
  );
}

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M20.5 3.5A11 11 0 0 0 3.2 17.2L2 22l4.9-1.3A11 11 0 1 0 20.5 3.5zM12 20.1a8.1 8.1 0 0 1-4.1-1.1l-.3-.2-2.9.8.8-2.8-.2-.3A8.1 8.1 0 1 1 12 20.1zm4.7-6.1c-.3-.1-1.5-.7-1.7-.8s-.4-.1-.6.1c-.2.3-.7.8-.8 1-.1.2-.3.2-.5.1-1.5-.6-2.4-1.1-3.4-2.6-.3-.4.3-.4.7-1.3.1-.1 0-.3 0-.4 0-.1-.6-1.5-.8-2-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 1.9 0 1.1.8 2.2 1 2.4.1.2 1.7 2.6 4.1 3.6 1.4.6 2 .6 2.7.5.4-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.2-.2-.5-.3z" />
    </svg>
  );
}
