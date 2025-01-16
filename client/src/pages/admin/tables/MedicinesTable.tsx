import { useState } from "react";
import { useDeleteMedicine } from "../../../hooks/useDeleteMedicine";
import useMedicines from "../../../hooks/useMedicines";
import { MedType } from "../../../types/types";
import StockDetails from "./StockDetails";
import {
  Button,
  ButtonWrapper,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from "./Table.styles";
import Modal from "../../../components/modal/Modal";
import UpdateMedicineForm from "../adminForms/UpdateMedicineForm";

type MedicinesTableProps = {
  searchTerm: string;
};

const MedicinesTable: React.FC<MedicinesTableProps> = ({ searchTerm }) => {
  const { data: medicines, isLoading, error } = useMedicines();
  const deleteMedicine = useDeleteMedicine();

  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedMedicine, setSelectedMedicine] = useState<MedType | null>(
    null
  );

  const handleCloseModal = () => {
    setSelectedMedicine(null);
    setModalOpen(false);
  };

  const handleUpdate = (medicine: MedType) => {
    setSelectedMedicine(medicine);
    setModalOpen(true);
  };

  function handleDelete(id: string) {
    deleteMedicine.mutate(id);
    // Call a service or function to delete the medicine
  }

  // Filter medicines based on the search term
  const filteredMedicines = medicines?.filter((medicine: MedType) =>
    medicine.name.toLowerCase().includes(searchTerm)
  );
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Brand</TableHeaderCell>
            <TableHeaderCell>Description</TableHeaderCell>
            <TableHeaderCell>Price</TableHeaderCell>

            <TableHeaderCell>Expiration Date</TableHeaderCell>
            <TableHeaderCell>Category</TableHeaderCell>
            <TableHeaderCell>Sub Category</TableHeaderCell>
            <TableHeaderCell>Specific condition</TableHeaderCell>
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
                <TableCell>${medicine.price.toFixed(2)}</TableCell>

                <TableCell>
                  <StockDetails stockDetails={medicine.stockDetails} />
                </TableCell>
                <TableCell>{medicine.category.mainCategory}</TableCell>
                <TableCell>
                  {medicine.category.subCategory.generalName}
                </TableCell>
                <TableCell>
                  {medicine.category.subCategory.specificConditions}
                </TableCell>
                <TableCell>
                  <ButtonWrapper>
                    <Button onClick={() => handleUpdate(medicine)}>
                      Update
                    </Button>
                    <Button onClick={() => handleDelete(medicine._id)}>
                      Delete
                    </Button>
                  </ButtonWrapper>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      {isModalOpen && selectedMedicine && (
        <Modal title="Update Medicine" onClose={handleCloseModal}>
          <UpdateMedicineForm
            medicine={selectedMedicine}
            onClose={handleCloseModal}
          />
        </Modal>
      )}
    </>
  );
};

export default MedicinesTable;
