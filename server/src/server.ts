import express from "express"; // Import the Express framework to create the web server
import mongoose from "mongoose"; // Import Mongoose to connect to and interact with MongoDB
import cors from "cors"; // Import CORS middleware to enable cross-origin resource sharing
import dotenv from "dotenv"; // Import dotenv to load environment variables from a .env file
import medicineRoutes from "./routes/medicineRoutes"; // Import the medicine routes
import authRoutes from "./routes/authRoutes";

dotenv.config(); // Load environment variables from a .env file into process.env

// Initialize the Express app
const app = express();

// Define the port number, taking it from environment variables if available, otherwise default to 5000
const port = process.env.PORT || 5000;

// Apply middleware to the Express app
app.use(cors()); // Enable CORS to allow requests from other origins (e.g., frontend application)
app.use(express.json()); // Middleware to parse incoming JSON payloads in requests

// Connect to MongoDB using the connection string (URI) from environment variables
mongoose
  .connect(process.env.MONGO_URI || "") // Use MONGO_URI from the .env file or an empty string if not provided
  .then(() => console.log("Connected to MongoDB")) // Log success if the connection is established
  .catch((err) => console.error("Failed to connect to MongoDB:", err)); // Log error details if the connection fails

// Use the imported routes for handling API requests related to medicines
app.use("/medicines", medicineRoutes); // Forward requests to the root URL ("/") to the medicine routes
//Auth routes
app.use("/auth", authRoutes); // Add auth routes

// Start the server and have it listen for incoming requests on the specified port
app.listen(port, () => {
  console.log(`Server started on port ${port}`); // Log a message indicating the server is running
});
