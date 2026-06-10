"use client";

import { authClient } from "@/lib/auth-client";
import { Bell, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Icons() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    async function load() {
      try {
        const session = await authClient.getSession();
        setUser(session?.data?.user || null);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  async function handleLogout() {
    await authClient.signOut();
    setUser(null);
    router.push("/");
  }

  return (
    <div className="hidden md:flex items-center gap-2">
      {/* Cart */}
      <button className="p-2 rounded-full hover:bg-[#F7F2EA] relative">
        <ShoppingCart size={19} />
        <span className="absolute -top-1 -right-1 text-[10px] bg-black text-white w-4 h-4 flex items-center justify-center rounded-full">
          2
        </span>
      </button>

      {/* Bell */}
      <button className="p-2 rounded-full hover:bg-[#F7F2EA]">
        <Bell size={19} />
      </button>

      {/* PROFILE */}
      {loading ? (
        <div className="w-9 h-9 flex items-center justify-center">
          <div className="w-5 h-5 border-2 border-gray-200 border-t-black rounded-full animate-spin" />
        </div>
      ) : user ? (
        <DropdownMenu>
          <DropdownMenuTrigger className="outline-none group">
            <div className="relative">
              <Avatar className="w-8 h-8 ring-2 ring-transparent group-hover:ring-black/10 transition">
                <AvatarImage
                  src={
                    user.image ||
                    `https://api.dicebear.com/9.x/identicon/svg?seed=${user.name}`
                  }
                />
                <AvatarFallback className="bg-gray-100 text-sm font-medium">
                  {user.name?.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>

              {/* small online dot */}
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full" />
            </div>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            align="end"
            className="w-56 p-1 rounded-xl shadow-lg border bg-white"
          >
            {/* user header */}
            <div className="px-3 py-2">
              <p className="text-sm font-semibold leading-none">{user.name}</p>
              <p className="text-xs text-gray-500 truncate">{user.email}</p>
            </div>

            <DropdownMenuSeparator />

            <DropdownMenuItem
              onClick={() => router.push("/profile")}
              className="cursor-pointer rounded-md px-2 py-2 hover:bg-gray-100"
            >
              👤 Profile
            </DropdownMenuItem>

            <DropdownMenuItem
              onClick={() => router.push("/orders")}
              className="cursor-pointer rounded-md px-2 py-2 hover:bg-gray-100"
            >
              📦 Orders
            </DropdownMenuItem>

            <DropdownMenuItem
              onClick={() => router.push("/cart")}
              className="cursor-pointer rounded-md px-2 py-2 hover:bg-gray-100"
            >
              🛒 Cart
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            <DropdownMenuItem
              onClick={handleLogout}
              className="cursor-pointer rounded-md px-2 py-2 text-red-500 hover:bg-red-50"
            >
              🚪 Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <div className="flex items-center gap-3 text-sm">
          <a
            href="/signin"
            className="px-3 py-1 rounded-md hover:bg-gray-100 transition"
          >
            Sign in
          </a>

          <span className="text-gray-300">|</span>

          <a
            href="/signup"
            className="px-3 py-1 rounded-md bg-black text-white hover:bg-black/80 transition"
          >
            Sign up
          </a>
        </div>
      )}
    </div>
  );
}
