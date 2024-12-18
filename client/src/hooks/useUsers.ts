import { useQuery } from "@tanstack/react-query";
import { UserType } from "../types/types";

const fetchUsers = async (): Promise<UserType[]> => {
  const response = await fetch("http://localhost:5000/auth/users", {
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

const useUsers = () => {
  return useQuery<UserType[], Error>({
    queryKey: ["users"],
    queryFn: fetchUsers,

    //Caching --> The collection is cached for 10secs
    staleTime: 10000,
    refetchInterval: 10000,
  });
};

export default useUsers;
