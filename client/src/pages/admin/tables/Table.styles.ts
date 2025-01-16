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
  text-align: center; /* Horizontal centering */
  vertical-align: middle; /* Vertical centering */
`;

export const Button = styled.button`
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
export const ButtonWrapper = styled.div`
  display: flex;
  gap: 0.4em;
`;
