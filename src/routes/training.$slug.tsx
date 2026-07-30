import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useRef, useState } from "react";

import { drillQueryOptions } from "@/lib/drills.queries";
import { formatDuration } from "@/lib/drills.types";
import { useProgress } from "@/hooks/use-progress";

export const Route = createFileRoute("/training/$slug")({
  loader: async ({ context, params }) => {
    const drill = await context.queryClient.ensureQueryData(drillQueryOptions(params.slug));
    if (!drill) throw notFound();
    return { title: drill.title, description: drill.description };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Drill unavailable — Hoops Handbook" }, { name: "robots", content: "noindex" }],
      };
    }
    const title = `${loaderData.title} — Basketball Drill Tutorial`;
    return {
      meta: [
        { title },
        { name: "description", content: loaderData.description },
        { property: "og:title", content: title },
        { property: "og:description", content: loaderData.description },
      ],
    };
  },
  component: DrillDetail,
  errorComponent: ({ error }) => (
    <main className="mx-auto max-w-3xl px-4 py-16 text-center">
      <h1 className="font-display text-4xl text-foreground">This drill didn't load</h1>
      <p role="alert" className="mt-3 text-sm text-foreground/70">{error.message}</p>
    </main>
  ),
  notFoundComponent: () => (
    <main className="mx-auto max-w-3xl px-4 py-16 text-center">
      <h1 className="font-display text-4xl text-foreground">Drill not found</h1>
      <Link to="/training" className="mt-4 inline-block font-bold text-flame underline">
        Back to all drills
      </Link>
    </main>
  ),
});

function VideoPlayer({ src, poster }: { src: string; poster: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) void v.play();
    else v.pause();
  };

  const replay = () => {
    const v = ref.current;
    if (!v) return;
    v.currentTime = 0;
    void v.play();
  };

  return (
    <div className="overflow-hidden rounded-3xl border border-flame/20 bg-onyx bento-shadow">
      <video
        ref={ref}
        src={src}
        poster={poster}
        controls
        playsInline
        preload="metadata"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        className="aspect-video w-full bg-onyx"
      />
      <div className="flex flex-wrap gap-2 border-t border-flame/15 p-3">
        <button
          type="button"
          onClick={toggle}
          className="rounded-full bg-flame px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-flame-foreground"
        >
          {playing ? "❚❚ Pause" : "▶ Play"}
        </button>
        <button
          type="button"
          onClick={replay}
          className="rounded-full border border-flame/30 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-foreground/80 hover:bg-flame/10 hover:text-flame"
        >
          ↺ Replay
        </button>
      </div>
    </div>
  );
}

function DrillDetail() {
  const { slug } = Route.useParams();
  const { data: drill } = useSuspenseQuery(drillQueryOptions(slug));
  const { completed, toggle, signedIn } = useProgress();

  if (!drill) return null;
  const done = completed.has(drill.id);

  return (
    <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
      <Link to="/training" className="text-[11px] font-bold uppercase tracking-[0.22em] text-flame">
        ← All drills
      </Link>

      <header className="mt-4">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-flame px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-flame-foreground">
            {drill.category}
          </span>
          <span className="rounded-full border border-flame/30 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-foreground/80">
            {drill.difficulty}
          </span>
          <span className="rounded-full border border-flame/30 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-foreground/80">
            {formatDuration(drill.durationSeconds)}
          </span>
        </div>
        <h1 className="mt-3 font-display text-5xl leading-[0.95] text-foreground sm:text-6xl">{drill.title}</h1>
        <p className="mt-2 max-w-2xl text-sm text-foreground/75 sm:text-base">{drill.description}</p>
      </header>

      <div className="mt-6">
        <VideoPlayer src={drill.videoUrl} poster={drill.thumbnailUrl} />
      </div>

      <div className="mt-4 rounded-2xl border border-flame/15 bg-card/60 p-4">
        {signedIn ? (
          <button
            type="button"
            disabled={toggle.isPending}
            onClick={() => toggle.mutate(drill.id)}
            className={`w-full rounded-full px-5 py-3 text-xs font-bold uppercase tracking-[0.2em] transition-colors disabled:opacity-60 ${
              done
                ? "bg-flame/15 text-flame border border-flame/40"
                : "bg-flame text-flame-foreground"
            }`}
          >
            {done ? "✓ Completed — tap to undo" : "Mark as complete"}
          </button>
        ) : (
          <p className="text-center text-sm text-foreground/70">
            <Link to="/auth" className="font-bold text-flame underline">Sign in</Link> to mark drills complete and track progress.
          </p>
        )}
      </div>

      <section className="mt-8">
        <h2 className="font-display text-3xl text-foreground sm:text-4xl">Step by step</h2>
        <ol className="mt-4 space-y-4">
          {drill.steps.map((step) => (
            <li
              key={step.order}
              className="flex flex-col gap-4 rounded-2xl border border-flame/15 bg-card/70 p-4 sm:flex-row sm:items-start"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-flame font-display text-xl text-flame-foreground">
                {step.order}
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="font-display text-2xl leading-tight text-foreground">{step.title}</h3>
                <p className="mt-1 text-sm text-foreground/75">{step.description}</p>
              </div>
              {step.imageUrl && (
                <img
                  src={step.imageUrl}
                  alt={`${drill.title} step ${step.order}: ${step.title}`}
                  loading="lazy"
                  className="h-28 w-full rounded-xl object-cover sm:w-40"
                />
              )}
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
