import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { MapPin, ArrowUpRight } from "lucide-react";

import { CIRCUITS, REGION_LABEL, TRAIT_LABEL, type Region, type Trait } from "../lib/circuits";
import { CircuitGlyph } from "../components/CircuitGlyph";

export const Route = createFileRoute("/circuits")({
  head: () => ({
    meta: [
      { title: "Circuits — APEX | The 2026 Formula 1 Calendar" },
      {
        name: "description",
        content:
          "Explore all 24 rounds of the 2026 Formula 1 calendar: Grand Prix, circuit, country, host city, capital and what makes each track special.",
      },
      { property: "og:title", content: "Circuits — APEX | The 2026 Formula 1 Calendar" },
      {
        property: "og:description",
        content: "An interactive explorer for every circuit on the 2026 Formula 1 calendar.",
      },
    ],
  }),
  component: CircuitsPage,
});

const REGIONS: ("all" | Region)[] = ["all", "europe", "americas", "asia", "middle-east", "australia"];
const TRAITS: Trait[] = ["high-speed", "street", "technical", "high-downforce"];

function CircuitsPage() {
  const [region, setRegion] = useState<"all" | Region>("all");
  const [trait, setTrait] = useState<Trait | null>(null);

  const list = useMemo(
    () =>
      CIRCUITS.filter(
        (c) =>
          (region === "all" || c.region === region) && (trait === null || c.traits.includes(trait)),
      ),
    [region, trait],
  );

  return (
    <div className="pt-28 pb-24">
      <section className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="eyebrow">2026 Calendar</p>
        <h1 className="mt-3 text-6xl leading-[0.9] font-semibold sm:text-7xl">
          The <span className="text-gradient-apex">Circuits</span>
        </h1>
        <p className="mt-5 max-w-2xl text-muted-foreground">
          Twenty-four rounds across five continents. Filter by region or by the character of the
          track, then open any circuit for the full picture.
        </p>

        <div className="mt-10 flex flex-wrap gap-2">
          {REGIONS.map((r) => {
            const active = region === r;
            return (
              <button
                key={r}
                type="button"
                onClick={() => setRegion(r)}
                aria-pressed={active}
                className={`rounded-sm border px-5 py-2.5 font-display text-xs tracking-[0.22em] uppercase transition-all ${
                  active
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-muted-foreground hover:border-foreground/30 hover:text-foreground"
                }`}
              >
                {r === "all" ? "All" : REGION_LABEL[r]}
              </button>
            );
          })}
        </div>

        <div className="mt-3 flex flex-wrap items-center gap-2">
          <span className="mr-2 font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
            Character
          </span>
          {TRAITS.map((t) => {
            const active = trait === t;
            return (
              <button
                key={t}
                type="button"
                onClick={() => setTrait(active ? null : t)}
                aria-pressed={active}
                className={`rounded-full border px-4 py-1.5 font-mono text-[10px] tracking-[0.18em] uppercase transition-all ${
                  active
                    ? "border-primary text-primary"
                    : "border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {TRAIT_LABEL[t]}
              </button>
            );
          })}
        </div>

        <p className="mt-5 font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
          {list.length} {list.length === 1 ? "round" : "rounds"} shown
        </p>
      </section>

      <section className="mx-auto mt-12 max-w-7xl px-5 sm:px-8">
        {list.length === 0 ? (
          <p className="glass rounded-sm p-8 text-muted-foreground">
            No rounds match that combination. Try another region or character.
          </p>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((c, i) => (
              <Link
                key={c.slug}
                to="/circuits/$slug"
                params={{ slug: c.slug }}
                className="glass group animate-rise relative block overflow-hidden rounded-sm p-6 transition-all duration-300 hover:-translate-y-2"
                style={{ animationDelay: `${i * 40}ms`, boxShadow: "var(--shadow-lift)" }}
              >
                <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="flex items-start justify-between gap-4">
                  <span className="font-mono text-xs tracking-[0.2em] text-primary">
                    R{String(c.round).padStart(2, "0")}
                  </span>
                  <CircuitGlyph seed={c.round} className="h-12 w-20 text-muted-foreground/50 transition-colors duration-300 group-hover:text-primary" />
                </div>
                <h2 className="mt-5 font-display text-2xl leading-tight tracking-wide">{c.gp}</h2>
                <p className="mt-2 text-sm text-foreground/80">{c.circuit}</p>
                <p className="mt-2 flex items-center gap-1.5 text-xs tracking-[0.16em] text-muted-foreground uppercase">
                  <MapPin className="h-3.5 w-3.5" /> {c.city}, {c.country}
                </p>
                <p className="mt-1 font-mono text-[10px] tracking-[0.18em] text-muted-foreground uppercase">
                  Capital: {c.capital}
                </p>
                <p className="mt-4 border-t border-border pt-4 text-sm leading-relaxed text-muted-foreground">
                  {c.special}
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  {c.traits.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border px-3 py-1 font-mono text-[10px] tracking-[0.16em] text-muted-foreground uppercase"
                    >
                      {TRAIT_LABEL[t]}
                    </span>
                  ))}
                </div>
                <span className="mt-5 flex items-center gap-2 font-display text-xs tracking-[0.22em] text-primary uppercase">
                  Explore circuit
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}