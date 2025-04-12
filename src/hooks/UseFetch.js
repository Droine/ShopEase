import { useQuery } from "@tanstack/react-query";

const fetchPerfumes = async () => {
  const res = await fetch("/api/perfumes"); // adjust URL if needed
  return res.json();
};

const PerfumeList = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["perfumes"],
    queryFn: fetchPerfumes,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching perfumes</p>;

  return (
    <div>
      {data.map((perfume) => (
        <div key={perfume.id}>
          <h2>{perfume.name}</h2>
          <p>{perfume.description}</p>
        </div>
      ))}
    </div>
  );
};
