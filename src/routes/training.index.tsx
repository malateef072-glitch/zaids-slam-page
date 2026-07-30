import { createFileRoute, Link } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";

import { drillsQueryOptions } from "@/lib/drills.queries";
import {
  DRILL_CATEGORIES,
  DRILL_DIFFICULTIES,
  formatDuration,
  type Drill,
  type DrillCategory,
  type DrillDifficulty,
} from "@/lib/drills.types";
import { useProgress } from "@/hooks/use-progress";

export const Route = createFileRoute("/training/")({
  head: () => ({
    meta: [
      { title: "Training Drills — Short Basketball Skill Videos" },
      {
        name: "description",
        content:
          "Short 30–90 second basketball drill videos with step-by-step tutorials for dribbling, shooting, passing, defense, footwork and conditioning.",
      },
      { property: "og:title", content: "Training Drills — Short Basketball Skill Videos" },
      {
        property: "og:description",
        content: "Filter drills by skill and difficulty, follow the steps, and track your progress.",
      },
    ],
  }),
  loader: ({ context }) => context.queryClient.ensureQueryData(drillsQueryOptions),
  component: TrainingPage,
  errorComponent: ({ error }) => (
    <main className="mx-auto max-w-3xl px-4 py-16 text-center">
      <h1 className="font-display text-4xl text-foreground">Drills didn't load</h1>
      <p role="alert" className="mt-3 text-sm text-foreground/70">{error.message}</p>
    </main>
  ),
  notFoundComponent: () => (
    <main className="mx-auto max-w-3xl px-4 py-16 text-center">
      <h1 className="font-display text-4xl text-foreground">No drills yet</h1>
    </main>
  ),
});

type DurationFilter = "all" | "short" | "medium" | "long";

const durationLabels: Record<DurationFilter, string> = {
  all: "Any length",
  short: "Under 50s",
  medium: "50–70s",
  long: "70s+",
};

function matchesDuration(seconds: number, filter: DurationFilter) {
  if (filter === "short") return seconds < 50;
  if (filter === "medium") return seconds >= 50 && seconds <= 70;
  if (filter === "long") return seconds > 70;
  return true;
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] transition-colors ${
        active
          ? "bg-flame text-flame-foreground"
          : "border border-flame/25 text-foreground/70 hover:bg-flame/10 hover:text-flame"
      }`}
    >
      {children}
    </button>
  );
}

function ProgressDashboard({ drills }: { drills: Drill[] }) {
  const { completed, signedIn } = useProgress();

  const rows = DRILL_CATEGORIES.map((cat) => {
    const total = drills.filter((d) => d.category === cat).length;
    const done = drills.filter((d) => d.category === cat && completed.has(d.id)).length;
    return { cat, total, done, pct: total ? Math.round((done / total) * 100) : 0 };
  });
  const overall = drills.length ? Math.round((completed.size / drills.length) * 100) : 0;

  return (
    <section className="rounded-3xl border border-flame/20 bg-charcoal/60 p-5 bento-shadow sm:p-7">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-flame">Your progress</p>
          <h2 className="mt-1 font-display text-3xl text-foreground sm:text-4xl">
            {completed.size} of {drills.length} drills done
          </h2>
        </div>
        <span className="font-display text-5xl text-flame">{overall}%</span>
      </div>

      {!signedIn && (
        <p className="mt-3 text-sm text-foreground/70">
          <Link to="/auth" className="font-bold text-flame underline">Sign in</Link> to save the drills you finish.
        </p>
      )}

      <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {rows.map((r) => (
          <div key={r.cat} className="rounded-2xl border border-flame/10 bg-card/60 p-4">
            <div className="flex items-baseline justify-between">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/80">{r.cat}</span>
              <span className="font-display text-lg text-flame">{r.done}/{r.total}</span>
            </div>
            <div className="mt-2 h-2 overflow-hidden rounded-full bg-onyx">
              <div className="h-full rounded-full bg-flame transition-all" style={{ width: `${r.pct}%` }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function DrillCard({ drill, done }: { drill: Drill; done: boolean }) {
  return (
    <Link
      to="/training/$slug"
      params={{ slug: drill.slug }}
      className="group overflow-hidden rounded-2xl border border-flame/15 bg-card/70 bento-shadow transition-transform hover:-translate-y-1"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={drill.thumbnailUrl}
          alt={`${drill.title} basketball drill`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/20 to-transparent" />
        <span className="absolute left-3 top-3 rounded-full bg-flame px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-flame-foreground">
          {drill.category}
        </span>
        <span className="absolute right-3 top-3 rounded-full bg-onyx/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-foreground/85">
          {formatDuration(drill.durationSeconds)}
        </span>
        <span className="absolute bottom-3 left-3 flex h-11 w-11 items-center justify-center rounded-full bg-flame/90 text-flame-foreground">
          ▶
        </span>
        {done && (
          <span className="absolute bottom-3 right-3 rounded-full bg-flame/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-flame-foreground">
            ✓ Done
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-display text-2xl leading-tight text-foreground">{drill.title}</h3>
        <p className="mt-1 line-clamp-2 text-sm text-foreground/70">{drill.description}</p>
        <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.2em] text-flame/80">
          {drill.difficulty} · {drill.steps.length} steps
        </p>
      </div>
    </Link>
  );
}

function TrainingPage() {
  const { data: drills } = useSuspenseQuery(drillsQueryOptions);
  const { completed } = useProgress();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<DrillCategory | "all">("all");
  const [difficulty, setDifficulty] = useState<DrillDifficulty | "all">("all");
  const [duration, setDuration] = useState<DurationFilter>("all");

  const filtered = useMemo(
    () =>
      drills.filter(
        (d) =>
          (category === "all" || d.category === category) &&
          (difficulty === "all" || d.difficulty === difficulty) &&
          matchesDuration(d.durationSeconds, duration) &&
          d.title.toLowerCase().includes(search.trim().toLowerCase()),
      ),
    [drills, category, difficulty, duration, search],
  );

  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
      <header className="rounded-3xl border border-flame/20 bg-charcoal/60 p-6 bento-shadow sm:p-9">
        <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-flame">Training</p>
        <h1 className="mt-2 font-display text-5xl leading-[0.95] text-foreground sm:text-7xl">
          Short drills. Real skill.
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-foreground/75 sm:text-base">
          30 to 90 second drill clips broken into numbered steps. Filter by skill, follow the reps, mark it complete.
        </p>
      </header>

      <div className="mt-6">
        <ProgressDashboard drills={drills} />
      </div>

      <section className="mt-6 rounded-3xl border border-flame/15 bg-card/50 p-4 sm:p-5">
        <label className="block">
          <span className="sr-only">Search drills</span>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search drill name…"
            className="w-full rounded-full border border-flame/25 bg-onyx/60 px-4 py-2.5 text-sm text-foreground placeholder:text-foreground/40 focus:border-flame focus:outline-none"
          />
        </label>

        <div className="mt-4 space-y-3">
          <div className="flex flex-wrap gap-2">
            <Chip active={category === "all"} onClick={() => setCategory("all")}>All skills</Chip>
            {DRILL_CATEGORIES.map((c) => (
              <Chip key={c} active={category === c} onClick={() => setCategory(c)}>{c}</Chip>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            <Chip active={difficulty === "all"} onClick={() => setDifficulty("all")}>All levels</Chip>
            {DRILL_DIFFICULTIES.map((d) => (
              <Chip key={d} active={difficulty === d} onClick={() => setDifficulty(d)}>{d}</Chip>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {(Object.keys(durationLabels) as DurationFilter[]).map((d) => (
              <Chip key={d} active={duration === d} onClick={() => setDuration(d)}>{durationLabels[d]}</Chip>
            ))}
          </div>
        </div>
      </section>

      <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.2em] text-foreground/55">
        {filtered.length} drill{filtered.length === 1 ? "" : "s"}
      </p>

      <section className="mt-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((d) => (
          <DrillCard key={d.id} drill={d} done={completed.has(d.id)} />
        ))}
      </section>

      {filtered.length === 0 && (
        <p className="mt-8 rounded-2xl border border-flame/15 bg-card/60 p-6 text-center text-sm text-foreground/70">
          No drills match those filters. Try clearing the search.
        </p>
      )}
    </main>
  );
}
