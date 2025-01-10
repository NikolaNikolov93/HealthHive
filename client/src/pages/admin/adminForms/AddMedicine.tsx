import { useState } from "react";
import { useAddMedicine } from "../../../hooks/useAddMedicine";

const AddMedicine = () => {
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState<string>("");
  const [stockDetails, setStockDetails] = useState<string>("");
  const [expirationDate, setExpirationDate] = useState("");
  const [category, setCategory] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { mutate: addMedicine, isError } = useAddMedicine();

  const handleSubmit = (e: React.FormEvent) => {
    setIsLoading(true);
    e.preventDefault();
    try {
      const newMedicine = {
        name,
        brand,
        description,
        price: parseFloat(price), // Convert price string to number
        stock: parseFloat(stockDetails),
        expirationDate,
        category,
      };

      addMedicine(newMedicine); // Call the mutation function to add the medicine
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="brand">Brand:</label>
        <input
          id="brand"
          type="text"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <input
          id="description"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="price">Price:</label>
        <input
          id="price"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="stock">Stock:</label>
        <input
          id="stock"
          type="number"
          value={stockDetails}
          onChange={(e) => setStockDetails(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="expirationDate">Expiration Date:</label>
        <input
          id="expirationDate"
          type="date"
          value={expirationDate}
          onChange={(e) => setExpirationDate(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="category">Category:</label>
        <input
          id="category"
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
      </div>
      <div>
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Adding..." : "Add Medicine"}
        </button>
      </div>

      {isError && <p style={{ color: "red" }}>Failed to add medicine</p>}
    </form>
  );
};

export default AddMedicine;