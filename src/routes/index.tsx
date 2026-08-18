import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Gauge, Cpu, Route as RouteIcon, HeartPulse } from "lucide-react";

import heroImage from "../assets/hero-apex.jpg";
import { CountUp } from "../components/CountUp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "APEX — The World of Speed, Strategy & Precision" },
      {
        name: "description",
        content:
          "Explore the machines, teams, drivers and technology that define modern Formula 1 in the 2026 season.",
      },
      { property: "og:title", content: "APEX — The World of Speed, Strategy & Precision" },
      {
        property: "og:description",
        content: "The machines, teams, drivers and technology of modern Formula 1.",
      },
    ],
  }),
  component: Index,
});

const STATS = [
  { value: 11, label: "Teams", note: "Constructors on the 2026 grid" },
  { value: 22, label: "Drivers", note: "Two per team, every round" },
  { value: 23, label: "Grands Prix", note: "A season spanning five continents" },
];

const PILLARS = [
  { icon: Gauge, title: "Speed", copy: "Extreme performance and precision." },
  { icon: Cpu, title: "Engineering", copy: "Cutting-edge automotive technology." },
  { icon: RouteIcon, title: "Strategy", copy: "Every decision can change the race." },
  { icon: HeartPulse, title: "Human Skill", copy: "Drivers operating at the limits of performance." },
];

function Index() {
  return (
    <div>
      <section className="relative flex min-h-[100svh] items-center overflow-hidden">
        <img
          src={heroImage}
          alt="Formula 1 car at speed under floodlights on a night circuit"
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/70" />
        <div
          className="animate-drift pointer-events-none absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(60% 45% at 20% 55%, color-mix(in oklab, var(--apex) 26%, transparent), transparent 70%)",
          }}
        />
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {[28, 48, 66].map((top, i) => (
            <span
              key={top}
              className="animate-streak absolute h-px w-1/3 bg-gradient-to-r from-transparent via-primary to-transparent"
              style={{ top: `${top}%`, animationDelay: `${i * 1.6}s` }}
            />
          ))}
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-5 pt-24 pb-16 sm:px-8">
          <p className="eyebrow animate-rise">2026 Formula 1 Season</p>
          <h1
            className="animate-rise mt-4 text-[clamp(4.5rem,17vw,13rem)] leading-[0.82] font-semibold tracking-tight"
            style={{ animationDelay: "80ms" }}
          >
            APEX
          </h1>
          <p
            className="animate-rise mt-5 font-display text-lg tracking-[0.3em] text-primary sm:text-2xl"
            style={{ animationDelay: "160ms" }}
          >
            The World of Speed, Strategy &amp; Precision
          </p>
          <p
            className="animate-rise mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            style={{ animationDelay: "240ms" }}
          >
            Explore the machines, teams, drivers and technology that define modern Formula 1.
          </p>
          <div
            className="animate-rise mt-10 flex flex-col gap-3 sm:flex-row"
            style={{ animationDelay: "320ms" }}
          >
            <Link
              to="/teams"
              className="group inline-flex items-center justify-center gap-3 rounded-sm bg-primary px-8 py-4 font-display text-sm tracking-[0.25em] text-primary-foreground uppercase transition-transform hover:-translate-y-0.5"
              style={{ boxShadow: "var(--shadow-apex)" }}
            >
              Explore Teams
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/race"
              className="group inline-flex items-center justify-center gap-3 rounded-sm border border-border px-8 py-4 font-display text-sm tracking-[0.25em] uppercase transition-colors hover:bg-accent"
            >
              Enter the Race
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-carbon">
        <div className="mx-auto grid max-w-7xl gap-px px-5 sm:px-8 md:grid-cols-3">
          {STATS.map((s) => (
            <div key={s.label} className="py-14 md:px-8 md:not-first:border-l md:border-border">
              <div className="flex items-baseline gap-3">
                <span className="font-display text-6xl font-semibold sm:text-7xl">
                  <CountUp to={s.value} />
                </span>
                <span className="font-display text-xl tracking-[0.2em] text-primary">
                  {s.label}
                </span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{s.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid-lines relative py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="eyebrow">The Appeal</p>
          <h2 className="mt-3 max-w-2xl text-5xl leading-[0.95] font-semibold sm:text-6xl">
            Why Formula 1?
          </h2>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map((p) => (
              <article
                key={p.title}
                className="glass group relative overflow-hidden rounded-sm p-7 transition-transform duration-300 hover:-translate-y-1.5"
              >
                <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <p.icon className="h-7 w-7 text-primary" strokeWidth={1.5} />
                <h3 className="mt-6 font-display text-2xl tracking-wide">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-border py-24">
        <div
          className="animate-drift pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(50% 60% at 80% 40%, color-mix(in oklab, var(--apex) 22%, transparent), transparent 70%)",
          }}
        />
        <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-8 px-5 sm:px-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="eyebrow">The Grid</p>
            <h2 className="mt-3 max-w-2xl text-5xl leading-[0.95] font-semibold sm:text-6xl">
              Eleven teams. <span className="text-gradient-apex">Twenty-two drivers.</span>
            </h2>
            <p className="mt-5 max-w-xl text-muted-foreground">
              Meet every constructor on the 2026 grid, from established works teams to the newest
              entries in the sport.
            </p>
          </div>
          <Link
            to="/teams"
            className="group inline-flex items-center gap-3 rounded-sm bg-primary px-8 py-4 font-display text-sm tracking-[0.25em] text-primary-foreground uppercase transition-transform hover:-translate-y-0.5"
            style={{ boxShadow: "var(--shadow-apex)" }}
          >
            View the Teams
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </div>
  );
}
