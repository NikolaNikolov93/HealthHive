import styled from "styled-components"; // Assuming you're using styled-components
import { Link } from "react-router-dom"; // If you're using React Router

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 2em;
  background-color: #9191916c;
  max-width: 1440px;
  margin: 0 auto;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;

  a {
    text-decoration: none;
    color: #ffffff;
    font-size: 1rem;

    &:hover {
      color: #0056b3;
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>
        <Link to="/">MyApp</Link>
      </Logo>
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
