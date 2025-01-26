import {
  Error,
  Form,
  FormWrapper,
  Input,
  NotRegistered,
  PageWrapper,
  SubmitMessage,
} from "../loginForm/Form.styles";
import { useState } from "react";
import { register } from "../../../services/auth";
import useForm from "../../../hooks/useForm";

// Main component for the login/register form
const RegisterFormComponent: React.FC = () => {
  //Sets states for all required filed
  const initialState = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const {
    values,
    errors,
    handleChange,
    setValues,
    handleSubmit,
    resetForm,
    handleBlur,
  } = useForm(initialState, "register");
  const [submitMessage, setSubmitMessage] = useState("");

  // Function to handle the form submission based on the page type (login/register)
  const formSubmit = async () => {
    if (values.confirmPassword != values.password) {
      setSubmitMessage("Паролите не съвпадат");
      return;
    } else {
      // Handle successful login (e.g., redirect or set user data)
      const userData = await register(
        values.name,
        values.email,
        values.password
      );
      if (userData.error) {
        setSubmitMessage(userData.error);
        return;
      } else {
        resetForm();
        setSubmitMessage("Успешна регистрация");
      }
    }
  };

  return (
    <PageWrapper>
      <FormWrapper>
        <h2>Регистрирай се</h2>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(formSubmit);
          }}
        >
          <div>
            <Input
              type="text"
              placeholder="Име"
              autoComplete="name"
              required
              value={values.name}
              onChange={(e) => handleChange("name", e.target.value)}
              onBlur={() => handleBlur("name")}
            />
            {errors.name && <Error>{errors.name}</Error>}
          </div>

          <div>
            <Input
              type="email"
              placeholder="Имейл"
              autoComplete="email"
              required
              value={values.email}
              onChange={(e) => handleChange("email", e.target.value)}
              onBlur={() => handleBlur("email")}
            />
            {errors.email && <Error>{errors.email}</Error>}
          </div>
          <div>
            <Input
              type="password"
              placeholder="Парола"
              autoComplete="current-password"
              required
              value={values.password}
              onChange={(e) => handleChange("password", e.target.value)}
              onBlur={() => handleBlur("password")}
            />
            {errors.password && <Error>{errors.password}</Error>}
          </div>

          <div>
            <Input
              type="password"
              placeholder="Повтори парола"
              autoComplete="new-password"
              required
              value={values.confirmPassword}
              onChange={(e) => handleChange("confirmPassword", e.target.value)}
              onBlur={() => handleBlur("confirmPassword")}
            />
            {errors.confirmPassword && <Error>{errors.confirmPassword}</Error>}
          </div>

          {/* Link to switch between login and register pages */}
          <NotRegistered to={"/login"}>Вече си регистриран?</NotRegistered>
          {/* Submit button */}
          <button type="submit">Регистриране</button>
        </Form>
        {submitMessage && <SubmitMessage>{submitMessage}</SubmitMessage>}
      </FormWrapper>
    </PageWrapper>
  );
};

export default RegisterFormComponent;
