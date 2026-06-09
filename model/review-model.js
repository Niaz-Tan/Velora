import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema(
  {
    customerId: {
      type: String,
      ref: "Customer",
      required: true,
    },

    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },

    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },

    comment: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

export const Review =
  mongoose.models.Review || mongoose.model("Review", ReviewSchema);
