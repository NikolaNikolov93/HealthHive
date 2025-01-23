import styled from "styled-components";

export const CategoriesContainer = styled.div`
  position: fixed;
  left: 0;
  background-color: white;
  padding: 1em;
  height: 100%;
  min-width: 12.5em;
  font-size: 1.3em;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  padding: 3em 1em;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
`;

export const CloseMenuButton = styled.button`
  position: absolute; /* Position it relative to the CategoriesContainer */
  top: 0; /* Adjust spacing from the top */
  right: 0; /* Adjust spacing from the right */
  background: none; /* Optional: remove default button styles */
  border: none; /* Optional: remove default button border */
  font-size: 2.5em; /* Optional: make it prominent */
  font-weight: normal;
  transition: color 0.5s ease-in-out;
  color: #8ed8a6;
  cursor: pointer; /* Add pointer cursor */
  &:hover {
    color: red; /* Optional: hover effect */
  }
`;

export const BackButton = styled.button`
  margin-bottom: 1em;
  color: red;
`;
