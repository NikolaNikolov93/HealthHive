import React from "react";
import styled from "styled-components";

const ModalBackdrop = styled.div`
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

const ModalContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ModalHeader = styled.h2`
  margin-top: 0;
`;

const ModalButton = styled.button`
  margin-top: 10px;
`;

const Modal = ({
  title,
  onClose,
  children,
}: {
  title: string;
  onClose: () => void;
  children?: React.ReactNode;
}) => (
  <ModalBackdrop onClick={onClose}>
    <ModalContainer onClick={(e) => e.stopPropagation()}>
      <ModalHeader>{title}</ModalHeader>
      {children}
      <ModalButton onClick={onClose}>Close</ModalButton>
    </ModalContainer>
  </ModalBackdrop>
);

export default Modal;
