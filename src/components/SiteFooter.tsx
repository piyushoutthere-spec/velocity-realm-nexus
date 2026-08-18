import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-carbon">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-12 sm:px-8 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <div className="flex items-center gap-2.5">
            <span className="h-5 w-1.5 rounded-full bg-primary" />
            <span className="font-display text-xl tracking-[0.22em]">APEX</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            An independent editorial experience covering the machines, teams and technology of the
            2026 Formula 1 season.
          </p>
        </div>
        <div className="flex gap-14">
          <div>
            <p className="eyebrow">Explore</p>
            <div className="mt-4 flex flex-col gap-2 text-sm text-muted-foreground">
              <Link to="/" className="transition-colors hover:text-foreground">
                Home
              </Link>
              <Link to="/teams" className="transition-colors hover:text-foreground">
                Teams
              </Link>
              <Link to="/race" className="transition-colors hover:text-foreground">
                The Race
              </Link>
            </div>
          </div>
          <div>
            <p className="eyebrow">Season</p>
            <div className="mt-4 flex flex-col gap-2 text-sm text-muted-foreground">
              <span>11 Teams</span>
              <span>22 Drivers</span>
              <span>23 Grands Prix</span>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-border px-5 py-5 text-center font-mono text-[11px] tracking-[0.25em] text-muted-foreground uppercase sm:px-8">
        APEX · 2026 Season · Unofficial editorial project
      </div>
    </footer>
  );
}