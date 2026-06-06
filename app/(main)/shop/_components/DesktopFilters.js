"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function DesktopFilters({ categories }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentCategory = searchParams.get("category");

  const handleChange = (value) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value === currentCategory) {
      params.delete("category");
    } else {
      params.set("category", value);
    }

    router.push(`/shop?${params.toString()}`);
  };

  return (
    <aside className="hidden lg:block rounded-3xl border border-[#E8DFD1] bg-white p-6 h-fit sticky top-24">
      <h3 className="mb-6 text-lg font-semibold text-[#2B2B2B]">Filters</h3>

      <div>
        <h4 className="mb-3 font-medium">Categories</h4>

        <div className="space-y-3">
          {categories.map((cat) => (
            <label
              key={cat._id}
              className="flex items-center gap-3 text-sm text-[#6F6A63]"
            >
              <input
                type="checkbox"
                checked={currentCategory === cat.name}
                onChange={() => handleChange(cat.name)}
              />
              {cat.name}
            </label>
          ))}
        </div>
      </div>
    </aside>
  );
}
