import MedicineModel, { IMedicine } from "../models/Medicines";

/**
 * Fetch medicines by category from the database.
 * @param category The category to filter medicines by.
 * @returns A promise that resolves to an array of medicines belonging to the specified category.
 */
export const getMedicinesByCategory = async (
  mainCategory?: string,
  subCategory?: string,
  specificConditions?: string
): Promise<IMedicine[]> => {
  if (specificConditions) {
    return await MedicineModel.find({
      "category.subCategory.specificConditions": specificConditions,
    }).exec();
  } else if (subCategory) {
    return await MedicineModel.find({
      "category.subCategory.generalName": subCategory,
    }).exec();
  } else {
    return await MedicineModel.find({
      "category.mainCategory": mainCategory,
    }).exec();
  }
};

/**
 * Fetch all medicines from the database.
 * @returns A promise that resolves to an array of medicines.
 */
export const getAllMedicines = async (): Promise<IMedicine[]> => {
  // Use the Mongoose `find` method to fetch all medicines from the database
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
  // Use the Mongoose `findById` method to fetch a specific medicine by its ID
  return await MedicineModel.findById(id).exec();
};

/**
 * Add a new medicine to the database or update the stock details if the medicine already exists.
 * @param medicineData - The form data provided by the admin.
 * @returns A promise that resolves to the saved or updated medicine document.
 */
export const addNewMedicine = async (medicineData: {
  name: string; // Name of the medicine
  brand: string; // Brand of the medicine
  description: string; // Description of the medicine
  price: number; // Price of the medicine
  category: object; // Category of the medicine
  stockDetails: Map<string, number>; // Stock details with expiration dates as keys and quantities as values
  img: string;
}): Promise<IMedicine> => {
  // Check if a medicine with the same name already exists in the database
  const existingMedicine = await MedicineModel.findOne({
    name: { $regex: new RegExp(`^${medicineData.name}$`, "i") },
  }).exec();

  if (existingMedicine) {
    // If the medicine exists, update its stock details
    const stockData = Array.from(medicineData.stockDetails.entries());

    // Iterate through the new stock details
    stockData.map(([expireDate, stock]) => {
      // Check if the expiration date already exists in the current stock details
      const currentStock = existingMedicine.stockDetails.get(expireDate);
      if (currentStock !== undefined) {
        // If expiration date exists, add the new stock to the existing stock
        existingMedicine.stockDetails.set(expireDate, currentStock + stock);
      } else {
        // If expiration date does not exist, create a new entry with the provided stock
        existingMedicine.stockDetails.set(expireDate, stock);
      }
    });

    // Save the updated medicine and return it
    return await existingMedicine.save();
  } else {
    // If the medicine does not exist, create a new medicine document
    const newMedicine = new MedicineModel(medicineData);

    // Save the new medicine to the database and return it
    return await newMedicine.save();
  }
};
export const deleteMedicineById = (id: string) =>
  MedicineModel.findOneAndDelete({ _id: id });

export const updateMedicineById = async (
  id: string,
  updatedData: Record<string, any>
) => {
  try {
    const medicine = await MedicineModel.findByIdAndUpdate(id, updatedData, {
      new: true, // Return the updated document
      runValidators: true, // Ensure the updated data is validated
    });

    return medicine;
  } catch (err) {
    throw new Error("Failed to update the medicine");
  }
};
