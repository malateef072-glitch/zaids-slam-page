export const DRILL_CATEGORIES = [
  "Dribbling",
  "Shooting",
  "Passing",
  "Defense",
  "Footwork",
  "Conditioning",
] as const;

export const DRILL_DIFFICULTIES = ["Beginner", "Intermediate", "Advanced"] as const;

export type DrillCategory = (typeof DRILL_CATEGORIES)[number];
export type DrillDifficulty = (typeof DRILL_DIFFICULTIES)[number];

export type DrillStep = {
  order: number;
  title: string;
  description: string;
  imageUrl: string | null;
};

export type Drill = {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: DrillCategory;
  difficulty: DrillDifficulty;
  durationSeconds: number;
  videoUrl: string;
  thumbnailUrl: string;
  steps: DrillStep[];
};

export function formatDuration(seconds: number) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return m > 0 ? `${m}:${String(s).padStart(2, "0")}` : `0:${String(s).padStart(2, "0")}`;
}
