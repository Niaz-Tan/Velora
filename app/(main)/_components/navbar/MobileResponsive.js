"use client";

import { Bell, ShoppingCart, User } from "lucide-react";
import Link from "next/link";

export default function MobileResponsive() {
  return (
    <div className="flex items-center gap-4 md:hidden">
      {/* WISHLIST */}
      <Link href="/wishlist">
        <Bell
          size={22}
          className="text-[#6F6A63] transition hover:text-[#7A6A53]"
        />
      </Link>

      {/* CART */}
      <Link href="/cart" className="relative">
        <ShoppingCart
          size={22}
          className="text-[#6F6A63] transition hover:text-[#7A6A53]"
        />

        {/* CART BADGE */}
        <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#7A6A53] text-[10px] text-white">
          2
        </span>
      </Link>

      {/* PROFILE */}
      <Link href="/profile">
        <User
          size={22}
          className="text-[#6F6A63] transition hover:text-[#7A6A53]"
        />
      </Link>
    </div>
  );
}
