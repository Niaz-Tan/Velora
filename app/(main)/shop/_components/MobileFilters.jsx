"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Filter } from "lucide-react";

export default function MobileFilters({ categories }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="flex items-center gap-2 rounded-xl border border-[#E8DFD1] bg-white px-4 py-2 text-sm font-medium shadow-sm transition hover:shadow-md">
          <Filter size={18} />
          Filters
        </button>
      </SheetTrigger>

      <SheetContent side="left" className="w-[85vw] max-w-sm bg-[#FFFDF8] p-0">
        {/* HEADER */}
        <div className="sticky top-0 z-10 border-b border-[#E8DFD1] bg-[#FFFDF8]/90 px-5 py-4 backdrop-blur">
          <SheetHeader className="p-0">
            <SheetTitle className="text-lg font-semibold text-[#2B2B2B]">
              Filters
            </SheetTitle>
          </SheetHeader>
        </div>

        {/* CONTENT */}
        <div className="h-[calc(100vh-140px)] overflow-y-auto px-5 py-4">
          {/* CATEGORY SECTION */}
          <div className="rounded-2xl border border-[#E8DFD1] bg-white p-4 shadow-sm">
            <h4 className="mb-3 text-sm font-semibold text-[#2B2B2B]">
              Categories
            </h4>

            <div className="space-y-3">
              {categories.map((category) => (
                <label
                  key={category._id}
                  className="flex cursor-pointer items-center gap-3 rounded-lg px-2 py-2 text-sm text-[#6F6A63] transition hover:bg-[#F5EFE4]"
                >
                  <input type="checkbox" className="h-4 w-4 accent-[#2B2B2B]" />
                  <span className="font-medium">{category.name}</span>
                </label>
              ))}
            </div>
          </div>

          {/* You can add more filter blocks here later */}
          <div className="mt-4 rounded-2xl border border-dashed border-[#E8DFD1] p-4 text-center text-xs text-[#6F6A63]">
            More category coming soon ✨
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
