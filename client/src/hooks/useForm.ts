import { useState } from "react";
import {
  ValidationSchema,
  validationSchemas,
} from "../helpers/validationSchema";

type FormType = "register" | "login" | "add-med" | "update-med";

type UseFormReturnType<T> = {
  values: T;
  errors: Partial<Record<keyof T, string>>;
  handleChange: (field: keyof T, value: any) => void;
  setValues: (newValues: Partial<T>) => void;
  resetForm: () => void;
  handleSubmit: (callback: () => void) => void;
  handleBlur: (field: keyof T) => void; // Add handleBlur to return type
};

const useForm = <T extends Record<string, any>>(
  initialValues: T,
  formType: FormType
): UseFormReturnType<T> => {
  const [values, setValuesState] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});

  const validationSchema = validationSchemas[formType] as ValidationSchema<T>;

  const handleChange = (field: keyof T, value: any) => {
    setValuesState((prev) => ({ ...prev, [field]: value }));
    if (validationSchema[field]) {
      const error = validationSchema[field](value, values);
      setErrors((prev) => ({ ...prev, [field]: error || "" }));
    }
  };

  const setValues = (newValues: Partial<T>) => {
    setValuesState((prev) => ({ ...prev, ...newValues }));
  };

  const resetForm = () => {
    setValuesState(initialValues);
  };
  const handleSubmit = (callback: () => void) => {
    let validationErrors: Partial<Record<keyof T, string>> = {};

    Object.keys(validationSchema).forEach((key) => {
      const field = key as keyof T;
      const error = validationSchema[field](values[field], values);
      if (error) validationErrors[field] = error;
    });

    if (Object.values(validationErrors).some((error) => error)) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      callback();
    }
  };
  const setFieldError = (field: keyof T, error: string | null) => {
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleBlur = (field: keyof T) => {
    // Reset the error for the specific field when it loses focus
    setFieldError(field, null);
  };

  return {
    values,
    errors,
    handleChange,
    setValues,
    resetForm,
    handleSubmit,
    handleBlur,
  };
};

export default useForm;
