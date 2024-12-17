// routes/medicineRoutes.ts
import express, { Request, Response } from "express";
import { getAllMedicines } from "../services/medicineServices";
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

export default router;
