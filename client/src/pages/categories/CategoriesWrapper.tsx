import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import {
  CategoriesList,
  CategoryButton,
  LinkList,
  SubcatList,
} from "./CategoriesWrapper.styles";

const CategoriesWrapper = ({
  categoryData,
  setNavigationState,
  parentPath = "",
}: {
  categoryData: Record<string, any>;
  setNavigationState: () => void;
  parentPath?: string;
}) => {
  // State to keep track of the currently active (expanded) category
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const navigate = useNavigate();

  // Function to toggle the active category when clicked
  const toggleCategory = (key: string) => {
    setActiveCategory((prevKey) => (prevKey === key ? null : key));
  };

  // Handles the click event to navigate to the selected category path
  const handleCategoryClick = (key: string) => {
    const fullPath = `${parentPath ? `${parentPath}/` : ""}${key}`;
    setNavigationState(); // Trigger any necessary state updates
    navigate(fullPath); // Navigate to the selected category path
  };

  return (
    <>
      {Object.keys(categoryData).map((key) => {
        const subCategory = categoryData[key];
        const isOpen = activeCategory === key; // Check if category is expanded
        const currentPath = `${parentPath ? `${parentPath}/` : ""}${key}`;

        return (
          <CategoriesList key={key}>
            <CategoryButton
              isActive={isOpen}
              onClick={() => handleCategoryClick(key)}
            >
              {key}{" "}
              <span
                onClick={(e) => {
                  e.stopPropagation(); // Prevent triggering parent click event
                  toggleCategory(key);
                }}
              >
                {isOpen ? <IoIosArrowDown /> : <IoIosArrowForward />}
              </span>
            </CategoryButton>
            {isOpen ? (
              <SubcatList>
                {Array.isArray(subCategory) ? (
                  subCategory.map((item: string, index: number) => (
                    <LinkList key={index}>
                      <CategoryButton
                        isActive={false}
                        onClick={() => handleCategoryClick(`${key}/${item}`)}
                      >
                        {item}
                      </CategoryButton>
                    </LinkList>
                  ))
                ) : (
                  // Recursively render subcategories if they exist
                  <CategoriesWrapper
                    categoryData={subCategory}
                    parentPath={currentPath}
                    setNavigationState={() => setNavigationState()}
                  />
                )}
              </SubcatList>
            ) : null}
          </CategoriesList>
        );
      })}
    </>
  );
};

export default CategoriesWrapper;
