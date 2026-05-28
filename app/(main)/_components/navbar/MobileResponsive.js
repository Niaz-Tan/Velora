"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { Bell, Heart, Menu, ShoppingCart, User } from "lucide-react";
import Link from "next/link";

export default function MobileResponsive() {
  return (
    <Sheet>
      {/* TRIGGER BUTTON */}
      <SheetTrigger asChild>
        <button className="md:hidden p-2 rounded-lg hover:bg-[#F7F2EA] transition">
          <Menu size={26} />
        </button>
      </SheetTrigger>

      {/* CONTENT (TOP TO BOTTOM STYLE) */}
      <SheetContent side="top" className="h-screen w-full bg-white p-6">
        {/* CLOSE ICON handled by shadcn automatically */}

        {/* NAV */}
        <div className="mt-10 space-y-4 text-lg font-medium">
          <Link href="/">Home</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/categories">Categories</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* ICONS */}
        <div className="mt-10 flex items-center justify-between border-t pt-6">
          <Heart />
          <ShoppingCart />
          <Bell />
          <User />
        </div>

        {/* CTA */}
        <button className="mt-10 w-full rounded-xl bg-black py-3 text-white font-medium">
          Login
        </button>
      </SheetContent>
    </Sheet>
  );
}
