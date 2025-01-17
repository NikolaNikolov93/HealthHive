import { useParams } from "react-router-dom";
import styled from "styled-components";
import useMedicinesByCategory from "../../hooks/useMedicinesByCategory";

// Styled Components
const Wrapper = styled.div`
  padding: 20px;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2em;
`;

const Card = styled.div`
  flex-basis: calc((100% - 3 * 2em) / 4);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;

  transition: scale 0.2s ease, box-shadow 0.2s ease;
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px; /* Set a fixed height for all images */
  object-fit: contain; /* Ensures the image scales to fit the container while maintaining aspect ratio */
`;

const CardContent = styled.div`
  padding: 15px;
`;

const MedicineName = styled.h2`
  font-size: 1.25rem;
  margin-bottom: 10px;
  color: #333;
`;

const MedicineInfo = styled.p`
  margin: 5px 0;
  color: #555;

  strong {
    color: #333;
  }
`;

const NoData = styled.p`
  font-size: 1rem;
  color: #888;
  text-align: center;
`;

// Component
const Medicines = () => {
  const { mainCategory, subCategory, specificConditions } = useParams();
  const {
    data: medicines,
    isLoading,
    isError,
  } = useMedicinesByCategory({ mainCategory, subCategory, specificConditions });

  if (isLoading) {
    return <Wrapper>Loading medicines...</Wrapper>;
  }

  if (isError) {
    return <Wrapper>Error loading medicines. Please try again.</Wrapper>;
  }

  return (
    <Wrapper>
      <Container>
        {medicines && medicines.length > 0 ? (
          medicines.map((medicine) => (
            <Card key={medicine._id}>
              <CardImage src={medicine.url} alt={medicine.name} />
              <CardContent>
                <MedicineName>{medicine.name}</MedicineName>
                <MedicineInfo>
                  <strong>Brand:</strong> {medicine.brand}
                </MedicineInfo>
                <MedicineInfo>
                  <strong>Price:</strong> {medicine.price.toFixed(2)}лв.
                </MedicineInfo>
                <MedicineInfo>{medicine.description}</MedicineInfo>
              </CardContent>
            </Card>
          ))
        ) : (
          <NoData>No medicines found for this category.</NoData>
        )}
      </Container>
    </Wrapper>
  );
};

export default Medicines;
