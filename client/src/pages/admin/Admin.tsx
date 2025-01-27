import React, { useState } from "react";
import {
  AdminFrom,
  AdmingFormWrapper,
  AdmingPageContainer,
  Input,
} from "./Admin.styles";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login as loginAction } from "../../redux/user/userSlice";
import { loginAdmin } from "../../services/auth";
import ErrorSection from "../../components/errorSection/ErrorSection";

const Admin = () => {
  // State hooks to manage form values and error message
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // useNavigate hook for programmatically navigating after login
  const navigate = useNavigate();
  // useDispatch used to change the redux state
  const dispatch = useDispatch();

  // Handle the form submission
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the default form submission behavior
    setError(""); // Clear any previous errors
    const adminData = await loginAdmin(email, password);
    if (adminData.error) {
      setError(adminData.error);
    } else {
      // Redirect to the admin dashboard if login is successful and role is admin
      dispatch(loginAction({ email: adminData.email, name: adminData.name }));
      navigate("/admin/dashboard");
    }
  };

  return (
    <AdmingPageContainer>
      <AdmingFormWrapper>
        <h2>Admin Login</h2>
        <AdminFrom onSubmit={handleLogin}>
          {/* Display error message if exists */}
          {error && <ErrorSection error={error} />}

          {/* Email Input field */}
          <div>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update email state on Input change
              required
            />
          </div>

          {/* Password Input field */}
          <div>
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update password state on Input change
              required
            />
          </div>

          {/* Submit button */}
          <button type="submit">Login</button>
        </AdminFrom>
      </AdmingFormWrapper>
    </AdmingPageContainer>
  );
};

export default Admin;
