import { useState } from "react";
import {
  SearchBar,
  SearchBarWrapper,
  SearchButton,
  SearchSuggestion,
  SearchSuggestionItem,
} from "./SearchBarComponent.styles";
import { FaSearch } from "react-icons/fa";

const SearchBarComponent = () => {
  const [isSuggestionVisible, setIsSuggestionVisible] = useState(false);
  const data = [
    {
      name: "Paracetamol",
      img: "https://www.shutterstock.com/image-photo/ibuprofeno-acetaminophen-pill-box-paper-260nw-2091336592.jpg",
    },
    {
      name: "Analign",
      img: "https://sopharmacy.bg/media/sys_master/hdf/h56/9081459114014.jpg",
    },
  ];

  return (
    <SearchBarWrapper onMouseLeave={() => setIsSuggestionVisible(false)}>
      <SearchBar
        onClick={() => setIsSuggestionVisible(true)}
        type="text"
        placeholder="Търсене..."
      />
      <SearchButton>
        <FaSearch />
      </SearchButton>
      {isSuggestionVisible && (
        <SearchSuggestion>
          {data.length === 0 ? (
            "No match"
          ) : (
            <>
              {data.map((item) => (
                <SearchSuggestionItem to={`/${item.name}`}>
                  <img src={item.img} alt="" />
                  <p>{item.name}</p>
                </SearchSuggestionItem>
              ))}
            </>
          )}
        </SearchSuggestion>
      )}
    </SearchBarWrapper>
  );
};

export default SearchBarComponent;
