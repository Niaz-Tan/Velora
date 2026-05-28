"use client";

import { Bell, Heart, Menu, Search, ShoppingCart, User, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#E8DFD1] ">
      <div className="flex items-center justify-between px-4 md:px-8">
        {/* LEFT */}
        <div className="flex items-center gap-10">
          <Link href="/">
            <Image
              src="/VeloraWord.png"
              alt="Velora logo"
              width={140}
              height={50}
              priority
              className=""
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-8 text-[15px] font-medium text-[#2B2B2B]">
              <li>
                <Link href="/" className="transition hover:text-black/60">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/shop" className="transition hover:text-black/60">
                  Shop
                </Link>
              </li>

              <li>
                <Link
                  href="/categories"
                  className="transition hover:text-black/60"
                >
                  Categories
                </Link>
              </li>

              <li>
                <Link
                  href="/new-arrivals"
                  className="transition hover:text-black/60"
                >
                  New Arrivals
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="transition hover:text-black/60"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* RIGHT */}
        <div className="hidden md:flex items-center gap-3">
          {/* SEARCH */}
          <div className="flex items-center rounded-full border border-[#E8DFD1] px-4 py-2">
            <Search size={18} className="text-gray-500" />

            <input
              type="text"
              placeholder="Search products..."
              className="ml-2 w-44 bg-transparent text-sm outline-none placeholder:text-gray-400"
            />
          </div>

          {/* ICONS */}
          <button className="rounded-full p-2 transition hover:bg-[#F5EFE6]">
            <Heart size={20} />
          </button>

          <button className="rounded-full p-2 transition hover:bg-[#F5EFE6] relative">
            <ShoppingCart size={20} />

            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-black text-xs text-white">
              2
            </span>
          </button>

          <button className="rounded-full p-2 transition hover:bg-[#F5EFE6]">
            <Bell size={20} />
          </button>

          <button className="rounded-full border border-[#E8DFD1] p-2 transition hover:bg-[#F5EFE6]">
            <User size={20} />
          </button>

          {/* CTA */}
          <button className="rounded-full bg-black px-5 py-2 text-sm font-medium text-white transition hover:bg-black/90">
            Login
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button onClick={() => setOpen(!open)} className="lg:hidden">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="border-t border-[#E8DFD1] bg-white lg:hidden">
          <div className="space-y-5 px-4 py-5">
            {/* SEARCH */}
            <div className="flex items-center rounded-full border border-[#E8DFD1] px-4 py-3">
              <Search size={18} className="text-gray-500" />

              <input
                type="text"
                placeholder="Search products..."
                className="ml-2 w-full bg-transparent text-sm outline-none"
              />
            </div>

            {/* NAV LINKS */}
            <nav>
              <ul className="space-y-4 text-base font-medium text-[#2B2B2B]">
                <li>
                  <Link href="/">Home</Link>
                </li>

                <li>
                  <Link href="/shop">Shop</Link>
                </li>

                <li>
                  <Link href="/categories">Categories</Link>
                </li>

                <li>
                  <Link href="/new-arrivals">New Arrivals</Link>
                </li>

                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </nav>

            {/* MOBILE ACTIONS */}
            <div className="flex items-center gap-4 pt-2">
              <button className="rounded-full border border-[#E8DFD1] p-3">
                <Heart size={20} />
              </button>

              <button className="rounded-full border border-[#E8DFD1] p-3">
                <ShoppingCart size={20} />
              </button>

              <button className="rounded-full border border-[#E8DFD1] p-3">
                <Bell size={20} />
              </button>

              <button className="rounded-full border border-[#E8DFD1] p-3">
                <User size={20} />
              </button>
            </div>

            <button className="w-full rounded-full bg-black py-3 font-medium text-white">
              Login
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
