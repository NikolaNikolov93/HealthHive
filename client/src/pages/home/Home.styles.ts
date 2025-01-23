import { Link } from "react-router-dom";
import styled from "styled-components";

export const HomeWrapper = styled.div`
  background-image: url("/hero-section.jpg");
  background-position: center;
  background-size: cover;
`;
export const HomeContentWrapper = styled.div`
  background-color: rgba(22, 22, 22, 0.2); /* White with 80% opacity */
  display: flex;
  flex-direction: column;
  align-items: center; /* Center children horizontally */
  padding: 1em;
  color: #fff;
`;
export const Heading = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
  margin-bottom: 20px;
`;

export const Subheading = styled.p`
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 30px;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
`;

export const Button = styled.button`
  background-color: #8ed8a6;
  color: #fff;
  font-size: 1rem;
  padding: 15px 25px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);

  &:hover {
    background-color: #7abf8d;
  }
`;

export const CategoriesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 50px;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
`;

export const Category = styled(Link)`
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  margin: 0 15px;
  border-radius: 8px;
  text-align: center;
  width: 200px;
`;

export const CategoryTitle = styled.h3`
  font-size: 1.2rem;
  color: #333;
`;
export const BestSellers = styled.section`
  margin-top: 2em;
  display: flex;
  gap: 1em;
`;
export const BestSellerCard = styled.div`
  height: 400px;
  width: 300px;
  border: 1px solid black;
  background-color: lightgreen;
  opacity: 0.5;
`;
