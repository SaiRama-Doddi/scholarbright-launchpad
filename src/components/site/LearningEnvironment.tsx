import { motion } from "motion/react";
import learningImg from "@/assets/learning-environment.jpg";
import { SectionEyebrow } from "./About";
import { FloatingDecor } from "./FloatingDecor";

const pillars = [
  { t: "Fun Learning", d: "Curiosity sparked through games, songs and stories.", icon: "✦" },
  { t: "Creativity", d: "Art, music and free play to set young imaginations free.", icon: "✿" },
  { t: "Social Skills", d: "Friendships, sharing and confidence in a kind community.", icon: "♥" },
  { t: "Communication", d: "Expressive language built through conversation and rhyme.", icon: "✎" },
  { t: "Emotional Growth", d: "Empathy, resilience and self-awareness, gently nurtured.", icon: "❋" },
  { t: "Interactive Education", d: "Smart-board lessons and hands-on discovery zones.", icon: "▣" },
];

export function LearningEnvironment() {
  return (
    <section className="section-pad relative overflow-hidden bg-cream">
      <FloatingDecor section="learning" />
      <div className="mx-auto max-w-7xl px-4 relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[2.25rem] shadow-[var(--shadow-glow)] ring-1 ring-white/60">
              <img
                src={learningImg}
                alt="Children reading and learning in a bright preschool environment"
                width={1280}
                height={1024}
                loading="lazy"
                className="h-[480px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-deep/30 to-transparent" />
            </div>

            {/* floating badge */}
            <div className="absolute -bottom-6 -right-4 w-56 rounded-3xl glass p-4 shadow-[var(--shadow-soft)] animate-float">
              <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Learning Style</div>
              <div className="mt-1 font-display text-2xl font-bold text-primary-deep">Activity-Based</div>
              <div className="text-xs text-foreground/70">Learning by doing</div>
            </div>
            <div className="absolute -top-5 -left-5 grid h-16 w-16 place-items-center rounded-2xl gradient-gold shadow-[var(--shadow-gold)] animate-float-rev">
              <span className="text-2xl">✏︎</span>
            </div>
          </motion.div>

          {/* Content side */}
          <div>
            <SectionEyebrow>Learning Environment</SectionEyebrow>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-primary-deep sm:text-5xl text-balance">
              An environment that helps every child{" "}
              <span className="gradient-text-gold">bloom in their own way.</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-foreground/75">
              From storytime to STEM corners, every moment is designed to balance discovery with joy —
              so children grow into confident, kind, curious humans.
            </p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {pillars.map((p, i) => (
                <motion.li
                  key={p.t}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="flex items-start gap-3 rounded-2xl bg-card p-4 ring-1 ring-border"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl gradient-gold text-lg text-primary-deep">
                    {p.icon}
                  </span>
                  <div>
                    <div className="font-display font-bold text-primary-deep">{p.t}</div>
                    <div className="text-xs text-foreground/70 leading-relaxed">{p.d}</div>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
