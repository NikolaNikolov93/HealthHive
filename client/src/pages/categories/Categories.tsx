import { categoryData } from "../../constants/contants";
import { CategoriesContainer, CloseMenuButton } from "./Categories.styles";
import CategoriesWrapper from "./CategoriesWrapper";

const Categories = ({ isCategoriesOpen, handleCategoriesState }: any) => {
  return (
    <>
      {isCategoriesOpen ? (
        <CategoriesContainer>
          <CloseMenuButton onClick={() => handleCategoriesState()}>
            X
          </CloseMenuButton>
          <CategoriesWrapper
            categoryData={categoryData}
            setNavigationState={() => handleCategoriesState()}
          />
        </CategoriesContainer>
      ) : (
        <></>
      )}
    </>
  );
};

export default Categories;
