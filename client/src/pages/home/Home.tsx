import { Link } from "react-router-dom";
import styled from "styled-components";

const HomeWrapper = styled.div`
  background-image: url("/hero-section.jpg");
  background-position: center;
  background-size: cover;
  color: #fff;
`;
const HomeContentWrapper = styled.div`
  background-color: rgba(22, 22, 22, 0.2); /* White with 80% opacity */
  display: flex;
  flex-direction: column;
  align-items: center; /* Center children horizontally */
  padding: 20px;
`;
const Heading = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
  margin-bottom: 20px;
`;

const Subheading = styled.p`
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 30px;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
`;

const Button = styled.button`
  background-color: #8ed8a6;
  color: #fff;
  font-size: 1rem;
  padding: 15px 25px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);

  &:hover {
    background-color: #7abf8d;
  }
`;

const CategoriesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 50px;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
`;

const Category = styled(Link)`
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  margin: 0 15px;
  border-radius: 8px;
  text-align: center;
  width: 200px;
`;

const CategoryTitle = styled.h3`
  font-size: 1.2rem;
  color: #333;
`;

const Home = () => {
  return (
    <HomeWrapper>
      <HomeContentWrapper>
        <Heading>Добре дошли в Health Hive</Heading>
        <Heading>Вашата онлайн аптека</Heading>
        <Subheading>Удобно и бързо пазаруване</Subheading>
        <Button>Пазарувай сега</Button>

        <CategoriesWrapper>
          <Category to={"/Лекарства"}>
            <CategoryTitle>Лекарства</CategoryTitle>
          </Category>
          <Category to={"/Здраве и уелнес"}>
            <CategoryTitle>Здраве и уелнес</CategoryTitle>
          </Category>
          <Category to={"/Бебета и деца"}>
            <CategoryTitle>Бебета и деца</CategoryTitle>
          </Category>
        </CategoriesWrapper>
      </HomeContentWrapper>
    </HomeWrapper>
  );
};

export default Home;
