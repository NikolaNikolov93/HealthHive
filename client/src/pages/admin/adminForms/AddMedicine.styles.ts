import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  max-width: 30em;
  margin: auto;
`;

export const Input = styled.input`
  padding: 0.5em;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1em;
  &:focus {
    outline-color: var(--border-color);
  }
`;

export const Select = styled.select`
  padding: 0.5em;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1em;
`;

export const Label = styled.label`
  font-weight: bold;
`;

export const Button = styled.button`
  background-color: var(--accent-color);
  color: white;
  border: none;
  padding: 0.6em 1em;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  &:hover {
    background-color: var(--accent-hover);
  }
`;

export const SuccessMessage = styled.p<{ isError: boolean }>`
  color: ${(props) => (props.isError ? "#e57373" : "#6cbf87")};
  font-weight: bold;
`;
