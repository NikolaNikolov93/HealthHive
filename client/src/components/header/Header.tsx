import styled from "styled-components"; // Assuming you're using styled-components
import { Link } from "react-router-dom"; // If you're using React Router

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 2em;
  background-color: #f8f9fa;
  border-bottom: 1px solid #eaeaea;
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
    color: #007bff;
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
