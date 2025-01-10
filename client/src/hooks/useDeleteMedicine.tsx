import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteMedicine = () => {
  const queryClient = useQueryClient();

  // Mutation function with correct typing
  const mutation = useMutation({
    mutationFn: async (id: string) => {
      const response = await fetch(
        `http://localhost:5000/medicines/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to delete the medicine");
      }
    },
    onSuccess: () => {
      // Invalidate the 'medicines' query to refetch the data
      queryClient.invalidateQueries({
        queryKey: ["medicines"],
      });
    },
    onError: (error: Error) => {
      console.error("Error deleting medicine:", error.message);
      alert(`Failed to delete medicine: ${error.message}`);
    },
  });

  return mutation;
};
