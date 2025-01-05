import styled from "styled-components"; // Assuming you're using styled-components
import { Link, useNavigate } from "react-router-dom"; // If you're using React Router
import { FaSearch } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { logout } from "../../services/auth";
import { useDispatch, useSelector } from "react-redux";
import { logout as logoutAction } from "../../redux/user/userSlice";

const HeaderContainer = styled.header`
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2); /* Adjust the values as needed */
  background-color: white;
  position: sticky;
  top: 0;
`;
const NavContainer = styled.div`
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

const Logo = styled.div`
  img {
    width: 70px;
  }
`;

const Categories = styled.div`
  a {
    display: flex;
    align-items: center;
  }
  img {
    width: 70px;
  }
`;
const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  overflow: hidden;
`;

const SearchBar = styled.input`
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

const SearchButton = styled.button`
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

const Nav = styled.nav`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5rem;

  button {
    background: none;
    transition: color 0.3s ease-in-out;
    &:hover {
      color: #8ed8a6;
    }
  }
`;
const ShoppingCart = styled(Link)`
  svg {
    font-size: 1.5em;
  }
`;

const Header = () => {
  const isLoggedIn = useSelector((state: any) => state.user.isLoggedIn);
  const user = useSelector((state: any) => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      dispatch(logoutAction());
      navigate("/");
    } catch (error) {}
  };

  return (
    <HeaderContainer>
      <NavContainer>
        <Logo>
          <Link to="/">
            <img src="/logo.png" alt="" />
          </Link>
        </Logo>
        <Categories>
          <Link to="/categories">
            <span>Категории</span>
            <img src="/categories3.png" alt="" />
          </Link>
        </Categories>
        <SearchBarWrapper>
          <SearchBar type="text" placeholder="Търсене..." />
          <SearchButton>
            <FaSearch />
          </SearchButton>
        </SearchBarWrapper>
        <Nav>
          {isLoggedIn && <p>{`Wellcome ${user.name}`}</p>}

          {isLoggedIn ? (
            <>
              {" "}
              <button onClick={handleLogout}>Изход</button>
              <ShoppingCart to="/cart">
                <CiShoppingCart />
              </ShoppingCart>
            </>
          ) : (
            <>
              <Link to="/login">Вход</Link>
              <Link to="/register">Регистрация</Link>
            </>
          )}
        </Nav>
      </NavContainer>
    </HeaderContainer>
  );
};

export default Header;
