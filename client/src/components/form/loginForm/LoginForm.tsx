import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { login as loginAction } from "../../../redux/user/userSlice";
import { useDispatch } from "react-redux";
import { ErrorsType } from "../../../types/types";
import { login } from "../../../services/auth";
import ErrorSection from "../../errorSection/ErrorSection";
import { validateInput } from "../../../helpers/validateInputs";
import {
  Input,
  LoginForm,
  LoginFromWrapper,
  LoginPageWrapper,
  NotRegistered,
} from "./LoginForm.styles";

const LoginFormComponent: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //Sets states for all required filed

  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [errors, setErrors] = useState<ErrorsType[]>([]);

  // Function to handle the form submission based on the page type (login/register)
  const handleSubmit = async () => {
    const userData = await login(email, password);
    if (userData.error) {
      setErrors([{ message: userData.error, isFixed: false }]);
    } else {
      // Handle successful login (e.g., redirect or set user data)
      dispatch(loginAction({ email: userData.email, name: userData.name }));
      setEmail("");
      setPassword("");
      navigate("/");
    }
  };

  // Event handler for form submission
  const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault(); // Prevent the default form submission behavior
    handleSubmit(); // Determine action based on the page type
  };

  /**
   * Handles input changes and updates the relevant state.
   * @param input - The current input value.
   * @param inputType - The type of input being updated (e.g., name, email, password).
   */
  const changeHandler = (input: string, inputType: string): void => {
    // Proceed with validation after sanitization
    if (inputType === "password") {
      //Sets the password to be equalt to current input
      setPassword(input);
      //Checks the input by specific password critieria in validateInput function
      const passwordErrors = validateInput(input, "password", "", "login");
      //Sets the Errors
      setErrors(passwordErrors);
    } else if (inputType === "email") {
      //Sets the eimal
      setEmail(input);
      //Validates the input by specific email criteria in validateInput function
      const emailErrors = validateInput(input, inputType, "", "login");
      //Sets the Errors
      setErrors(emailErrors);
    }
  };

  /**
   * Removes the errors when the input field is out of focus
   */
  const handleBlur = (): void => {
    setErrors([]);
  };

  return (
    <LoginPageWrapper>
      <LoginFromWrapper>
        <h2>Влез в профила си</h2>
        <LoginForm onSubmit={submitHandler}>
          <div>
            <Input
              type="email"
              placeholder="Имейл"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => changeHandler(e.target.value, "email")}
              onBlur={handleBlur}
            />
          </div>
          <div>
            <Input
              type="password"
              placeholder="Парола"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => changeHandler(e.target.value, "password")}
              onBlur={handleBlur}
            />
          </div>

          {/* Link to switch between login and register pages */}
          <NotRegistered to={"/register"}>Нямаш регистрация?</NotRegistered>
          {/* Submit button */}
          <button type="submit">Вход</button>
        </LoginForm>
        <ErrorSection errors={errors} />
      </LoginFromWrapper>
    </LoginPageWrapper>
  );
};

export default LoginFormComponent;
