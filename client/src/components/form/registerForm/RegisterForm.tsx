import { ErrorsType } from "../../../types/types";
import { validateInput } from "../../../helpers/validateInputs";
import ErrorSection from "../../errorSection/ErrorSection";
import {
  Input,
  LoginForm,
  LoginFromWrapper,
  LoginPageWrapper,
  NotRegistered,
} from "../loginForm/LoginForm.styles";
import { useState } from "react";
import { register } from "../../../services/auth";

// Main component for the login/register form
const RegisterFormComponent: React.FC = () => {
  //Sets states for all required filed

  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [errors, setErrors] = useState<ErrorsType[]>([]);

  // Function to handle the form submission based on the page type (login/register)
  const handleSubmit = async () => {
    if (confirmPassword != password) {
      setErrors([{ message: "Паролите трябва да съвпадат!", isFixed: false }]);
      return;
    }
    const userData = await register(name, email, password);
    if (userData.error) {
      setErrors([{ message: userData.error, isFixed: false }]);
    } else {
      // Handle successful login (e.g., redirect or set user data)
      setErrors([{ message: "Успешно регистриране", isFixed: true }]);
      setEmail("");
      setPassword("");
      setName("");
      setConfirmPassword("");
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
    // Sanitize the input before validation

    // Proceed with validation after sanitization
    if (inputType === "password") {
      //Sets the password to be equalt to current input
      setPassword(input);
      //Checks the input by specific password critieria in validateInput function
      const passwordErrors = validateInput(input, "password", "", "register");
      //Sets the Errors
      setErrors(passwordErrors);
    } else if (inputType === "confirmPassword") {
      //Sets the repeat-password
      setConfirmPassword(input);
      //Validates the input by specific repeat-password criteria in validateInput function
      const confirmPasswordErrors = validateInput(
        password,
        "confirmPassword",
        input
      );
      //Sets the Erros
      setErrors(confirmPasswordErrors); // Combine both errors
    } else if (inputType === "email") {
      //Sets the eimal
      setEmail(input);
      //Validates the input by specific email criteria in validateInput function
      const emailErrors = validateInput(input, inputType, "", "register");
      //Sets the Errors
      setErrors(emailErrors);
    } else if (inputType === "name") {
      //Sets the name
      setName(input);
      // Validates the input by specific name criteria in validateInput function
      const nameErrors = validateInput(input, inputType);
      //Sets the Errors
      setErrors(nameErrors);
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
        <h2>Регистрирай се</h2>
        <LoginForm onSubmit={submitHandler}>
          <div>
            <Input
              type="text"
              placeholder="Име"
              autoComplete="name"
              required
              value={name}
              onChange={(e) => changeHandler(e.target.value, "name")}
              onBlur={handleBlur}
            />
          </div>

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

          <div>
            <Input
              type="password"
              placeholder="Повтори парола"
              autoComplete="new-password"
              required
              value={confirmPassword}
              onChange={(e) => changeHandler(e.target.value, "confirmPassword")}
              onBlur={handleBlur}
            />
          </div>

          {/* Link to switch between login and register pages */}
          <NotRegistered to={"/login"}>Вече си регистриран?</NotRegistered>
          {/* Submit button */}
          <button type="submit">Регистриране</button>
        </LoginForm>
        <ErrorSection errors={errors} />
      </LoginFromWrapper>
    </LoginPageWrapper>
  );
};

export default RegisterFormComponent;
