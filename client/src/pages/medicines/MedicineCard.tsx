import { useState } from "react";
import { MedType } from "../../types/types";
import {
  Card,
  CardActions,
  CardContent,
  CardImage,
  MedicineButtons,
  MedicineInfo,
  MedicineName,
  RatingContainer,
} from "./MedicineCard.styles";
import { Link } from "react-router-dom";
type MedicineCardProps = {
  medicine: MedType;
};

const MedicineCard: React.FC<MedicineCardProps> = ({ medicine }) => {
  const [currentRating, setCurrentRating] = useState(3.5); // Current average rating
  const [hoveredRating, setHoveredRating] = useState<number | null>(null);

  const handleRating = async (rating: number) => {
    try {
      // Call the backend API to update the rating
      console.log(rating);

      // Update the rating in the UI
      setCurrentRating(rating);
    } catch (error) {
      console.error("Error updating rating:", error);
    }
  };

  return (
    <Card>
      <CardImage src={medicine.img} alt={medicine.name} />
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
      <CardActions>
        <MedicineButtons>
          <button onClick={() => console.log(medicine._id)}>Купи</button>
          <Link to={`/item/${medicine._id}`}>Повече</Link>
        </MedicineButtons>
        <RatingContainer rating={currentRating}>
          {" "}
          {Array.from({ length: 5 }, (_, i) => i + 1).map((star) => (
            <span
              key={star}
              onMouseEnter={() => setHoveredRating(star)}
              onMouseLeave={() => setHoveredRating(null)}
              onClick={() => handleRating(star)}
            >
              ★
            </span>
          ))}
        </RatingContainer>
      </CardActions>
    </Card>
  );
};

export default MedicineCard;
