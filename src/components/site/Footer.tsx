import logoAsset from "@/assets/little.jfif";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-primary-deep text-white">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 right-1/4 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-10 h-80 w-80 rounded-full bg-primary/40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pt-16 pb-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-white p-1.5">
                <img src={logoAsset} alt="" className="h-full w-full object-contain" />
              </div>
              <div className="leading-tight">
                <div className="font-display text-lg font-bold">Little Scholars</div>
                <div className="text-[11px] uppercase tracking-[0.18em] text-white/60">International Preschool</div>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/75">
              Inspiring future leaders through joyful, holistic early-childhood education in the heart of Srikakulam.
            </p>
            <div className="mt-5 flex gap-2">
              {["f", "in", "ig", "yt"].map((s) => (
                <a
                  key={s}
                  href="#"
                  aria-label={`Social ${s}`}
                  className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-sm font-semibold transition hover:bg-accent hover:text-primary-deep"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          <FootCol title="Programs" items={["Day Care", "Play Group", "Nursery", "Junior KG", "Senior KG"]} />
          <FootCol title="School" items={["About", "Facilities", "Gallery", "Testimonials", "Admissions"]} />
          <FootCol
            title="Contact"
            items={[
              "Plot 14, Kalki Nagar",
              "Thotapalem Road, Srikakulam – 532005",
              "+91 94928 48489",
              "+91 94917 37399",
            ]}
          />
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/60 sm:flex-row">
          <div>© {new Date().getFullYear()} Little Scholars International Preschool. All rights reserved.</div>
          <div>Inspiring Future Leaders ✦</div>
        </div>
      </div>
    </footer>
  );
}

function FootCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-accent">{title}</div>
      <ul className="mt-4 space-y-2 text-sm text-white/80">
        {items.map((i) => (
          <li key={i}><a href="#" className="transition hover:text-white">{i}</a></li>
        ))}
      </ul>
    </div>
  );
}
