"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Filter } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

export default function MobileFilters({ categories }) {
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
    <Sheet>
      <SheetTrigger asChild>
        <button className="flex items-center gap-2 rounded-xl border border-[#E8DFD1] bg-white px-4 py-2 text-sm font-medium shadow-sm">
          <Filter size={18} />
          Filters
        </button>
      </SheetTrigger>

      <SheetContent side="left" className="w-[85vw] max-w-sm bg-[#FFFDF8] p-0">
        <div className="border-b px-5 py-4">
          <SheetHeader>
            <SheetTitle>Filters</SheetTitle>
          </SheetHeader>
        </div>

        <div className="px-5 py-4 space-y-3">
          {categories.map((cat) => (
            <label key={cat._id} className="flex items-center gap-3 text-sm">
              <input
                type="checkbox"
                checked={currentCategory === cat.name}
                onChange={() => handleChange(cat.name)}
              />
              {cat.name}
            </label>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
