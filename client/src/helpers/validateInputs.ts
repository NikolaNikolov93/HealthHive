import { ErrorsType } from "../types/types";

/**
 * Validates an input value based on the specified input type and optional comparison value.
 * @param input - The value of the input field to be validated.
 * @param inputType - The type of input field (e.g., "password", "confirmPassword", "name", "email", "price", "stock").
 * @param compareWith - An optional value to compare with (used for "confirmPassword" validation).
 * @param formType - The type of form (optional, used for specific form validation like "login").
 * @param stockIndex - The index for stock validation (optional, used for validating stock details).
 * @returns An array of validation objects containing messages and whether the validation is fixed.
 */
export const validateInput = (
  input: string,
  inputType: string,
  compareWith?: string,
  formType?: string,
  stockIndex?: number
): ErrorsType[] => {
  // Basic empty field validation
  if (input.trim() === "") {
    return [
      {
        message: "Полето трябва да бъде попълнено", // "The field must be filled"
        isFixed: input.trim() !== "", // Validation fails if input is empty
      },
    ];
  }

  // Login form does not require validation (skip validation in login)
  if (formType === "login") {
    return [];
  }

  // Password validation
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

  // Confirm password validation
  else if (inputType === "confirmPassword") {
    return [
      {
        message: "Паролите трябва да съвпадат", // "Passwords must match"
        isFixed: input === compareWith,
      },
    ];
  }

  // Name validation
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

  // Brand validation
  else if (inputType === "brand") {
    return [
      {
        message: "Марка трябва да бъде по-дълго от 2 символа", // "The brand must be longer than 2 characters"
        isFixed: input.length > 2,
      },
    ];
  }

  // Price validation
  else if (inputType === "price") {
    return [
      {
        message: "Цената трябва да бъде по-голяма от 0", // "The price must be greater than 0"
        isFixed: parseFloat(input) > 0,
      },
    ];
  } else if (inputType === "description") {
    console.log(parseFloat(input));

    return [
      {
        message: "Описанието трябва да е по-дълго от 10 символа", // "The price must be greater than 0"
        isFixed: input.length > 10,
      },
    ];
  }

  // Stock details validation (e.g., date and quantity)
  else if (inputType === "stock" && stockIndex !== undefined) {
    const [expireDate, stock] = input.split(":");
    return [
      {
        message: "Дата на изтичане не може да бъде празна", // "Expiration date cannot be empty"
        isFixed: expireDate.trim() !== "",
      },
      {
        message: "Количество трябва да бъде положително число", // "Stock quantity must be a positive number"
        isFixed: !isNaN(Number(stock)) && Number(stock) >= 0, // Ensure the result is a boolean
      },
    ];
  }

  // Email validation
  else if (inputType === "email") {
    return [
      {
        message: "Имейлът трябва да бъде валиден формат", // "The email must be in a valid format"
        isFixed: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input),
      },
    ];
  }

  // If inputType is not recognized, return an empty array
  else {
    return [];
  }
};
