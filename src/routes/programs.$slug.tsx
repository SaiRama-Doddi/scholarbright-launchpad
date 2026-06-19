import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import {
  Heart,
  ShieldCheck,
  Sparkles,
  Users,
  Camera,
  Moon,
  Utensils,
  Smile,
  Clock,
  Palette,
  Music,
  HeartHandshake,
  PenTool,
  Tv,
  Mic,
  Paintbrush,
  Compass,
  Megaphone,
  Activity,
  Brain,
  Calculator,
  FlaskConical,
  Shield,
  Trophy,
  ArrowLeft
} from "lucide-react";

import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

interface HighlightItem {
  title: string;
  desc: string;
  icon: string;
}

interface Program {
  slug: string;
  name: string;
  age: string;
  tagline: string;
  color: string;
  overview: string;
  img: string;
  highlights: HighlightItem[];
  daily: { time: string; activity: string }[];
  outcomes: string[];
}

const PROGRAMS: Record<string, Program> = {
  "day-care": {
    slug: "day-care",
    name: "Day Care",
    age: "1.5 – 5 yrs",
    tagline: "Safe, loving care all day long.",
    color: "from-amber-200 to-yellow-300",
    overview:
      "Our Day Care wraps your child in warmth, safety and meaningful play from morning to evening. Trained caregivers, hygienic spaces, nap rooms and freshly prepared meals make this a true second home.",
    img: g3,
    highlights: [
      { title: "Trained nannies & supervisors", desc: "Caring professionals dedicated to your child's well-being.", icon: "users" },
      { title: "CCTV-monitored, AC rooms", desc: "Safe, secure and comfortable spaces for your peace of mind.", icon: "camera" },
      { title: "Hygienic nap & changing areas", desc: "Clean, cozy spaces for rest and personal care.", icon: "moon" },
      { title: "Nutritious meals & snacks", desc: "Fresh, balanced meals prepared daily.", icon: "utensils" },
      { title: "Sensory & motor play zones", desc: "Designed to spark curiosity and build key skills.", icon: "smile" },
      { title: "Flexible half-day / full-day slots", desc: "Timings that adapt to your family's needs.", icon: "clock" },
    ],
    daily: [
      { time: "9:00 – 9:30", activity: "Welcome, free play & breakfast" },
      { time: "9:30 – 11:00", activity: "Circle time, songs & sensory play" },
      { time: "11:00 – 12:30", activity: "Outdoor / indoor activity rotation" },
      { time: "12:30 – 1:30", activity: "Lunch & story time" },
      { time: "1:30 – 3:00", activity: "Nap time & quiet play" },
      { time: "3:00 – 3:30", activity: "Afternoon snack & pick-up" },
    ],
    outcomes: [
      "Builds independence & social confidence",
      "Strong fine & gross motor skills",
      "Healthy routine & emotional security",
    ],
  },
  "play-group": {
    slug: "play-group",
    name: "Play Group",
    age: "1.5 – 2.5 yrs",
    tagline: "First steps into social learning.",
    color: "from-rose-200 to-pink-300",
    overview:
      "Play Group is your child's very first classroom — full of rhymes, colours, textures and friends. Short, joyful sessions help them separate happily and discover the magic of learning together.",
    img: g2,
    highlights: [
      { title: "Sensory & messy-play stations", desc: "Exploring textures, colors, and shapes creatively.", icon: "palette" },
      { title: "Music, movement & rhymes", desc: "Developing rhythm, speech, and physical coordination.", icon: "music" },
      { title: "Toilet-training support", desc: "Gentle guidance for key early milestones.", icon: "sparkles" },
      { title: "Parent-orientation sessions", desc: "Partnering together for a smooth transition.", icon: "handshake" },
      { title: "Tiny-tot circle time", desc: "Learning to listen, share, and make friends.", icon: "users" },
      { title: "Buddy system for new joiners", desc: "Ensuring every child feels welcomed and happy.", icon: "heart" },
    ],
    daily: [
      { time: "9:00 – 9:45", activity: "Welcome & creative free play" },
      { time: "9:45 – 10:15", activity: "Circle time, music & rhymes" },
      { time: "10:15 – 11:00", activity: "Hands-on sensory activity" },
      { time: "11:00 – 11:30", activity: "Healthy snack break" },
      { time: "11:30 – 12:15", activity: "Outdoor play & interactive games" },
      { time: "12:15 – 12:30", activity: "Creative block building & goodbye" },
    ],
    outcomes: [
      "Confident separation from parent",
      "Early vocabulary & listening skills",
      "Beginning of friendships & sharing",
    ],
  },
  nursery: {
    slug: "nursery",
    name: "Nursery",
    age: "2.5 – 3.5 yrs",
    tagline: "Language, motor skills & early concepts.",
    color: "from-sky-200 to-blue-300",
    overview:
      "Nursery introduces structured learning through stories, role-play and hands-on exploration. Children build vocabulary, recognise letters and numbers, and start expressing themselves with confidence.",
    img: g1,
    highlights: [
      { title: "Phonics & pre-writing patterns", desc: "Fun activities to build vocabulary and pencil grip.", icon: "pentool" },
      { title: "Numbers 1–20 with manipulatives", desc: "Hands-on math concepts using toys and blocks.", icon: "calculator" },
      { title: "Smart-class storytelling", desc: "Interactive screens bring classic tales to life.", icon: "tv" },
      { title: "Show-and-tell & speech days", desc: "Building early confidence and public speaking skills.", icon: "mic" },
      { title: "Art, craft & music", desc: "Unleashing creative minds through self-expression.", icon: "paintbrush" },
      { title: "Field trips & theme weeks", desc: "Real-world experiences to expand young horizons.", icon: "compass" },
    ],
    daily: [
      { time: "9:00 – 9:20", activity: "Assembly & prayer" },
      { time: "9:20 – 10:00", activity: "Literacy / phonics" },
      { time: "10:00 – 10:30", activity: "Snack break" },
      { time: "10:30 – 11:15", activity: "Numeracy & concept time" },
      { time: "11:15 – 12:00", activity: "Art, music or outdoor" },
      { time: "12:00 – 12:30", activity: "Circle time & dispersal" },
    ],
    outcomes: [
      "Reads 50+ sight words & basic phonics",
      "Counts & recognises numbers 1–20",
      "Holds a pencil with control",
    ],
  },
  "junior-kg": {
    slug: "junior-kg",
    name: "Junior KG",
    age: "3.5 – 4.5 yrs",
    tagline: "The joyful runway to formal school.",
    color: "from-violet-200 to-purple-300",
    overview:
      "Junior KG balances structured academics with play. Children read simple words, write letters and numbers, and explore the world through themes, experiments and group projects.",
    img: g4,
    highlights: [
      { title: "Reading & writing readiness", desc: "Phonics-based reading and letter formation guides.", icon: "pentool" },
      { title: "Numeracy with concrete material", desc: "Simple addition, subtraction, and patterns.", icon: "calculator" },
      { title: "EVS through hands-on projects", desc: "Exploring nature, seasons, and community help.", icon: "compass" },
      { title: "Smart-class & digital learning", desc: "Interactive smartboard lessons for high engagement.", icon: "tv" },
      { title: "Public speaking opportunities", desc: "Presentations and debates to build leadership.", icon: "megaphone" },
      { title: "Yoga, dance & sports", desc: "Active play for physical fitness and focus.", icon: "activity" },
    ],
    daily: [
      { time: "9:00 – 9:20", activity: "Morning assembly & circle time" },
      { time: "9:20 – 10:10", activity: "English literacy & phonics" },
      { time: "10:10 – 10:40", activity: "Healthy snack break & outdoor play" },
      { time: "10:40 – 11:30", activity: "Mathematics concepts & writing" },
      { time: "11:30 – 12:30", activity: "Environmental Studies (EVS) & Science" },
      { time: "12:30 – 1:30", activity: "Lunch break & stories" },
      { time: "1:30 – 2:30", activity: "Creative arts & music/movement" },
      { time: "2:30 – 3:15", activity: "Physical development & active games" },
      { time: "3:15 – 3:30", activity: "Reflection & home dispersal" },
    ],
    outcomes: [
      "Reads 3- & 4-letter words confidently",
      "Writes letters, numbers & own name",
      "Strong listening & speaking skills",
    ],
  },
  "senior-kg": {
    slug: "senior-kg",
    name: "Senior KG",
    age: "4.5 – 5.5 yrs",
    tagline: "Ready for big school, the LSIP way.",
    color: "from-emerald-200 to-teal-300",
    overview:
      "Senior KG prepares children for primary school with reading, writing, reasoning and problem solving. Our integrated curriculum nurtures curiosity, leadership and a love for learning.",
    img: g6,
    highlights: [
      { title: "Reading fluency & comprehension", desc: "Independent reading and comprehension skills.", icon: "pentool" },
      { title: "Cursive writing introduction", desc: "Learning pencil control and flow for writing.", icon: "pentool" },
      { title: "Maths reasoning & word problems", desc: "Analytical thinking and early problem solving.", icon: "brain" },
      { title: "Science experiments & STEM", desc: "Hands-on science lab activities and construction.", icon: "flask" },
      { title: "Leadership & house activities", desc: "Team projects, roles, and school houses.", icon: "shield" },
      { title: "Big-school transition program", desc: "Prepping for primary school academic rigor.", icon: "users" },
    ],
    daily: [
      { time: "9:00 – 9:20", activity: "Morning assembly & daily news" },
      { time: "9:20 – 10:15", activity: "English reading & comprehension" },
      { time: "10:15 – 10:45", activity: "Healthy snack break & outdoor play" },
      { time: "10:45 – 11:40", activity: "Mathematics reasoning" },
      { time: "11:40 – 12:30", activity: "EVS & STEM hands-on lab" },
      { time: "12:30 – 1:30", activity: "Lunch break & quiet time" },
      { time: "1:30 – 2:30", activity: "Hindi / regional language writing" },
      { time: "2:30 – 3:15", activity: "Sports, yoga & leadership games" },
      { time: "3:15 – 3:30", activity: "Reflection, checklist & dispersal" },
    ],
    outcomes: [
      "Reads short stories independently",
      "Writes simple sentences & cursive",
      "Solves age-appropriate maths problems",
    ],
  },
};

function HighlightIcon({ name, className = "" }: { name: string; className?: string }) {
  switch (name) {
    case "users":
      return <Users className={className} />;
    case "camera":
      return <Camera className={className} />;
    case "moon":
      return <Moon className={className} />;
    case "utensils":
      return <Utensils className={className} />;
    case "smile":
      return <Smile className={className} />;
    case "clock":
      return <Clock className={className} />;
    case "palette":
      return <Palette className={className} />;
    case "music":
      return <Music className={className} />;
    case "handshake":
      return <HeartHandshake className={className} />;
    case "pentool":
      return <PenTool className={className} />;
    case "tv":
      return <Tv className={className} />;
    case "mic":
      return <Mic className={className} />;
    case "paintbrush":
      return <Paintbrush className={className} />;
    case "compass":
      return <Compass className={className} />;
    case "megaphone":
      return <Megaphone className={className} />;
    case "activity":
      return <Activity className={className} />;
    case "brain":
      return <Brain className={className} />;
    case "calculator":
      return <Calculator className={className} />;
    case "flask":
      return <FlaskConical className={className} />;
    case "shield":
      return <Shield className={className} />;
    default:
      return <Sparkles className={className} />;
  }
}

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M20.5 3.5A11 11 0 0 0 3.2 17.2L2 22l4.9-1.3A11 11 0 1 0 20.5 3.5zM12 20.1a8.1 8.1 0 0 1-4.1-1.1l-.3-.2-2.9.8.8-2.8-.2-.3A8.1 8.1 0 1 1 12 20.1zm4.7-6.1c-.3-.1-1.5-.7-1.7-.8s-.4-.1-.6.1c-.2.3-.7.8-.8 1-.1.2-.3.2-.5.1-1.5-.6-2.4-1.1-3.4-2.6-.3-.4.3-.4.7-1.3.1-.1 0-.3 0-.4 0-.1-.6-1.5-.8-2-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 1.9 0 1.1.8 2.2 1 2.4.1.2 1.7 2.6 4.1 3.6 1.4.6 2 .6 2.7.5.4-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.2-.2-.5-.3z" />
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

export const Route = createFileRoute("/programs/$slug")({
  loader: ({ params }) => {
    const program = PROGRAMS[params.slug];
    if (!program) throw notFound();
    return { program };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.program;
    const title = p
      ? `${p.name} (${p.age}) — Little Scholars International Preschool`
      : "Program — Little Scholars";
    const description = p
      ? `${p.tagline} ${p.overview.slice(0, 110)}`
      : "Explore our preschool programs at Little Scholars International, Srikakulam.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen grid place-items-center px-4 text-center">
      <div>
        <h1 className="font-display text-3xl font-bold text-primary-deep">Program not found</h1>
        <p className="mt-2 text-foreground/70">The program you're looking for doesn't exist.</p>
        <Link to="/" className="mt-6 inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground">
          Back to home
        </Link>
      </div>
    </div>
  ),
  errorComponent: ({ reset }) => (
    <div className="min-h-screen grid place-items-center px-4 text-center">
      <div>
        <h1 className="font-display text-2xl font-bold text-primary-deep">Something went wrong</h1>
        <button onClick={reset} className="mt-4 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground">Retry</button>
      </div>
    </div>
  ),
  component: ProgramDetail,
});

function ProgramDetail() {
  const { program: p } = Route.useLoaderData() as { program: Program };

  return (
    <main className="relative overflow-x-hidden bg-cream">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-20">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 md:px-12 relative z-10">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:gap-14">
            
            {/* Left Column Content */}
            <div>
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary-deep transition-colors"
              >
                <ArrowLeft className="h-4 w-4" /> Back to all programs
              </Link>
              
              {/* Badge & Age */}
              <div className="mt-6 flex items-center gap-3.5">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-accent font-display text-lg font-extrabold text-primary-deep shadow-sm select-none">
                  {p.name.charAt(0)}
                </div>
                <span className="rounded-full bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-primary-deep ring-1 ring-border shadow-sm">
                  {p.age}
                </span>
              </div>
              
              <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.1] text-primary-deep sm:text-5xl lg:text-[62px] text-balance">
                {p.name}
              </h1>
              
              <p className="mt-4 font-display text-lg font-bold text-primary-deep/90 sm:text-xl lg:text-2xl text-balance">
                {p.tagline}
              </p>
              
              <p className="mt-4 text-sm leading-relaxed text-foreground/75 sm:text-base">
                {p.overview}
              </p>
              
              {/* Core Attributes */}
              <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-5 border-t border-border/60 pt-6">
                <div className="flex items-center gap-2.5">
                  <div className="grid h-8 w-8 place-items-center rounded-lg bg-accent/20">
                    <Heart className="h-4.5 w-4.5 text-primary-deep fill-primary-deep/20" />
                  </div>
                  <span className="text-xs font-bold text-primary-deep">Nurturing & Trained Staff</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="grid h-8 w-8 place-items-center rounded-lg bg-primary/10">
                    <ShieldCheck className="h-4.5 w-4.5 text-primary-deep" />
                  </div>
                  <span className="text-xs font-bold text-primary-deep">Safe & Secure Environment</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="grid h-8 w-8 place-items-center rounded-lg bg-emerald-50">
                    <Sparkles className="h-4.5 w-4.5 text-emerald-600" />
                  </div>
                  <span className="text-xs font-bold text-primary-deep">Hygienic & Child Friendly Spaces</span>
                </div>
              </div>
            </div>

            {/* Right Column Visual Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-[2.25rem] lg:rounded-l-[18rem] lg:rounded-r-[2.25rem] shadow-[var(--shadow-glow)] ring-1 ring-white/60">
                <img
                  src={p.img}
                  alt={p.name}
                  className="h-[300px] sm:h-[400px] lg:h-[450px] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-deep/30 via-transparent to-transparent z-20" />
              </div>

              {/* Floating WhatsApp chat widget */}
              <a
                href="https://wa.me/919492848489"
                target="_blank"
                rel="noreferrer"
                className="absolute -bottom-6 right-6 lg:-left-6 lg:right-auto z-30 inline-flex items-center gap-3.5 rounded-full bg-white px-5 py-3.5 shadow-[var(--shadow-glow)] border border-border hover:scale-105 transition-transform duration-300 cursor-pointer"
              >
                <div className="grid h-10 w-10 place-items-center rounded-full bg-[#25D366] text-white">
                  <WhatsAppIcon className="h-5 w-5 fill-current" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground leading-none">Have questions?</div>
                  <div className="mt-0.5 text-xs font-bold text-primary-deep leading-none">Chat on WhatsApp</div>
                </div>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="relative py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 md:px-12 relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/8 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-primary-deep">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Program Highlights
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold text-primary-deep sm:text-4xl">
              Program highlights
            </h2>
            <div className="mt-3 flex justify-center text-accent">
              <StarIcon className="h-5 w-5" />
            </div>
          </div>
          
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {p.highlights.map((h) => (
              <div
                key={h.title}
                className="group relative overflow-hidden rounded-[2rem] bg-card p-7 shadow-[var(--shadow-soft)] ring-1 ring-border hover-lift transition-all duration-300"
              >
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-accent/10 text-primary-deep shadow-sm group-hover:bg-accent/20 transition-colors duration-300">
                  <HighlightIcon name={h.icon} className="h-6.5 w-6.5 text-primary-deep" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-primary-deep leading-snug">
                  {h.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                  {h.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily schedule */}
      <section className="relative py-16 bg-cream">
        <div className="mx-auto max-w-7xl px-6 md:px-12 relative z-10">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            
            {/* Left Column title and outline letters */}
            <div className="relative lg:sticky lg:top-24">
              <h2 className="font-display text-4xl font-extrabold leading-tight text-primary-deep sm:text-5xl">
                A day in <br className="hidden lg:inline" />
                the life
              </h2>
              <div className="mt-3 h-1.5 w-20 rounded-full bg-accent" />
              
              {/* Outline toy blocks decoration (A B C) */}
              <div className="relative mt-12 h-36 w-full opacity-35 select-none pointer-events-none hidden lg:block">
                <div className="absolute left-4 top-2 grid h-12 w-12 place-items-center rounded-xl border border-primary-deep text-lg font-extrabold text-primary-deep rotate-[-8deg]">A</div>
                <div className="absolute left-16 top-10 grid h-12 w-12 place-items-center rounded-xl border border-primary-deep text-lg font-extrabold text-primary-deep rotate-[12deg]">B</div>
                <div className="absolute left-8 top-20 grid h-12 w-12 place-items-center rounded-xl border border-primary-deep text-lg font-extrabold text-primary-deep rotate-[-15deg]">C</div>
                <StarIcon className="absolute left-28 top-4 h-4.5 w-4.5 text-accent" />
                <StarIcon className="absolute left-32 top-16 h-3.5 w-3.5 text-accent" />
              </div>
            </div>

            {/* Right Column timeline card */}
            <div className="overflow-hidden rounded-[2.5rem] bg-white p-6 sm:p-8 shadow-[var(--shadow-glow)] ring-1 ring-border">
              <div className="divide-y divide-border/60">
                {p.daily.map((d) => (
                  <div key={d.time} className="flex items-center gap-5 py-5 first:pt-0 last:pb-0">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary-deep text-white shadow-sm">
                      <Clock className="h-4.5 w-4.5" />
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6 flex-1">
                      <span className="font-display text-base font-extrabold text-primary-deep tracking-wide sm:w-36 whitespace-nowrap">
                        {d.time}
                      </span>
                      <span className="text-sm font-semibold text-foreground/75 leading-relaxed">
                        {d.activity}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Saturday Special Section */}
      <section className="relative py-20 bg-[#FAF9F5] overflow-hidden">
        {/* Decorative background characters similar to the mockup */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 opacity-30 select-none">
          <div className="absolute left-[8%] top-[15%] text-6xl font-display font-extrabold text-[#F59E0B]/10 rotate-[-12deg]">A</div>
          <div className="absolute right-[10%] top-[20%] text-6xl font-display font-extrabold text-[#3B82F6]/10 rotate-[15deg]">1</div>
          <div className="absolute left-[5%] bottom-[20%] text-6xl font-display font-extrabold text-[#EF4444]/10 rotate-[-8deg]">B</div>
          <div className="absolute right-[8%] bottom-[15%] text-6xl font-display font-extrabold text-[#10B981]/10 rotate-[22deg]">2</div>
          <div className="absolute left-[50%] top-[10%] text-4xl font-display font-extrabold text-[#8B5CF6]/10 rotate-[5deg]">B</div>
          <div className="absolute left-[35%] bottom-[8%] text-5xl font-display font-extrabold text-[#EC4899]/10 rotate-[-18deg]">C</div>
        </div>

        <div className="mx-auto max-w-7xl px-6 md:px-12 relative z-10">
          <div className="mx-auto max-w-3xl text-center mb-14">
            <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4.5 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-orange-600">
              🎉 Saturday Special
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold text-primary-deep sm:text-4xl">
              "No Bag Day" Saturday Program
            </h2>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-foreground/75 max-w-2xl mx-auto">
              Every Saturday, children leave their school bags at home to engage in a day of cultural enrichment, creative arts, and general knowledge development.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 lg:items-stretch">
            {/* Box 1: Spiritual & Cultural Learning */}
            <div className="relative overflow-hidden rounded-[2.5rem] bg-[#FEFDFB] p-8 sm:p-10 ring-1 ring-amber-100/80 shadow-[var(--shadow-soft)] hover:shadow-md transition-shadow duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3.5 mb-8">
                  {/* Bell Icon Wrapper */}
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-amber-100/70 text-amber-600 shadow-sm">
                    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                    </svg>
                  </div>
                  {/* Diya (Oil Lamp) Icon Wrapper */}
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-amber-100/70 text-amber-600 shadow-sm">
                    <svg viewBox="0 0 24 24" fill="none" className="h-6.5 w-6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2C12 2 9.5 5 9.5 7.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5C14.5 5 12 2 12 2z" fill="currentColor" className="text-amber-500" />
                      <path d="M2 14c0 3.3 4.5 6 10 6s10-2.7 10-6" />
                      <path d="M3.5 14h17" />
                    </svg>
                  </div>
                </div>

                <h3 className="font-display text-2xl font-bold text-primary-deep leading-snug">
                  Spiritual & Cultural Learning
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-foreground/70">
                  Building deep moral roots and cultural awareness. Every Saturday, children learn and recite:
                </p>

                <ul className="mt-6 space-y-4">
                  {[
                    "Sanskrit Slokas Recitation",
                    "Hanuman Chalisa Chanting"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3.5 text-sm font-semibold text-amber-900 bg-amber-50/40 rounded-2xl p-3 border border-amber-100/30">
                      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-amber-100 text-amber-600 text-xs">🌸</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10 pt-6 border-t border-amber-100/50 flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-600">
                  Connecting Kids With Roots
                </span>
                <span className="text-amber-500 font-bold text-base">→</span>
              </div>
            </div>

            {/* Box 2: Creative & Cognitive Activities */}
            <div className="relative overflow-hidden rounded-[2.5rem] bg-[#F7F9FC] p-8 sm:p-10 ring-1 ring-blue-100/80 shadow-[var(--shadow-soft)] hover:shadow-md transition-shadow duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3.5 mb-8">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-100 text-blue-600 shadow-sm">
                    <Palette className="h-6 w-6" />
                  </div>
                </div>

                <h3 className="font-display text-2xl font-bold text-primary-deep leading-snug">
                  Creative & Cognitive Activities
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-foreground/70">
                  Interactive and engaging sessions designed to foster creativity, global awareness, and self-confidence.
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {[
                    { title: "Dance & Rhythms", desc: "Expression & Coordination", icon: "activity", color: "text-rose-500 bg-rose-50 border-rose-100/50" },
                    { title: "Vocal & Instrument Music", desc: "Ear Training & Rhythm", icon: "music", color: "text-purple-500 bg-purple-50 border-purple-100/50" },
                    { title: "General Awareness", desc: "World Facts & Logic", icon: "brain", color: "text-emerald-500 bg-emerald-50 border-emerald-100/50" },
                    { title: "States & Capitals", desc: "Geography & Map Basics", icon: "compass", color: "text-sky-500 bg-sky-50 border-sky-100/50" }
                  ].map((act, idx) => (
                    <div key={idx} className="bg-white rounded-2xl p-4 border border-slate-100 shadow-[0_2px_8px_-3px_rgba(0,0,0,0.05)] hover-lift flex items-start gap-3">
                      <div className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl ${act.color.split(" ")[1]} ${act.color.split(" ")[0]}`}>
                        <HighlightIcon name={act.icon} className="h-5 w-5" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-xs font-bold text-primary-deep truncate">{act.title}</h4>
                        <p className="text-[10px] font-medium text-muted-foreground mt-0.5 leading-tight">{act.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-slate-200/50 flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#4A5568]">
                  Holistic Saturday Curriculum
                </span>
                <span className="text-blue-500 font-bold text-base">★</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="relative py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 md:px-12 relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/8 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-primary-deep">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Future Benefits
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold text-primary-deep sm:text-4xl">
              What your child will gain
            </h2>
            <div className="mt-3 flex justify-center text-accent">
              <StarIcon className="h-5 w-5" />
            </div>
          </div>
          
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {/* Card 1: Gold / Yellow Theme */}
            <div className="relative overflow-hidden rounded-[2.25rem] bg-amber-50/30 p-8 shadow-[var(--shadow-soft)] ring-1 ring-amber-100/75 hover-lift flex flex-col justify-between h-full min-h-[180px]">
              <div className="flex items-start justify-between w-full">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-amber-100 text-amber-600 shadow-sm">
                  <Trophy className="h-6 w-6" />
                </div>
                <span className="font-display text-3xl font-bold text-amber-200">01</span>
              </div>
              <p className="mt-6 text-sm font-bold text-primary-deep leading-relaxed">
                {p.outcomes[0]}
              </p>
            </div>

            {/* Card 2: Purple / Blue Theme */}
            <div className="relative overflow-hidden rounded-[2.25rem] bg-purple-50/30 p-8 shadow-[var(--shadow-soft)] ring-1 ring-purple-100/75 hover-lift flex flex-col justify-between h-full min-h-[180px]">
              <div className="flex items-start justify-between w-full">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-purple-100 text-purple-600 shadow-sm">
                  <Activity className="h-6 w-6" />
                </div>
                <span className="font-display text-3xl font-bold text-purple-200">02</span>
              </div>
              <p className="mt-6 text-sm font-bold text-primary-deep leading-relaxed">
                {p.outcomes[1]}
              </p>
            </div>

            {/* Card 3: Green / Teal Theme */}
            <div className="relative overflow-hidden rounded-[2.25rem] bg-emerald-50/30 p-8 shadow-[var(--shadow-soft)] ring-1 ring-emerald-100/75 hover-lift flex flex-col justify-between h-full min-h-[180px]">
              <div className="flex items-start justify-between w-full">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-emerald-100 text-emerald-600 shadow-sm">
                  <Heart className="h-6 w-6 fill-emerald-600/10" />
                </div>
                <span className="font-display text-3xl font-bold text-emerald-200">03</span>
              </div>
              <p className="mt-6 text-sm font-bold text-primary-deep leading-relaxed">
                {p.outcomes[2]}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative pb-24 bg-cream">
        <div className="mx-auto max-w-5xl px-6 relative z-10">
          <div className="relative overflow-hidden rounded-[2.5rem] gradient-royal p-8 sm:p-12 text-white shadow-[var(--shadow-glow)] ring-1 ring-white/10">
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-accent/25 blur-3xl" />
              <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
              <svg className="absolute inset-0 h-full w-full opacity-[0.06]" aria-hidden>
                <defs>
                  <pattern id="cta-dots" width="22" height="22" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1.4" fill="white" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#cta-dots)" />
              </svg>
            </div>

            <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div>
                <h3 className="font-display text-2xl font-bold sm:text-3xl">
                  Ready to enroll in {p.name}?
                </h3>
                <p className="mt-2 text-sm text-white/95 font-medium">
                  Book a campus visit and meet our team.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-4 shrink-0">
                <Link
                  to="/"
                  hash="admissions"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-bold text-primary-deep shadow-[var(--shadow-gold)] hover:bg-yellow-400 transition-colors duration-300"
                >
                  Enquire now
                </Link>
                <a
                  href="https://wa.me/919492848489"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-bold text-white hover:bg-white/20 transition-all duration-300"
                >
                  <WhatsAppIcon className="h-4.5 w-4.5 fill-current" />
                  WhatsApp us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFab />
    </main>
  );
}
