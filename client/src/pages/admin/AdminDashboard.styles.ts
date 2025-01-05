// src/styles/TableStyles.ts
import styled from "styled-components";

export const Heading = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const SearchBar = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: flex-start;
`;

export const SearchInput = styled.input`
  padding: 8px 12px;
  width: 250px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;
export const ToggleButtonsContainer = styled.div`
  display: flex;
  gap: 1em;
  button {
    padding: 0.3em 0.5em;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2); /* Adjust the values as needed */
    background-color: #8ed8a6;
  }
`;
