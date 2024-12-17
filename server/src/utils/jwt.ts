import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from a .env file

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
  return jwt.sign(payload, secretKey, { expiresIn });
};

/**
 * Verifies the authenticity and validity of a JWT.
 *
 * @param token - The JWT to be verified
 * @returns The decoded payload if the token is valid, otherwise an error is thrown
 */
export const verifyToken = (token: string): object | string => {
  try {
    // Verify the token using the secret key and return the decoded payload
    return jwt.verify(token, secretKey);
  } catch (err) {
    // Log the error and throw a more descriptive error
    console.error("JWT verification error:", err);
    throw new Error("Invalid or expired token");
  }
};
