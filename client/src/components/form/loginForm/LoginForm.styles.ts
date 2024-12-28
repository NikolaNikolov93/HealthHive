import { Link } from "react-router-dom";
import styled from "styled-components";

export const LoginPageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 50dvh;
`;

// Styled component for the login/register form container
export const LoginFromWrapper = styled.div`
  padding: 1em;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); /* Subtle shadow effect */
  width: 100%;
  max-width: 400px; /* Restrict the maximum width */
  text-align: center; /* Center-align the content */

  h2 {
    margin-bottom: 0.5em; /* Add space below the heading */
  }

  button {
    margin-top: 1em;
    padding: 0.8em 2em;
    background-color: #8ed8a6; /* Light green background */
    border: none; /* Remove border */
    border-radius: 4px; /* Rounded corners */
    color: white; /* White text */
    font-size: 1em; /* Standard font size */
    cursor: pointer; /* Show pointer cursor on hover */
    width: 150px; /* Fixed button width */
    align-self: center; /* Center the button */
    transition: background-color 0.3s ease; /* Smooth color transition */

    &:hover {
      background-color: #6dbf8e; /* Darker green on hover */
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 5px rgba(142, 216, 166, 0.7); /* Highlight effect on focus */
    }
  }
`;

// Styled component for the login/register form
export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5em; /* Space between form fields */
  align-items: stretch;
  width: 100%; /* Take full width of the container */
`;

// Styled component for input fields
export const Input = styled.input`
  position: relative;
  padding: 0.8em; /* Add padding inside input */
  font-size: 1em; /* Standard font size */
  border: 1px solid #ccc; /* Light gray border */
  border-radius: 4px; /* Rounded corners */
  background-color: #f9f9f9; /* Light gray background */
  color: #333; /* Dark gray text */

  &::placeholder {
    color: #aaa; /* Placeholder text color */
  }

  &:focus {
    border-color: #8ed8a6; /* Green border on focus */
    outline: none; /* Remove default outline */
  }

  &:disabled {
    background-color: #e9ecef; /* Gray background when disabled */
    cursor: not-allowed; /* Disable cursor */
  }
`;

// Styled component for the link to switch between login and register pages
export const NotRegistered = styled(Link)`
  font-size: 0.8em; /* Smaller font size for the link */
`;
