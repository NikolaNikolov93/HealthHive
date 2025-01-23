import styled from "styled-components";

export const CategoriesList = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const SubcatList = styled.div`
  min-width: 16.5em;
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 100%;
  top: 0;
  background-color: #fff;
  padding: 0em 0.4em;
`;
export const LinkList = styled.ul`
  display: flex;
  flex-direction: column;
  min-width: fit-content;
`;

export const CategoryButton = styled.button<{ isActive: boolean }>`
  position: relative;
  background-color: ${({ isActive }) =>
    isActive ? "#8ed8a6" : "inherit"}; /* Highlight active category */
  border-bottom: 1px solid rgba(128, 128, 128, 0.2);
  border-top: 1px solid rgba(128, 128, 128, 0.2);
  padding: 0.6em 0.4em;
  display: flex; /* Enable flexbox for better alignment */
  align-items: center; /* Vertically center text content */
  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: ${({ isActive }) => (isActive ? "inherit" : "#8ed8a6")};
  }

  span {
    padding: 0.6em 0.4em;
    border-right: 1px solid rgba(128, 128, 128, 0.2);
    border-left: 1px solid rgba(128, 128, 128, 0.2);
    color: gray;
    position: absolute; /* Position it relative to the button */
    right: 0; /* Place it outside the right edge */
    top: 50%; /* Start at the middle of the button */
    transform: translateY(-50%); /* Perfectly center vertically */
  }
`;
