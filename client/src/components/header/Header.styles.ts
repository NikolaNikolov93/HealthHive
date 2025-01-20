import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2); /* Adjust the values as needed */
  background-color: white;
  position: sticky;
  top: 0;
`;
export const NavContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  justify-content: space-between;
  align-items: center;
  a {
    text-decoration: none;
    border: none;
    color: black;
    font-size: 1rem;
    transition: color 0.3s ease-in-out;
    img {
      transition: scale 0.3s ease-in-out;
    }

    &:hover {
      color: #8ed8a6;
      img {
        scale: 1.1;
      }
    }
  }
`;

export const Logo = styled.div`
  img {
    width: 70px;
  }
`;

export const CategoriesItem = styled.div`
  button {
    display: flex;
    align-items: center;
    background-color: white;
  }
  img {
    margin-left: 0.5em;
    width: 30px;
  }
  :hover {
    color: #8ed8a6;
    cursor: pointer;
  }
`;
export const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  overflow: hidden;
`;

export const SearchBar = styled.input`
  padding: 0.5em 1em;
  border: none;
  outline: none;
  flex-basis: 200px; /* Initial size */
  width: 200px;
  transition: flex-basis 0.3s ease, width 0.3s ease;

  &:focus {
    flex-basis: 600px; /* Expanded size */
    width: 600px;
  }
`;

export const SearchButton = styled.button`
  border: none;
  padding: 0.5em;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: #8ed8a6;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;

  &:hover {
    background-color: white;
    color: #8ed8a6;
  }
  svg {
    font-size: 1.2em;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  a {
    background-color: #8ed8a6;
    color: #fff;
    font-size: 1rem;
    padding: 0.6em 1em;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);

    &:hover {
      background-color: #7abf8d;
      color: white;
    }
  }

  button {
    background: none;
    transition: color 0.3s ease-in-out;
    &:hover {
      color: #8ed8a6;
    }
  }
`;
export const ShoppingCart = styled(Link)`
  svg {
    font-size: 1.5em;
  }
`;
