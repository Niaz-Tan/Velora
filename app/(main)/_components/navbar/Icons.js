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
      {/* CART */}
      <button
        onClick={() => router.push("/cart")}
        className="p-2 rounded-full hover:bg-[#F7F2EA] relative transition"
      >
        <ShoppingCart size={19} />

        <span className="absolute -top-1 -right-1 text-[10px] bg-black text-white w-4 h-4 flex items-center justify-center rounded-full">
          2
        </span>
      </button>

      {/* NOTIFICATIONS */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="p-2 rounded-full hover:bg-[#F7F2EA] relative transition">
            <Bell size={19} />

            <span className="absolute -top-1 -right-1 text-[10px] bg-red-500 text-white w-4 h-4 flex items-center justify-center rounded-full">
              3
            </span>
          </button>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          align="end"
          className="w-80 p-0 rounded-2xl overflow-hidden bg-white"
        >
          {/* HEADER */}
          <div className="px-4 py-3 border-b bg-[#FFFDF8]">
            <h3 className="font-semibold text-[#2B2B2B]">Notifications</h3>

            <p className="text-xs text-[#6F6A63]">
              You have 3 unread notifications
            </p>
          </div>

          {/* LIST */}
          <div className="max-h-[350px] overflow-y-auto">
            <DropdownMenuItem className="cursor-pointer p-4 flex flex-col items-start gap-1">
              <span className="font-medium text-[#2B2B2B]">
                Order Shipped 🚚
              </span>

              <span className="text-xs text-[#6F6A63]">
                Your Lavender Keychain is on the way.
              </span>
            </DropdownMenuItem>

            <DropdownMenuItem className="cursor-pointer p-4 flex flex-col items-start gap-1">
              <span className="font-medium text-[#2B2B2B]">
                New Collection ✨
              </span>

              <span className="text-xs text-[#6F6A63]">
                Check out our latest crochet arrivals.
              </span>
            </DropdownMenuItem>

            <DropdownMenuItem className="cursor-pointer p-4 flex flex-col items-start gap-1">
              <span className="font-medium text-[#2B2B2B]">
                Welcome to Velora 💖
              </span>

              <span className="text-xs text-[#6F6A63]">
                Thanks for creating your account.
              </span>
            </DropdownMenuItem>
          </div>

          <DropdownMenuSeparator />

          {/* FOOTER */}
          <div className="p-3">
            <button
              onClick={() => router.push("/notifications")}
              className="w-full rounded-xl bg-[#2B2B2B] py-2 text-sm text-white hover:bg-black transition"
            >
              View All Notifications
            </button>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>

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

              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full" />
            </div>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            align="end"
            className="w-56 p-1 rounded-xl shadow-lg border bg-white"
          >
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
