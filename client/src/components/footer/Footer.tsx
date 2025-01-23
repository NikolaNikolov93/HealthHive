import { Link } from "react-router-dom";
import { FooterContainer, Nav } from "./Footer.styles";

const Footer = () => {
  return (
    <FooterContainer>
      <Nav>
        <Link to="/about">За нас</Link>
        <Link to="/contact">Контакти</Link>
      </Nav>
      <p>2024 Health Hive &copy; by Nikola Nikolov Всички права запазени</p>
      <p>Сайтът е направен с образователна цел и информацията е примерна</p>
    </FooterContainer>
  );
};

export default Footer;
