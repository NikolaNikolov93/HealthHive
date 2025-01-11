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

    try {
      // Send POST request to the backend login route
      const response = await fetch("http://localhost:5000/auth/admin/login", {
        method: "POST", // Request method
        credentials: "include", // Ensure cookies are sent with the request
        headers: {
          "Content-Type": "application/json", // Set content type to JSON
        },
        body: JSON.stringify({ email, password }), // Send email and password in request body
      });

      // Check if the response is not ok, then throw an error with the error message
      if (!response.ok) {
        const data = await response.json(); // Parse the response as JSON
        throw new Error(data.error || "Login failed"); // Handle login failure
      }

      // On success, parse the response JSON
      const adminData = await response.json();

      // Check if the role is admin, if not, throw an error
      if (adminData.role !== "admin") {
        throw new Error("Admins only"); // If role is not admin, show error
      } else {
        // Redirect to the admin dashboard if login is successful and role is admin
        dispatch(loginAction({ email: adminData.email, name: adminData.name }));
        navigate("/admin/dashboard");
      }
    } catch (err: any) {
      // Set the error message if an error occurs
      setError(err.message);
    }
  };

  return (
    <AdmingPageContainer>
      <AdmingFormWrapper>
        <h2>Admin Login</h2>
        <AdminFrom onSubmit={handleLogin}>
          {/* Display error message if exists */}
          {error && <p style={{ color: "red" }}>{error}</p>}

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
