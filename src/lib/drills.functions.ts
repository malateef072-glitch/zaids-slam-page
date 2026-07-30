import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

import { fetchDrills, fetchDrillBySlug } from "./drills.server";

export const getDrills = createServerFn({ method: "GET" }).handler(async () => fetchDrills());

export const getDrill = createServerFn({ method: "GET" })
  .inputValidator((data) => z.object({ slug: z.string().min(1) }).parse(data))
  .handler(async ({ data }) => fetchDrillBySlug(data.slug));
