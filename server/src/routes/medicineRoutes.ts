// routes/medicineRoutes.ts
import express from "express";

import authenticateAdmin from "../middlewares/authAdmin";
import {
  addMedicine,
  deleteMedicine,
  fetchAllMedicines,
  updateMedicine,
} from "../controllers/medicineController";

const router = express.Router();

/**
 * @route GET /getAll
 * @description Fetch all medicines from the database
 * @access Admin
 * @middleware authenticateAdmin - Ensures only admins can access this route
 */
router.get("/getAll", authenticateAdmin, fetchAllMedicines);

/**
 * @route POST /add
 * @description Add a new medicine to the database
 * @access Admin
 * @middleware authenticateAdmin - Ensures only admins can access this route
 */
router.post("/add", authenticateAdmin, addMedicine);

/**
 * @route DELETE /delete/:id
 * @description Delete a medicine by ID
 * @access Admin
 * @middleware authenticateAdmin - Ensures only admins can access this route
 * @param {string} id - The unique identifier of the medicine to be deleted
 */
router.delete("/delete/:id", authenticateAdmin, deleteMedicine);

/**
 * @route PUT /update/:id
 * @description Update a medicine's details by ID
 * @access Admin
 * @middleware authenticateAdmin - Ensures only admins can access this route
 * @param {string} id - The unique identifier of the medicine to be updated
 */
router.put("/update/:id", authenticateAdmin, updateMedicine);

export default router;
