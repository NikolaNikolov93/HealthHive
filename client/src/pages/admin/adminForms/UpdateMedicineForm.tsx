import { MedType } from "../../../types/types";
import {
  AddButton,
  FormField,
  Input,
  RemoveButton,
  StockField,
  StyledForm,
  SubmitButton,
  SuccessMessage,
  TextArea,
} from "./UpdateMedicineForm.styles";
import { useUpdateMedicine } from "../../../hooks/useUpdateMedicine";
import useForm from "../../../hooks/useForm";
import { useState } from "react";
import ErrorSection from "../../../components/errorSection/ErrorSection";

type UpdateMedicineFormProps = {
  medicine: MedType; // Medicine data passed from the parent component
  onClose: () => void; // Function to close the form
};

const UpdateMedicineForm: React.FC<UpdateMedicineFormProps> = ({
  medicine,
  onClose,
}) => {
  // Initialize the useForm hook with initial values from the medicine prop
  const { values, errors, handleChange, setValues, handleSubmit } = useForm(
    {
      name: medicine.name,
      brand: medicine.brand,
      description: medicine.description,
      price: medicine.price,
      stockDetails: Object.entries(medicine.stockDetails), // Convert stockDetails to an array for easier manipulation
      category: medicine.category, // Category remains unchanged
    },
    "update-med"
  );
  const [successMessage, setSuccessMessage] = useState<string>("");

  // Hook to handle the update mutation
  const updateMedicineMutation = useUpdateMedicine();

  // Update stockDetails at a specific index
  const handleStockChange = (
    index: number,
    key: string,
    value: number | string
  ) => {
    const updatedStock = [...values.stockDetails];
    updatedStock[index] = [key, value === "" ? 0 : Number(value)];
    setValues({ stockDetails: updatedStock });
  };

  // Add a new stock entry
  const handleAddStock = () => {
    setValues({ stockDetails: [...values.stockDetails, ["", ""]] });
  };

  // Remove a stock entry at a specific index
  const handleRemoveStock = (index: number) => {
    setValues({
      stockDetails: values.stockDetails.filter((_, i) => i !== index),
    });
  };

  // Handle form submission
  const formSubmit = async () => {
    const updatedMedicine = {
      id: medicine._id, // Pass the ID to identify the medicine to update
      ...values,
      stockDetails: new Map(values.stockDetails), // Convert stockDetails back to a Map before submitting
    };

    // Perform the mutation to update the medicine
    updateMedicineMutation.mutate(updatedMedicine, {
      onSuccess: () => {
        setSuccessMessage("Medicine updated successfully!");
        onClose(); // Close the form on successful update
      },
    });
  };

  return (
    <StyledForm
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(formSubmit);
      }}
    >
      <FormField>
        <label>
          Name:
          <Input
            type="text"
            value={values.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />
        </label>
        {errors.name && <ErrorSection error={errors.name} />}
      </FormField>

      {/* Form field for Brand */}
      <FormField>
        <label>
          Brand:
          <Input
            type="text"
            value={values.brand}
            onChange={(e) => handleChange("brand", e.target.value)}
          />
        </label>
        {errors.brand && <ErrorSection error={errors.brand} />}
      </FormField>

      {/* Form field for Description */}
      <FormField>
        <label>
          Description:
          <TextArea
            value={values.description}
            onChange={(e) => handleChange("description", e.target.value)}
          />
        </label>
        {errors.description && <ErrorSection error={errors.description} />}
      </FormField>

      {/* Form field for Price */}
      <FormField>
        <label>
          Price:
          <Input
            type="number"
            value={values.price === 0 ? "" : values.price} // Show an empty string if price is 0
            onChange={(e) =>
              handleChange(
                "price",
                e.target.value === "" ? "" : Number(e.target.value)
              )
            }
          />
        </label>
        {errors.price && <ErrorSection error={errors.price} />}
      </FormField>

      {/* Dynamic form fields for Stock Details */}
      <FormField>
        <label>Stock Details:</label>
        {values.stockDetails.map(([expireDate, stock], index) => (
          <StockField key={expireDate + index}>
            <Input
              type="date"
              value={expireDate}
              onChange={(e) =>
                handleStockChange(index, e.target.value, stock as number)
              }
            />
            {errors.stockDetails && (
              <ErrorSection error={errors.stockDetails} />
            )}

            {stock === 0 ? (
              <Input
                type={"text"}
                value={"Out of stock"} // Display empty string for 0
                onChange={(e) =>
                  handleStockChange(
                    index,
                    expireDate,
                    e.target.value === "" ? "" : Number(e.target.value)
                  )
                }
              />
            ) : (
              <Input
                type={"number"}
                value={stock === 0 ? "" : stock} // Display empty string for 0
                onChange={(e) =>
                  handleStockChange(
                    index,
                    expireDate,
                    e.target.value === "" ? "" : Number(e.target.value)
                  )
                }
              />
            )}

            <RemoveButton
              type="button"
              onClick={() => handleRemoveStock(index)}
            >
              Remove
            </RemoveButton>
          </StockField>
        ))}
        <AddButton type="button" onClick={handleAddStock}>
          Add Expiration Date
        </AddButton>
      </FormField>

      {/* Submit button */}
      <SubmitButton type="submit">Update</SubmitButton>
      {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
    </StyledForm>
  );
};

export default UpdateMedicineForm;
