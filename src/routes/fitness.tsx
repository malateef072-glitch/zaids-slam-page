import { createFileRoute, Link } from "@tanstack/react-router";
import fitnessJump from "@/assets/fitness-jump.jpg";

export const Route = createFileRoute("/fitness")({
  head: () => ({
    meta: [
      { title: "Basketball Fitness — Strength, Speed & Vertical" },
      { name: "description", content: "Basketball-specific fitness program: strength, conditioning, mobility, vertical jump, and recovery." },
      { property: "og:title", content: "Basketball Fitness — Strength, Speed & Vertical" },
      { property: "og:description", content: "A hooper's fitness track: build a stronger, faster, more explosive game." },
    ],
  }),
  component: FitnessPage,
});

const pillars = [
  { title: "Strength", desc: "Squats, hinges, presses, and core work built for contact and finishing through defenders." },
  { title: "Speed & Agility", desc: "Lateral slides, first-step bursts, deceleration and change-of-direction drills." },
  { title: "Vertical Jump", desc: "Depth jumps, trap-bar pulls, tempo squats — progressive plyometrics to add inches." },
  { title: "Mobility", desc: "Hips, ankles, and thoracic spine — the foundation of shooting form and injury prevention." },
  { title: "Conditioning", desc: "Court-length intervals to keep your 4th-quarter legs as fresh as your 1st." },
  { title: "Recovery", desc: "Sleep, hydration, foam rolling, and load management. Recovery is training." },
];

const weekly = [
  { day: "Mon", block: "Lower body strength + jump progressions" },
  { day: "Tue", block: "Court skills + speed / agility" },
  { day: "Wed", block: "Upper body push/pull + core" },
  { day: "Thu", block: "Court skills + shooting under fatigue" },
  { day: "Fri", block: "Full-body power + plyos (fitness class)" },
  { day: "Sat", block: "Scrimmage + conditioning" },
  { day: "Sun", block: "Mobility, stretching, recovery" },
];

const nutrition = [
  "Eat protein at every meal (0.8–1.0 g/lb bodyweight per day).",
  "Carbs before and after training — rice, oats, potatoes, fruit.",
  "Hydrate: bodyweight (lb) ÷ 2 = ounces of water minimum.",
  "Sleep 8–10 hours — the biggest performance lever for teens.",
];

export default function FitnessPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <header className="relative mb-10 min-h-[340px] overflow-hidden rounded-3xl border border-flame/20 bento-shadow">
        <img
          src={fitnessJump}
          alt="Athlete mid-air during a plyometric jump on a dark court"
          width={1600}
          height={900}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-onyx via-onyx/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-onyx/90 via-transparent to-transparent" />
        <div className="relative p-8">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-flame">Fitness</p>
          <h1 className="mt-2 font-display text-5xl text-foreground sm:text-6xl">Build a hooper's body</h1>
          <p className="mt-3 max-w-2xl text-foreground/80">
            Strength, speed, vertical, mobility, and recovery — a basketball-specific fitness plan you can run alongside your weekly classes.
          </p>
        </div>
      </header>

      <section className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {pillars.map((p) => (
          <div key={p.title} className="rounded-2xl border border-flame/15 bg-card/70 p-5 bento-shadow">
            <h3 className="font-display text-2xl text-flame">{p.title}</h3>
            <p className="mt-2 text-sm text-foreground/80">{p.desc}</p>
          </div>
        ))}
      </section>

      <section className="mb-12 rounded-2xl border border-flame/15 bg-onyx/60 p-6 bento-shadow">
        <h2 className="font-display text-3xl text-flame">Weekly training split</h2>
        <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {weekly.map((w) => (
            <div key={w.day} className="rounded-xl border border-flame/10 bg-charcoal/60 p-4">
              <p className="font-display text-xl text-foreground">{w.day}</p>
              <p className="mt-1 text-sm text-foreground/70">{w.block}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12 rounded-2xl border border-flame/15 bg-card/70 p-6 bento-shadow">
        <h2 className="font-display text-3xl text-flame">Fuel & recovery</h2>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {nutrition.map((n) => (
            <li key={n} className="rounded-xl border border-flame/10 bg-onyx/50 p-3 text-sm text-foreground/85">
              • {n}
            </li>
          ))}
        </ul>
      </section>

      <div className="flex flex-wrap gap-3">
        <Link to="/coaching" className="rounded-full bg-flame px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-flame-foreground">
          Join weekly classes →
        </Link>
        <Link to="/reviews" className="rounded-full border border-flame/30 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-foreground/80 hover:text-flame">
          Read reviews
        </Link>
      </div>
    </main>
  );
}
