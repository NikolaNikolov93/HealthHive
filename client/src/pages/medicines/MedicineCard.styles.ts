import styled from "styled-components";

export const Card = styled.div`
  flex-basis: calc((100% - 3 * 2em) / 4);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  transition: box-shadow 0.4s ease-in-out;
  display: flex;
  flex-direction: column;

  &&:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 200px; /* Set a fixed height for all images */
  object-fit: contain; /* Ensures the image scales to fit the container while maintaining aspect ratio */
`;

export const CardContent = styled.div`
  padding: 1em;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`;
export const CardActions = styled.div`
  margin-top: auto;
  gap: 0.5em;
  display: flex;
  flex-direction: column;
`;
export const MedicineName = styled.h2`
  font-size: 1.25rem;
  color: #333;
`;

export const MedicineInfo = styled.p`
  color: #555;

  strong {
    color: #333;
  }
`;
export const MedicineButtons = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: space-around;
  button,
  a {
    padding: 0.4em 0.6em;
    background-color: #8ed8a6;
    border-radius: 5px;
    color: #555;

    &:active {
      color: #555;
    }
  }
`;
export const RatingContainer = styled.div<{ rating: number }>`
  margin-top: auto;
  align-self: center;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
  background-image: linear-gradient(
    to right,
    #ffd700 ${(props) => (props.rating / 5) * 100}%,
    #ccc ${(props) => (props.rating / 5) * 100}%
  );
  -webkit-background-clip: text;

  & span {
    cursor: pointer;
    font-size: 2em;

    color: transparent; /* Make sure the text is transparent to show the gradient */
  }
`;
