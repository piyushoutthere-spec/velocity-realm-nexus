import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Wind, BatteryCharging, Waves, ChevronDown, Timer, Flag, Trophy } from "lucide-react";

import raceHero from "../assets/race-hero.jpg";

export const Route = createFileRoute("/race")({
  head: () => ({
    meta: [
      { title: "The Race — APEX | Where Speed Meets Strategy" },
      {
        name: "description",
        content:
          "How a Formula 1 race weekend works: practice, qualifying and the race, tyre compounds, DRS, ERS, aerodynamics and pit-stop strategy explained.",
      },
      { property: "og:title", content: "The Race — APEX | Where Speed Meets Strategy" },
      {
        property: "og:description",
        content: "Race weekend format, tyre compounds, technology and strategy, explained simply.",
      },
    ],
  }),
  component: RacePage,
});

const SESSIONS = [
  {
    id: "practice",
    label: "Practice",
    icon: Timer,
    detail:
      "Teams use practice to learn the circuit conditions, evaluate set-up changes and gather tyre data. Nothing is scored, but the information collected here shapes qualifying and race decisions.",
  },
  {
    id: "qualifying",
    label: "Qualifying",
    icon: Flag,
    detail:
      "Qualifying decides the starting order. It runs in three knockout segments, with the slowest cars eliminated after each one, until the fastest drivers fight for pole position in the final segment.",
  },
  {
    id: "race",
    label: "Race",
    icon: Trophy,
    detail:
      "The Grand Prix is the main event. Drivers cover a set race distance, must complete at least one pit stop under dry-tyre rules, and points are awarded to the leading finishers.",
  },
];

const TYRES = [
  {
    name: "Soft",
    copy: "Maximum grip, shorter lifespan.",
    color: "oklch(0.6 0.22 27)",
    note: "Best for a single fast lap or a short, aggressive stint.",
  },
  {
    name: "Medium",
    copy: "Balanced grip and durability.",
    color: "oklch(0.82 0.16 90)",
    note: "The usual compromise compound for a flexible race stint.",
  },
  {
    name: "Hard",
    copy: "Lower grip, longer lifespan.",
    color: "oklch(0.9 0.01 285)",
    note: "Slower to warm up, but able to carry a long stint to the end.",
  },
];

const TECH = [
  {
    icon: Wind,
    title: "DRS",
    subtitle: "Drag Reduction System",
    copy: "DRS opens a flap in the rear wing, reducing drag so the car reaches a higher top speed on a straight. Drivers may only activate it in designated detection zones when they are within one second of the car ahead, and it closes again as soon as they brake.",
  },
  {
    icon: BatteryCharging,
    title: "ERS",
    subtitle: "Energy Recovery Systems",
    copy: "ERS harvests energy that would otherwise be wasted — mainly under braking and from the exhaust turbine — stores it in a battery, and returns it as electrical power to the drivetrain. That deployment adds significant performance, so managing how and when it is used is part of the driver's job.",
  },
  {
    icon: Waves,
    title: "Aerodynamics",
    subtitle: "Downforce vs Drag",
    copy: "Wings and floor surfaces push the car towards the track, generating downforce that increases cornering grip. More downforce usually means more drag, which costs straight-line speed, so every circuit demands a different balance between the two.",
  },
];

const STRATEGIES = [
  {
    id: "one",
    name: "One Stop",
    copy: "Conserve tyres and minimize pit-lane time.",
    stints: [
      { label: "Medium", width: 48, color: "oklch(0.82 0.16 90)" },
      { label: "Hard", width: 52, color: "oklch(0.9 0.01 285)" },
    ],
    outcome:
      "One visit to the pit lane means less time lost stationary, but the driver must manage tyre wear across two long stints and may lack pace late on.",
  },
  {
    id: "two",
    name: "Two Stop",
    copy: "Trade additional pit stops for fresher tyres.",
    stints: [
      { label: "Soft", width: 30, color: "oklch(0.6 0.22 27)" },
      { label: "Medium", width: 34, color: "oklch(0.82 0.16 90)" },
      { label: "Medium", width: 36, color: "oklch(0.82 0.16 90)" },
    ],
    outcome:
      "Shorter stints allow the driver to push harder throughout, at the cost of extra time in the pit lane and more exposure to traffic on rejoining.",
  },
  {
    id: "undercut",
    name: "Undercut",
    copy: "Pit earlier to attempt to gain track position through fresher tyres.",
    stints: [
      { label: "Medium", width: 34, color: "oklch(0.82 0.16 90)" },
      { label: "Soft", width: 66, color: "oklch(0.6 0.22 27)" },
    ],
    outcome:
      "By stopping before a rival, the driver uses the immediate pace of new tyres to build enough of a gap to emerge ahead once the rival finally pits.",
  },
];

const FAQ = [
  {
    q: "What is a Grand Prix?",
    a: "A Grand Prix is a single round of the Formula 1 World Championship. It is a race held over a set distance at a circuit, and it forms the centrepiece of a weekend that also includes practice and qualifying.",
  },
  {
    q: "How does qualifying work?",
    a: "Qualifying is run in three knockout segments. All cars run in the first segment and the slowest are eliminated; the process repeats in the second, and the remaining drivers set their fastest lap in the third to decide pole position and the front of the grid.",
  },
  {
    q: "What is a pit stop?",
    a: "A pit stop is a scheduled visit to the team's garage area during the race, mainly to fit a fresh set of tyres. The crew works in a matter of seconds, because every moment stationary is time lost to cars still on track.",
  },
  {
    q: "Why do teams use different tyre compounds?",
    a: "Softer compounds offer more grip but wear out faster, while harder compounds last longer with less outright pace. Choosing between them lets teams trade lap time against the number of pit stops they need.",
  },
  {
    q: "How does DRS work?",
    a: "When a driver is close enough to the car ahead at a detection point, they can open a flap in the rear wing along a designated straight. That reduces drag and raises top speed, making an overtake more achievable.",
  },
];

function RacePage() {
  const [session, setSession] = useState("practice");
  const [strategy, setStrategy] = useState("one");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const activeSession = SESSIONS.find((s) => s.id === session) ?? SESSIONS[0];
  const activeStrategy = STRATEGIES.find((s) => s.id === strategy) ?? STRATEGIES[0];

  return (
    <div>
      <section className="relative flex min-h-[72svh] items-end overflow-hidden">
        <img
          src={raceHero}
          alt="Close-up of Formula 1 carbon fibre aerodynamic bodywork"
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pt-32 pb-16 sm:px-8">
          <p className="eyebrow animate-rise">2026 Season</p>
          <h1 className="animate-rise mt-3 text-6xl leading-[0.88] font-semibold sm:text-8xl">
            The Race
          </h1>
          <p className="animate-rise mt-4 font-display text-lg tracking-[0.28em] text-primary sm:text-xl">
            Where Speed Meets Strategy
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-carbon py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="eyebrow">Format</p>
          <h2 className="mt-3 text-5xl leading-[0.95] font-semibold sm:text-6xl">Race Weekend</h2>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {SESSIONS.map((s, i) => {
              const active = s.id === session;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setSession(s.id)}
                  aria-pressed={active}
                  className={`glass group relative rounded-sm p-6 text-left transition-all duration-300 hover:-translate-y-1 ${
                    active ? "border-primary" : ""
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs tracking-[0.2em] text-muted-foreground">
                      0{i + 1}
                    </span>
                    <s.icon
                      className={`h-5 w-5 ${active ? "text-primary" : "text-muted-foreground"}`}
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="mt-6 font-display text-2xl tracking-wide">{s.label}</h3>
                  <span
                    className={`mt-4 block h-px w-full origin-left bg-primary transition-transform duration-300 ${
                      active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-50"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          <div key={activeSession.id} className="glass animate-rise mt-6 rounded-sm p-7">
            <h3 className="font-display text-xl tracking-[0.2em] text-primary">
              {activeSession.label}
            </h3>
            <p className="mt-3 max-w-3xl leading-relaxed text-muted-foreground">
              {activeSession.detail}
            </p>
          </div>

          <p className="mt-6 rounded-sm border border-dashed border-border p-5 text-sm leading-relaxed text-muted-foreground">
            <span className="font-display tracking-[0.2em] text-foreground uppercase">
              Sprint weekends:
            </span>{" "}
            selected rounds use a Sprint format, which can include additional sessions — a shorter
            race and its own separate qualifying session — replacing part of the usual practice
            running.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="eyebrow">Compounds</p>
          <h2 className="mt-3 text-5xl leading-[0.95] font-semibold sm:text-6xl">Tyre Strategy</h2>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {TYRES.map((t) => (
              <article
                key={t.name}
                className="glass group relative overflow-hidden rounded-sm p-7 transition-all duration-300 hover:-translate-y-2"
              >
                <div
                  className="pointer-events-none absolute -top-20 -right-20 h-44 w-44 rounded-full opacity-10 blur-3xl transition-opacity duration-500 group-hover:opacity-40"
                  style={{ backgroundColor: t.color }}
                />
                <div
                  className="relative flex h-14 w-14 items-center justify-center rounded-full border-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ borderColor: t.color }}
                >
                  <span className="font-display text-lg">{t.name[0]}</span>
                </div>
                <h3 className="relative mt-6 font-display text-2xl tracking-[0.15em]">{t.name}</h3>
                <p className="relative mt-2 text-sm text-muted-foreground">{t.copy}</p>
                <p className="relative mt-4 border-t border-border pt-4 text-sm text-foreground/75">
                  {t.note}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-carbon py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="eyebrow">Under the Bodywork</p>
          <h2 className="mt-3 text-5xl leading-[0.95] font-semibold sm:text-6xl">Technology</h2>
          <div className="mt-12 divide-y divide-border border-y border-border">
            {TECH.map((t) => (
              <article key={t.title} className="group grid gap-4 py-9 md:grid-cols-[1fr_2fr]">
                <div className="flex items-start gap-4">
                  <t.icon className="mt-1 h-6 w-6 text-primary" strokeWidth={1.5} />
                  <div>
                    <h3 className="font-display text-3xl tracking-wide transition-colors group-hover:text-primary">
                      {t.title}
                    </h3>
                    <p className="mt-1 font-mono text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
                      {t.subtitle}
                    </p>
                  </div>
                </div>
                <p className="leading-relaxed text-muted-foreground">{t.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="eyebrow">Race Strategy</p>
          <h2 className="mt-3 text-5xl leading-[0.95] font-semibold sm:text-6xl">Make the Call</h2>
          <p className="mt-5 max-w-2xl text-muted-foreground">
            Choose an approach and see how the stints play out across the race distance.
          </p>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {STRATEGIES.map((s) => {
              const active = s.id === strategy;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setStrategy(s.id)}
                  aria-pressed={active}
                  className={`glass rounded-sm p-6 text-left transition-all duration-300 hover:-translate-y-1 ${
                    active ? "border-primary" : ""
                  }`}
                  style={active ? { boxShadow: "var(--shadow-apex)" } : undefined}
                >
                  <h3
                    className={`font-display text-2xl tracking-wide ${active ? "text-primary" : ""}`}
                  >
                    {s.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.copy}</p>
                </button>
              );
            })}
          </div>

          <div key={activeStrategy.id} className="glass animate-rise mt-6 rounded-sm p-7">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="font-display text-xl tracking-[0.2em] text-primary">
                {activeStrategy.name}
              </h3>
              <span className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
                Race distance
              </span>
            </div>
            <div className="mt-5 flex h-9 w-full overflow-hidden rounded-sm border border-border">
              {activeStrategy.stints.map((st, i) => (
                <div
                  key={`${st.label}-${i}`}
                  className="animate-rise flex items-center justify-center border-r border-background/60 last:border-0"
                  style={{
                    width: `${st.width}%`,
                    backgroundColor: `color-mix(in oklab, ${st.color} 35%, transparent)`,
                    animationDelay: `${i * 140}ms`,
                  }}
                >
                  <span className="font-mono text-[10px] tracking-[0.18em] uppercase">
                    {st.label}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-3 flex justify-between font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
              <span>Lap 1</span>
              <span>
                {activeStrategy.stints.length - 1} pit{" "}
                {activeStrategy.stints.length - 1 === 1 ? "stop" : "stops"}
              </span>
              <span>Finish</span>
            </div>
            <p className="mt-6 max-w-3xl leading-relaxed text-muted-foreground">
              {activeStrategy.outcome}
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-carbon py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <p className="eyebrow">Questions</p>
          <h2 className="mt-3 text-5xl leading-[0.95] font-semibold sm:text-6xl">FAQ</h2>
          <div className="mt-12 border-t border-border">
            {FAQ.map((item, i) => {
              const open = openFaq === i;
              return (
                <div key={item.q} className="border-b border-border">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(open ? null : i)}
                    aria-expanded={open}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="font-display text-xl tracking-wide transition-colors hover:text-primary">
                      {item.q}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-primary transition-transform duration-300 ${
                        open ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`grid overflow-hidden transition-all duration-400 ${
                      open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <p className="min-h-0 pr-10 pb-6 leading-relaxed text-muted-foreground">
                      {item.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}