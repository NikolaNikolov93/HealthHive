import { categoryData } from "../../constants/contants";
import { CategoriesContainer, CloseMenuButton } from "./Categories.styles";
import CategoriesWrapper from "./CategoriesWrapper";
import { IoIosClose } from "react-icons/io";

const Categories = ({ isCategoriesOpen, handleCategoriesState }: any) => {
  return (
    <>
      {isCategoriesOpen ? (
        <CategoriesContainer>
          <CloseMenuButton onClick={() => handleCategoriesState()}>
            <IoIosClose />
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
