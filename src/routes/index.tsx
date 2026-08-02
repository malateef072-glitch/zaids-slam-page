import { createFileRoute, Link } from "@tanstack/react-router";
import heroCourt from "@/assets/hero-court.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Swish — Basketball Rules & How to Play" },
      { name: "description", content: "Learn the core rules of basketball and how to play the game — a dark-orange, high-energy handbook." },
      { property: "og:title", content: "Swish — Basketball Rules & How to Play" },
      { property: "og:description", content: "Learn the core rules of basketball and how to play the game — a dark-orange, high-energy handbook." },
    ],
  }),
  component: RulesPage,
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

const HOW_TO_PLAY = [
  { step: "Team Up", desc: "5 players per side on the court. Guards run the offense, forwards attack the wings, the center owns the paint." },
  { step: "Tip-Off", desc: "The game starts with a jump ball at center court. Whoever taps it first controls possession." },
  { step: "Move the Ball", desc: "Dribble it, pass it, or shoot it — but never carry it. Use screens and cuts to create open looks." },
  { step: "Score & Defend", desc: "Attack the rim, kick it out for a three, or hit the mid-range. On D: box out, contest shots, no fouling." },
  { step: "Win the Quarter", desc: "Four quarters (12 min NBA / 10 FIBA). Most points wins. Tied? Overtime — 5 more minutes." },
];

function RulesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div className="grid auto-rows-[minmax(180px,auto)] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {/* HERO */}
        <BentoCard className="col-span-1 sm:col-span-2 lg:col-span-4 min-h-[420px] text-primary-foreground glow-ember p-0">
          <img
            src={heroCourt}
            alt="Basketball resting under a spotlit hoop on hardwood"
            width={1920}
            height={1080}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-onyx via-onyx/85 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-onyx/90 via-transparent to-transparent" />
          <div className="relative flex h-full flex-col justify-end p-6 sm:p-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-flame/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-flame ring-1 ring-flame/40">
                <FlameIcon className="h-4 w-4" /> Chapter One
              </div>
              <h1 className="mt-4 text-6xl leading-[0.9] sm:text-8xl lg:text-[9rem]">
                THE RULES
                <span className="block text-stroke-flame">OF THE GAME</span>
              </h1>
              <p className="mt-4 max-w-xl text-base font-medium leading-relaxed text-foreground/85 sm:text-lg">
                Everything you need to lace up, hit the hardwood, and play basketball the right way.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#how-to-play" className="inline-flex items-center gap-2 rounded-full bg-flame px-5 py-2.5 text-sm font-bold uppercase tracking-wider text-flame-foreground transition-transform hover:scale-105">
                  <WhistleIcon className="h-4 w-4" /> How to Play
                </a>
                <Link to="/training" className="inline-flex items-center gap-2 rounded-full border-2 border-flame/40 bg-onyx/60 px-5 py-2.5 text-sm font-bold uppercase tracking-wider text-foreground backdrop-blur transition-colors hover:bg-flame/15">
                  <TrophyIcon className="h-4 w-4" /> Start Training →
                </Link>
              </div>
            </div>
          </div>
        </BentoCard>

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

        <BentoCard className="bg-onyx text-onyx-foreground">
          <BasketballIcon className="h-8 w-8 text-flame" />
          <div className="mt-3 font-display text-6xl leading-none">5<span className="text-3xl opacity-60">v5</span></div>
          <p className="mt-2 text-sm font-semibold uppercase tracking-wider opacity-80">Players per side</p>
        </BentoCard>

        <BentoCard className="bg-ember text-ember-foreground">
          <TrophyIcon className="h-8 w-8" />
          <div className="mt-3 font-display text-6xl leading-none">10<span className="text-3xl">ft</span></div>
          <p className="mt-2 text-sm font-semibold uppercase tracking-wider opacity-90">Hoop height</p>
        </BentoCard>
      </div>

      {/* RULES */}
      <section id="rules" className="mt-10">
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-flame/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-flame">
            <WhistleIcon className="h-4 w-4" /> Core Rules
          </div>
          <h2 className="mt-2 text-5xl text-foreground sm:text-6xl">Know the Rules</h2>
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

      {/* HOW TO PLAY */}
      <section id="how-to-play" className="mt-14">
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-ember/25 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-flame">
            <BasketballIcon className="h-4 w-4" /> How to Play
          </div>
          <h2 className="mt-2 text-5xl text-foreground sm:text-6xl">From Tip-Off to Buzzer</h2>
        </div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6">
          {HOW_TO_PLAY.map((s, i) => (
            <BentoCard key={s.step} className={i % 2 === 0 ? "bg-onyx text-onyx-foreground" : "bg-card text-card-foreground"}>
              <div className="flex items-start gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-flame text-flame-foreground font-display text-3xl">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-3xl">{s.step}</h3>
                  <p className="mt-2 text-sm font-medium leading-relaxed opacity-80">{s.desc}</p>
                </div>
              </div>
            </BentoCard>
          ))}
        </div>
      </section>

      {/* CTA to training */}
      <BentoCard className="mt-10 bg-gradient-to-br from-charcoal via-onyx to-charcoal text-charcoal-foreground">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-flame">Next Chapter</p>
            <h3 className="mt-2 text-4xl sm:text-5xl">Train Your Game</h3>
            <p className="mt-2 max-w-md text-sm font-medium opacity-80">Guided drills, video tutorials, and progress tracking.</p>
          </div>
          <Link to="/training" className="inline-flex items-center gap-2 rounded-full bg-flame px-6 py-3 text-sm font-bold uppercase tracking-wider text-flame-foreground transition-transform hover:scale-105">
            <TrophyIcon className="h-4 w-4" /> Go to Training →
          </Link>
        </div>
      </BentoCard>
    </div>
  );
}
