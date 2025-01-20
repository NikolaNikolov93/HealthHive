import { useParams } from "react-router-dom";
import useMedicinesByCategory from "../../hooks/useMedicinesByCategory";
import {
  MedicinesContainer,
  FiltersContainer,
  NoData,
  PriceSlider,
  StyledSelect,
  Wrapper,
} from "./Medicines.styles";
import { useState } from "react";
import MedicineCard from "./MedicineCard";

// Component
const Medicines = () => {
  const { mainCategory, subCategory, specificConditions } = useParams();
  const {
    data: medicines,
    isLoading,
    isError,
  } = useMedicinesByCategory({ mainCategory, subCategory, specificConditions });

  const [sortOrder, setSortOrder] = useState("asc");
  const [maxPrice, setMaxPrice] = useState<number>(20);

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(e.target.value);
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaxPrice(Number(e.target.value));
  };

  const filteredMedicines = medicines
    ? medicines
        .filter((medicine) => (maxPrice ? medicine.price < maxPrice : true))
        .sort((a, b) =>
          sortOrder === "asc" ? a.price - b.price : b.price - a.price
        )
    : [];

  if (isLoading) {
    return <Wrapper>Loading medicines...</Wrapper>;
  }

  if (isError) {
    return <Wrapper>Error loading medicines. Please try again.</Wrapper>;
  }

  return (
    <Wrapper>
      <FiltersContainer>
        <PriceSlider>
          <label htmlFor="price-slider">Price filter</label>
          <div style={{ display: "flex", gap: "2em" }}>
            <span>{maxPrice}</span>
          </div>

          <input
            type="range"
            id="price-slider"
            min="0"
            max="20"
            step="0.01"
            value={maxPrice}
            onChange={handleSliderChange}
          />
        </PriceSlider>
        <StyledSelect onChange={handleSortChange} value={sortOrder}>
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </StyledSelect>
      </FiltersContainer>
      <MedicinesContainer>
        {filteredMedicines && filteredMedicines.length > 0 ? (
          filteredMedicines.map((medicine) => (
            <MedicineCard key={medicine._id} medicine={medicine}></MedicineCard>
          ))
        ) : (
          <NoData>No medicines found for this category.</NoData>
        )}
      </MedicinesContainer>
    </Wrapper>
  );
};

export default Medicines;
