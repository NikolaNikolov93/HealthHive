// src/styles/TableStyles.ts
import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
`;

export const TableHeader = styled.thead``;

export const TableHeaderCell = styled.th`
  text-align: left;
  padding: 10px;
  border: 1px solid #ddd;
  background-color: rgb(
    86,
    143,
    204
  ); /* Example: blue background for the table header */
  color: white;
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr`
  &:nth-child(odd) {
    background-color: #f9f9f9; /* Light gray for odd rows */
  }

  &:nth-child(even) {
    background-color: #ffffff; /* White for even rows */
  }

  &:hover {
    background-color: #f1f1f1; /* Slight hover effect */
  }
`;

export const TableCell = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
`;

export const Button = styled.button`
  margin: 0 5px;
  padding: 5px 10px;
  cursor: pointer;
  border: none;
  color: white;
  background-color: rgb(28, 143, 66);
  border-radius: 5px;

  &:hover {
    opacity: 0.8;
  }

  &:nth-child(2) {
    background-color: #dc3545;
  }
`;

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
