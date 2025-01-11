import styled from "styled-components";

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const ModalHeader = styled.h2`
  margin-bottom: 0.5em;
`;

export const ModalButton = styled.button`
  margin-top: 1em;
  padding: 0.5em 1em;
  background-color: #8ed8a6; /* Light green background */
  border: none;
  border-radius: 4px; /* Rounded corners */
  color: white; /* White text */
  cursor: pointer; /* Show pointer cursor on hover */
  transition: background-color 0.3s ease; /* Smooth color transition */

  &:hover {
    background-color: #6dbf8e; /* Darker green on hover */
  }
`;
