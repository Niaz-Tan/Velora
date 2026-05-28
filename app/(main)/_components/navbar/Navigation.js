"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
    { label: "Categories", href: "/categories" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="hidden lg:block">
      <ul className="flex items-center gap-6 text-[14px] font-medium text-[#6F6A63]">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className="relative px-2 py-1 transition-colors hover:text-[#2B2B2B]"
              >
                {item.label}

                {/* underline */}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 transition-all duration-300 ${
                    isActive
                      ? "w-full bg-[#7A6A53]"
                      : "w-0 bg-[#7A6A53] group-hover:w-full"
                  }`}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
