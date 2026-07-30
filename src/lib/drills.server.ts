import { createClient } from "@supabase/supabase-js";

import type { Database } from "@/integrations/supabase/types";
import type { Drill, DrillStep } from "./drills.types";

function publicClient() {
  return createClient<Database>(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_PUBLISHABLE_KEY!,
    { auth: { storage: undefined, persistSession: false, autoRefreshToken: false } },
  );
}

const COLUMNS =
  "id, slug, title, description, category, difficulty, duration_seconds, video_url, thumbnail_url, steps";

type Row = {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: Drill["category"];
  difficulty: Drill["difficulty"];
  duration_seconds: number;
  video_url: string;
  thumbnail_url: string;
  steps: unknown;
};

function toDrill(row: Row): Drill {
  const steps = Array.isArray(row.steps) ? (row.steps as DrillStep[]) : [];
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    description: row.description ?? "",
    category: row.category,
    difficulty: row.difficulty,
    durationSeconds: row.duration_seconds,
    videoUrl: row.video_url,
    thumbnailUrl: row.thumbnail_url,
    steps: [...steps].sort((a, b) => a.order - b.order),
  };
}

export async function fetchDrills(): Promise<Drill[]> {
  const { data, error } = await publicClient()
    .from("drills")
    .select(COLUMNS)
    .order("category", { ascending: true })
    .order("title", { ascending: true });
  if (error) throw new Error(error.message);
  return (data as unknown as Row[]).map(toDrill);
}

export async function fetchDrillBySlug(slug: string): Promise<Drill | null> {
  const { data, error } = await publicClient()
    .from("drills")
    .select(COLUMNS)
    .eq("slug", slug)
    .maybeSingle();
  if (error) throw new Error(error.message);
  return data ? toDrill(data as unknown as Row) : null;
}
