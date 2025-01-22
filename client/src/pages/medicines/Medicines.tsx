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
  const [sortBy, setSortBy] = useState("price"); // New state to track sorting criteria
  const [maxPrice, setMaxPrice] = useState<number>(20);

  const handleSortOrderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(e.target.value);
  };

  const handleSortByChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaxPrice(Number(e.target.value));
  };

  const filteredMedicines = medicines
    ? medicines
        .filter((medicine) => (maxPrice ? medicine.price < maxPrice : true))
        .sort((a, b) => {
          if (sortBy === "price") {
            return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
          } else if (sortBy === "createdAt") {
            return sortOrder === "asc"
              ? new Date(a.createdAt).getTime() -
                  new Date(b.createdAt).getTime()
              : new Date(b.createdAt).getTime() -
                  new Date(a.createdAt).getTime();
          }
          return 0;
        })
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
        <StyledSelect onChange={handleSortByChange} value={sortBy}>
          <option value="price">Sort by Price</option>
          <option value="createdAt">Sort by Date</option>
        </StyledSelect>

        <StyledSelect onChange={handleSortOrderChange} value={sortOrder}>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
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
