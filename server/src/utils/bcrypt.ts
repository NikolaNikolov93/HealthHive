import bcrypt from "bcrypt"; // Import the bcrypt library for hashing and comparing passwords

// Define the number of salt rounds used by bcrypt to generate the hash
const saltRounds = 10;

/**
 * Hashes a plaintext password using bcrypt.
 *
 * @param password - The plaintext password to be hashed
 * @returns A promise that resolves to the hashed password
 */
export const hashPassword = async (password: string): Promise<string> => {
  return bcrypt.hash(password, saltRounds); // Generate a hash using the specified number of salt rounds
};

/**
 * Compares a plaintext password with a hashed password to check if they match.
 *
 * @param password - The plaintext password to compare
 * @param hash - The hashed password to compare against
 * @returns A promise that resolves to `true` if the passwords match, otherwise `false`
 */
export const comparePassword = async (
  password: string,
  hash: string
): Promise<boolean> => {
  return bcrypt.compare(password, hash); // Use bcrypt to compare the plaintext password with the hashed one
};
