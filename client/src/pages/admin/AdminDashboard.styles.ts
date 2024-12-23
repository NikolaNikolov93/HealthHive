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
  gap: 10px;
  margin-bottom: 20px;
`;
