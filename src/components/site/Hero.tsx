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
    <section id="top" className="relative isolate overflow-hidden bg-[#FCFBF7]">
      <FloatingDecor section="hero" />
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-[radial-gradient(circle_at_top_left,_rgba(242,182,50,0.12),_transparent_42%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(13,35,134,0.08),_transparent_30%)]" />
      </div>
        {/* Soft leaf branch on left */}
        <svg viewBox="0 0 120 400" className="absolute left-0 top-20 h-[350px] w-24 text-accent/10 pointer-events-none select-none hidden 2xl:block" fill="currentColor">
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
        <div className="absolute -top-20 -right-32 h-[420px] w-[420px] rounded-full bg-accent/15 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto grid h-[860px] w-full max-w-[1440px] grid-cols-1 gap-10 px-6 py-8 lg:grid-cols-[55%_45%] lg:items-center lg:px-12">
        {/* left: copy */}
        <div className="relative animate-fade-up flex flex-col justify-center max-w-[650px]">
          {/* Dotted airplane path SVG */}
          <svg viewBox="0 0 120 100" className="absolute -top-8 right-0 w-24 h-20 text-[#F2B632]/15 pointer-events-none select-none hidden xl:block" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M10,90 C40,70 20,20 60,30 C80,35 90,15 105,10" strokeDasharray="3 3" />
            <g transform="translate(105, 10) rotate(-15)">
              <path d="M0,0 L-12,8 L-8,2 L-14,0 L0,0" fill="currentColor" stroke="currentColor" strokeWidth="1" />
            </g>
          </svg>

          <div className="inline-flex items-center gap-2 rounded-full border border-[#F1C857] bg-[#FFFDF8] px-7 py-3 text-[16px] font-semibold uppercase tracking-[0.08em] text-[#081B7A]">
            <span className="text-lg">⭐</span>
            ADMISSIONS OPEN • 2026 - 27
          </div>

          <h1 className="mt-6 font-display text-[58px] leading-[0.95] tracking-[-0.125em] text-[#081B7A] sm:text-[72px] lg:text-[88px] font-[400]">
            <span className="block whitespace-nowrap">Little Scholars</span>
            <span className="block whitespace-nowrap">International Preschool</span>
          </h1>
          <div className="mt-6 h-1.5 w-24 rounded-full bg-[#F2B632]" />

          <p className="mt-6 text-[18px] uppercase tracking-[0.125em] font-semibold text-[#10257A]">
            NURTURING CURIOSITY. BUILDING CONFIDENCE. SHAPING TOMORROW.
          </p>

          <p className="mt-6 max-w-[650px] text-[28px] leading-[1.8] text-[#667085]">
            A premium international preschool in Srikakulam where curious little minds discover, play and grow through activity-based learning in safe, joyful and digitally-enabled classrooms.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <a
              href="#admissions"
              className="inline-flex h-[72px] w-[290px] items-center justify-center gap-3 rounded-full bg-[#0B2286] text-[26px] font-semibold text-white shadow-[0_20px_60px_rgba(11,34,134,0.22)] transition hover:bg-[#091A72]"
            >
              <span className="grid h-12 w-12 place-items-center rounded-full bg-white text-[#0B2286] shadow-sm">
                <Calendar className="h-5 w-5" />
              </span>
              Book a Campus Visit
            </a>
            <a
              href="https://wa.me/919492848489"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-[72px] w-[260px] items-center justify-center gap-3 rounded-full border border-[#E6E6E6] bg-white text-[24px] font-semibold text-[#0B2286] shadow-[0_16px_40px_rgba(0,0,0,0.08)] transition hover:bg-[#f7f7f7]"
            >
              <span className="grid h-12 w-12 place-items-center rounded-full bg-[#ECFDF5] text-[#16A34A] shadow-sm">
                <span className="text-xl">🟢</span>
              </span>
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* right: visual */}
        <div className="relative animate-fade-up hidden lg:flex justify-center items-center">
          <div className="relative w-[720px] h-[540px] overflow-hidden rounded-[48px] shadow-[0_30px_80px_rgba(0,0,0,0.12)]">
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
            <div className="absolute inset-0 bg-gradient-to-tr from-[#081B7A]/10 via-transparent to-transparent z-20" />
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

            {/* floating logo badge */}
            <div className="absolute top-6 left-6 z-30 grid h-16 w-16 place-items-center rounded-[28px] bg-white shadow-[0_20px_40px_rgba(0,0,0,0.12)]">
              <img src={logoAsset} alt="" className="h-full w-full object-contain" />
            </div>

            {/* floating cap */}
            <div className="absolute top-6 right-6 z-30 grid h-14 w-14 place-items-center rounded-[22px] bg-[#F2B632] text-[#081B7A] shadow-[0_20px_40px_rgba(0,0,0,0.12)]">
              <CapIcon className="h-5 w-5 sm:h-6 sm:w-6 text-primary-deep" />
            </div>

            {/* floating star badge */}
            <div className="absolute bottom-6 left-6 z-30 grid h-14 w-14 place-items-center rounded-[22px] bg-white shadow-[0_20px_40px_rgba(0,0,0,0.12)]">
              <span className="text-xl text-[#F2B632]">⭐</span>
            </div>

            {/* testimonial card */}
            <div className="absolute bottom-6 right-6 z-30 w-[360px] rounded-[28px] bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.1)]">
              <div className="mb-4 flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-[#081B7A] text-white">
                  <User className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-[18px] font-semibold text-[#081B7A]">Priya A.</div>
                  <div className="text-[14px] font-medium text-[#667085]">Parent • Junior KG</div>
                </div>
              </div>
              <p className="text-[18px] leading-[1.6] text-[#10257A]">
                “My daughter actually asks to go to school every morning. That says it all!”
              </p>
              <div className="mt-4 flex gap-1 text-[#F2B632] text-xl">★★★★★</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom stats ribbon */}
      <div className="relative bg-[#071D83] text-white">
        {/* Wave curve */}
        <div className="absolute inset-x-0 top-0 h-24 overflow-hidden">
          <svg viewBox="0 0 1440 140" className="h-full w-full" preserveAspectRatio="none">
            <path d="M0,140 Q360,40 720,100 T1440,60 L1440,140 L0,140 Z" fill="#071D83" />
          </svg>
        </div>
        
        {/* Border at top */}
        <div className="absolute inset-x-0 top-20 border-t-[4px] border-[#F2B632]" />
        
        {/* Content */}
        <div className="relative mx-auto max-w-[1440px] px-6 md:px-12 py-12">
          <div className="flex items-center justify-between gap-8">
            {/* Stats grid */}
            <div className="flex-1 grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
              {[
                { icon: "🎓", title: "5+", desc: "Programs" },
                { icon: "🛡️", title: "100%", desc: "Safe & CCTV\nMonitored Campus" },
                { icon: "👥", title: "Expert", desc: "Trained & Caring\nFaculty" },
                { icon: "🌐", title: "Global", desc: "Curriculum &\nInternational Standards" },
              ].map((item, index) => (
                <div key={item.title} className={`flex items-center gap-4 ${index > 0 && index < 4 ? "border-l border-[#F2B632]/30 pl-6" : ""}`}>
                  <div className="grid h-20 w-20 flex-shrink-0 place-items-center rounded-3xl bg-white text-[40px] shadow-[0_16px_40px_rgba(0,0,0,0.16)]">
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <dt className="font-display text-[36px] font-normal text-[#F2B632] leading-[1]">{item.title}</dt>
                    <dd className="mt-1 text-[16px] font-medium leading-[1.4] text-white/95 whitespace-pre-line">{item.desc}</dd>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Testimonial card */}
            <div className="hidden lg:block flex-shrink-0 w-80">
              <div className="rounded-[28px] bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.16)]">
                <div className="mb-4 flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-[#081B7A] text-white text-lg">
                    👤
                  </div>
                  <div className="min-w-0">
                    <div className="text-[16px] font-semibold text-[#081B7A]">Priya A.</div>
                    <div className="text-[13px] font-medium text-[#667085]">Parent • Junior KG</div>
                  </div>
                </div>
                <p className="text-[15px] leading-[1.6] text-[#10257A]">
                  "My daughter actually asks to go to school every morning. That says it all!"
                </p>
                <div className="mt-4 flex gap-0.5 text-[#F2B632] text-base">★★★★★</div>
              </div>
            </div>
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
