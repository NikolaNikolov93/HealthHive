import { Request, Response, NextFunction } from "express";
import { UserModel } from "../models/User";
import { verifyToken } from "../utils/jwt";
import { getUserById } from "../services/userService";

// Middleware to verify JWT token in HTTP-only cookie and check for admin role
const authenticateAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  const token = req.cookies.authToken; // Extract the token from the cookie

  if (!token) {
    return res.status(401).json({ message: "Access denied" });
  }

  try {
    // Verify the token

    const decoded = verifyToken(token) as { id: string };

    // Fetch the user from the database and check their role
    const user = await getUserById(decoded.id);

    if (!user) {
      return res
        .status(404)
        .json({ message: "User not found", token: decoded });
    }

    if (user.role !== "admin") {
      return res.status(403).json({ message: "Access forbidden: Admins only" });
    }

    // req.user = user; // Attach user info to the request object
    next(); // Proceed to the next middleware or route handler
  } catch (err) {
    return res.status(403).json({ message: "Invalid token" });
  }
};

export default authenticateAdmin;
