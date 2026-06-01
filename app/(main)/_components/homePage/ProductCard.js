import Image from "next/image";
import Link from "next/link";
import ColorPicker from "./ColorPicker";

export default function ProductCard({ product }) {
  if (!product) return null;

  const isStock = product.type === "stock";
  const isBestSeller = product.totalSold >= 100;

  const stock = product.stock ?? 0;
  const isLowStock = isStock && stock <= 5;

  return (
    <div className="group rounded-3xl border border-[#E8DFD1] bg-[#FFFDF8] p-4 transition hover:shadow-lg">
      {/* IMAGE */}
      <div className="relative overflow-hidden rounded-2xl bg-[#F5EFE4]">
        <div className="relative aspect-[4/4.5]">
          <Link href={`/products/${product.slug}`}>
            <Image
              src={product.images?.[0] || "/placeholder-product.jpg"}
              alt={product.name}
              fill
              className="object-cover transition duration-700 group-hover:scale-105"
            />
          </Link>
        </div>

        {/* BADGES */}
        <div className="absolute left-3 top-3 right-3 flex justify-between gap-2">
          {/* LEFT SIDE */}
          <div className="flex flex-col items-start gap-1">
            {product.isNew && (
              <span className="inline-flex w-fit rounded-full bg-green-500 px-3 py-1 text-[10px] font-semibold text-white shadow-sm">
                New
              </span>
            )}

            {product.isFeatured && (
              <span className="inline-flex w-fit rounded-full bg-purple-500 px-3 py-1 text-[10px] font-semibold text-white shadow-sm">
                Featured
              </span>
            )}

            {isBestSeller && (
              <span className="inline-flex w-fit rounded-full bg-pink-500 px-3 py-1 text-[10px] font-semibold text-white shadow-sm">
                Best Seller
              </span>
            )}
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col items-end gap-1">
            {isStock && (
              <>
                <span className="inline-flex w-fit rounded-full bg-blue-600 px-3 py-1 text-[10px] font-semibold text-white shadow-sm">
                  In Stock
                </span>

                <span
                  className={`inline-flex w-fit rounded-full px-3 py-1 text-[10px] font-semibold shadow-sm ${
                    isLowStock
                      ? "bg-red-500 text-white"
                      : "bg-white/90 text-[#2B2B2B] backdrop-blur"
                  }`}
                >
                  {isLowStock ? `${stock} Left` : `${stock} Available`}
                </span>
              </>
            )}

            {product.type === "made-to-order" && (
              <span className="inline-flex w-fit rounded-full bg-amber-500 px-3 py-1 text-[10px] font-semibold text-white shadow-sm">
                Made To Order
              </span>
            )}
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="mt-4 space-y-2">
        {/* NAME */}
        <h3 className="line-clamp-1 text-[16px] font-semibold text-[#2B2B2B]">
          {product.name}
        </h3>

        {/* DESCRIPTION */}
        <p className="line-clamp-2 text-xs text-[#6F6A63]">
          {product.description}
        </p>

        {/* RATING + SOLD */}
        <div className="flex items-center justify-between text-xs text-[#6F6A63]">
          <div className="flex items-center gap-1">
            <span className="font-medium text-[#2B2B2B]">
              ⭐ {product.rating || 0}
            </span>

            <span>({product.ratingCount || 0})</span>
          </div>

          <span>{product.totalSold || 0} sold</span>
        </div>

        {/* PRICE */}
        <div>
          <span className="text-lg font-bold text-[#7A6A53]">
            ৳{product.price}
          </span>
        </div>

        {/* COLORS */}
        {product.colors?.length > 0 && <ColorPicker colors={product.colors} />}

        {/* ACTIONS */}
        <div className="flex gap-3 pt-2">
          <button className="flex-1 rounded-full bg-[#2B2B2B] py-2.5 text-sm text-white transition hover:bg-[#1F1F1F]">
            Add to Cart
          </button>

          <button className="rounded-full border border-[#E8DFD1] bg-white px-4 py-2.5 text-sm text-[#2B2B2B] transition hover:bg-[#F5EFE4]">
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}
