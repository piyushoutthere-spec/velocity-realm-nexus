import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, MapPin } from "lucide-react";

import { TEAMS, TIER_LABEL } from "../lib/f1-data";
import { TEAM_PROFILES } from "../lib/team-profiles";

export const Route = createFileRoute("/teams/$slug")({
  loader: ({ params }) => {
    const team = TEAMS.find((t) => t.slug === params.slug);
    const profile = TEAM_PROFILES[params.slug];
    if (!team || !profile) throw notFound();
    return { team, profile };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Team not found — APEX" }, { name: "robots", content: "noindex" }],
      };
    }
    const { team, profile } = loaderData;
    const title = `${team.name} — APEX | 2026 Formula 1 Team Profile`;
    return {
      meta: [
        { title },
        { name: "description", content: `${profile.tagline} ${team.description}` },
        { property: "og:title", content: title },
        { property: "og:description", content: profile.tagline },
      ],
    };
  },
  notFoundComponent: TeamNotFound,
  component: TeamDetail,
});

function TeamNotFound() {
  return (
    <div className="pt-32 pb-24">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <h1 className="font-display text-5xl tracking-wide">Team not found</h1>
        <p className="mt-4 text-muted-foreground">That team is not on the 2026 grid.</p>
        <Link
          to="/teams"
          className="mt-8 inline-block rounded-sm border border-primary px-6 py-3 font-display text-xs tracking-[0.22em] text-primary uppercase"
        >
          Back to teams
        </Link>
      </div>
    </div>
  );
}

function TeamDetail() {
  const { team, profile } = Route.useLoaderData();

  return (
    <div className="pt-28 pb-24">
      <section className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Link
          to="/teams"
          className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.2em] text-muted-foreground uppercase transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> All teams
        </Link>

        <div
          className="glass relative mt-8 overflow-hidden rounded-sm p-8 sm:p-12"
          style={{ boxShadow: "var(--shadow-lift)" }}
        >
          <span className="absolute inset-y-0 left-0 w-1.5" style={{ backgroundColor: team.accent }} />
          <div
            className="pointer-events-none absolute -top-32 -right-24 h-72 w-72 rounded-full opacity-30 blur-3xl"
            style={{ backgroundColor: team.accent }}
          />
          <div className="relative">
            <span
              className="rounded-full border px-3 py-1 font-mono text-[10px] tracking-[0.18em] uppercase"
              style={{ borderColor: team.accent, color: team.accent }}
            >
              {TIER_LABEL[team.tier]}
            </span>
            <h1 className="mt-5 text-6xl leading-[0.9] font-semibold sm:text-7xl">{team.name}</h1>
            <p className="mt-4 font-display text-xl tracking-wide text-foreground/80">
              {profile.tagline}
            </p>
            <p className="mt-4 flex items-center gap-1.5 text-xs tracking-[0.16em] text-muted-foreground uppercase">
              <MapPin className="h-3.5 w-3.5" /> {team.country} · {team.detail}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-14 max-w-4xl px-5 sm:px-8">
        <p className="eyebrow">The Story</p>
        <div className="mt-5 space-y-5">
          {profile.story.map((p) => (
            <p key={p.slice(0, 24)} className="text-base leading-relaxed text-foreground/85">
              {p}
            </p>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-6xl px-5 sm:px-8">
        <p className="eyebrow">Legendary Figures</p>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {profile.people.map((p, i) => (
            <article
              key={p.name}
              className="glass animate-rise rounded-sm p-6"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <h3 className="font-display text-2xl tracking-wide">{p.name}</h3>
              <p className="mt-1 font-mono text-[10px] tracking-[0.18em] text-primary uppercase">
                {p.role}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.why}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-4xl px-5 sm:px-8">
        <p className="eyebrow">Key Moments</p>
        <ol className="relative mt-8 border-l border-border pl-8">
          {profile.moments.map((m) => (
            <li key={m.year + m.event} className="relative pb-10 last:pb-0">
              <span
                className="absolute -left-[37px] mt-1.5 h-3 w-3 rounded-full border-2 border-background"
                style={{ backgroundColor: team.accent }}
              />
              <p className="font-mono text-xs tracking-[0.22em] text-primary">{m.year}</p>
              <h3 className="mt-2 font-display text-2xl tracking-wide">{m.event}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.why}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto mt-16 max-w-6xl px-5 sm:px-8">
        <p className="eyebrow">2026 Line-up</p>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {profile.lineup.map((d) => (
            <article key={d.name} className="glass relative overflow-hidden rounded-sm p-8">
              <span
                className="absolute top-4 right-6 font-display text-6xl leading-none opacity-25"
                style={{ color: team.accent }}
              >
                {d.number ?? ""}
              </span>
              <h3 className="font-display text-3xl tracking-wide">{d.name}</h3>
              <p className="mt-1 font-mono text-[10px] tracking-[0.18em] text-muted-foreground uppercase">
                {d.nationality}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{d.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-4xl px-5 sm:px-8">
        <p className="eyebrow">Team Facts</p>
        <dl className="glass mt-6 rounded-sm p-8">
          {profile.facts.map((f) => (
            <div
              key={f.label}
              className="flex flex-wrap items-baseline justify-between gap-3 border-b border-border py-4 first:pt-0 last:border-0 last:pb-0"
            >
              <dt className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                {f.label}
              </dt>
              <dd className="font-display text-lg tracking-wide">{f.value}</dd>
            </div>
          ))}
        </dl>
      </section>
    </div>
  );
}