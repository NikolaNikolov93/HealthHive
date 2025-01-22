import { Link } from "react-router-dom";
import styled from "styled-components";

export const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  position: relative;
`;

export const SearchBar = styled.input`
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

export const SearchButton = styled.button`
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

export const SearchSuggestion = styled.div`
  position: absolute;
  display: flex;
  gap: 1em;
  flex-direction: column;
  background-color: white;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  top: 95%;
  right: -1px;
  left: -1px;
`;
export const SearchSuggestionItem = styled(Link)`
  display: flex;
  gap: 1em;
  padding: 0.6em;
  border-bottom: 2px solid #8ed8a6;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: #ddd;
  }
  img {
    width: 8em;
  }
`;
