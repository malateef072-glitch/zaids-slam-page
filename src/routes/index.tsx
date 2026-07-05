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

function QuoteIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M10 11H5.5v-.5C5.5 7.46 7.46 5.5 10 5.5V8c-1.38 0-2.5 1.12-2.5 2.5h2.5v5H7a2 2 0 0 1-2-2v-2.5c0-2.76 2.24-5 5-5v2.5C7.46 8.5 5.5 10.46 5.5 13v-2Z" />
      <path d="M18.5 11H14v-.5c0-3.04 1.96-5 4.5-5V8c-1.38 0-2.5 1.12-2.5 2.5H18.5v5H15a2 2 0 0 1-2-2v-2.5c0-2.76 2.24-5 5-5v2.5c-2.76 0-4.5 1.96-4.5 4.5v-2Z" />
    </svg>
  );
}

function BentoCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-3xl p-6 sm:p-8 bento-shadow transition-transform duration-300 hover:-translate-y-1 ${className}`}
    >
      {children}
    </div>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-background px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Bento grid */}
        <div className="grid auto-rows-[minmax(180px,auto)] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {/* Hero — spans full width */}
          <BentoCard className="col-span-1 bg-primary text-primary-foreground sm:col-span-2 lg:col-span-4">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full bg-cream/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground">
                  <SparklesIcon className="h-4 w-4" />
                  Grade 6 Student
                </div>
                <h1 className="mt-4 text-6xl leading-none sm:text-7xl lg:text-8xl">
                  Zaid Abdul Lateef
                </h1>
                <p className="mt-4 max-w-xl text-base font-medium leading-relaxed opacity-90 sm:text-lg">
                  A curious, energetic student who loves basketball, expressive
                  poetry, and trying new things at school.
                </p>
              </div>
              <div className="flex h-32 w-32 shrink-0 items-center justify-center self-start rounded-full bg-cream/20 ring-4 ring-cream/20 sm:h-40 sm:w-40 lg:self-center">
                <BasketballIcon className="h-20 w-20 text-cream sm:h-24 sm:w-24" />
              </div>
            </div>
          </BentoCard>

          {/* Bio — large text card */}
          <BentoCard className="col-span-1 bg-card text-card-foreground sm:col-span-2 lg:col-span-2 lg:row-span-2">
            <h2 className="text-4xl text-foreground sm:text-5xl">About Me</h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              My name is Zaid Abdul Lateef and I am a Grade 6 student. I am
              curious about the world around me and I try my best in every
              subject.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              School is exciting because there is always something new to learn,
              whether it is solving a math problem, reading a great story, or
              presenting in front of my class.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Basketball", "Poems", "Reading", "Sports Day"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-sunset/10 px-3 py-1 text-sm font-semibold text-sunset"
                >
                  {tag}
                </span>
              ))}
            </div>
          </BentoCard>

          {/* Basketball card */}
          <BentoCard className="col-span-1 bg-coral text-coral-foreground">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-coral-foreground/15">
              <BasketballIcon className="h-7 w-7" />
            </div>
            <h3 className="mt-5 text-3xl">Basketball</h3>
            <p className="mt-2 text-sm font-medium leading-relaxed opacity-90">
              I play every chance I get — practicing dribbling, shooting, and
              teamwork with my friends.
            </p>
          </BentoCard>

          {/* Poem recitation card */}
          <BentoCard className="col-span-1 bg-berry text-berry-foreground">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-berry-foreground/20">
              <MicIcon className="h-7 w-7" />
            </div>
            <h3 className="mt-5 text-3xl">Poem Recitation</h3>
            <p className="mt-2 text-sm font-medium leading-relaxed opacity-90">
              I enjoy memorizing and reciting poems in front of classmates. It
              helps me speak clearly and confidently.
            </p>
          </BentoCard>

          {/* Reading club card */}
          <BentoCard className="col-span-1 bg-violet text-violet-foreground">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-foreground/20">
              <BookOpenIcon className="h-7 w-7" />
            </div>
            <h3 className="mt-5 text-3xl">Reading Club</h3>
            <p className="mt-2 text-sm font-medium leading-relaxed opacity-90">
              I love reading adventure stories and sharing my favorite books
              with friends.
            </p>
          </BentoCard>

          {/* Sports day card */}
          <BentoCard className="col-span-1 bg-sunset text-sunset-foreground">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sunset-foreground/15">
              <TrophyIcon className="h-7 w-7" />
            </div>
            <h3 className="mt-5 text-3xl">Sports Day</h3>
            <p className="mt-2 text-sm font-medium leading-relaxed opacity-90">
              I compete in races and cheer for my house team every year.
            </p>
          </BentoCard>

          {/* Quote banner */}
          <BentoCard className="col-span-1 bg-foreground text-background sm:col-span-2 lg:col-span-4">
            <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
              <QuoteIcon className="h-10 w-10 shrink-0 text-coral" />
              <div>
                <p className="text-2xl font-semibold italic leading-snug sm:text-3xl">
                  “Hard work beats talent when talent doesn’t work hard.”
                </p>
                <p className="mt-2 text-sm font-semibold opacity-70">
                  A motto I remember before every game and every recital
                </p>
              </div>
            </div>
          </BentoCard>
        </div>

        {/* Footer */}
        <footer className="mt-10 flex flex-col items-center justify-between gap-3 rounded-3xl bg-muted px-6 py-5 sm:flex-row">
          <div className="flex items-center gap-2">
            <BasketballIcon className="h-5 w-5 text-sunset" />
            <span className="font-display text-lg tracking-wide text-foreground">
              Zaid Abdul Lateef
            </span>
          </div>
          <p className="text-sm font-medium text-muted-foreground">
            Grade 6 · Basketball fan · Poem reciter
          </p>
        </footer>
      </div>
    </main>
  );
}
