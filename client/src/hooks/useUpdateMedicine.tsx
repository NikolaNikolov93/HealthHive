import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useUpdateMedicine = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (updatedMedicine: Record<string, any>) => {
      const formattedMedicine: Record<string, any> = {
        ...updatedMedicine,
        stockDetails: Object.fromEntries(updatedMedicine.stockDetails), // Convert Map to Object
      };

      const response = await fetch(
        `http://localhost:5000/medicines/update/${formattedMedicine.id}`, // Assume the medicine object includes an `id` field
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(formattedMedicine),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to update the medicine");
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["medicines"],
      });
    },
    onError: (error: Error) => {
      console.error("Error updating medicine:", error.message);
      alert(`Failed to update medicine: ${error.message}`);
    },
  });

  return mutation;
};
