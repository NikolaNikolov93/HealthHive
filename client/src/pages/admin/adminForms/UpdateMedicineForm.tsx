import { useState } from "react";
import { MedType } from "../../../types/types";
import {
  AddButton,
  FormField,
  Input,
  RemoveButton,
  StockField,
  StyledForm,
  SubmitButton,
  TextArea,
} from "./UpdateMedicineForm.styles";
import { useUpdateMedicine } from "../../../hooks/useUpdateMedicine";

type UpdateMedicineFormProps = {
  medicine: MedType;
  onClose: () => void;
};

const UpdateMedicineForm: React.FC<UpdateMedicineFormProps> = ({
  medicine,
  onClose,
}) => {
  const [name, setName] = useState(medicine.name);
  const [brand, setBrand] = useState(medicine.brand);
  const [description, setDescription] = useState(medicine.description);
  const [price, setPrice] = useState(medicine.price);
  const [stockDetails, setStockDetails] = useState(
    Object.entries(medicine.stockDetails)
  );

  const updateMedicineMutation = useUpdateMedicine();

  const handleStockChange = (index: number, key: string, value: number) => {
    const updatedStock = [...stockDetails];
    updatedStock[index] = [key, value ? Number(value) : ""];
    setStockDetails(updatedStock);
  };
  const handleDateChange = (index: number, newDate: string) => {
    const updatedStock = [...stockDetails];
    updatedStock[index] = [newDate, updatedStock[index][1]]; // Update the date while keeping the stock unchanged
    setStockDetails(updatedStock);
  };
  const handleAddExpirationDate = () => {
    setStockDetails([...stockDetails, ["", ""]]); // Add a new empty stock entry
  };

  const handleSubmit = async () => {
    const updatedMedicine = {
      id: medicine._id,
      name,
      brand,
      description,
      price,
      stockDetails: new Map(stockDetails),
      category: medicine.category, // Optional if category remains unchanged
    };

    updateMedicineMutation.mutate(updatedMedicine, {
      onSuccess: () => {
        console.log("Medicine updated successfully!");
        onClose();
      },
    });
  };

  return (
    <StyledForm onSubmit={(e) => e.preventDefault()}>
      <FormField>
        <label>
          Name:
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </FormField>
      <FormField>
        <label>
          Brand:
          <Input
            type="text"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
        </label>
      </FormField>
      <FormField>
        <label>
          Description:
          <TextArea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
      </FormField>
      <FormField>
        <label>
          Price:
          <Input
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          />
        </label>
      </FormField>
      <FormField>
        <label>Stock Details:</label>
        {stockDetails.map(([expireDate, stock], index) => (
          <StockField key={expireDate + index}>
            <Input
              type="date"
              value={expireDate}
              onChange={(e) => handleDateChange(index, e.target.value)}
            />
            <Input
              type="number"
              value={stock === "" ? "" : stock}
              onChange={(e) =>
                handleStockChange(index, expireDate, Number(e.target.value))
              }
            />
            <RemoveButton
              type="button"
              onClick={() =>
                setStockDetails(stockDetails.filter((_, i) => i !== index))
              }
            >
              {" "}
              Renmove
            </RemoveButton>
          </StockField>
        ))}
        <AddButton type="button" onClick={handleAddExpirationDate}>
          Add Expiration Date
        </AddButton>
      </FormField>
      <SubmitButton type="button" onClick={handleSubmit}>
        Update
      </SubmitButton>
    </StyledForm>
  );
};

export default UpdateMedicineForm;
