import styled from "styled-components";

// Styled Components
export const Wrapper = styled.div`
  padding: 20px;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2em;
`;

export const Card = styled.div`
  flex-basis: calc((100% - 3 * 2em) / 4);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;

  transition: scale 0.2s ease, box-shadow 0.2s ease;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 200px; /* Set a fixed height for all images */
  object-fit: contain; /* Ensures the image scales to fit the container while maintaining aspect ratio */
`;

export const CardContent = styled.div`
  padding: 15px;
`;

export const MedicineName = styled.h2`
  font-size: 1.25rem;
  margin-bottom: 10px;
  color: #333;
`;

export const MedicineInfo = styled.p`
  margin: 5px 0;
  color: #555;

  strong {
    color: #333;
  }
`;

export const NoData = styled.p`
  font-size: 1rem;
  color: #888;
  text-align: center;
`;
