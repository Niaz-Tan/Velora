import { Product } from "@/model/product-model";
import { connectDB } from "@/service/mongo";

export const getProducts = async () => {
  try {
    await connectDB();

    const products = await Product.find().lean();

    return products;
  } catch (error) {
    console.error("Failed to get products:", error);
    throw error;
  }
};
