import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useAddMedicine = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (newMedicine: {
      name: string;
      brand: string;
      description: string;
      price: number;
      stock: number;
      expirationDate: string;
      mainCategory: string;
      subCategory: string;
      generalUsage: string;
      img: string;
    }) => {
      const response = await fetch("http://localhost:5000/medicines/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newMedicine),
        credentials: "include", // Ensure the token is sent if needed
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to add the medicine");
      }

      const addedMedicine = await response.json();
      return addedMedicine; // Return the added medicine (optional)
    },
    onSuccess: () => {
      // Invalidate the 'medicines' query to refetch the data
      queryClient.invalidateQueries({
        queryKey: ["medicines"],
      });
    },
    onError: (error: Error) => {
      console.error("Error adding medicine:", error.message);
      alert(`Failed to add medicine: ${error.message}`);
    },
  });

  return mutation;
};
