import { Request, Response } from "express";
import { createUser, getUserByEmail } from "../services/userService"; // Service functions for interacting with the user database
import { comparePassword, hashPassword } from "../utils/bcrypt"; // Utilities for hashing and comparing passwords
import { generateToken } from "../utils/jwt"; // Utility for generating JWT tokens

/**
 * @function loginUser
 * @description Handles user login, verifies credentials, and issues a JWT token
 * @param {Request} req - Express request object containing email and password
 * @param {Response} res - Express response object to send the login response
 */
export const loginUser = async (req: Request, res: Response): Promise<any> => {
  const { email, password } = req.body;

  try {
    // Find the user in the database by their email
    const user = await getUserByEmail(email);

    // If the user doesn't exist, respond with a 404 error
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Prevent login for admin users via this route (if applicable)
    if (user.role === "admin") {
      return res.status(404).json({ error: "User not found" });
    }

    // Compare the provided password with the hashed password stored in the database
    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid credentials" }); // Respond with 401 if passwords do not match
    }

    // Generate a JWT token containing the user's ID and role
    const token = generateToken({ id: user._id, role: user.role });

    // Send the token to the client as an HTTP-only cookie
    res.cookie("authToken", token, {
      httpOnly: true, // Prevent access to the cookie via JavaScript
      maxAge: 3600000, // Token valid for 1 hour (3600000 ms)
      sameSite: "strict", // Restrict the cookie to same-site requests
    });

    // Respond with a success message and the user's details
    return res.json({
      message: "Login successful",
      role: user.role,
      name: user.name,
      id: user._id,
    });
  } catch (err) {
    // Handle any unexpected errors and respond with a 500 server error
    return res.status(500).json({ error: "Server error" });
  }
};

/**
 * @function registerUser
 * @description Handles new user registration by saving their details in the database
 * @param {Request} req - Express request object containing user details
 * @param {Response} res - Express response object to send the registration response
 */
export const registerUser = async (
  req: Request,
  res: Response
): Promise<any> => {
  const { name, email, password } = req.body;

  try {
    // Check if a user with the provided email already exists
    const existingUser = await getUserByEmail(email);
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" }); // Respond with 400 if user exists
    }

    // Hash the password for secure storage
    const hashedPassword = await hashPassword(password);

    // Create a new user in the database with default role and empty phone address
    const newUser = await createUser({
      name,
      email,
      password: hashedPassword,
      role: "customer", // Default role is set to "customer"
      address: {
        phone: "", // Placeholder for phone number
      },
    });

    // Respond with success message and details of the new user
    return res.status(201).json({
      message: "User registered successfully",
      newUser,
    });
  } catch (err) {
    // Handle any unexpected errors and respond with a 500 server error
    return res.status(500).json({ error: "Server error" });
  }
};

/**
 * @function logoutUser
 * @description Logs out the user by clearing the authentication token
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object to send the logout response
 */
export const logoutUser = (req: Request, res: Response): void => {
  // Clear the authentication token by setting the "authToken" cookie to an empty value with an expired date
  res.cookie("authToken", "", {
    httpOnly: true, // Ensure the cookie remains inaccessible via JavaScript
    expires: new Date(0), // Expire the cookie immediately
    sameSite: "strict", // Maintain strict SameSite policy for security
  });

  // Respond with a success message confirming logout
  res.status(200).json({ message: "Logout successful" });
};
