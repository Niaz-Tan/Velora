import Image from "next/image";
import Link from "next/link";
import ColorPicker from "../app/(main)/_components/homePage/ColorPicker";

export default function ProductCard({ product, avarageSell }) {
  if (!product) return null;

  const isStock = product.type === "stock";
  const isBestSeller = product.totalSold >= avarageSell;

  const stock = product.stock ?? 0;
  const isLowStock = isStock && stock <= 5;

  return (
    <div className="group flex h-full flex-col rounded-2xl border border-[#E8DFD1] bg-[#FFFDF8] p-3 sm:p-4 transition hover:shadow-lg">
      {/* IMAGE */}
      <div className="relative overflow-hidden rounded-xl bg-[#F5EFE4]">
        <div className="relative aspect-4/4.5 w-full">
          <Link href={`/products/${product.slug}`}>
            <Image
              src={product.images?.[0] || "/placeholder-product.jpg"}
              alt={product.name}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover transition duration-700 group-hover:scale-105"
            />
          </Link>
        </div>

        {/* BADGES */}
        <div className="absolute left-2 right-2 top-2 flex justify-between gap-2 sm:left-3 sm:right-3 sm:top-3">
          {/* LEFT */}
          <div className="flex flex-col items-start gap-1">
            {product.isNew && (
              <span className="rounded-full bg-green-500 px-2 py-0.5 text-[9px] sm:px-3 sm:py-1 sm:text-[10px] font-semibold text-white">
                New
              </span>
            )}

            {isBestSeller && (
              <span className="rounded-full bg-pink-500 px-2 py-0.5 text-[9px] sm:px-3 sm:py-1 sm:text-[10px] font-semibold text-white">
                Best Seller
              </span>
            )}
          </div>

          {/* RIGHT */}
          <div className="flex flex-col items-end gap-1">
            {isStock && (
              <>
                <span className="rounded-full bg-blue-600 px-2 py-0.5 text-[9px] sm:px-3 sm:py-1 sm:text-[10px] font-semibold text-white">
                  In Stock
                </span>

                <span
                  className={`rounded-full px-2 py-0.5 text-[9px] sm:px-3 sm:py-1 sm:text-[10px] font-semibold shadow-sm ${
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
              <span className="rounded-full bg-amber-500 px-2 py-0.5 text-[9px] sm:px-3 sm:py-1 sm:text-[10px] font-semibold text-white">
                Made To Order
              </span>
            )}
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="mt-3 flex flex-1 flex-col space-y-2">
        {/* NAME */}
        <h3 className="line-clamp-1 text-sm sm:text-base font-semibold text-[#2B2B2B]">
          {product.name}
        </h3>

        {/* DESCRIPTION */}
        <p className="hidden md:flex line-clamp-2 text-[11px] sm:text-xs text-[#6F6A63]">
          {product.description}
        </p>

        {/* RATING + SOLD */}
        <div className="flex items-center justify-between text-[11px] sm:text-xs text-[#6F6A63]">
          <div className="flex items-center gap-1">
            <span className="font-medium text-[#2B2B2B]">
              ⭐ {product.rating || 0}
            </span>
            <span>({product.ratingCount || 0})</span>
          </div>

          <span>{product.totalSold || 0} sold</span>
        </div>

        {/* PRICE */}
        <span className="text-base sm:text-lg font-bold text-[#7A6A53]">
          ৳{product.price}
        </span>

        {/* COLORS */}
        {product.colors?.length > 0 && (
          <div className="pt-1 hidden md:flex flex-col">
            <ColorPicker colors={product.colors} />
          </div>
        )}

        {/* ACTIONS */}
        <div className="mt-auto flex gap-2 pt-2">
          <button className="flex-1 rounded-full bg-[#2B2B2B] py-2 text-xs sm:text-sm text-white transition hover:bg-[#1F1F1F]">
            Add to Cart
          </button>

          <button className="rounded-full border border-[#E8DFD1] bg-white px-3 sm:px-4 py-2 text-xs sm:text-sm text-[#2B2B2B] transition hover:bg-[#F5EFE4]">
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}
