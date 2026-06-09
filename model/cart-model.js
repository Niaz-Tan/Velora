import mongoose from "mongoose";

const CartItemSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },

    quantity: {
      type: Number,
      required: true,
      min: 1,
    },

    color: {
      type: String,
      default: null,
    },
  },
  { _id: false },
);

const CartSchema = new mongoose.Schema(
  {
    customer: {
      type: String,
      ref: "Customer",
      required: true,
      unique: true,
    },

    items: {
      type: [CartItemSchema],
      default: [],
    },
  },
  {
    timestamps: true,
  },
);

export const Cart = mongoose.models.Cart || mongoose.model("Cart", CartSchema);
