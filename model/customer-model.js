import mongoose from "mongoose";

const CustomerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      lowercase: true,
      unique: true,
      sparse: true,
    },

    phone: {
      type: String,
      default: "",
    },

    image: {
      type: String,
      default: "",
    },

    role: {
      type: String,
      enum: ["customer", "admin", "seller", "support", "super_admin"],
      default: "customer",
    },
  },
  {
    timestamps: true,
  },
);

export const Customer =
  mongoose.models.Customer || mongoose.model("Customer", CustomerSchema);
