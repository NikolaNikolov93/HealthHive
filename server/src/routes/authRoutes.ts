import express, { Request, Response } from "express";
import { UserModel } from "../models/User";
import { hashPassword, comparePassword } from "../utils/bcrypt"; // Import bcrypt utilities for password hashing and comparison
import { generateToken } from "../utils/jwt"; // Import JWT utility to generate tokens
import { createUser, getUserByEmail, getUsers } from "../services/userService"; // Import user service functions for creating and fetching users
import authenticateAdmin from "../middlewares/authAdmin";

const router = express.Router();

router.get(
  "/users",
  authenticateAdmin,
  async (req: Request, res: Response): Promise<void> => {
    try {
      const users = await getUsers();
      res.json(users);
    } catch (err: unknown) {
      if (err instanceof Error) {
        res.status(500).json({ error: err.message });
      } else {
        res.status(500).json({ error: "An unknown error occurred" });
      }
    }
  }
);

/**
 * @route POST /auth/register
 * @description Register a new user
 * @access Public
 */
router.post("/register", async (req: Request, res: Response): Promise<any> => {
  const { _id, name, email, password, role, address } = req.body;

  try {
    // Check if the user already exists based on the provided email
    const existingUser = await getUserByEmail(email);
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" }); // If user exists, send a 400 response with error message
    }

    // Hash the password before storing it
    const hashedPassword = await hashPassword(password);

    // Create the new user in the database
    const newUser = await createUser({
      _id,
      name,
      email,
      password: hashedPassword,
      role,
      address,
    });

    // Return success message with the newly created user details
    return res
      .status(201)
      .json({ message: "User registered successfully", newUser });
  } catch (err) {
    // If an error occurs during registration, send a 500 server error response
    return res.status(500).json({ error: "Server error" });
  }
});

/**
 * @route POST /auth/login
 * @description Login a user
 * @access Public
 */
router.post("/login", async (req: Request, res: Response): Promise<any> => {
  const { email, password } = req.body;

  try {
    // Find the user in the database by email
    const user = await getUserByEmail(email);
    if (!user) {
      return res.status(404).json({ error: "User not found" }); // If no user is found, return a 404 response
    }

    // Compare the provided password with the stored hashed password
    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid credentials" }); // If passwords don't match, return a 401 unauthorized response
    }

    // Generate a JWT token with the user's ID and role
    const token = generateToken({ id: user._id, role: user.role });

    // Send the token as an HTTP-only cookie to the client
    res.cookie("authToken", token, {
      httpOnly: true, // Ensure the cookie is accessible only by the server
      maxAge: 3600000, // Set the cookie expiration to 1 hour (3600000 ms)
      sameSite: "strict", // Apply strict SameSite policy for cookie security
    });

    // Return success message and the user's role
    return res.json({ message: "Login successful", role: user.role });
  } catch (err) {
    // If an error occurs during login, send a 500 server error response
    return res.status(500).json({ error: "Server error" });
  }
});

/**
 * @route POST /auth/logout
 * @description Logout a user (clear the auth token)
 * @access Public
 */
// router.post("/logout", (req: Request, res: Response) => {
//   // Instruct the client to remove the auth token cookie for logging out
//   res.clearCookie("authToken"); // Clear the "authToken" cookie
//   return res.json({ message: "Logout successful" }); // Return success message
// });

export default router;
