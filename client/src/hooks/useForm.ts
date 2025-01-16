import { useState } from "react";

type UseFormReturnType<T> = {
  values: T;
  handleChange: (field: keyof T, value: any) => void;
  setValues: (newValues: Partial<T>) => void;
  resetForm: () => void;
};

const useForm = <T extends Record<string, any>>(
  initialValues: T
): UseFormReturnType<T> => {
  const [values, setValuesState] = useState<T>(initialValues);

  const handleChange = (field: keyof T, value: any) => {
    setValuesState((prev) => ({ ...prev, [field]: value }));
  };

  const setValues = (newValues: Partial<T>) => {
    setValuesState((prev) => ({ ...prev, ...newValues }));
  };

  const resetForm = () => {
    setValuesState(initialValues);
  };

  return { values, handleChange, setValues, resetForm };
};

export default useForm;
