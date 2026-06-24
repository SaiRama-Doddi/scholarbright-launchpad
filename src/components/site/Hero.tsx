import { useEffect, useState } from "react";
import { GraduationCap, ShieldCheck, Users, Globe, Calendar, Star, User } from "lucide-react";
import logoAsset from "@/assets/little.png";
import img19 from "@/assets/19.jfif";
import img20 from "@/assets/20.jfif";
import img21 from "@/assets/21.jfif";
import { FloatingDecor } from "./FloatingDecor";

const carouselImages = [img19, img20, img21];

export function Hero() {
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setImgIndex((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-gradient-to-r from-[#F8F7F4] via-white to-[#FFF9EE] pt-[115px] pb-[280px] sm:pb-[240px] lg:pb-52"
    >
      <FloatingDecor section="hero" />
      {/* Background decorations */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Soft leaf branch on left */}
        <svg
          viewBox="0 0 120 400"
          className="absolute left-0 top-20 h-[350px] w-24 text-accent/10 pointer-events-none select-none hidden 2xl:block"
          fill="currentColor"
        >
          <path
            d="M0,50 Q40,150 10,250 T30,400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
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
        <div className="absolute -top-20 -right-32 h-[420px] w-[420px] rounded-full bg-accent/15 blur-3xl" />
      </div>

      <div className="grid gap-6 lg:gap-8 px-6 md:px-12 lg:grid-cols-[55%_45%] lg:items-start relative z-10 max-w-[1400px] mx-auto w-full">
        {/* left: copy */}
        <div className="relative animate-fade-up flex flex-col justify-center">
          {/* Dotted airplane path SVG */}
          <svg
            viewBox="0 0 120 100"
            className="absolute -top-8 right-0 w-24 h-20 text-accent/15 pointer-events-none select-none hidden xl:block"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M10,90 C40,70 20,20 60,30 C80,35 90,15 105,10" strokeDasharray="3 3" />
            <g transform="translate(105, 10) rotate(-15)">
              <path
                d="M0,0 L-12,8 L-8,2 L-14,0 L0,0"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="1"
              />
            </g>
          </svg>

          <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/8 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-primary-deep w-fit">
            <Star className="h-3 w-3 fill-accent text-accent" />
            Admissions Open · 2026 - 27
          </div>

          <h1 className="mt-2 font-display text-4xl sm:text-5xl lg:text-6xl xl:text-[72px] font-bold leading-[1.15] text-primary-deep text-balance">
            Little Scholars <br className="hidden sm:inline" />
            International Preschool
          </h1>
          <div className="mt-2 h-1.5 w-20 rounded-full bg-accent" />

          <p className="mt-2 font-sans text-[8px] font-extrabold uppercase tracking-[0.12em] text-primary-deep/80 sm:text-[9px] lg:text-xs">
            Nurturing Curiosity. Building Confidence. Shaping Tomorrow.
          </p>

          <p className="mt-2.5 max-w-md text-xs leading-relaxed text-foreground/70 sm:text-sm lg:text-base">
            A premium international preschool in Srikakulam where curious little minds discover,
            play and grow through activity-based learning in safe, joyful and digitally-enabled
            classrooms.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
            <a
              href="#admissions"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-primary-deep px-6 py-3 text-sm font-bold text-white shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:shadow-lg transition-all duration-300 w-full sm:w-auto text-center"
            >
              <Calendar className="h-4.5 w-4.5" />
              Book Campus Visit
            </a>
            <a
              href="https://wa.me/919492848489"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-full border border-border bg-white px-6 py-3 text-sm font-bold text-primary-deep shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:bg-slate-50 transition-all duration-300 w-full sm:w-auto text-center"
            >
              <WhatsAppIcon className="h-4.5 w-4.5 text-emerald-500" />
              Chat WhatsApp
            </a>
          </div>
        </div>

        {/* right: visual */}
        <div className="relative animate-fade-up [animation-delay:120ms] hidden lg:block">
          <div className="relative">
            <div className="relative overflow-hidden rounded-[2rem] shadow-[0_12px_40px_rgba(0,0,0,0.08)] ring-1 ring-white/60 h-[390px] min-h-[300px] max-h-[500px]">
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
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-deep/20 via-transparent to-transparent z-20" />

              {/* Dot Indicators */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-30">
                {carouselImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setImgIndex(idx)}
                    className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                      idx === imgIndex ? "bg-white w-3" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* floating logo badge */}
            <div className="absolute top-3 left-3 z-30 grid h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 place-items-center rounded-[1.25rem] glass p-2 animate-float shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
              <img src={logoAsset} alt="" className="h-full w-full object-contain" />
            </div>

            {/* floating cap */}
            <div className="absolute top-3 right-3 z-30 grid h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 place-items-center rounded-lg gradient-gold shadow-[0_12px_40px_rgba(0,0,0,0.1)] animate-float-rev">
              <CapIcon className="h-5 w-5 sm:h-6 sm:w-6 text-primary-deep" />
            </div>

            {/* floating stars */}
            <div className="absolute bottom-16 left-2 z-30 grid h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 place-items-center rounded-lg glass shadow-[0_12px_40px_rgba(0,0,0,0.08)] animate-float-rev">
              <StarIcon className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
            </div>

            {/* testimonial card */}
            <div className="absolute -bottom-8 sm:-bottom-10 right-2 sm:right-3 z-30 w-60 sm:w-64 rounded-2xl bg-white p-3 sm:p-4 shadow-[0_12px_40px_rgba(0,0,0,0.08)] animate-float">
              <div className="flex items-center gap-2.5">
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary-deep text-white">
                  <User className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold text-primary-deep truncate">Priya A.</div>
                  <div className="text-[10px] font-semibold text-muted-foreground truncate">
                    Parent • Junior KG
                  </div>
                </div>
              </div>
              <p className="mt-2 text-[11px] leading-snug text-foreground/75">
                "My daughter actually asks to go to school every morning. That says it all!"
              </p>
              <div className="mt-1.5 text-xs text-accent">★★★★★</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave container with stats */}
      <div className="absolute bottom-0 left-0 right-0 bg-primary-deep text-white">
        {/* SVG Wave */}
        <div className="absolute inset-x-0 top-0 -translate-y-full pointer-events-none overflow-hidden h-12 lg:h-20">
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

        <div className="w-full px-6 md:px-12 relative py-3 lg:py-4 max-w-[1400px] mx-auto">
          {/* Stats grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6">
            {[
              { k: "5+", v: "Programs", icon: GraduationCap },
              { k: "100%", v: "Safe & CCTV Monitored Campus", icon: ShieldCheck },
              { k: "Expert", v: "Trained & Caring Faculty", icon: Users },
              { k: "Global", v: "Curriculum & International Standards", icon: Globe },
            ].map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={i} className="flex items-start gap-2 lg:gap-3">
                  <div className="grid h-10 w-10 lg:h-12 lg:w-12 shrink-0 place-items-center rounded-lg lg:rounded-xl bg-white shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
                    <Icon className="h-5 w-5 lg:h-6 lg:w-6 text-primary-deep" />
                  </div>
                  <div className="min-w-0">
                    <dt className="font-display text-lg lg:text-2xl font-bold text-accent">
                      {s.k}
                    </dt>
                    <dd className="text-xs lg:text-sm font-semibold leading-tight text-white/95 mt-0.5">
                      {s.v}
                    </dd>
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
      <path
        d="M6 11v4c0 1.5 2.7 3 6 3s6-1.5 6-3v-4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
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
