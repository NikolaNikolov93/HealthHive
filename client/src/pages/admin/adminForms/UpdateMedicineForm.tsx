import { useState } from "react";
import { MedType } from "../../../types/types";

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
    console.log(stockDetails);
  };

  const handleSubmit = async () => {
    const updatedMedicine = {
      name,
      brand,
      description,
      price,
      stockDetails: new Map(stockDetails),
      category: medicine.category, // Optional if category remains unchanged
    };

    // Call API or mutation to update the medicine in the database
    console.log("Updated Medicine Data: ", updatedMedicine);

    // Close the modal after successful update
    onClose();
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Brand:
          <input
            type="text"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Price:
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          />
        </label>
      </div>
      <div>
        <label>Stock Details:</label>
        {stockDetails.map(([expireDate, stock], index) => (
          <div key={expireDate + index}>
            <input
              type="date"
              value={expireDate}
              onChange={(e) => handleDateChange(index, e.target.value)}
            />
            <input
              type="number"
              value={stock === "" ? "" : stock}
              onChange={(e) =>
                handleStockChange(index, expireDate, Number(e.target.value))
              }
            />
            <button
              type="button"
              onClick={() =>
                setStockDetails(stockDetails.filter((_, i) => i !== index))
              }
            >
              {" "}
              Renmove
            </button>
          </div>
        ))}
        <button type="button" onClick={handleAddExpirationDate}>
          Add Expiration Date
        </button>
      </div>
      <button type="button" onClick={handleSubmit}>
        Update
      </button>
    </form>
  );
};

export default UpdateMedicineForm;
