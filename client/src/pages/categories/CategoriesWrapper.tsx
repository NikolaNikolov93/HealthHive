import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const CategoriesWrapper = ({
  categoryData,
  setNavigationState,
  parentPath = "",
}: {
  categoryData: Record<string, any>;
  setNavigationState: () => void;
  parentPath?: string;
}) => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const navigate = useNavigate();

  const toggleCategory = (key: string) => {
    setActiveCategory((prevKey) => (prevKey === key ? null : key));
  };
  const handleCategoryClick = (key: string) => {
    const fullPath = `${parentPath ? `${parentPath}/` : ""}${key}`;
    setNavigationState();
    navigate(fullPath);
  };

  return (
    <>
      {Object.keys(categoryData).map((key) => {
        const subCategory = categoryData[key];
        const isOpen = activeCategory === key;
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
                  e.stopPropagation();
                  toggleCategory(key);
                }}
              >
                {isOpen ? `v` : `>`}
              </span>
            </CategoryButton>
            {isOpen ? (
              <SubcatList>
                {Array.isArray(subCategory) ? (
                  subCategory.map((item: string, index: number) => (
                    <LinkList>
                      <CategoryButton
                        isActive={false}
                        key={index}
                        onClick={() => handleCategoryClick(`${key}/${item}`)}
                      >
                        {item}
                      </CategoryButton>
                    </LinkList>
                  ))
                ) : (
                  <CategoriesWrapper
                    categoryData={subCategory}
                    parentPath={currentPath}
                    setNavigationState={() => setNavigationState()}
                  />
                )}
              </SubcatList>
            ) : (
              <></>
            )}
          </CategoriesList>
        );
      })}
    </>
  );
};

const CategoriesList = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const SubcatList = styled.div`
  min-width: 16.5em;
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 100%;
  top: 0;
  background-color: #fff;
  padding: 0em 0.4em;
`;
const LinkList = styled.ul`
  display: flex;
  flex-direction: column;
  min-width: fit-content;
`;

export const CategoryButton = styled.button<{ isActive: boolean }>`
  position: relative;
  background-color: ${({ isActive }) =>
    isActive ? "#8ed8a6" : "inherit"}; /* Highlight active category */
  border-bottom: 1px solid rgba(128, 128, 128, 0.2);
  border-top: 1px solid rgba(128, 128, 128, 0.2);
  padding: 0.6em 0.4em;
  display: flex; /* Enable flexbox for better alignment */
  align-items: center; /* Vertically center text content */
  &:hover {
    background-color: ${({ isActive }) => (isActive ? "inherit" : "#8ed8a6")};
  }

  span {
    padding: 0.6em 0.4em;
    border-right: 1px solid rgba(128, 128, 128, 0.2);
    border-left: 1px solid rgba(128, 128, 128, 0.2);
    color: gray;
    position: absolute; /* Position it relative to the button */
    right: 0; /* Place it outside the right edge */
    top: 50%; /* Start at the middle of the button */
    transform: translateY(-50%); /* Perfectly center vertically */
  }
`;

export default CategoriesWrapper;
