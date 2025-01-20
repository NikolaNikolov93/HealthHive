import styled from "styled-components";

// Styled Components
export const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  gap: 1em;
`;
export const FiltersContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  border: 1px solid lightgray;
  padding: 1em;
  & > *:not(:last-child) {
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;
    margin-bottom: 10px;
  }
`;
export const PriceSlider = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  input {
    -webkit-appearance: none; /* Remove default styling */
    width: 100%;
    height: 8px; /* Height of the slider track */
    background: #ccc; /* Track color */
    border-radius: 5px;
    outline: none;
    transition: background 0.3s ease;

    &:hover {
      background: #8ed8a6; /* Track color on hover */
    }

    &::-webkit-slider-thumb {
      -webkit-appearance: none; /* Remove default styling */
      appearance: none;
      width: 20px; /* Thumb size */
      height: 20px;
      border-radius: 50%;
      background: #8ed8a6; /* Thumb color */
      cursor: pointer;
      transition: background 0.3s ease;

      &:hover {
        background: #6db68a; /* Thumb color on hover */
      }
    }

    &::-moz-range-thumb {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: #8ed8a6;
      cursor: pointer;

      &:hover {
        background: #6db68a;
      }
    }

    &::-ms-thumb {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: #8ed8a6;
      cursor: pointer;

      &:hover {
        background: #6db68a;
      }
    }
  }
`;
export const StyledSelect = styled.select`
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: #8ed8a6;
  }

  &:focus {
    outline: none;
    border-color: #8ed8a6;
  }

  option {
    padding: 10px;
  }
`;
export const MedicinesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2em;
  width: 100%;
`;

export const NoData = styled.p`
  font-size: 1rem;
  color: #888;
  text-align: center;
`;
