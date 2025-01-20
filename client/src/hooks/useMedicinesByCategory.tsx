import { useQuery } from "@tanstack/react-query";
import { MedType } from "../types/types";

const fetchMedicinesByCategory = async ({
  mainCategory,
  subCategory,
  specificConditions,
}: {
  mainCategory?: string;
  subCategory?: string;
  specificConditions?: string;
}): Promise<MedType[]> => {
  let params = ``;
  if (specificConditions)
    params += `${mainCategory}/${subCategory}/${specificConditions}`;
  else if (subCategory) params += `${mainCategory}/${subCategory}`;
  else params += `${mainCategory}`;

  const response = await fetch(
    `http://localhost:5000/medicines/getByMainCategory/${params}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch medicines");
  }
  return response.json();
};

const useMedicinesByCategory = (filters: {
  mainCategory?: string;
  subCategory?: string;
  specificConditions?: string;
}) => {
  return useQuery<MedType[], Error>({
    queryKey: ["medicines", filters],
    queryFn: () => fetchMedicinesByCategory(filters),

    //Caching --> The collection is cached for 10secs
    staleTime: 10000,
    refetchInterval: 10000,
  });
};

export default useMedicinesByCategory;
