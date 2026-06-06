export default function ShopSidebar({ categories }) {
  return (
    <aside className="sticky top-24 h-fit rounded-3xl border border-[#E8DFD1] bg-white p-6">
      <h3 className="text-lg font-semibold text-[#2B2B2B]">Filters</h3>

      {/* CATEGORIES */}
      <div className="mt-6">
        <h4 className="mb-3 text-sm font-medium text-[#2B2B2B]">Categories</h4>

        <div className="space-y-3">
          {categories.map((category) => (
            <label
              key={category._id}
              className="flex items-center gap-3 text-sm text-[#6F6A63]"
            >
              <input type="checkbox" className="accent-[#7A6A53]" />
              {category.name}
            </label>
          ))}
        </div>
      </div>

      {/* STOCK */}
      <div className="mt-8 border-t border-[#E8DFD1] pt-6">
        <h4 className="mb-3 text-sm font-medium text-[#2B2B2B]">
          Availability
        </h4>

        <label className="flex items-center gap-3 text-sm text-[#6F6A63]">
          <input type="checkbox" className="accent-[#7A6A53]" />
          In Stock
        </label>

        <label className="mt-3 flex items-center gap-3 text-sm text-[#6F6A63]">
          <input type="checkbox" className="accent-[#7A6A53]" />
          Made To Order
        </label>
      </div>

      {/* FEATURED */}
      <div className="mt-8 border-t border-[#E8DFD1] pt-6">
        <label className="flex items-center gap-3 text-sm text-[#6F6A63]">
          <input type="checkbox" className="accent-[#7A6A53]" />
          Featured Only
        </label>
      </div>
    </aside>
  );
}
