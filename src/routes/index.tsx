import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function BasketballIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M2.1 13.2a10 10 0 0 0 19.8 0" />
      <path d="M5.7 4.4a10 10 0 0 0 12.6 15.2" />
      <path d="M12 2v20" />
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

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
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

function BoltIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" />
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

const RULES = [
  { n: "01", title: "Score Buckets", desc: "2 points inside the arc, 3 points beyond it, 1 point per free throw." },
  { n: "02", title: "24-Second Shot", desc: "You've got 24 seconds to launch a shot that hits the rim. Beat the clock." },
  { n: "03", title: "No Traveling", desc: "You must dribble while moving. Two steps after your last dribble — that's it." },
  { n: "04", title: "5 Fouls & Out", desc: "College limit. NBA gives you 6. Play smart D or ride the bench." },
  { n: "05", title: "Backcourt Rule", desc: "Once you cross half-court with the ball, you can't take it back. 8 seconds to cross." },
  { n: "06", title: "3-Second Paint", desc: "Offense can't camp in the key for more than 3 seconds. Keep moving!" },
];

const LEGENDS = [
  { name: "Michael Jordan", tag: "GOAT · 6× Champion", stat: "30.1", statLabel: "career PPG", quote: "I've failed over and over. That is why I succeed." },
  { name: "LeBron James", tag: "The King · 4× MVP", stat: "40k+", statLabel: "career points", quote: "You have to be able to accept failure to get better." },
  { name: "Kobe Bryant", tag: "Black Mamba · 5× Champion", stat: "81", statLabel: "pts in one game", quote: "Everything negative is a chance to rise." },
  { name: "Magic Johnson", tag: "Showtime · 5× Champion", stat: "138", statLabel: "career triple-doubles", quote: "All kids need is a little help, hope, and someone who believes." },
  { name: "Larry Bird", tag: "Larry Legend · 3× MVP", stat: "3×", statLabel: "NBA champion", quote: "A winner is someone who recognizes their talents." },
  { name: "Stephen Curry", tag: "Chef Curry · Splash Bro", stat: "4000+", statLabel: "career 3-pointers", quote: "Success is not an accident. It's a choice." },
];

function Index() {
  return (
    <main className="min-h-screen px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid auto-rows-[minmax(180px,auto)] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {/* HERO */}
          <BentoCard className="col-span-1 sm:col-span-2 lg:col-span-4 bg-gradient-to-br from-ember via-primary to-court text-primary-foreground glow-ember">
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full border-[3px] border-primary-foreground/15" />
            <div className="absolute -right-8 -top-8 h-48 w-48 rounded-full border-[3px] border-primary-foreground/10" />
            <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em]">
                  <FlameIcon className="h-4 w-4" />
                  Ball is Life
                </div>
                <h1 className="mt-4 text-6xl leading-[0.9] sm:text-8xl lg:text-[10rem]">
                  HOOPS
                  <span className="block text-stroke-flame">HANDBOOK</span>
                </h1>
                <p className="mt-4 max-w-xl text-base font-medium leading-relaxed opacity-90 sm:text-lg">
                  The rules that run the court and the legends who bent them. Lace up — class is in session.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href="#rules" className="inline-flex items-center gap-2 rounded-full bg-primary-foreground px-5 py-2.5 text-sm font-bold uppercase tracking-wider text-primary transition-transform hover:scale-105">
                    <WhistleIcon className="h-4 w-4" /> The Rules
                  </a>
                  <a href="#legends" className="inline-flex items-center gap-2 rounded-full border-2 border-primary-foreground/40 px-5 py-2.5 text-sm font-bold uppercase tracking-wider transition-colors hover:bg-primary-foreground/10">
                    <TrophyIcon className="h-4 w-4" /> The Legends
                  </a>
                </div>
              </div>
              <div className="relative flex h-40 w-40 shrink-0 items-center justify-center self-start rounded-full bg-primary-foreground/15 ring-4 ring-primary-foreground/20 sm:h-56 sm:w-56 lg:self-center">
                <BasketballIcon className="h-28 w-28 sm:h-40 sm:w-40 animate-spin" style={{ animationDuration: "8s" }} />
              </div>
            </div>
          </BentoCard>

          {/* Stat tiles */}
          <BentoCard className="bg-flame text-flame-foreground">
            <BoltIcon className="h-8 w-8" />
            <div className="mt-3 font-display text-6xl leading-none">48<span className="text-3xl">min</span></div>
            <p className="mt-2 text-sm font-semibold uppercase tracking-wider opacity-80">NBA game length</p>
          </BentoCard>

          <BentoCard className="bg-charcoal text-charcoal-foreground">
            <ClockIcon className="h-8 w-8 text-flame" />
            <div className="mt-3 font-display text-6xl leading-none text-flame">24<span className="text-3xl text-charcoal-foreground/60">sec</span></div>
            <p className="mt-2 text-sm font-semibold uppercase tracking-wider opacity-80">Shot clock</p>
          </BentoCard>

          <BentoCard className="bg-gold text-gold-foreground">
            <TrophyIcon className="h-8 w-8" />
            <div className="mt-3 font-display text-6xl leading-none">17</div>
            <p className="mt-2 text-sm font-semibold uppercase tracking-wider opacity-80">Celtics titles — most ever</p>
          </BentoCard>

          <BentoCard className="bg-ember text-ember-foreground">
            <BasketballIcon className="h-8 w-8" />
            <div className="mt-3 font-display text-6xl leading-none">100</div>
            <p className="mt-2 text-sm font-semibold uppercase tracking-wider opacity-90">Wilt's record night</p>
          </BentoCard>
        </div>

        {/* RULES */}
        <section id="rules" className="mt-10">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-flame/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-flame">
                <WhistleIcon className="h-4 w-4" /> Chapter One
              </div>
              <h2 className="mt-2 text-5xl text-foreground sm:text-6xl">The Rules of the Game</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {RULES.map((r) => (
              <BentoCard key={r.n} className="group bg-card text-card-foreground">
                <div className="flex items-start justify-between">
                  <span className="font-display text-6xl text-flame/80 transition-colors group-hover:text-flame">{r.n}</span>
                  <div className="h-10 w-10 rounded-full bg-flame/10 ring-1 ring-flame/30 transition-transform group-hover:scale-110" />
                </div>
                <h3 className="mt-4 text-3xl text-foreground">{r.title}</h3>
                <p className="mt-2 text-sm font-medium leading-relaxed text-muted-foreground">{r.desc}</p>
              </BentoCard>
            ))}
          </div>
        </section>

        {/* LEGENDS */}
        <section id="legends" className="mt-14">
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-gold/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-gold">
              <TrophyIcon className="h-4 w-4" /> Chapter Two
            </div>
            <h2 className="mt-2 text-5xl text-foreground sm:text-6xl">Legends of the Hardwood</h2>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {LEGENDS.map((l, i) => {
              const palettes = [
                "bg-ember text-ember-foreground",
                "bg-flame text-flame-foreground",
                "bg-court text-court-foreground",
                "bg-charcoal text-charcoal-foreground",
                "bg-gold text-gold-foreground",
                "bg-primary text-primary-foreground",
              ];
              return (
                <BentoCard key={l.name} className={palettes[i % palettes.length]}>
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="text-3xl leading-tight">{l.name}</h3>
                  </div>
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
        </section>

        {/* CTA / Quote */}
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

        <footer className="mt-8 flex flex-col items-center justify-between gap-3 rounded-3xl bg-card px-6 py-5 sm:flex-row">
          <div className="flex items-center gap-2">
            <BasketballIcon className="h-5 w-5 text-flame" />
            <span className="font-display text-lg tracking-wide text-foreground">Hoops Handbook</span>
          </div>
          <p className="text-sm font-medium text-muted-foreground">Rules · Legends · Respect the game</p>
        </footer>
      </div>
    </main>
  );
}
