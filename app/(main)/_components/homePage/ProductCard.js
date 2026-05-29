import Image from "next/image";
import Link from "next/link";
import ColorPicker from "./ColorPicker";

function ProductCard({ product }) {
  return (
    <div className="group rounded-3xl border border-[#E8DFD1] bg-[#FFFDF8] p-4 transition hover:shadow-md">
      {/* IMAGE */}
      <div className="relative overflow-hidden rounded-2xl bg-[#F5EFE4]">
        <div className="relative aspect-4/4.5 overflow-hidden">
          <Link href={`/product/${product.id}`}>
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover transition duration-700 group-hover:scale-105"
            />
          </Link>
        </div>

        {/* NEW BADGE */}
        {product.isNew && (
          <span className="absolute left-4 top-4 rounded-full bg-green-500 px-3 py-1 text-xs font-semibold ">
            New
          </span>
        )}
      </div>

      {/* CONTENT */}
      <div className="px-1 pt-5 pb-2">
        {/* NAME */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-[#2B2B2B]">
              {product.name}
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-[#6F6A63]">
              {product.description}
            </p>
          </div>

          <span className="whitespace-nowrap text-base font-bold text-[#7A6A53]">
            {product.price}
          </span>
        </div>

        {/* COLORS */}
        <ColorPicker product={product}/>
        {/* ACTION BUTTONS */}
        <div className="flex gap-3 mt-5">
          <button className="flex-1 rounded-full bg-[#2B2B2B] py-3 text-sm font-medium text-white transition hover:bg-[#1F1F1F] cursor-pointer">
            Add to Cart
          </button>

          <button className="rounded-full border border-[#E8DFD1] bg-white px-5 py-3 text-sm font-medium text-[#2B2B2B] transition hover:bg-[#F5EFE4] cursor-pointer">
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
