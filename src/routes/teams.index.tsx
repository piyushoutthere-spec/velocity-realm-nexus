import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { MapPin } from "lucide-react";

import { TEAMS, TIER_LABEL, type Tier } from "../lib/f1-data";

export const Route = createFileRoute("/teams/")({
  head: () => ({
    meta: [
      { title: "Teams — APEX | 2026 Formula 1 Grid" },
      {
        name: "description",
        content:
          "Every team and driver pairing on the 2026 Formula 1 grid, with country, focus and filters for front runners, midfield and new entries.",
      },
      { property: "og:title", content: "Teams — APEX | 2026 Formula 1 Grid" },
      {
        property: "og:description",
        content: "All 11 constructors and 22 drivers of the 2026 Formula 1 season.",
      },
    ],
  }),
  component: TeamsPage,
});

const FILTERS: { id: "all" | Tier; label: string }[] = [
  { id: "all", label: "All" },
  { id: "front", label: "Front Runners" },
  { id: "midfield", label: "Midfield" },
  { id: "new", label: "New / Returning" },
];

function TeamsPage() {
  const [filter, setFilter] = useState<"all" | Tier>("all");
  const teams = useMemo(
    () => (filter === "all" ? TEAMS : TEAMS.filter((t) => t.tier === filter)),
    [filter],
  );

  return (
    <div className="pt-28 pb-24">
      <section className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="eyebrow">2026 Grid</p>
        <h1 className="mt-3 text-6xl leading-[0.9] font-semibold sm:text-7xl">
          The <span className="text-gradient-apex">Teams</span>
        </h1>
        <p className="mt-5 max-w-2xl text-muted-foreground">
          Eleven constructors, twenty-two drivers and eleven very different engineering philosophies.
          Filter the grid to see how the field is shaped for the 2026 season.
        </p>

        <div className="mt-10 flex flex-wrap gap-2">
          {FILTERS.map((f) => {
            const active = filter === f.id;
            return (
              <button
                key={f.id}
                type="button"
                onClick={() => setFilter(f.id)}
                aria-pressed={active}
                className={`rounded-sm border px-5 py-2.5 font-display text-xs tracking-[0.22em] uppercase transition-all ${
                  active
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-muted-foreground hover:border-foreground/30 hover:text-foreground"
                }`}
              >
                {f.label}
              </button>
            );
          })}
        </div>
        <p className="mt-4 font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
          {teams.length} {teams.length === 1 ? "team" : "teams"} shown
        </p>
      </section>

      <section className="mx-auto mt-12 max-w-7xl px-5 sm:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {teams.map((team, i) => (
            <article
              key={team.name}
              className="glass group animate-rise relative overflow-hidden rounded-sm p-6 transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${i * 45}ms`, boxShadow: "var(--shadow-lift)" }}
            >
              <span
                className="absolute inset-y-0 left-0 w-1 transition-all duration-300 group-hover:w-1.5"
                style={{ backgroundColor: team.accent }}
              />
              <div
                className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-40"
                style={{ backgroundColor: team.accent }}
              />
              <div className="relative">
                <div className="flex items-start justify-between gap-3">
                  <h2 className="font-display text-3xl leading-none tracking-wide">{team.name}</h2>
                  <span
                    className="mt-1 shrink-0 rounded-full border px-2.5 py-1 font-mono text-[10px] tracking-[0.18em] uppercase"
                    style={{ borderColor: team.accent, color: team.accent }}
                  >
                    {TIER_LABEL[team.tier]}
                  </span>
                </div>
                <p className="mt-2 flex items-center gap-1.5 text-xs tracking-[0.16em] text-muted-foreground uppercase">
                  <MapPin className="h-3.5 w-3.5" /> {team.country}
                </p>

                <div className="mt-6 space-y-2 border-t border-border pt-5">
                  {team.drivers.map((d, idx) => (
                    <div key={d} className="flex items-center gap-3">
                      <span className="font-mono text-xs text-muted-foreground">
                        0{idx + 1}
                      </span>
                      <span className="font-display text-lg tracking-wide">{d}</span>
                    </div>
                  ))}
                </div>

                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                  {team.description}
                </p>

                <div className="mt-4 max-h-0 overflow-hidden opacity-0 transition-all duration-500 group-hover:max-h-32 group-hover:opacity-100">
                  <p className="border-t border-border pt-4 text-sm leading-relaxed text-foreground/80">
                    {team.detail}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}