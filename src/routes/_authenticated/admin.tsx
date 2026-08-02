import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth, type AppRole } from "@/hooks/use-auth";

export const Route = createFileRoute("/_authenticated/admin")({
  head: () => ({
    meta: [
      { title: "Admin — Swish" },
      { name: "description", content: "Owner control panel: manage user roles." },
      { property: "og:title", content: "Admin — Swish" },
      { property: "og:description", content: "Manage roles and access." },
    ],
  }),
  component: AdminPage,
});

type Row = { user_id: string; role: AppRole; created_at: string };

function AdminPage() {
  const { role, user, loading } = useAuth();
  const [rows, setRows] = useState<Row[]>([]);
  const [status, setStatus] = useState<string | null>(null);
  const [newUserId, setNewUserId] = useState("");
  const [newRole, setNewRole] = useState<AppRole>("member");

  const load = async () => {
    const { data, error } = await supabase
      .from("user_roles")
      .select("user_id, role, created_at")
      .order("created_at", { ascending: false });
    if (error) setStatus(error.message);
    else setRows((data ?? []) as Row[]);
  };

  useEffect(() => {
    if (role === "owner") load();
  }, [role]);

  if (loading) return <main className="mx-auto max-w-4xl px-6 py-10 text-foreground/60">Loading…</main>;

  if (role !== "owner") {
    return (
      <main className="mx-auto max-w-2xl px-6 py-16 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-flame">Restricted</p>
        <h1 className="mt-2 font-display text-4xl text-foreground">Owner only</h1>
        <p className="mt-3 text-foreground/70">
          Signed in as <span className="text-flame">{user?.email}</span> · role{" "}
          <span className="text-flame">{role ?? "—"}</span>. This page is for the site Owner.
        </p>
      </main>
    );
  }

  const assign = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);
    const { error } = await supabase
      .from("user_roles")
      .insert({ user_id: newUserId.trim(), role: newRole });
    if (error) setStatus(error.message);
    else {
      setStatus("Role assigned.");
      setNewUserId("");
      load();
    }
  };

  const remove = async (r: Row) => {
    const { error } = await supabase
      .from("user_roles")
      .delete()
      .eq("user_id", r.user_id)
      .eq("role", r.role);
    if (error) setStatus(error.message);
    else load();
  };

  return (
    <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      <header className="mb-8 rounded-3xl border border-flame/20 bg-charcoal/60 p-8 bento-shadow">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-flame">Owner Panel</p>
        <h1 className="mt-2 font-display text-5xl text-foreground">Manage Roles</h1>
        <p className="mt-2 text-foreground/70">
          Owners have full access. Members can create and edit. Visitors can only view.
        </p>
      </header>

      <section className="mb-8 rounded-2xl border border-flame/15 bg-onyx/60 p-6 bento-shadow">
        <h2 className="font-display text-2xl text-flame">Assign a role</h2>
        <form onSubmit={assign} className="mt-4 grid gap-3 sm:grid-cols-[1fr_auto_auto]">
          <input
            required
            placeholder="User UUID (from auth.users)"
            value={newUserId}
            onChange={(e) => setNewUserId(e.target.value)}
            className="rounded-lg border border-flame/20 bg-charcoal/70 px-3 py-2 text-sm text-foreground placeholder:text-foreground/40"
          />
          <select
            value={newRole}
            onChange={(e) => setNewRole(e.target.value as AppRole)}
            className="rounded-lg border border-flame/20 bg-charcoal/70 px-3 py-2 text-sm text-foreground"
          >
            <option value="owner">owner</option>
            <option value="member">member</option>
            <option value="visitor">visitor</option>
          </select>
          <button className="rounded-full bg-flame px-4 py-2 text-sm font-bold uppercase tracking-[0.2em] text-flame-foreground">
            Assign
          </button>
        </form>
        {status && <p className="mt-3 text-sm text-foreground/70">{status}</p>}
      </section>

      <section className="rounded-2xl border border-flame/15 bg-charcoal/60 p-6 bento-shadow">
        <h2 className="font-display text-2xl text-flame">All role assignments</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-left text-xs uppercase tracking-[0.2em] text-foreground/60">
              <tr>
                <th className="py-2">User ID</th>
                <th className="py-2">Role</th>
                <th className="py-2">Created</th>
                <th className="py-2"></th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.user_id + r.role} className="border-t border-flame/10">
                  <td className="py-2 font-mono text-xs text-foreground/80">{r.user_id}</td>
                  <td className="py-2">
                    <span className="rounded-full bg-flame/15 px-2 py-0.5 text-xs font-bold uppercase tracking-[0.2em] text-flame">
                      {r.role}
                    </span>
                  </td>
                  <td className="py-2 text-foreground/60">{new Date(r.created_at).toLocaleDateString()}</td>
                  <td className="py-2 text-right">
                    <button
                      onClick={() => remove(r)}
                      className="rounded-full border border-flame/30 px-3 py-1 text-xs uppercase tracking-[0.2em] text-foreground/80 hover:bg-flame/10"
                    >
                      Revoke
                    </button>
                  </td>
                </tr>
              ))}
              {rows.length === 0 && (
                <tr><td colSpan={4} className="py-4 text-foreground/50">No roles yet.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-8 rounded-2xl border border-flame/15 bg-onyx/60 p-6 bento-shadow">
        <h2 className="font-display text-2xl text-flame">Permission Matrix</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-left text-xs uppercase tracking-[0.2em] text-foreground/60">
              <tr><th className="py-2">Action</th><th>Owner</th><th>Member</th><th>Visitor</th></tr>
            </thead>
            <tbody className="text-foreground/85">
              {[
                ["View content","✔","✔","✔"],
                ["Create content","✔","✔","✖"],
                ["Edit content","✔","✔","✖"],
                ["Delete content","✔","Limited","✖"],
                ["Manage users","✔","✖","✖"],
                ["Change settings","✔","✖","✖"],
                ["Access admin","✔","✖","✖"],
              ].map((r) => (
                <tr key={r[0]} className="border-t border-flame/10">
                  {r.map((c, i) => <td key={i} className="py-2 pr-4">{c}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
