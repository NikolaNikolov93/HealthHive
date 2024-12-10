import express, { Request, Response } from "express";
import UserModel, { IUser } from "../models/User";
import { hashPassword, comparePassword } from "../utils/bcrypt"; // Import bcrypt utilities
import { generateToken } from "../utils/jwt"; // Import JWT utility

const router = express.Router();

/**
 * @route POST /auth/register
 * @description Register a new user
 * @access Public
 */
router.post("/register", async (req: Request, res: Response): Promise<any> => {
  const { _id, name, email, password, role, address } = req.body;

  try {
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    const hashedPassword = await hashPassword(password);

    const newUser = new UserModel({
      _id,
      name,
      email,
      password: hashedPassword,
      role,
      address,
    });

    await newUser.save();

    return res.status(201).json({ message: "User registered successfully" }); // Return the response properly
  } catch (err) {
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
    // Find the user by email
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Compare the provided password with the stored hash
    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Generate a JWT token
    const token = generateToken({ id: user._id, role: user.role });

    res.json({ message: "Login successful", token });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

/**
 * @route POST /auth/logout
 * @description Logout a user
 * @access Public
 */
router.post("/logout", (req: Request, res: Response) => {
  // To "logout", instruct the client to remove the token
  res.json({ message: "Logout successful" });
});

export default router;
