import "@/model/category-model";
import "@/model/product-model";
import { Product } from "@/model/product-model";
import { connectDB } from "@/service/mongo";

import { Category } from "@/model/category-model";

export const getProducts = async (filters = {}) => {
  await connectDB();

  const { category, sort } = filters;

  let queryObj = {};

  if (category) {
    const catDoc = await Category.findOne({ slug: category });

    if (catDoc) {
      queryObj.categoryId = catDoc._id;
    }
  }

  let query = Product.find(queryObj).populate("categoryId");

  if (sort === "low") {
    query = query.sort({ price: 1 });
  } else if (sort === "high") {
    query = query.sort({ price: -1 });
  } else if (sort === "oldest") {
    query = query.sort({ createdAt: 1 });
  } else {
    query = query.sort({ createdAt: -1 });
  }

  return await query.lean();
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

    const sortOption = sort === "old" ? { createdAt: 1 } : { createdAt: -1 };

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
