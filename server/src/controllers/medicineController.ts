import { Request, Response } from "express";
import {
  addNewMedicine,
  deleteMedicineById,
  getAllMedicines,
  getMedicinesByCategory,
  updateMedicineById,
} from "../services/medicineServices";

/**
 * Fetch all medicines from the database
 * @route GET /getByMainCategory
 * @access Public
 * @param req - Express request object
 * @param res - Express response object
 */
export const fetchByMainCategory = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { mainCategory, subCategory, specificConditions } = req.params;
  console.log(req.params);

  try {
    const meds = await getMedicinesByCategory(
      mainCategory,
      subCategory,
      specificConditions
    ); // Fetch medicines from the service
    res.json(meds); // Send the medicines as a JSON response
  } catch (err: unknown) {
    // Handle any potential errors
    if (err instanceof Error) {
      res.status(500).json({ error: err.message }); // Send error message if it's an instance of Error
    } else {
      res.status(500).json({ error: "An unknown error occurred" }); // Fallback for unknown errors
    }
  }
};

/**
 * Fetch all medicines from the database
 * @route GET /getAll
 * @access Admin
 * @param req - Express request object
 * @param res - Express response object
 */
export const fetchAllMedicines = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const meds = await getAllMedicines(); // Fetch medicines from the service
    res.json(meds); // Send the medicines as a JSON response
  } catch (err: unknown) {
    // Handle any potential errors
    if (err instanceof Error) {
      res.status(500).json({ error: err.message }); // Send error message if it's an instance of Error
    } else {
      res.status(500).json({ error: "An unknown error occurred" }); // Fallback for unknown errors
    }
  }
};

/**
 * Add a new medicine to the database
 * @route POST /add
 * @access Admin
 * @param req - Express request object containing medicine data
 * @param res - Express response object
 */
export const addMedicine = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {
      name,
      brand,
      description,
      price,
      stock,
      expirationDate,
      mainCategory,
      subCategory,
      generalUsage,
    } = req.body;

    // Ensure all required fields are provided
    if (
      !name ||
      !brand ||
      !description ||
      !price ||
      !mainCategory ||
      !subCategory ||
      !generalUsage ||
      !stock ||
      !expirationDate
    ) {
      console.log(req.body);

      res.status(400).json({ error: "All fields are required." }); // Bad request if fields are missing
      return;
    }

    // Create a map to store stock details
    const stockDetails = new Map();
    stockDetails.set(expirationDate, stock);

    const category = {
      mainCategory,
      subCategory: {
        generalName: subCategory,
        specificConditions: generalUsage,
      },
    };

    // Add the new medicine via the service
    const newMedicine = await addNewMedicine({
      name,
      brand,
      description,
      price,
      category,
      stockDetails,
    });

    res.status(201).json(newMedicine); // Respond with the newly created medicine
  } catch (err: unknown) {
    // Handle potential errors
    if (err instanceof Error) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(500).json({ error: "An unknown error occurred" });
    }
  }
};

/**
 * Delete a medicine by its ID
 * @route DELETE /delete/:id
 * @access Admin
 * @param req - Express request object with medicine ID in params
 * @param res - Express response object
 */
export const deleteMedicine = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params; // Extract medicine ID from request parameters

    // Call the service to delete the medicine
    const deletedMedicine = await deleteMedicineById(id);

    if (!deletedMedicine) {
      res.status(404).json({ error: "Medicine not found" }); // Medicine not found
      return;
    }

    res.status(200).json({ message: "Medicine deleted successfully" }); // Successful deletion response
  } catch (err: unknown) {
    // Handle errors
    if (err instanceof Error) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(500).json({ error: "An unknown error occurred" });
    }
  }
};

/**
 * Update a medicine's details by its ID
 * @route PUT /update/:id
 * @access Admin
 * @param req - Express request object containing updated data
 * @param res - Express response object
 */
export const updateMedicine = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params; // Extract medicine ID from request parameters
    const updatedData = req.body; // Extract updated medicine data from request body

    // Call the service to update the medicine
    const updatedMedicine = await updateMedicineById(id, updatedData);

    if (!updatedMedicine) {
      res.status(404).json({ error: "Medicine not found" }); // Medicine not found
      return;
    }

    res
      .status(200)
      .json({ message: "Medicine updated successfully", updatedMedicine }); // Successful update response
  } catch (err: unknown) {
    // Handle potential errors
    if (err instanceof Error) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(500).json({ error: "An unknown error occurred" });
    }
  }
};
