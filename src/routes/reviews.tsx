import { createFileRoute, Link } from "@tanstack/react-router";
import { useAuth, can } from "@/hooks/use-auth";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews — Hoops Handbook Coaching" },
      { name: "description", content: "Parents, players, and coaches share their experience training with the Hoops Handbook program." },
      { property: "og:title", content: "Reviews — Hoops Handbook Coaching" },
      { property: "og:description", content: "Real stories from players and parents in our weekly basketball classes." },
    ],
  }),
  component: ReviewsPage,
});

const reviews = [
  { name: "Marcus T.", role: "Parent · U14", stars: 5, text: "My son's shooting form transformed in 8 weeks. Coaches are patient and detailed." },
  { name: "Aisha R.", role: "Player · U16", stars: 5, text: "Best off-season I've had. The IQ sessions changed how I read defenses." },
  { name: "Coach Danny", role: "High school assistant", stars: 5, text: "Their footwork progressions are gold. I use them with my varsity team now." },
  { name: "Priya S.", role: "Parent · U10", stars: 4, text: "Fun, energetic, safe. My daughter can't wait for Saturday scrimmage." },
  { name: "Jordan K.", role: "Adult league", stars: 5, text: "The fitness track got my vertical up 3 inches and my knees feel better." },
  { name: "Leo M.", role: "Player · U18", stars: 5, text: "Private sessions felt pro-level. Real film, real numbers, real growth." },
];

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5 text-flame" aria-label={`${n} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i}>{i < n ? "★" : "☆"}</span>
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <header className="mb-10 rounded-3xl border border-flame/20 bg-charcoal/60 p-8 bento-shadow">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-flame">Reviews</p>
        <h1 className="mt-2 font-display text-5xl text-foreground sm:text-6xl">What our hoopers say</h1>
        <div className="mt-4 flex items-center gap-3">
          <Stars n={5} />
          <span className="text-sm text-foreground/70">4.9 average · 240+ reviews</span>
        </div>
      </header>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {reviews.map((r) => (
          <article key={r.name} className="rounded-2xl border border-flame/15 bg-card/70 p-5 bento-shadow">
            <Stars n={r.stars} />
            <p className="mt-3 text-foreground/85">"{r.text}"</p>
            <div className="mt-4 border-t border-flame/10 pt-3">
              <p className="font-display text-xl text-foreground">{r.name}</p>
              <p className="text-xs uppercase tracking-[0.2em] text-flame/80">{r.role}</p>
            </div>
          </article>
        ))}
      </section>

      <LeaveReview />
    </main>
  );
}

function LeaveReview() {
  const { user, role } = useAuth();
  const allowed = can(role, "create");

  if (!user) {
    return (
      <section className="mt-10 rounded-2xl border border-flame/15 bg-onyx/60 p-6 text-center bento-shadow">
        <h2 className="font-display text-2xl text-flame">Leave a review</h2>
        <p className="mt-2 text-foreground/70">Sign in to share your experience.</p>
        <Link to="/auth" className="mt-4 inline-block rounded-full bg-flame px-4 py-2 text-sm font-bold uppercase tracking-[0.2em] text-flame-foreground">
          Sign in
        </Link>
      </section>
    );
  }

  if (!allowed) {
    return (
      <section className="mt-10 rounded-2xl border border-flame/15 bg-onyx/60 p-6 text-center bento-shadow">
        <h2 className="font-display text-2xl text-flame">Members only</h2>
        <p className="mt-2 text-foreground/70">
          Your role is <span className="text-flame">{role}</span>. Ask an Owner to upgrade you to Member to post reviews.
        </p>
      </section>
    );
  }

  return (
    <section className="mt-10 rounded-2xl border border-flame/15 bg-onyx/60 p-6 bento-shadow">
      <h2 className="font-display text-2xl text-flame">Leave a review</h2>
      <form className="mt-4 grid gap-3 sm:grid-cols-2" onSubmit={(e) => { e.preventDefault(); alert("Thanks for your review!"); }}>
        <input required placeholder="Your name" className="rounded-lg border border-flame/20 bg-charcoal/70 px-3 py-2 text-sm text-foreground placeholder:text-foreground/40" />
        <input placeholder="Role (parent, player…)" className="rounded-lg border border-flame/20 bg-charcoal/70 px-3 py-2 text-sm text-foreground placeholder:text-foreground/40" />
        <textarea required placeholder="Tell us how it went…" rows={4} className="sm:col-span-2 rounded-lg border border-flame/20 bg-charcoal/70 px-3 py-2 text-sm text-foreground placeholder:text-foreground/40" />
        <button className="sm:col-span-2 rounded-full bg-flame px-4 py-2 text-sm font-bold uppercase tracking-[0.2em] text-flame-foreground">
          Submit review
        </button>
      </form>
    </section>
  );
}

function _closer() {
  return (
    <main>
      <section />
    </main>
  );
}
