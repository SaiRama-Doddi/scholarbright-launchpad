import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";

type Program = {
  slug: string;
  name: string;
  age: string;
  tagline: string;
  color: string;
  overview: string;
  highlights: string[];
  daily: { time: string; activity: string }[];
  outcomes: string[];
};

const PROGRAMS: Record<string, Program> = {
  "day-care": {
    slug: "day-care",
    name: "Day Care",
    age: "8 months – 5 yrs",
    tagline: "Safe, loving care all day long.",
    color: "from-amber-200 to-yellow-300",
    overview:
      "Our Day Care wraps your child in warmth, safety and meaningful play from morning to evening. Trained caregivers, hygienic spaces, nap rooms and freshly prepared meals make this a true second home.",
    highlights: [
      "Trained nannies & supervisors",
      "CCTV-monitored, AC rooms",
      "Hygienic nap & changing areas",
      "Nutritious meals & snacks",
      "Sensory & motor play zones",
      "Flexible half-day / full-day slots",
    ],
    daily: [
      { time: "8:30 – 9:30", activity: "Welcome, free play & breakfast" },
      { time: "9:30 – 11:00", activity: "Circle time, songs & sensory play" },
      { time: "11:00 – 12:30", activity: "Outdoor / indoor activity rotation" },
      { time: "12:30 – 1:30", activity: "Lunch & story time" },
      { time: "1:30 – 3:30", activity: "Nap time" },
      { time: "3:30 – 5:30", activity: "Snack, art & pick-up" },
    ],
    outcomes: [
      "Builds independence & social confidence",
      "Strong fine & gross motor skills",
      "Healthy routine and emotional security",
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
    highlights: [
      "Sensory & messy-play stations",
      "Music, movement & rhymes",
      "Toilet-training support",
      "Parent-orientation sessions",
      "Tiny-tot circle time",
      "Buddy system for new joiners",
    ],
    daily: [
      { time: "9:00 – 9:30", activity: "Welcome & free play" },
      { time: "9:30 – 10:00", activity: "Circle time & rhymes" },
      { time: "10:00 – 10:45", activity: "Theme-based activity" },
      { time: "10:45 – 11:15", activity: "Snack & story" },
      { time: "11:15 – 12:00", activity: "Outdoor play & goodbye" },
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
    highlights: [
      "Phonics & pre-writing patterns",
      "Numbers 1–20 with manipulatives",
      "Smart-class storytelling",
      "Show-and-tell & speech days",
      "Art, craft & music",
      "Field trips & theme weeks",
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
      "Counts and recognises numbers 1–20",
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
    highlights: [
      "Reading & writing readiness",
      "Numeracy with concrete material",
      "EVS through hands-on projects",
      "Smart-class & digital learning",
      "Public speaking opportunities",
      "Yoga, dance & sports",
    ],
    daily: [
      { time: "9:00 – 9:20", activity: "Assembly" },
      { time: "9:20 – 10:10", activity: "English / phonics" },
      { time: "10:10 – 10:40", activity: "Snack & free play" },
      { time: "10:40 – 11:30", activity: "Maths & EVS" },
      { time: "11:30 – 12:15", activity: "Activity / specialist class" },
      { time: "12:15 – 12:30", activity: "Reflection & dispersal" },
    ],
    outcomes: [
      "Reads 3- & 4-letter words confidently",
      "Writes letters, numbers & own name",
      "Strong listening and speaking skills",
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
    highlights: [
      "Reading fluency & comprehension",
      "Cursive writing introduction",
      "Maths reasoning & word problems",
      "Science experiments & STEM",
      "Leadership & house activities",
      "Big-school transition program",
    ],
    daily: [
      { time: "9:00 – 9:20", activity: "Assembly & news" },
      { time: "9:20 – 10:15", activity: "English / reading" },
      { time: "10:15 – 10:45", activity: "Snack" },
      { time: "10:45 – 11:40", activity: "Maths" },
      { time: "11:40 – 12:20", activity: "EVS / STEM / activity" },
      { time: "12:20 – 12:30", activity: "Wrap-up & dispersal" },
    ],
    outcomes: [
      "Reads short stories independently",
      "Writes simple sentences & cursive",
      "Solves age-appropriate maths problems",
    ],
  },
};

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
  const { program: p } = Route.useLoaderData();

  return (
    <main className="relative overflow-x-hidden bg-cream">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-5xl px-4">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-deep">
            <span aria-hidden>←</span> Back to all programs
          </Link>
          <div className="mt-6 flex items-center gap-4">
            <div className={`grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br ${p.color} font-display text-2xl font-bold text-primary-deep shadow-[var(--shadow-soft)]`}>
              {p.name.charAt(0)}
            </div>
            <span className="rounded-full bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-primary-deep ring-1 ring-border">
              {p.age}
            </span>
          </div>
          <h1 className="mt-6 font-display text-4xl font-bold leading-tight text-primary-deep sm:text-6xl text-balance">
            {p.name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-foreground/75">{p.tagline}</p>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-foreground/80">{p.overview}</p>
        </div>
      </section>

      {/* Highlights */}
      <section className="relative pb-16">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="font-display text-3xl font-bold text-primary-deep">Program highlights</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {p.highlights.map((h) => (
              <div key={h} className="rounded-2xl bg-card p-5 shadow-[var(--shadow-soft)] ring-1 ring-border">
                <div className="flex items-start gap-3">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-accent text-primary-deep text-xs font-bold">✓</span>
                  <p className="text-sm font-medium text-foreground/85">{h}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily schedule */}
      <section className="relative pb-16">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="font-display text-3xl font-bold text-primary-deep">A day in the life</h2>
          <div className="mt-6 overflow-hidden rounded-3xl bg-card shadow-[var(--shadow-soft)] ring-1 ring-border">
            {p.daily.map((d, i) => (
              <div
                key={d.time}
                className={`flex items-center gap-4 px-6 py-4 sm:px-8 ${i !== 0 ? "border-t border-border" : ""}`}
              >
                <div className="w-28 shrink-0 font-display text-sm font-bold text-primary sm:w-36 sm:text-base">{d.time}</div>
                <div className="text-sm text-foreground/80 sm:text-base">{d.activity}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="relative pb-20">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="font-display text-3xl font-bold text-primary-deep">What your child will gain</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {p.outcomes.map((o, i) => (
              <div key={o} className="relative overflow-hidden rounded-3xl bg-white p-6 shadow-[var(--shadow-soft)] ring-1 ring-border">
                <div className="font-display text-4xl font-bold text-accent">0{i + 1}</div>
                <p className="mt-3 text-sm font-medium text-foreground/85">{o}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative pb-24">
        <div className="mx-auto max-w-5xl px-4">
          <div className="relative overflow-hidden rounded-[2rem] gradient-royal p-8 sm:p-12 text-white shadow-[var(--shadow-glow)]">
            <div aria-hidden className="absolute -top-16 -right-16 h-64 w-64 rounded-full bg-accent/30 blur-3xl" />
            <div className="relative flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="font-display text-2xl font-bold sm:text-3xl">Ready to enrol in {p.name}?</h3>
                <p className="mt-2 text-white/85">Book a campus visit and meet our team.</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link to="/" hash="admissions" className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-primary-deep shadow-[var(--shadow-gold)]">
                  Enquire now
                </Link>
                <a href="https://wa.me/919492848489" target="_blank" rel="noopener" className="rounded-full bg-white/15 px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/30 hover:bg-white/25">
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
