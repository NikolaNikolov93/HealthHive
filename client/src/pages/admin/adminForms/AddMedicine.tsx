import { useState } from "react";
import { useAddMedicine } from "../../../hooks/useAddMedicine";
import { CategoryData, categoryData } from "../../../constants/contants";
import useForm from "../../../hooks/useForm";
import {
  Button,
  ErrorMessage,
  FormContainer,
  Input,
  Label,
  Select,
  SuccessMessage,
} from "./AddMedicine.styles";
import ErrorSection from "../../../components/errorSection/ErrorSection";

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

  const {
    values,
    errors,
    handleChange,
    setValues,
    resetForm,
    handleSubmit,
    handleBlur,
  } = useForm(initialFormState, "add-med");
  const [successMessage, setSuccessMessage] = useState<string>(""); // New state for success message
  const { mutateAsync: addMedicine, isError } = useAddMedicine();

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

  const formSubmit = async () => {
    setSuccessMessage(""); // Clear previous success message
    try {
      const newMedicine = {
        ...values,
        price: parseFloat(values.price),
        stock: parseFloat(values.stockDetails),
      };

      await addMedicine(newMedicine); // Call the mutation function to add the medicine
      setSuccessMessage("Medicine added successfully!");

      resetForm();
    } catch (error) {
      setSuccessMessage("Failed to add medicine");
    }
  };

  return (
    <FormContainer
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(formSubmit);
      }}
    >
      <div>
        <Input
          id="name"
          type="text"
          value={values.name}
          onChange={(e) => handleChange("name", e.target.value)}
          placeholder="Name"
          required
          onBlur={() => handleBlur("name")}
        />
        {errors.name && <ErrorSection error={errors.name} />}
      </div>
      <div>
        <Input
          id="brand"
          type="text"
          value={values.brand}
          onChange={(e) => handleChange("brand", e.target.value)}
          placeholder="Brand"
          required
        />
        {errors.brand && <ErrorSection error={errors.brand} />}
      </div>
      <div>
        <Input
          id="description"
          type="text"
          value={values.description}
          onChange={(e) => handleChange("description", e.target.value)}
          placeholder="Description"
          required
        />
        {errors.description && <ErrorSection error={errors.description} />}
      </div>
      <div>
        <Input
          id="price"
          type="number"
          value={values.price}
          onChange={(e) => handleChange("price", e.target.value)}
          placeholder="Price"
          required
        />
        {errors.price && <ErrorSection error={errors.price} />}
      </div>
      <div>
        <Input
          id="stock"
          type="number"
          value={values.stockDetails}
          onChange={(e) => handleChange("stockDetails", e.target.value)}
          placeholder="Stock"
          required
        />
        {errors.stockDetails && <ErrorSection error={errors.stockDetails} />}
      </div>
      <div>
        <Label htmlFor="expirationDate">Expiration Date:</Label>
        <Input
          id="expirationDate"
          type="date"
          value={values.expirationDate}
          onChange={(e) => handleChange("expirationDate", e.target.value)}
          required
        />
      </div>
      <div>
        <Select
          id="mainCategory"
          value={values.mainCategory}
          onChange={(e) => handleChange("mainCategory", e.target.value)}
          required
          disabled={!!values.subCategory}
        >
          <option value="">Select Main Category</option>
          {Object.keys(categoryData).map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </Select>
        {errors.mainCategory && <ErrorSection error={errors.mainCategory} />}
      </div>
      <div>
        <Select
          id="subCategory"
          value={values.subCategory}
          onChange={(e) => handleChange("subCategory", e.target.value)}
          required
          disabled={!values.mainCategory || !!values.generalUsage}
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
        </Select>
        {errors.subCategory && <ErrorSection error={errors.subCategory} />}
      </div>
      <div>
        <Select
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
        </Select>
        {errors.generalUsage && <ErrorSection error={errors.generalUsage} />}
      </div>
      <div>
        <Label htmlFor="image">Upload Image:</Label>
        <Input
          id="image"
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
        />
      </div>
      {errors.img && <ErrorSection error={errors.img} />}

      <div>
        <Button type="submit">Add medicine</Button>
      </div>

      {successMessage && (
        <SuccessMessage isError={isError}>{successMessage}</SuccessMessage>
      )}
    </FormContainer>
  );
};

export default AddMedicine;
