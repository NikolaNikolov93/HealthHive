import { useDeleteMedicine } from "../../../hooks/useDeleteMedicine";
import useMedicines from "../../../hooks/useMedicines";
import { MedType } from "../../../types/types";
import StockDetails from "./StockDetails";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from "./Table.styles";

type MedicinesTableProps = {
  searchTerm: string;
};

const MedicinesTable: React.FC<MedicinesTableProps> = ({ searchTerm }) => {
  const { data: medicines, isLoading, error } = useMedicines();
  const deleteMedicine = useDeleteMedicine();
  // Filter medicines based on the search term
  const filteredMedicines = medicines?.filter((medicine: MedType) =>
    medicine.name.toLowerCase().includes(searchTerm)
  );
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Brand</TableHeaderCell>
          <TableHeaderCell>Description</TableHeaderCell>
          <TableHeaderCell>Price</TableHeaderCell>

          <TableHeaderCell>Expiration Date</TableHeaderCell>
          <TableHeaderCell>Category</TableHeaderCell>
          <TableHeaderCell>Actions</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {filteredMedicines?.map((medicine: MedType) => {
          return (
            <TableRow key={medicine._id}>
              <TableCell>{medicine.name}</TableCell>
              <TableCell>{medicine.brand}</TableCell>
              <TableCell>{medicine.description}</TableCell>
              <TableCell>${medicine.price}</TableCell>

              <TableCell>
                <StockDetails stockDetails={medicine.stockDetails} />
              </TableCell>
              <TableCell>{medicine.category}</TableCell>
              <TableCell>
                <Button onClick={() => handleUpdate(medicine._id)}>
                  Update
                </Button>
                <Button onClick={() => handleDelete(medicine._id)}>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );

  // Mock functions to handle Update and Delete
  function handleUpdate(id: string) {
    console.log(`Update medicine with ID: ${id}`);
    // Navigate to an update form or show a modal to update
  }

  function handleDelete(id: string) {
    console.log(`Delete medicine with ID: ${id}`);
    deleteMedicine.mutate(id);
    // Call a service or function to delete the medicine
  }
};

export default MedicinesTable;
