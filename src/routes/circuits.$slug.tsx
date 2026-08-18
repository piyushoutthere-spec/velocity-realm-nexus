import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, MapPin } from "lucide-react";

import { CIRCUITS, REGION_LABEL, TRAIT_LABEL } from "../lib/circuits";
import { CircuitGlyph } from "../components/CircuitGlyph";

export const Route = createFileRoute("/circuits/$slug")({
  loader: ({ params }) => {
    const circuit = CIRCUITS.find((c) => c.slug === params.slug);
    if (!circuit) throw notFound();
    return { circuit };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Circuit not found — APEX" }, { name: "robots", content: "noindex" }],
      };
    }
    const { circuit } = loaderData;
    const title = `${circuit.gp} — ${circuit.circuit} | APEX`;
    return {
      meta: [
        { title },
        { name: "description", content: circuit.special },
        { property: "og:title", content: title },
        { property: "og:description", content: circuit.special },
      ],
    };
  },
  notFoundComponent: CircuitNotFound,
  component: CircuitDetail,
});

function CircuitNotFound() {
  return (
    <div className="pt-32 pb-24">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <h1 className="font-display text-5xl tracking-wide">Circuit not found</h1>
        <p className="mt-4 text-muted-foreground">
          That round is not part of the 2026 calendar.
        </p>
        <Link
          to="/circuits"
          className="mt-8 inline-block rounded-sm border border-primary px-6 py-3 font-display text-xs tracking-[0.22em] text-primary uppercase"
        >
          Back to circuits
        </Link>
      </div>
    </div>
  );
}

function CircuitDetail() {
  const { circuit } = Route.useLoaderData();

  return (
    <div className="pt-28 pb-24">
      <section className="mx-auto max-w-5xl px-5 sm:px-8">
        <Link
          to="/circuits"
          className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.2em] text-muted-foreground uppercase transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> All circuits
        </Link>

        <div className="mt-8 flex items-start justify-between gap-6">
          <div>
            <p className="font-mono text-xs tracking-[0.24em] text-primary">
              Round {String(circuit.round).padStart(2, "0")} · {REGION_LABEL[circuit.region]}
            </p>
            <h1 className="mt-3 text-5xl leading-[0.95] font-semibold sm:text-6xl">
              {circuit.gp}
            </h1>
            <p className="mt-4 font-display text-2xl tracking-wide text-foreground/80">
              {circuit.circuit}
            </p>
            <p className="mt-3 flex items-center gap-1.5 text-xs tracking-[0.16em] text-muted-foreground uppercase">
              <MapPin className="h-3.5 w-3.5" /> {circuit.city}, {circuit.country} · Capital:{" "}
              {circuit.capital}
            </p>
          </div>
          <CircuitGlyph seed={circuit.round} className="hidden h-24 w-40 text-primary sm:block" />
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {circuit.traits.map((t) => (
            <span
              key={t}
              className="rounded-full border border-border px-4 py-1.5 font-mono text-[10px] tracking-[0.18em] text-muted-foreground uppercase"
            >
              {TRAIT_LABEL[t]}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-5xl px-5 sm:px-8">
        <div className="glass rounded-sm p-8" style={{ boxShadow: "var(--shadow-lift)" }}>
          <p className="eyebrow">What makes it special</p>
          <p className="mt-4 text-lg leading-relaxed text-foreground/85">{circuit.special}</p>
        </div>
      </section>

      <section className="mx-auto mt-8 grid max-w-5xl gap-5 px-5 sm:px-8 lg:grid-cols-2">
        <div className="glass rounded-sm p-8">
          <p className="eyebrow">Character breakdown</p>
          <ul className="mt-5 space-y-4">
            {circuit.character.map((c, i) => (
              <li key={c} className="flex gap-4 border-b border-border pb-4 last:border-0 last:pb-0">
                <span className="font-mono text-xs text-primary">0{i + 1}</span>
                <span className="text-sm leading-relaxed text-foreground/85">{c}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="glass rounded-sm p-8">
          <p className="eyebrow">Quick facts</p>
          <dl className="mt-5 space-y-4">
            {circuit.facts.map((f) => (
              <div key={f.label} className="border-b border-border pb-4 last:border-0 last:pb-0">
                <dt className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                  {f.label}
                </dt>
                <dd className="mt-1 font-display text-lg tracking-wide">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </div>
  );
}