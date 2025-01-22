import { useState } from "react";
import { useAddMedicine } from "../../../hooks/useAddMedicine";
import { CategoryData, categoryData } from "../../../constants/contants";
import useForm from "../../../hooks/useForm";

const AddMedicine = () => {
  const initialFormState = {
    name: "",
    brand: "",
    description: "",
    price: "",
    stockDetails: "",
    expirationDate: "",
    mainCategory: "",
    subCategory: "",
    generalUsage: "",
    img: "",
  };

  const { values, handleChange, setValues, resetForm } =
    useForm(initialFormState);
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string>(""); // New state for success message
  const { mutate: addMedicine, isError } = useAddMedicine();

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setValues({ img: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    setIsLoading(true);
    e.preventDefault();
    setSuccessMessage(""); // Clear previous success message
    try {
      const newMedicine = {
        ...values,
        price: parseFloat(values.price),
        stock: parseFloat(values.stockDetails),
      };

      addMedicine(newMedicine); // Call the mutation function to add the medicine
      setIsLoading(false);
      setSuccessMessage("Medicine added successfully!");
      resetForm();
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
          value={values.name}
          onChange={(e) => handleChange("name", e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="brand">Brand:</label>
        <input
          id="brand"
          type="text"
          value={values.brand}
          onChange={(e) => handleChange("brand", e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <input
          id="description"
          type="text"
          value={values.description}
          onChange={(e) => handleChange("description", e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="price">Price:</label>
        <input
          id="price"
          type="number"
          value={values.price}
          onChange={(e) => handleChange("price", e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="stock">Stock:</label>
        <input
          id="stock"
          type="number"
          value={values.stockDetails}
          onChange={(e) => handleChange("stockDetails", e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="expirationDate">Expiration Date:</label>
        <input
          id="expirationDate"
          type="date"
          value={values.expirationDate}
          onChange={(e) => handleChange("expirationDate", e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="mainCategory">Main category:</label>
        <select
          id="mainCategory"
          value={values.mainCategory}
          onChange={(e) => handleChange("mainCategory", e.target.value)}
          required
        >
          <option value="">Select Main Category</option>
          {Object.keys(categoryData).map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="subCategory">Sub category:</label>
        <select
          id="subCategory"
          value={values.subCategory}
          onChange={(e) => handleChange("subCategory", e.target.value)}
          required
          disabled={!values.mainCategory}
        >
          <option value="">Select Sub Category</option>
          {values.mainCategory &&
            Object.keys(
              categoryData[values.mainCategory as keyof CategoryData]
            ).map((subCat) => (
              <option key={subCat} value={subCat}>
                {subCat}
              </option>
            ))}
        </select>
      </div>
      <div>
        <label htmlFor="generalUsage">General usage:</label>
        <select
          id="generalUsage"
          value={values.generalUsage}
          onChange={(e) => handleChange("generalUsage", e.target.value)}
          required
          disabled={!values.subCategory}
        >
          <option value="">Select General Name</option>
          {values.subCategory &&
            categoryData[values.mainCategory as keyof CategoryData][
              values.subCategory
            ].map((generalName) => (
              <option key={generalName} value={generalName}>
                {generalName}
              </option>
            ))}
        </select>
      </div>
      <div>
        <label htmlFor="image">Upload Image:</label>
        <input
          id="image"
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
        />
      </div>
      <div>
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Adding..." : "Add Medicine"}
        </button>
      </div>

      {isError && <p style={{ color: "red" }}>Failed to add medicine</p>}
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
    </form>
  );
};

export default AddMedicine;
