import { createFileRoute, Link } from "@tanstack/react-router";
import coachingGym from "@/assets/coaching-gym.jpg";

export const Route = createFileRoute("/coaching")({
  head: () => ({
    meta: [
      { title: "Coaching & Weekly Classes — Swish" },
      { name: "description", content: "Elite basketball coaching academies, pros who trained with our coaches, weekly class schedules, and enrollment plans." },
      { property: "og:title", content: "Coaching & Weekly Classes — Swish" },
      { property: "og:description", content: "Train where the pros trained. Weekly schedules, plans, and secure payments." },
    ],
  }),
  component: CoachingPage,
});

const academies = [
  { name: "Impact Basketball", city: "Las Vegas, USA", url: "https://www.impactbasketball.com", tag: "Pro pre-season hub" },
  { name: "P3 Peak Performance", city: "Santa Barbara, USA", url: "https://www.p3.md", tag: "Biomechanics lab" },
  { name: "IMG Academy", city: "Bradenton, USA", url: "https://www.imgacademy.com/sports/basketball", tag: "Youth to pro pipeline" },
  { name: "NBA Academy", city: "Global", url: "https://academy.nba.com", tag: "Elite international prospects" },
  { name: "Pro Skills Basketball", city: "USA / EU", url: "https://www.proskillsbasketball.com", tag: "Camps & clinics" },
  { name: "Basketball Immersion", city: "Online", url: "https://basketballimmersion.com", tag: "Coach education" },
];

const pros = [
  { name: "Kevin Durant", coach: "Justin Zormelo", note: "Analytics-driven skill work" },
  { name: "Stephen Curry", coach: "Brandon Payne", note: "Neuromuscular & shooting" },
  { name: "LeBron James", coach: "Phil Handy", note: "Perimeter & footwork" },
  { name: "Giannis Antetokounmpo", coach: "Coach Alex Saratsis camp", note: "Off-season conditioning" },
  { name: "Luka Dončić", coach: "Anže Maček", note: "Playmaking + IQ" },
  { name: "Jayson Tatum", coach: "Drew Hanlen", note: "Scoring package" },
];

const schedule = [
  { day: "Monday", time: "4:30 – 6:00 PM", focus: "Ball-handling & footwork", level: "All ages" },
  { day: "Tuesday", time: "5:00 – 6:30 PM", focus: "Shooting mechanics", level: "U12 – U16" },
  { day: "Wednesday", time: "6:00 – 7:30 PM", focus: "Defense & rebounding", level: "Teens + adult" },
  { day: "Thursday", time: "4:30 – 6:00 PM", focus: "Playmaking & IQ", level: "U14 – U18" },
  { day: "Friday", time: "5:30 – 7:00 PM", focus: "Strength & mobility (fitness)", level: "All ages" },
  { day: "Saturday", time: "9:00 – 11:00 AM", focus: "Scrimmage & game reads", level: "All levels" },
  { day: "Sunday", time: "10:00 – 11:30 AM", focus: "Skills lab (open gym)", level: "Drop-in" },
];

const plans = [
  { name: "Rookie", price: "$49", per: "/ month", perks: ["1 class per week", "Group training", "Progress card"] },
  { name: "Starter", price: "$89", per: "/ month", perks: ["3 classes per week", "Shooting drills", "Fitness add-on"], featured: true },
  { name: "All-Star", price: "$149", per: "/ month", perks: ["Unlimited classes", "1x private coaching", "Nutrition guide"] },
];

const payments = ["Visa", "Mastercard", "Amex", "Apple Pay", "Google Pay", "PayPal", "Stripe", "Bank transfer"];

export default function CoachingPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <header className="relative mb-10 min-h-[340px] overflow-hidden rounded-3xl border border-flame/20 bento-shadow">
        <img
          src={coachingGym}
          alt="Players training in a warmly lit gym at sunset"
          width={1600}
          height={900}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-onyx via-onyx/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-onyx/90 via-transparent to-transparent" />
        <div className="relative p-8">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-flame">Coaching</p>
          <h1 className="mt-2 font-display text-5xl text-foreground sm:text-6xl">Train where the pros train</h1>
          <p className="mt-3 max-w-2xl text-foreground/80">
            Weekly classes for every level, coaches with pro pedigree, and a fitness track built for hoopers.
          </p>
        </div>
      </header>

      <section className="mb-12">
        <h2 className="font-display text-3xl text-flame">Partner academies & coaching sites</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {academies.map((a) => (
            <a
              key={a.name}
              href={a.url}
              target="_blank"
              rel="noreferrer"
              className="group rounded-2xl border border-flame/15 bg-card/70 p-5 bento-shadow transition-colors hover:border-flame/50"
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-flame/80">{a.tag}</p>
              <h3 className="mt-1 font-display text-2xl text-foreground group-hover:text-flame">{a.name}</h3>
              <p className="text-sm text-foreground/60">{a.city}</p>
              <p className="mt-3 text-xs font-bold uppercase tracking-[0.2em] text-flame">Visit site →</p>
            </a>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="font-display text-3xl text-flame">Pros trained with our network</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pros.map((p) => (
            <div key={p.name} className="rounded-2xl border border-flame/15 bg-onyx/60 p-5 bento-shadow">
              <h3 className="font-display text-2xl text-foreground">{p.name}</h3>
              <p className="mt-1 text-sm text-foreground/70">Coach: <span className="text-flame">{p.coach}</span></p>
              <p className="mt-2 text-sm text-foreground/60">{p.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="font-display text-3xl text-flame">Weekly class schedule</h2>
        <div className="mt-4 overflow-hidden rounded-2xl border border-flame/15 bento-shadow">
          <table className="w-full text-left text-sm">
            <thead className="bg-flame/10 text-flame">
              <tr>
                <th className="px-4 py-3 font-bold uppercase tracking-[0.15em]">Day</th>
                <th className="px-4 py-3 font-bold uppercase tracking-[0.15em]">Time</th>
                <th className="px-4 py-3 font-bold uppercase tracking-[0.15em]">Focus</th>
                <th className="px-4 py-3 font-bold uppercase tracking-[0.15em]">Level</th>
              </tr>
            </thead>
            <tbody className="bg-card/60">
              {schedule.map((s) => (
                <tr key={s.day} className="border-t border-flame/10">
                  <td className="px-4 py-3 font-display text-lg text-foreground">{s.day}</td>
                  <td className="px-4 py-3 text-foreground/80">{s.time}</td>
                  <td className="px-4 py-3 text-foreground/80">{s.focus}</td>
                  <td className="px-4 py-3 text-foreground/60">{s.level}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="font-display text-3xl text-flame">Plans & payment</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`rounded-2xl border p-6 bento-shadow ${
                p.featured ? "border-flame bg-flame/10 glow-ember" : "border-flame/15 bg-card/70"
              }`}
            >
              <h3 className="font-display text-3xl text-foreground">{p.name}</h3>
              <p className="mt-2">
                <span className="font-display text-4xl text-flame">{p.price}</span>
                <span className="ml-1 text-sm text-foreground/60">{p.per}</span>
              </p>
              <ul className="mt-4 space-y-2 text-sm text-foreground/80">
                {p.perks.map((perk) => (
                  <li key={perk}>• {perk}</li>
                ))}
              </ul>
              <button className="mt-5 w-full rounded-full bg-flame px-4 py-2 text-sm font-bold uppercase tracking-[0.2em] text-flame-foreground transition-transform hover:scale-[1.02]">
                Enroll now
              </button>
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-2xl border border-flame/15 bg-onyx/60 p-5">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-flame">Accepted payment methods</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {payments.map((m) => (
              <span
                key={m}
                className="rounded-full border border-flame/20 bg-card/60 px-3 py-1 text-xs font-semibold text-foreground/80"
              >
                {m}
              </span>
            ))}
          </div>
          <p className="mt-3 text-xs text-foreground/50">
            Secure checkout · encrypted payments · cancel anytime.
          </p>
        </div>
      </section>

      <div className="flex flex-wrap gap-3">
        <Link to="/fitness" className="rounded-full bg-flame px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-flame-foreground">
          See fitness program →
        </Link>
        <Link to="/reviews" className="rounded-full border border-flame/30 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-foreground/80 hover:text-flame">
          Read reviews
        </Link>
      </div>
    </main>
  );
}
