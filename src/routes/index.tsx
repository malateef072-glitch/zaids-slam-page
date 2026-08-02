import { createFileRoute, Link } from "@tanstack/react-router";
import heroCourt from "@/assets/hero-court.jpg";
import swishLogo from "@/assets/swish-logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Swish — Practice Hard. Get Stronger. Play Better." },
      {
        name: "description",
        content:
          "Swish turns basketball practice into a plan: guided drills, weekly coaching classes, fitness programs, and progress tracking in one place.",
      },
      { property: "og:title", content: "Swish — Practice Hard. Get Stronger. Play Better." },
      {
        property: "og:description",
        content:
          "Guided drills, weekly coaching classes, fitness programs, and progress tracking in one place.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://zaids-slam-page.lovable.app/" },
    ],
    links: [{ rel: "canonical", href: "https://zaids-slam-page.lovable.app/" }],
  }),
  component: LandingPage;
});

function Icon({ path, className }: { path: string; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: path }}
    />
  );
}

const P = {
  ball: '<circle cx="12" cy="12" r="10"/><path d="M2.1 13.2a10 10 0 0 0 19.8 0"/><path d="M5.7 4.4a10 10 0 0 0 12.6 15.2"/><path d="M12 2v20"/>',
  whistle: '<path d="M3 12a6 6 0 0 1 6-6h9l3 3-3 3H9a3 3 0 1 0 0 6h6"/><circle cx="9" cy="12" r="2"/>',
  trophy:
    '<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2z"/>',
  chart: '<path d="M3 3v18h18"/><path d="M7 15l4-5 3 3 5-7"/>',
  clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
  video: '<rect x="2" y="5" width="14" height="14" rx="2"/><path d="M16 10l6-3v10l-6-3"/>',
  heart: '<path d="M12 21s-7-4.6-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.4-7 10-7 10z"/>',
  users: '<circle cx="9" cy="8" r="4"/><path d="M2 21a7 7 0 0 1 14 0"/><path d="M17 4a4 4 0 0 1 0 8"/>',
  check: '<path d="M20 6L9 17l-5-5"/>',
  x: '<path d="M18 6L6 18M6 6l12 12"/>',
};

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-3xl p-6 sm:p-8 bento-shadow ${className}`}>{children}</div>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-flame/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-flame">
      {children}
    </div>
  );
}

const PROBLEMS = [
  "Players practice hard but with no plan — the same three moves, over and over.",
  "Good coaching is expensive, far away, or booked out for the season.",
  "Rules, drills, and fitness advice are scattered across random videos.",
  "Nobody tracks progress, so improvement is invisible and motivation dies.",
];

const SOLUTION = [
  {
    icon: P.video,
    title: "Guided drill library",
    desc: "Every drill is filmed, numbered, and tagged by skill and difficulty — so you always know what to do next.",
  },
  {
    icon: P.users,
    title: "Real coaching, weekly",
    desc: "Live classes with vetted coaches and pro-trained partners, on a schedule that fits school and work.",
  },
  {
    icon: P.heart,
    title: "Strength and health built in",
    desc: "Jump, mobility, and nutrition programs made for basketball bodies — not generic gym plans.",
  },
  {
    icon: P.chart,
    title: "Progress you can see",
    desc: "Mark drills complete and watch category-by-category completion climb week after week.",
  },
];

const STEPS = [
  { n: "01", title: "Pick your level", desc: "Tell us where you're at. Beginner fundamentals or advanced finishing — you start in the right place." },
  { n: "02", title: "Follow the plan", desc: "Short video drills with numbered steps you can run at any hoop, alone or with a team." },
  { n: "03", title: "Train with a coach", desc: "Book a weekly class to sharpen what you practiced and fix what the camera can't see." },
  { n: "04", title: "Track and repeat", desc: "Complete drills, watch your progress dashboard fill up, and level up to the next block." },
];

const FEATURES = [
  { icon: P.video, title: "Short-form video drills", desc: "Under 5 minutes each. Watch, copy, repeat." },
  { icon: P.whistle, title: "Rules made simple", desc: "Every core rule explained in plain language." },
  { icon: P.clock, title: "Weekly class schedule", desc: "See open slots and reserve in two taps." },
  { icon: P.chart, title: "Progress dashboard", desc: "Completion percentages per skill category." },
  { icon: P.heart, title: "Fitness programs", desc: "Strength, vertical jump, mobility, and nutrition." },
  { icon: P.trophy, title: "Coach-verified content", desc: "Built with coaches who train competitive players." },
];

const MARKET = [
  { stat: "450M+", label: "People play basketball worldwide" },
  { stat: "$5B+", label: "Youth sports training spend per year" },
  { stat: "70%", label: "Of young players quit without good coaching" },
];

const PLANS = [
  { name: "Rookie", price: "Free", desc: "Rules, starter drills, and progress tracking.", cta: "Start free", highlight: false },
  { name: "Starter", price: "$19/mo", desc: "Full drill library, fitness programs, one class a week.", cta: "Get started", highlight: true },
  { name: "All-Star", price: "$49/mo", desc: "Unlimited classes, personal plan, coach feedback.", cta: "Go All-Star", highlight: false },
];

const PROOF = [
  { quote: "My son went from bench to starting point guard in one season.", who: "Parent, U14 program" },
  { quote: "The drills are the closest thing to having a coach in your pocket.", who: "High school shooting guard" },
  { quote: "Finally a plan instead of random YouTube practice.", who: "Amateur league captain" },
];

function LandingPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      {/* HERO */}
      <section className="relative overflow-hidden rounded-3xl bento-shadow glow-ember">
        <img
          src={heroCourt}
          alt="Basketball resting under a spotlit hoop on hardwood"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-onyx via-onyx/85 to-onyx/30" />
        <div className="relative flex min-h-[480px] flex-col justify-end p-6 sm:p-12">
          <img
            src={swishLogo}
            alt="Swish logo"
            width={112}
            height={112}
            className="h-20 w-20 object-contain sm:h-28 sm:w-28"
          />
          <h1 className="mt-5 text-5xl leading-[0.9] text-foreground sm:text-7xl lg:text-8xl">
            PRACTICE HARD.
            <span className="block text-stroke-flame">GET BETTER DAILY.</span>
          </h1>
          <p className="mt-5 max-w-xl text-base font-medium leading-relaxed text-foreground/85 sm:text-lg">
            Swish is the basketball training platform that turns practice into a plan — guided video
            drills, weekly coaching classes, and a fitness program that actually makes you a better
            player.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              to="/training"
              className="inline-flex items-center gap-2 rounded-full bg-flame px-6 py-3 text-sm font-bold uppercase tracking-wider text-flame-foreground transition-transform hover:scale-105"
            >
              <Icon path={P.ball} className="h-4 w-4" /> Start training free
            </Link>
            <Link
              to="/coaching"
              className="inline-flex items-center gap-2 rounded-full border-2 border-flame/40 bg-onyx/60 px-6 py-3 text-sm font-bold uppercase tracking-wider text-foreground backdrop-blur transition-colors hover:bg-flame/15"
            >
              <Icon path={P.users} className="h-4 w-4" /> Book a class
            </Link>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="mt-14">
        <Eyebrow>The problem</Eyebrow>
        <h2 className="mt-2 max-w-2xl text-4xl text-foreground sm:text-5xl">
          Hard work without a plan doesn't make better players
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {PROBLEMS.map((p) => (
            <Card key={p} className="flex items-start gap-4 bg-card text-card-foreground">
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-destructive/15 text-destructive">
                <Icon path={P.x} className="h-4 w-4" />
              </span>
              <p className="text-sm font-medium leading-relaxed text-muted-foreground">{p}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* SOLUTION */}
      <section className="mt-16">
        <Eyebrow>The solution</Eyebrow>
        <h2 className="mt-2 max-w-2xl text-4xl text-foreground sm:text-5xl">
          One place for drills, coaching, and fitness
        </h2>
        <p className="mt-3 max-w-2xl text-sm font-medium leading-relaxed text-muted-foreground sm:text-base">
          Swish replaces scattered videos and guesswork with a structured path — so every session
          moves your game forward.
        </p>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {SOLUTION.map((s, i) => (
            <Card
              key={s.title}
              className={i % 2 === 0 ? "bg-onyx text-onyx-foreground" : "bg-card text-card-foreground"}
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-flame/15 text-flame">
                <Icon path={s.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-2xl sm:text-3xl">{s.title}</h3>
              <p className="mt-2 text-sm font-medium leading-relaxed opacity-80">{s.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="mt-16">
        <Eyebrow>How it works</Eyebrow>
        <h2 className="mt-2 text-4xl text-foreground sm:text-5xl">Four steps to a better game</h2>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s) => (
            <Card key={s.n} className="bg-card text-card-foreground">
              <span className="font-display text-5xl text-flame/80">{s.n}</span>
              <h3 className="mt-3 text-2xl">{s.title}</h3>
              <p className="mt-2 text-sm font-medium leading-relaxed text-muted-foreground">{s.desc}</p>
            </Card>
          ))}
        </div>
        <div className="mt-6">
          <Link
            to="/training"
            className="inline-flex items-center gap-2 rounded-full bg-flame px-6 py-3 text-sm font-bold uppercase tracking-wider text-flame-foreground transition-transform hover:scale-105"
          >
            <Icon path={P.ball} className="h-4 w-4" /> Try your first drill
          </Link>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mt-16">
        <Eyebrow>Key features</Eyebrow>
        <h2 className="mt-2 text-4xl text-foreground sm:text-5xl">Everything a player needs</h2>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <Card key={f.title} className="bg-card text-card-foreground">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-flame/15 text-flame">
                <Icon path={f.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-2xl">{f.title}</h3>
              <p className="mt-2 text-sm font-medium leading-relaxed text-muted-foreground">{f.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* MARKET */}
      <section className="mt-16">
        <Eyebrow>Market opportunity</Eyebrow>
        <h2 className="mt-2 text-4xl text-foreground sm:text-5xl">A global game, underserved</h2>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {MARKET.map((m) => (
            <Card key={m.label} className="bg-onyx text-onyx-foreground">
              <div className="font-display text-5xl leading-none text-flame sm:text-6xl">{m.stat}</div>
              <p className="mt-3 text-sm font-semibold uppercase tracking-wider opacity-80">{m.label}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* BUSINESS MODEL */}
      <section className="mt-16">
        <Eyebrow>Business model</Eyebrow>
        <h2 className="mt-2 text-4xl text-foreground sm:text-5xl">Simple monthly plans</h2>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {PLANS.map((p) => (
            <Card
              key={p.name}
              className={
                p.highlight
                  ? "bg-flame text-flame-foreground ring-2 ring-flame/60"
                  : "bg-card text-card-foreground"
              }
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] opacity-80">{p.name}</p>
              <div className="mt-2 font-display text-5xl leading-none">{p.price}</div>
              <p className="mt-3 text-sm font-medium leading-relaxed opacity-80">{p.desc}</p>
              <Link
                to="/coaching"
                className={`mt-5 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold uppercase tracking-wider transition-transform hover:scale-105 ${
                  p.highlight
                    ? "bg-onyx text-onyx-foreground"
                    : "bg-flame text-flame-foreground"
                }`}
              >
                <Icon path={P.check} className="h-4 w-4" /> {p.cta}
              </Link>
            </Card>
          ))}
        </div>
      </section>

      {/* TRACTION / PROOF */}
      <section className="mt-16">
        <Eyebrow>Traction</Eyebrow>
        <h2 className="mt-2 text-4xl text-foreground sm:text-5xl">Players are already improving</h2>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {PROOF.map((t) => (
            <Card key={t.who} className="bg-card text-card-foreground">
              <Icon path={P.trophy} className="h-6 w-6 text-flame" />
              <p className="mt-4 text-base font-medium leading-relaxed text-foreground">“{t.quote}”</p>
              <p className="mt-3 text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
                {t.who}
              </p>
            </Card>
          ))}
        </div>
        <div className="mt-4">
          <Link
            to="/reviews"
            className="text-sm font-bold uppercase tracking-wider text-flame hover:underline"
          >
            Read all reviews →
          </Link>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="mt-16 rounded-3xl bg-gradient-to-br from-charcoal via-onyx to-charcoal p-8 text-charcoal-foreground bento-shadow sm:p-12">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-flame">Get started today</p>
            <h2 className="mt-2 max-w-lg text-4xl sm:text-5xl">
              Practice hard. Stay healthy. Become a better player.
            </h2>
            <p className="mt-3 max-w-md text-sm font-medium opacity-80">
              Free to start. No gear required beyond a ball and a hoop.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/auth"
              className="inline-flex items-center gap-2 rounded-full bg-flame px-6 py-3 text-sm font-bold uppercase tracking-wider text-flame-foreground transition-transform hover:scale-105"
            >
              <Icon path={P.ball} className="h-4 w-4" /> Get started free
            </Link>
            <Link
              to="/coaching"
              className="inline-flex items-center gap-2 rounded-full border-2 border-flame/40 px-6 py-3 text-sm font-bold uppercase tracking-wider text-foreground transition-colors hover:bg-flame/15"
            >
              <Icon path={P.users} className="h-4 w-4" /> Book a demo class
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
