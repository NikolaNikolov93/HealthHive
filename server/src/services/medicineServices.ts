import MedicineModel, { IMedicine } from "../models/Medicines";

/**
 * Fetch all medicines from the database.
 * @returns A promise that resolves to an array of medicines.
 */
export const getAllMedicines = async (): Promise<IMedicine[]> => {
  return await MedicineModel.find().exec();
};

/**
 * Fetch a single medicine by its ID.
 * @param id - The ID of the medicine to fetch.
 * @returns A promise that resolves to the medicine document or null if not found.
 */
export const getMedicineById = async (
  id: string
): Promise<IMedicine | null> => {
  return await MedicineModel.findById(id).exec();
};
