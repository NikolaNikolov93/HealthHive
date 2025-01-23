import {
  Button,
  CategoriesWrapper,
  Category,
  CategoryTitle,
  Heading,
  HomeContentWrapper,
  HomeWrapper,
  Subheading,
} from "./Home.styles";

const Home = () => {
  return (
    <HomeWrapper>
      <HomeContentWrapper>
        <Heading>Добре дошли в Health Hive</Heading>
        <Heading>Вашата онлайн аптека</Heading>
        <Subheading>Удобно и бързо пазаруване</Subheading>
        <Button>Здравни съвети</Button>

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
