import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/legends")({
  head: () => ({
    meta: [
      { title: "Legends of the Hardwood — Hoops Handbook" },
      { name: "description", content: "Meet the basketball legends who defined the game — Jordan, LeBron, Kobe, Magic, Bird, Curry." },
      { property: "og:title", content: "Legends of the Hardwood" },
      { property: "og:description", content: "The players who bent the rules and rewrote history." },
    ],
  }),
  component: LegendsPage,
});

function TrophyIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2z" />
    </svg>
  );
}

function FlameIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2s4 4 4 8a4 4 0 0 1-1 2.7c1.2.6 2 2 2 3.6a5 5 0 0 1-10 0c0-1.8 1-3.4 2.5-4.3C8.5 10.5 8 8.5 8 7c0-2 2-3 2-3s0 2 1 3 1 1 1 3z" />
    </svg>
  );
}

function WhistleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M3 12a6 6 0 0 1 6-6h9l3 3-3 3H9a3 3 0 1 0 0 6h6" />
      <circle cx="9" cy="12" r="2" />
    </svg>
  );
}

function BentoCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-3xl p-6 sm:p-8 bento-shadow transition-transform duration-300 hover:-translate-y-1 ${className}`}>
      {children}
    </div>
  );
}

const LEGENDS = [
  { name: "Michael Jordan", tag: "GOAT · 6× Champion", stat: "30.1", statLabel: "career PPG", quote: "I've failed over and over. That is why I succeed." },
  { name: "LeBron James", tag: "The King · 4× MVP", stat: "40k+", statLabel: "career points", quote: "You have to accept failure to get better." },
  { name: "Kobe Bryant", tag: "Black Mamba · 5× Champion", stat: "81", statLabel: "pts in one game", quote: "Everything negative is a chance to rise." },
  { name: "Magic Johnson", tag: "Showtime · 5× Champion", stat: "138", statLabel: "career triple-doubles", quote: "All kids need is help, hope, and someone who believes." },
  { name: "Larry Bird", tag: "Larry Legend · 3× MVP", stat: "3×", statLabel: "NBA champion", quote: "A winner is someone who recognizes their talents." },
  { name: "Stephen Curry", tag: "Chef Curry · Splash Bro", stat: "4000+", statLabel: "career 3-pointers", quote: "Success is not an accident. It's a choice." },
];

function LegendsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      {/* HERO */}
      <BentoCard className="bg-gradient-to-br from-onyx via-charcoal to-ember text-primary-foreground glow-ember">
        <div className="absolute -left-16 -bottom-16 h-64 w-64 rounded-full border-[3px] border-flame/20" />
        <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-flame/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-flame">
              <TrophyIcon className="h-4 w-4" /> Chapter Two
            </div>
            <h1 className="mt-4 text-6xl leading-[0.9] sm:text-8xl lg:text-[9rem] text-foreground">
              THE
              <span className="block text-stroke-flame">LEGENDS</span>
            </h1>
            <p className="mt-4 max-w-xl text-base font-medium leading-relaxed text-foreground/80 sm:text-lg">
              Six players. Countless rings. Endless highlights. Meet the icons who made basketball what it is today.
            </p>
            <div className="mt-6">
              <Link to="/" className="inline-flex items-center gap-2 rounded-full border-2 border-flame/50 px-5 py-2.5 text-sm font-bold uppercase tracking-wider text-flame transition-colors hover:bg-flame/10">
                <WhistleIcon className="h-4 w-4" /> ← Back to Rules
              </Link>
            </div>
          </div>
          <div className="relative flex h-40 w-40 shrink-0 items-center justify-center self-start rounded-full bg-flame/15 ring-4 ring-flame/25 sm:h-56 sm:w-56 lg:self-center">
            <TrophyIcon className="h-24 w-24 text-flame sm:h-36 sm:w-36" />
          </div>
        </div>
      </BentoCard>

      {/* LEGENDS GRID */}
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {LEGENDS.map((l, i) => {
          const palettes = [
            "bg-ember text-ember-foreground",
            "bg-flame text-flame-foreground",
            "bg-onyx text-onyx-foreground",
            "bg-charcoal text-charcoal-foreground",
            "bg-court text-court-foreground",
            "bg-primary text-primary-foreground",
          ];
          return (
            <BentoCard key={l.name} className={palettes[i % palettes.length]}>
              <h3 className="text-3xl leading-tight">{l.name}</h3>
              <p className="mt-1 text-xs font-bold uppercase tracking-wider opacity-80">{l.tag}</p>
              <div className="mt-5 flex items-end gap-3">
                <span className="font-display text-6xl leading-none">{l.stat}</span>
                <span className="pb-1 text-xs font-semibold uppercase tracking-wider opacity-80">{l.statLabel}</span>
              </div>
              <p className="mt-5 border-t border-current/20 pt-4 text-sm font-medium italic leading-relaxed opacity-90">
                "{l.quote}"
              </p>
            </BentoCard>
          );
        })}
      </div>

      {/* QUOTE */}
      <BentoCard className="mt-10 bg-charcoal text-charcoal-foreground">
        <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
          <FlameIcon className="h-12 w-12 shrink-0 text-flame" />
          <div>
            <p className="text-3xl font-semibold italic leading-snug sm:text-4xl">
              "Talent wins games, but teamwork and intelligence win championships."
            </p>
            <p className="mt-2 text-sm font-bold uppercase tracking-wider opacity-70">— Michael Jordan</p>
          </div>
        </div>
      </BentoCard>
    </div>
  );
}
