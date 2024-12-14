import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  _id: mongoose.Types.ObjectId; // Custom string IDs (e.g., "admin1", "customer2")
  name: string;
  email: string;
  password: string;
  role: "admin" | "customer";
  address?: {
    phone: string;
  };
  orderHistory?: Array<any>;
  wishlist?: Array<any>;
  permissions?: Array<string>; // Only for admin
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true, enum: ["admin", "customer"] },
    address: {
      phone: { type: String },
    },
    orderHistory: [{ type: Schema.Types.Mixed }],
    wishlist: [{ type: Schema.Types.Mixed }],
    permissions: [{ type: String }], // Only for admin
  },
  { timestamps: true } // Automatically manage `createdAt` and `updatedAt`
);

export const UserModel = mongoose.model<IUser>("User", UserSchema);
