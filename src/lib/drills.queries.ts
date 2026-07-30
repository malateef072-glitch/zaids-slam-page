import { queryOptions } from "@tanstack/react-query";

import { getDrills, getDrill } from "./drills.functions";
import type { Drill } from "./drills.types";

export const drillsQueryOptions = queryOptions({
  queryKey: ["drills"],
  queryFn: () => getDrills() as Promise<Drill[]>,
  staleTime: 5 * 60_000,
});

export const drillQueryOptions = (slug: string) =>
  queryOptions({
    queryKey: ["drill", slug],
    queryFn: () => getDrill({ data: { slug } }) as Promise<Drill | null>,
    staleTime: 5 * 60_000,
  });
