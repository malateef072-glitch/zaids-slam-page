import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Sign in — Hoops Handbook" },
      { name: "description", content: "Sign in to Hoops Handbook to access member and owner features." },
      { property: "og:title", content: "Sign in — Hoops Handbook" },
      { property: "og:description", content: "Sign in to access role-based features." },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) navigate({ to: "/" });
    });
  }, [navigate]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      if (mode === "signup") {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: { emailRedirectTo: window.location.origin },
        });
        if (error) throw error;
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
      }
      navigate({ to: "/" });
    } catch (e: any) {
      setError(e?.message ?? "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const google = async () => {
    setError(null);
    const result = await lovable.auth.signInWithOAuth("google", {
      redirect_uri: window.location.origin,
    });
    if (result.error) setError(result.error.message);
  };

  return (
    <main className="mx-auto flex min-h-[70vh] max-w-md items-center px-4 py-10">
      <div className="w-full rounded-3xl border border-flame/20 bg-charcoal/70 p-8 bento-shadow">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-flame">Access</p>
        <h1 className="mt-2 font-display text-4xl text-foreground">
          {mode === "signin" ? "Sign in" : "Create account"}
        </h1>
        <p className="mt-1 text-sm text-foreground/70">
          {mode === "signin" ? "Welcome back to the court." : "Join the Hoops Handbook community."}
        </p>

        <button
          onClick={google}
          className="mt-6 w-full rounded-full border border-flame/30 bg-onyx/70 px-4 py-2 text-sm font-bold uppercase tracking-[0.2em] text-foreground hover:bg-flame/10"
        >
          Continue with Google
        </button>

        <div className="my-5 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-foreground/40">
          <div className="h-px flex-1 bg-flame/10" /> or <div className="h-px flex-1 bg-flame/10" />
        </div>

        <form onSubmit={submit} className="grid gap-3">
          <input
            type="email"
            required
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-lg border border-flame/20 bg-onyx/60 px-3 py-2 text-sm text-foreground placeholder:text-foreground/40"
          />
          <input
            type="password"
            required
            minLength={6}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="rounded-lg border border-flame/20 bg-onyx/60 px-3 py-2 text-sm text-foreground placeholder:text-foreground/40"
          />
          {error && <p className="text-sm text-red-400">{error}</p>}
          <button
            disabled={loading}
            className="rounded-full bg-flame px-4 py-2 text-sm font-bold uppercase tracking-[0.2em] text-flame-foreground disabled:opacity-60"
          >
            {loading ? "..." : mode === "signin" ? "Sign in" : "Sign up"}
          </button>
        </form>

        <button
          onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
          className="mt-4 w-full text-xs uppercase tracking-[0.2em] text-foreground/60 hover:text-flame"
        >
          {mode === "signin" ? "New here? Create account" : "Have an account? Sign in"}
        </button>

        <p className="mt-6 text-center text-[10px] uppercase tracking-[0.25em] text-foreground/40">
          First signup becomes Owner · others start as Visitor
        </p>
      </div>
    </main>
  );
}
