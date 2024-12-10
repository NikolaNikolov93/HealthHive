import jwt from "jsonwebtoken"; // Import the JSON Web Token (JWT) library
import dotenv from "dotenv"; // Import dotenv to load environment variables from a .env file

dotenv.config(); // Load environment variables from a .env file into process.env

// Retrieve the secret key from environment variables, defaulting to an empty string if not provided
const secretKey = process.env.JWT_SECRET || "";

/**
 * Generates a JWT (JSON Web Token) with a given payload and expiration time.
 *
 * @param payload - The data to be encoded into the token
 * @param expiresIn - The token's validity duration (default is "1h" for one hour)
 * @returns A signed JWT as a string
 */
export const generateToken = (
  payload: object,
  expiresIn: string = "1h" // Default expiration time is one hour
): string => {
  return jwt.sign(payload, secretKey, { expiresIn }); // Create and return the signed token
};

/**
 * Verifies the authenticity and validity of a JWT.
 *
 * @param token - The JWT to be verified
 * @returns The decoded payload if the token is valid, otherwise an error is thrown
 */
export const verifyToken = (token: string): object | string => {
  return jwt.verify(token, secretKey); // Verify the token using the secret key and return the decoded payload
};
