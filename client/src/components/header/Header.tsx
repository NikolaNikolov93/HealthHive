import { Link, useNavigate } from "react-router-dom"; // If you're using React Router
import { CiShoppingCart } from "react-icons/ci";
import { logout } from "../../services/auth";
import { useDispatch, useSelector } from "react-redux";
import { logout as logoutAction } from "../../redux/user/userSlice";
import { useState } from "react";
import Categories from "../../pages/categories/Categories";
import {
  CategoriesItem,
  HeaderContainer,
  Logo,
  Nav,
  NavContainer,
  ShoppingCart,
} from "./Header.styles";
import SearchBarComponent from "./SearchBarComponent";

const Header = () => {
  const isLoggedIn = useSelector((state: any) => state.user.isLoggedIn);
  const user = useSelector((state: any) => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
      dispatch(logoutAction());
      navigate("/");
    } catch (error) {}
  };

  return (
    <HeaderContainer>
      <Categories
        isCategoriesOpen={isCategoriesOpen}
        handleCategoriesState={() => setIsCategoriesOpen(false)}
      ></Categories>
      <NavContainer>
        <Logo>
          <Link to="/">
            <img src="/logo.png" alt="" />
          </Link>
        </Logo>
        <CategoriesItem>
          <button onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}>
            <span>Категории</span>
            <img src="/categories5.png" alt="" />
          </button>
        </CategoriesItem>
        <SearchBarComponent />
        <Nav>
          {isLoggedIn && <p>{`Wellcome, ${user.name}`}</p>}

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
