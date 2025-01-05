// routes/medicineRoutes.ts
import express, { Request, Response } from "express";
import { addNewMedicine, getAllMedicines } from "../services/medicineServices";
import authenticateAdmin from "../middlewares/authAdmin";

const router = express.Router();

/**
 * @route GET /getMeds
 * @description Fetch all medicines from the database
 * @access Public
 */
router.get(
  "/getAll",
  authenticateAdmin,
  async (req: Request, res: Response): Promise<void> => {
    try {
      const meds = await getAllMedicines();
      res.json(meds);
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
 * @route POST /add
 * @description Add a new medicine to the database
 * @access Admin
 */
router.post(
  "/add",
  authenticateAdmin,
  async (req: Request, res: Response): Promise<void> => {
    try {
      const { name, brand, description, price, category, stockDetails } =
        req.body;

      // Ensure all required fields are provided
      if (
        !name ||
        !brand ||
        !description ||
        !price ||
        !category ||
        !stockDetails
      ) {
        res.status(400).json({ error: "All fields are required." });
        return;
      }

      // Add the new medicine
      const newMedicine = await addNewMedicine({
        name,
        brand,
        description,
        price,
        category,
        stockDetails,
      });

      res.status(201).json(newMedicine);
    } catch (err: unknown) {
      if (err instanceof Error) {
        res.status(500).json({ error: err.message });
      } else {
        res.status(500).json({ error: "An unknown error occurred" });
      }
    }
  }
);

export default router;
