import express, { Request, Response } from "express";
import authenticateAdmin from "../middlewares/authAdmin"; // Middleware to verify if the user is an authenticated admin
import {
  loginUser,
  logoutUser,
  registerUser,
} from "../controllers/userController"; // Import user-related controller functions
import { fetchAllUsers, loginAdmin } from "../controllers/adminController"; // Import admin-related controller functions

const router = express.Router(); // Initialize the Express router

/**
 * @route GET /users
 * @description Fetch a list of all users
 * @access Protected - Admin only
 * @middleware authenticateAdmin - Verifies admin authentication
 * @controller fetchAllUsers - Handles fetching all users
 */
router.get("/users", authenticateAdmin, fetchAllUsers);

/**
 * @route POST /admin/login
 * @description Admin login endpoint
 * @access Public
 * @controller loginAdmin - Handles admin login logic
 */
router.post("/admin/login", loginAdmin);

/**
 * @route POST /register
 * @description Register a new user
 * @access Public
 * @controller registerUser - Handles user registration
 */
router.post("/register", registerUser);

/**
 * @route POST /login
 * @description User login endpoint
 * @access Public
 * @controller loginUser - Handles user login logic
 */
router.post("/login", loginUser);

/**
 * @route POST /logout
 * @description User logout endpoint (clears the authentication token)
 * @access Public
 * @controller logoutUser - Handles user logout logic
 */
router.post("/logout", logoutUser);

export default router; // Export the router for use in the application
