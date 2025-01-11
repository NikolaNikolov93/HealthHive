import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;

  label {
    font-weight: bold;
  }
`;
export const Input = styled.input`
  padding: 0.2em;
  font-size: 0.9em;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f9f9f9;

  &:focus {
    border-color: #8ed8a6;
    outline: none;
  }
`;
export const TextArea = styled.textarea`
  padding: 0.8em;
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f9f9f9;

  &:focus {
    border-color: #8ed8a6;
    outline: none;
  }
`;
export const StockField = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
`;
export const RemoveButton = styled.button`
  padding: 0.5em 1em;
  background-color: #ff6b6b;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #ff4b4b;
  }
`;
export const AddButton = styled.button`
  padding: 0.5em 1em;
  background-color: #6dbf8e;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #59a873;
  }
`;
export const SubmitButton = styled.button`
  padding: 0.5em 1em;
  background-color: #8ed8a6;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1em;
  cursor: pointer;

  &:hover {
    background-color: #6dbf8e;
  }
`;
