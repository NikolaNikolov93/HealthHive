import { useQuery } from "@tanstack/react-query";
import { MedType } from "../types/types";

const fetchMedicines = async (): Promise<MedType[]> => {
  const response = await fetch("http://localhost:5000/medicines/getAll", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch medicines");
  }
  return response.json();
};

const useMedicines = () => {
  return useQuery<MedType[], Error>({
    queryKey: ["medicines"],
    queryFn: fetchMedicines,

    //Caching --> The collection is cached for 10secs
    staleTime: 10000,
    refetchInterval: 10000,
  });
};

export default useMedicines;
