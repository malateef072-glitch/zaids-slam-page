import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/use-auth";

export function useProgress() {
  const { user } = useAuth();
  const userId = user?.id ?? null;
  const queryClient = useQueryClient();

  const query = useQuery({
    queryKey: ["user-progress", userId],
    enabled: !!userId,
    queryFn: async () => {
      const { data, error } = await supabase
        .from("user_progress")
        .select("drill_id")
        .eq("user_id", userId!);
      if (error) throw new Error(error.message);
      return data.map((r) => r.drill_id as string);
    },
  });

  const completed = new Set(query.data ?? []);

  const toggle = useMutation({
    mutationFn: async (drillId: string) => {
      if (!userId) throw new Error("Sign in to track progress");
      if (completed.has(drillId)) {
        const { error } = await supabase
          .from("user_progress")
          .delete()
          .eq("user_id", userId)
          .eq("drill_id", drillId);
        if (error) throw new Error(error.message);
        return false;
      }
      const { error } = await supabase
        .from("user_progress")
        .insert({ user_id: userId, drill_id: drillId });
      if (error) throw new Error(error.message);
      return true;
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["user-progress", userId] }),
  });

  return {
    completed,
    isLoading: query.isLoading,
    toggle,
    signedIn: !!userId,
  };
}
