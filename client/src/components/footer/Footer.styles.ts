import styled from "styled-components";

export const FooterContainer = styled.section`
  padding: 1em 0em;
  background-color: var(--accent-color);
  color: var(--text-color-over-accent-color);
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
  gap: 1.5eem;
  a {
    color: var(---text-color-over-accent-color);
  }
`;
