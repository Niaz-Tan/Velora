"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { House, PenTool, Phone, ShoppingBag } from "lucide-react";

export default function MobileNavigation() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/", icon: House },
    { name: "Shop", href: "/shop", icon: ShoppingBag },
    { name: "Custom Order", href: "/custom", icon: PenTool },
    { name: "Contact", href: "/contact", icon: Phone },
  ];

  return (
    <nav className="fixed bottom-2 left-1/2 z-50 w-[96%] -translate-x-1/2 md:hidden">
      <div className="grid h-16 grid-cols-4 rounded-full border border-[#E8DFD1] bg-[#FCF7EE]/95 shadow-md backdrop-blur">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`relative flex flex-col items-center justify-center transition ${
                isActive ? "text-[#7A6A53]" : "text-[#6F6A63]"
              }`}
            >
              <Icon size={22} />

              <span className="mt-1 text-xs font-medium">{item.name}</span>

              {/* subtle active dot (keeps your original vibe) */}
              {isActive && (
                <div className="absolute bottom-2 h-1 w-1 rounded-full bg-[#7A6A53]" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
