type ValidationFunction<ValueType, ValuesType> = (
  value: ValueType,
  values?: ValuesType
) => string | null;

export type ValidationSchema<T> = {
  [K in keyof T]: ValidationFunction<T[K], T>;
};

export const validationSchemas = {
  register: {
    name: (value: string) =>
      value.length < 3 ? "Името трябва да е поне 3 символа" : null,
    email: (value: string) =>
      !/^\S+@\S+\.\S+$/.test(value) ? "Невалиден имейл адрес" : null,
    password: (value: string) =>
      value.length < 6 ? "Паролата трябва да е поне 6 символа" : null,
    confirmPassword: (value: string, values) =>
      value !== values?.password ? "Паролите не съвпадат" : null,
  } as ValidationSchema<any>, // Use `any` to allow different form types

  login: {
    email: (value: string) =>
      !/^\S+@\S+\.\S+$/.test(value) ? "Невалиден имейл адрес" : null,
    password: (value: string) =>
      value.length < 6 ? "Паролата трябва да е поне 6 символа" : null,
  } as ValidationSchema<any>,
  "add-med": {
    name: (value: string) => {
      if (!value) return "Name is required";
      if (value.length <= 3) return "Name must be more than 3 characters";
      return undefined; // No error if the validation passes
    },
    brand: (value: string) => (value ? undefined : "Brand is required"),
    description: (value: string) =>
      value ? undefined : "Description is required",
    price: (value: string) =>
      !value || isNaN(parseFloat(value)) || parseFloat(value) <= 0
        ? "Price must be a positive number"
        : undefined,
    stockDetails: (value: string) =>
      !value || isNaN(parseFloat(value)) || parseFloat(value) < 0
        ? "Stock must be a non-negative number"
        : undefined,
    expirationDate: (value: string) =>
      value ? undefined : "Expiration date is required",
    mainCategory: (value: string) =>
      value ? undefined : "Main category is required",
    subCategory: (value: string) =>
      value ? undefined : "Sub category is required",
    generalUsage: (value: string) =>
      value ? undefined : "General usage is required",
    img: (value: string) => (value ? undefined : "Image is required"),
  } as ValidationSchema<any>,
  "update-med": {
    name: (value) =>
      !value
        ? "Name is required"
        : value.length <= 3
        ? "Name must be more than 3 characters"
        : undefined,
    brand: (value) => (!value ? "Brand is required" : undefined),
    description: (value) => (!value ? "Description is required" : undefined),
    price: (value) =>
      !value || isNaN(parseFloat(value)) || parseFloat(value) <= 0
        ? "Price must be a positive number"
        : undefined,
    stockDetails: (value: Record<string, number>) => {
      if (!value || typeof value !== "object")
        return "Stock details must be an object";
      for (const [key, stock] of Object.entries(value)) {
        if (stock < 0) {
          return `Invalid stock quantity for ${key}. Must be a non-negative number`;
        }
      }
      return null; // No errors if validation passes
    },
  } as ValidationSchema<any>,
};
