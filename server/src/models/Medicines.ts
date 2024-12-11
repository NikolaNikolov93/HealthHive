import mongoose, { Document, Schema } from "mongoose";

// Define the interface for the Medicine model
export interface IMedicine extends Document {
  _id: mongoose.Types.ObjectId;
  name: string;
  brand: string;
  description: string;
  price: number;
  stock: number;
  expirationDate: string;
  category: string;
}

// Define the schema for the Medicine model
const MedicineSchema: Schema = new Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  expirationDate: { type: String, required: true },
  category: { type: String, required: true },
});

// Create the Medicine model using the schema and interface
const MedicineModel = mongoose.model<IMedicine>("Medicine", MedicineSchema);

export default MedicineModel;
