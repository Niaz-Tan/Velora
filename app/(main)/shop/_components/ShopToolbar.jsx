export default function ShopToolbar({ total }) {
  return (
    <div className="flex flex-col gap-4 rounded-3xl border border-[#E8DFD1] bg-white p-4 md:flex-row md:items-center md:justify-between">
      {/* LEFT */}
      <p className="text-sm text-[#6F6A63]">
        Showing <span className="font-semibold text-[#2B2B2B]">{total}</span>{" "}
        products
      </p>

      {/* RIGHT */}
      <select className="w-full rounded-xl border border-[#E8DFD1] bg-[#FFFDF8] px-3 py-2 text-sm text-[#2B2B2B] outline-none md:w-[200px]">
        <option value="newest">Newest</option>
        <option value="best-selling">Best Selling</option>
        <option value="price-low">Price: Low → High</option>
        <option value="price-high">Price: High → Low</option>
        <option value="rating">Highest Rated</option>
      </select>
    </div>
  );
}
