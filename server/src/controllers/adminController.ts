import { Request, Response } from "express";
import { getUserByEmail, getUsers } from "../services/userService"; // Service functions for fetching user data
import { comparePassword } from "../utils/bcrypt"; // Utility function for comparing passwords
import { generateToken } from "../utils/jwt"; // Utility function for generating JWT tokens

/**
 * @function fetchAllUsers
 * @description Handles fetching all users from the database
 * @route GET /users
 * @access Protected - Admin only
 * @param req - Express Request object
 * @param res - Express Response object
 */
export const fetchAllUsers = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    // Fetch all users from the database
    const users = await getUsers();

    // Send the list of users as a JSON response
    res.json(users);
  } catch (err: unknown) {
    // Handle errors and send appropriate responses
    if (err instanceof Error) {
      res.status(500).json({ error: err.message }); // Send error message if available
    } else {
      res.status(500).json({ error: "An unknown error occurred" }); // Handle unknown errors
    }
  }
};

/**
 * @function loginAdmin
 * @description Handles admin login by verifying credentials and generating a JWT token
 * @route POST /admin/login
 * @access Public
 * @param req - Express Request object
 * @param res - Express Response object
 */
export const loginAdmin = async (req: Request, res: Response): Promise<any> => {
  const { email, password } = req.body; // Extract email and password from the request body

  try {
    // Find the user in the database by email
    const user = await getUserByEmail(email);

    // Check if the user exists and is an admin
    if (!user || user.role !== "admin") {
      return res.status(403).json({ error: "Access denied" }); // Ensure only admins can log in via this route
    }

    // Compare the provided password with the stored hashed password
    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid credentials" }); // Respond with 401 if the password doesn't match
    }

    // Generate a JWT token containing the user's ID and role
    const token = generateToken({ id: user._id, role: user.role });

    // Send the token as an HTTP-only cookie to the client
    res.cookie("authToken", token, {
      httpOnly: true, // Ensure the cookie is accessible only by the server
      maxAge: 3600000, // Set the cookie expiration to 1 hour (3600000 ms)
      sameSite: "strict", // Apply strict SameSite policy for cookie security
    });

    // Respond with a success message and admin details
    return res.json({
      message: "Admin login successful",
      role: user.role,
      name: user.name,
      id: user._id,
    });
  } catch (err) {
    // Handle errors and send a 500 server error response
    return res.status(500).json({ error: "Server error" });
  }
};
