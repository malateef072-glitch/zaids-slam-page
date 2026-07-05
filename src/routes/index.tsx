import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function BasketballIcon({ className }: { className?: string }) {
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
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M2.1 13.2a10 10 0 0 0 19.8 0" />
      <path d="M5.7 4.4a10 10 0 0 0 12.6 15.2" />
      <path d="M12 2v20" />
    </svg>
  );
}

function MicIcon({ className }: { className?: string }) {
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
    >
      <path d="M12 19v3" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <rect x="9" y="2" width="6" height="11" rx="3" />
    </svg>
  );
}

function BookOpenIcon({ className }: { className?: string }) {
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
    >
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  );
}

function TrophyIcon({ className }: { className?: string }) {
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
    >
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2z" />
    </svg>
  );
}

function SparklesIcon({ className }: { className?: string }) {
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
    >
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3z" />
    </svg>
  );
}

const activities = [
  {
    title: "Basketball",
    description:
      "I play basketball every chance I get — practicing dribbling, shooting, and teamwork with my friends.",
    icon: BasketballIcon,
  },
  {
    title: "Poem Recitation",
    description:
      "I enjoy memorizing and reciting poems in front of classmates. It helps me speak clearly and confidently.",
    icon: MicIcon,
  },
  {
    title: "Reading Club",
    description:
      "I love reading adventure stories and sharing my favorite books with friends during our school reading club.",
    icon: BookOpenIcon,
  },
  {
    title: "Sports Day",
    description:
      "I look forward to Sports Day every year, where I compete in races and cheer for my house team.",
    icon: TrophyIcon,
  },
];

function Index() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-20 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
                <SparklesIcon className="h-4 w-4" />
                <span>Grade 6 Student</span>
              </div>
              <h1 className="mt-6 text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                Zaid Abdul{" "}
                <span className="text-primary">Lateef</span>
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
                A curious, energetic student who loves basketball, expressive
                poetry, and trying new things at school.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#about"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-transform hover:scale-105 active:scale-95"
                >
                  Read my bio
                </a>
                <a
                  href="#activities"
                  className="inline-flex items-center justify-center rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-card-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  See my activities
                </a>
              </div>
            </div>

            <div className="relative hidden md:block">
              <div className="flex h-64 w-64 items-center justify-center rounded-full bg-primary/10 shadow-2xl shadow-primary/10 ring-8 ring-primary/5 lg:h-80 lg:w-80">
                <BasketballIcon className="h-32 w-32 text-primary lg:h-40 lg:w-40" />
              </div>
              <div className="absolute -right-4 -top-4 rounded-2xl bg-card p-4 shadow-xl ring-1 ring-border">
                <span className="text-2xl font-black text-primary">6</span>
                <p className="text-xs font-semibold text-muted-foreground">Grade</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section id="about" className="px-6 py-16 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-3xl bg-card p-8 shadow-xl ring-1 ring-border sm:p-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              About Me
            </h2>
            <div className="mt-6 grid gap-8 md:grid-cols-3">
              <p className="text-pretty leading-relaxed text-muted-foreground md:col-span-2">
                My name is Zaid Abdul Lateef and I am a Grade 6 student. I am
                curious about the world around me and I try my best in every
                subject. School is exciting because there is always something
                new to learn, whether it is solving a math problem, reading a
                great story, or presenting in front of my class.
              </p>
              <div className="rounded-2xl bg-secondary p-6">
                <h3 className="text-sm font-bold uppercase tracking-wider text-secondary-foreground">
                  Quick Facts
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-primary" />
                    Favorite sport: Basketball
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-primary" />
                    Favorite activity: Poem recitation
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-primary" />
                    Dream: To play on a school basketball team
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-primary" />
                    Best subject: English
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities */}
      <section id="activities" className="px-6 py-16 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              School Activities
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Here are some of the things I enjoy doing inside and outside the
              classroom.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {activities.map((activity) => (
              <article
                key={activity.title}
                className="group rounded-2xl bg-card p-6 shadow-lg ring-1 ring-border transition-all hover:-translate-y-1 hover:shadow-xl hover:ring-primary/20"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <activity.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-foreground">
                  {activity.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {activity.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="px-6 py-16 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <blockquote className="rounded-3xl bg-court px-8 py-12 text-court-foreground shadow-2xl sm:px-16">
            <p className="text-2xl font-semibold italic leading-relaxed sm:text-3xl">
              “Hard work beats talent when talent doesn’t work hard.”
            </p>
            <footer className="mt-6 text-sm font-semibold opacity-80">
              — A motto I remember before every game and every recital
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-10 lg:px-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2">
            <BasketballIcon className="h-5 w-5 text-primary" />
            <span className="font-bold text-foreground">Zaid Abdul Lateef</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Grade 6 · Basketball fan · Poem reciter
          </p>
        </div>
      </footer>
    </main>
  );
}
