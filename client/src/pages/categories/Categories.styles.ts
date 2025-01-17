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
  top: 1em; /* Adjust spacing from the top */
  right: 1em; /* Adjust spacing from the right */
  background: none; /* Optional: remove default button styles */
  border: none; /* Optional: remove default button border */
  font-size: 1.3em; /* Optional: make it prominent */
  font-weight: normal;
  cursor: pointer; /* Add pointer cursor */
  &:hover {
    color: red; /* Optional: hover effect */
  }
`;

export const BackButton = styled.button`
  margin-bottom: 1em;
  color: red;
`;
