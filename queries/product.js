import { Product } from "@/model/product-model";
import { connectDB } from "@/service/mongo";

/**
 * Get all products (optional limit)
 */
export const getProducts = async (limit) => {
  try {
    await connectDB();

    let query = Product.find().lean();

    if (limit) {
      query = query.limit(limit);
    }

    return await query;
  } catch (error) {
    console.error("Failed to get products:", error);
    throw error;
  }
};

/**
 * Get most sold products (optional limit)
 */
export const getMostSoldProduct = async (limit) => {
  try {
    await connectDB();

    let query = Product.find().lean().sort({ totalSold: -1 }); // highest sold first

    if (limit) {
      query = query.limit(limit);
    }

    return await query;
  } catch (error) {
    console.error("Failed to get most sold products:", error);
    throw error;
  }
};

export const getProductsByDate = async (sort = "new", limit) => {
  try {
    await connectDB();

    const sortOption =
      sort === "old"
        ? { createdAt: 1 } // oldest first
        : { createdAt: -1 }; // newest first (default)

    let query = Product.find().lean().sort(sortOption);

    if (limit) {
      query = query.limit(limit);
    }

    return await query;
  } catch (error) {
    console.error("Failed to get products by date:", error);
    throw error;
  }
};

