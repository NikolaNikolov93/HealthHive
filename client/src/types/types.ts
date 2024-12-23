export type MedType = {
  _id: string;
  name: string;
  brand: string;
  description: string;
  price: number;
  stock: number;
  expirationDate: string;
  category: string;
};

export type UserType = {
  _id: string; // Custom string IDs (e.g., "admin1", "customer2")
  name: string;
  email: string;
  password: string;
  role: "admin" | "customer";
  address?: {
    phone: string;
  };
  orderHistory?: any[]; // Replace 'any' with a specific type if available
  wishlist?: any[]; // Replace 'any' with a specific type if available
  permissions?: string[]; // Only for admin
  createdAt: Date;
  updatedAt: Date;
};

export type ErrorsType = {
  message: string;
  isFixed: boolean;
};
