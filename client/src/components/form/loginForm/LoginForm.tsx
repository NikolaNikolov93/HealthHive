import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { login as loginAction } from "../../../redux/user/userSlice";
import { useDispatch } from "react-redux";
import { login } from "../../../services/auth";
import {
  Error,
  Form,
  FormWrapper,
  Input,
  NotRegistered,
  PageWrapper,
  SubmitMessage,
} from "./Form.styles";
import useForm from "../../../hooks/useForm";

const LoginFormComponent: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialState = {
    email: "",
    password: "",
  };
  const { values, errors, handleChange, handleSubmit, resetForm, handleBlur } =
    useForm(initialState, "login");
  const [submitMessage, setSubmitMessage] = useState("");

  // Function to handle the form submission based on the page type (login/register)
  const formSubmit = async () => {
    const userData = await login(values.email, values.password);
    if (userData.error) {
      setSubmitMessage(userData.error);
    } else {
      // Handle successful login (e.g., redirect or set user data)
      dispatch(loginAction({ email: userData.email, name: userData.name }));
      resetForm();
      navigate("/");
    }
  };

  return (
    <PageWrapper>
      <FormWrapper>
        <h2>Влез в профила си</h2>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(formSubmit);
          }}
        >
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

          {/* Link to switch between login and register pages */}
          <NotRegistered to={"/register"}>Нямаш регистрация?</NotRegistered>
          {/* Submit button */}
          <button type="submit">Вход</button>
        </Form>
        {submitMessage && <SubmitMessage>{submitMessage}</SubmitMessage>}
      </FormWrapper>
    </PageWrapper>
  );
};

export default LoginFormComponent;
