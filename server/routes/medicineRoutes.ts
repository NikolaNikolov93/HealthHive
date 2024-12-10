// routes/medicineRoutes.ts
import express, { Request, Response } from "express";
import MedicineModel from "../models/Medicines"; // Import the Medicine model

const router = express.Router();

/**
 * @route GET /getMeds
 * @description Fetch all medicines from the database
 * @access Public
 */
router.get("/", (req: Request, res: Response) => {
  MedicineModel.find()
    .then((meds) => res.json(meds)) // Send the medicines as a JSON response
    .catch((err: unknown) => {
      if (err instanceof Error) {
        res.status(500).json({ error: err.message }); // Access err.message safely
      } else {
        res.status(500).json({ error: "An unknown error occurred" });
      }
    });
});

export default router;
