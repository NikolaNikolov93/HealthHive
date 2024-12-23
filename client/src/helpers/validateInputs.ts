import { ErrorsType } from "../types/types";

/**
 * Validates an input value based on the specified input type and optional comparison value.
 * @param input - The value of the input field to be validated.
 * @param inputType - The type of input field (e.g., "password", "confirmPassword", "name", "email").
 * @param compareWith - An optional value to compare with (used for "confirmPassword" validation).
 * @returns An array of validation objects containing messages and whether the validation is fixed.
 */
export const validateInput = (
  input: string,
  inputType: string,
  compareWith?: string,
  formType?: string
): ErrorsType[] => {
  if (input.trim() === "") {
    return [
      {
        message: "Полето трябва да бъде попълнено", // "The field must be filled"
        isFixed: input.trim() != "", // Validation fails if input is empty
      },
    ];
  }
  if (formType === "login") {
    return [];
  }
  // Validation rules for password input
  if (inputType === "password") {
    return [
      {
        message: "Паролата трябва да е по- дълга от 4 символа", // "The password must be longer than 4 characters"
        isFixed: input.length >= 4,
      },
      {
        message: "Паролата трябва да съдържа поне една главна буква", // "The password must contain at least one uppercase letter"
        isFixed: /[A-Z]/.test(input),
      },
      {
        message: "Паролата трябва да съдържа поне едно число", // "The password must contain at least one number"
        isFixed: /[0-9]/.test(input),
      },
      {
        message: "Паролата трябва да съдържа поне един специален символ", // "The password must contain at least one special character"
        isFixed: /[!@#$%^&*]/.test(input),
      },
    ];
  }
  // Validation rules for confirmPassword input
  else if (inputType === "confirmPassword") {
    return [
      {
        message: "Паролите трябва да съвпадат", // "Passwords must match"
        isFixed: input === compareWith, // Validation succeeds if input matches the comparison value
      },
    ];
  }
  // Validation rules for name input
  else if (inputType === "name") {
    return [
      {
        message: "Името трябва да бъде по-дълго от 2 символа", // "The name must be longer than 2 characters"
        isFixed: input.length > 2,
      },
      {
        message: "Името трябва да съдържа само букви", // "The name must contain only letters"
        isFixed: /^[a-zA-Zа-яА-Я]+$/.test(input), // Checks for letters only (supports Cyrillic and Latin)
      },
    ];
  }
  // Validation rules for email input
  else if (inputType === "email") {
    return [
      {
        message: "Имейлът трябва да бъде валиден формат", // "The email must be in a valid format"
        isFixed: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input), // Basic email regex
      },
    ];
  }
  // If inputType is not recognized, return an empty array
  else {
    return [];
  }
};
