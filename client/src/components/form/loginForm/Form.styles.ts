import { Link } from "react-router-dom";
import styled from "styled-components";

export const PageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1em;
`;

// Styled component for the login/register form container
export const FormWrapper = styled.div`
  padding: 1em;
  border-radius: 8px;
  box-shadow: var(--box-shadow);
  width: 100%;
  max-width: 30em; /* Restrict the maximum width */
  text-align: center; /* Center-align the content */

  h2 {
    margin-bottom: 0.5em; /* Add space below the heading */
  }
`;

// Styled component for the login/register form
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5em; /* Space between form fields */
  align-items: center;
  select {
    padding: 0.8em 1em;
    font-size: 1em; /* Standard font size */
    border: 1px solid #ccc; /* Light gray border */
    border-radius: 4px; /* Rounded corners */
    background-color: var(--background-color);
    color: var(--text-color); /* Dark gray text */
    &::placeholder {
      color: var(--text-placeholder-color); /* Placeholder text color */
    }

    &:focus {
      border-color: var(--accent-color); /* Green border on focus */
      outline: none; /* Remove default outline */
    }

    &:disabled {
      background-color: #e9ecef; /* Gray background when disabled */
      cursor: not-allowed; /* Disable cursor */
    }
  }
  button {
    margin-top: 1em;
    padding: 0.8em 1em;
    background-color: var(--accent-color); /* Light green background */
    border: none; /* Remove border */
    border-radius: 4px; /* Rounded corners */
    color: white; /* White text */
    font-size: 1em; /* Standard font size */
    cursor: pointer; /* Show pointer cursor on hover */
    width: 150px; /* Fixed button width */
    align-self: center; /* Center the button */
    transition: background-color var(--transition-speed); /* Smooth color transition */

    &:hover {
      background-color: var(--accent-hover); /* Darker green on hover */
    }
  }
`;

// Styled component for input fields
export const Input = styled.input`
  padding: 0.8em 1em; /* Add padding inside input */
  font-size: 1em; /* Standard font size */
  border: 1px solid #ccc; /* Light gray border */
  border-radius: 4px; /* Rounded corners */
  background-color: var(--background-color);
  color: var(--text-color); /* Dark gray text */

  &::placeholder {
    color: var(--text-placeholder-color); /* Placeholder text color */
  }

  &:focus {
    border-color: var(--accent-color); /* Green border on focus */
    outline: none; /* Remove default outline */
  }

  &:disabled {
    background-color: #e9ecef; /* Gray background when disabled */
    cursor: not-allowed; /* Disable cursor */
  }
`;
export const Error = styled.p`
  color: red;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
`;
export const SubmitMessage = styled.p`
  margin-top: 0.5em;
  color: green;
`;

// Styled component for the link to switch between login and register pages
export const NotRegistered = styled(Link)`
  font-size: 0.8em; /* Smaller font size for the link */
  color: var(--text-color);
`;
