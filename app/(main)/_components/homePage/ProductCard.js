import Image from "next/image";
import Link from "next/link";
import ColorPicker from "./ColorPicker";

export default function ProductCard({ product }) {
  if (!product) return null;

  const isStock = product?.type === "stock";
  const stock = product?.stock ?? 0;
  const isLowStock = isStock && stock <= 5;

  return (
    <div className="group rounded-3xl border border-[#E8DFD1] bg-[#FFFDF8] p-4 transition hover:shadow-lg">
      {/* IMAGE */}
      <div className="relative overflow-hidden rounded-2xl bg-[#F5EFE4]">
        <div className="relative aspect-[4/4.5]">
          <Link href={`/product/${product.id}`}>
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover transition duration-700 group-hover:scale-105"
            />
          </Link>
        </div>

        {/* BADGES */}
        <div className="absolute left-3 top-3 right-3 flex justify-between gap-2">
          {/* LEFT */}
          <div className="flex flex-col gap-1 items-start">
            {(product.badges?.left || []).map((badge, i) => (
              <span
                key={i}
                className={`inline-flex w-fit items-center rounded-full px-3 py-1 text-[10px] font-semibold text-white shadow-sm
                  ${
                    badge.color === "green"
                      ? "bg-green-500"
                      : badge.color === "pink"
                        ? "bg-pink-500"
                        : badge.color === "orange"
                          ? "bg-orange-500"
                          : "bg-gray-500"
                  }
                `}
              >
                {badge.label}
              </span>
            ))}
          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-1 items-end">
            {(product.badges?.right || []).map((badge, i) => (
              <span
                key={i}
                className={`inline-flex w-fit items-center rounded-full px-3 py-1 text-[10px] font-semibold shadow-sm
                  ${
                    badge.color === "blue"
                      ? "bg-blue-600 text-white"
                      : badge.color === "amber"
                        ? "bg-amber-500 text-white"
                        : badge.color === "red"
                          ? "bg-red-500 text-white"
                          : "bg-white/90 text-[#2B2B2B] backdrop-blur"
                  }
                `}
              >
                {badge.label}
              </span>
            ))}

            {/* fallback stock */}
            {/* {isStock && (
              <span
                className={`inline-flex w-fit items-center rounded-full px-3 py-1 text-[10px] font-semibold shadow-sm
                  ${
                    isLowStock
                      ? "bg-red-500 text-white"
                      : "bg-white/90 text-[#2B2B2B] backdrop-blur"
                  }
                `}
              >
                {isLowStock ? `${stock} left` : `${stock} available`}
              </span>
            )} */}
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="mt-4 space-y-2">
        <h3 className="text-[16px] font-semibold text-[#2B2B2B] leading-snug">
          {product.name}
        </h3>

        <p className="text-xs text-[#6F6A63] line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between text-xs text-[#6F6A63]">
          <div className="flex items-center gap-1">
            <span className="text-[#2B2B2B] font-medium">
              ⭐ {product.rating}
            </span>
            <span>({product.ratingCount})</span>
          </div>

          <span>{product.totalSold} sold</span>
        </div>

        <div className="pt-1">
          <span className="text-lg font-bold text-[#7A6A53]">
            ${product.price}
          </span>
        </div>

        <div className="pt-1">
          <ColorPicker product={product} />
        </div>

        <div className="flex gap-3 pt-2">
          <button className="flex-1 rounded-full bg-[#2B2B2B] py-2.5 text-sm text-white transition hover:bg-[#1F1F1F]">
            Add to Cart
          </button>

          <button className="rounded-full border border-[#E8DFD1] bg-white px-4 py-2.5 text-sm text-[#2B2B2B] hover:bg-[#F5EFE4]">
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}
