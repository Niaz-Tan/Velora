"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { House, LayoutGrid, Phone, ShoppingBag } from "lucide-react";

export default function MobileNavigation() {
  const pathname = usePathname();

  const navItems = [
    {
      name: "Home",
      href: "/",
      icon: House,
    },
    {
      name: "Shop",
      href: "/shop",
      icon: ShoppingBag,
    },
    {
      name: "Categories",
      href: "/categories",
      icon: LayoutGrid,
    },
    {
      name: "Contact",
      href: "/contact",
      icon: Phone,
    },
  ];

  return (
    <nav className="fixed bottom-0 left-0 z-50 w-full border-t border-[#E8DFD1] bg-[#FCF7EE]/95 backdrop-blur md:hidden">
      <div className="grid h-16 grid-cols-4">
        {navItems.map((item) => {
          const Icon = item.icon;

          const isActive = pathname === item.href;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex flex-col items-center justify-center transition ${
                isActive ? "text-[#7A6A53]" : "text-[#6F6A63]"
              }`}
            >
              <Icon size={22} />

              <span className="mt-1 text-xs font-medium">{item.name}</span>

              {/* ACTIVE INDICATOR */}
              {isActive && (
                <div className="mt-1 h-1 w-6 rounded-full bg-[#7A6A53]" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
