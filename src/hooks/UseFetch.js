// ✅ New (v5 style)
import { useQuery } from "@tanstack/react-query";

export const useFetch = (url) => {
  return useQuery({
    queryKey: ["data", url],
    queryFn: async () => {
      const res = await fetch(url);
      if (!res.ok) throw new Error("Network response was not ok");
      return res.json();
    },
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 10,
    refetchOnWindowFocus: false,
  });
};
