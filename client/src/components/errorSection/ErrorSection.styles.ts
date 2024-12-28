import styled from "styled-components";

export const ValidationList = styled.ul<{ $show: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  padding: ${(props) => (props.$show === "true" ? "1em" : "0")};
  margin: ${(props) => (props.$show === "true" ? "1em 0" : "0")};
  max-height: ${(props) =>
    props.$show === "true" ? "300px" : "0"}; /* Adjust max height as needed */
  transition: max-height 0.3s ease, padding 0.3s ease, margin 0.3s ease;
`;

export const ValidationMessage = styled.li<{ $isFixed: boolean }>`
  display: flex;
  align-items: center;
  font-size: 0.9em;
  color: ${(props) => (props.$isFixed ? "green" : "red")};
  margin: 0.5em 0;
  text-align: center;

  &::after {
    content: "${(props) => (props.$isFixed ? "✓" : "✗")}";
    margin-left: 0.5em;
    font-size: 1em;
  }
`;
