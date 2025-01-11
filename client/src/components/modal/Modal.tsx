import React from "react";
import {
  ModalBackdrop,
  ModalButton,
  ModalContainer,
  ModalHeader,
} from "./Modal.styles";

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
