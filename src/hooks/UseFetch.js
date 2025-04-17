import { useQuery } from "@tanstack/react-query";

const fetchPerfumes = async () => {
  const res = await fetch("https://dummyjson.com/products"); // adjust URL if needed
  return res.json();
};

export const usePerfumeFetch = () => {
  return useQuery("perfumes", fetchPerfumes, {
    staleTime: 1000 * 60 * 5, // 5 minutes
    cacheTime: 1000 * 60 * 10, // 10 minutes
    refetchOnWindowFocus: false,
  });
};

// import { useQuery } from "@tanstack/react-query";

// const fetcher = async ({ queryKey }) => {
//   const [, url] = queryKey;
//   const res = await fetch(url);
//   if (!res.ok) throw new Error("Network response was not ok");
//   return res.json();
// };

// export const useFetch = (key, url, options = {}) => {
//   return useQuery([key, url], fetcher, {
//     staleTime: 1000 * 60 * 5,
//     cacheTime: 1000 * 60 * 10,
//     refetchOnWindowFocus: false,
//     ...options,
//   });
// };
