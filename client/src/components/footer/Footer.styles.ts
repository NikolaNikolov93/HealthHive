import styled from "styled-components";

export const FooterContainer = styled.section`
  box-shadow: 0px -10px 20px rgba(0, 0, 0, 0.2); /* Add this line for the top shadow */
  padding: 1em 0em;
  background-color: #8ed8a6;
  color: white;
  display: flex;
  gap: 1em;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  a {
    color: white;
  }
`;
