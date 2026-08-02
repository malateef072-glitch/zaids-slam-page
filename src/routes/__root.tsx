import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { AuthProvider, useAuth } from "@/hooks/use-auth";
import { ChatWidget } from "@/components/chat-widget";
import swishLogo from "@/assets/swish-logo.png";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Swish — Practice Hard. Get Stronger. Play Better." },
      { name: "description", content: "Swish turns basketball practice into a plan: guided drills, weekly coaching classes, fitness programs, and progress tracking in one place." },
      { property: "og:title", content: "Swish — Practice Hard. Get Stronger. Play Better." },
      { property: "og:description", content: "Guided drills, weekly coaching classes, fitness programs, and progress tracking in one place." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Swish" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Swish — Practice Hard. Get Stronger. Play Better." },
      { name: "twitter:description", content: "Guided drills, weekly coaching classes, fitness programs, and progress tracking in one place." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/66955492-e833-41ee-8a5f-737fbc0eb200/id-preview-a3b81685--7f05f418-82d1-46e5-8f3d-b22180132977.lovable.app-1783507783563.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/66955492-e833-41ee-8a5f-737fbc0eb200/id-preview-a3b81685--7f05f418-82d1-46e5-8f3d-b22180132977.lovable.app-1783507783563.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function SiteNav() {
  const { user, role, signOut } = useAuth();
  const linkBase =
    "inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] transition-colors";
  return (
    <nav className="sticky top-0 z-50 border-b border-flame/15 bg-onyx/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2.5 text-foreground">
          <img src={swishLogo} alt="Swish basketball training logo" width={36} height={36} className="h-9 w-9 shrink-0 object-contain" />
          <span className="font-display text-2xl tracking-[0.18em]">SWISH</span>
        </Link>
        <div className="flex flex-wrap items-center gap-2">
          <Link to="/" className={`${linkBase} text-foreground/70 hover:bg-flame/10 hover:text-flame`} activeOptions={{ exact: true }} activeProps={{ className: `${linkBase} bg-flame text-flame-foreground` }}>Home</Link>
          
          <Link to="/coaching" className={`${linkBase} text-foreground/70 hover:bg-flame/10 hover:text-flame`} activeProps={{ className: `${linkBase} bg-flame text-flame-foreground` }}>Coaching</Link>
          <Link to="/training" className={`${linkBase} text-foreground/70 hover:bg-flame/10 hover:text-flame`} activeProps={{ className: `${linkBase} bg-flame text-flame-foreground` }}>Training</Link>
          <Link to="/fitness" className={`${linkBase} text-foreground/70 hover:bg-flame/10 hover:text-flame`} activeProps={{ className: `${linkBase} bg-flame text-flame-foreground` }}>Fitness</Link>
          <Link to="/reviews" className={`${linkBase} text-foreground/70 hover:bg-flame/10 hover:text-flame`} activeProps={{ className: `${linkBase} bg-flame text-flame-foreground` }}>Reviews</Link>
          {role === "owner" && (
            <Link to="/admin" className={`${linkBase} text-foreground/70 hover:bg-flame/10 hover:text-flame`} activeProps={{ className: `${linkBase} bg-flame text-flame-foreground` }}>Admin</Link>
          )}
          {user ? (
            <>
              <span className="rounded-full bg-flame/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-flame">
                {role ?? "…"}
              </span>
              <button onClick={signOut} className={`${linkBase} border border-flame/30 text-foreground/70 hover:bg-flame/10 hover:text-flame`}>
                Sign out
              </button>
            </>
          ) : (
            <Link to="/auth" className={`${linkBase} bg-flame text-flame-foreground`}>Sign in</Link>
          )}
        </div>
      </div>
    </nav>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <SiteNav />
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <Outlet />
        <ChatWidget />
        <footer className="mt-8 border-t border-flame/10 bg-onyx/60 py-6 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/60">
            © 2026 Swish · Practice hard, get stronger, become a better basketball player every day.
          </p>
        </footer>

      </AuthProvider>
    </QueryClientProvider>
  );
}
