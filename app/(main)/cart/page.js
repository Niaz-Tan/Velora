"use client";

import { Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CartPage() {
  // dummy data (you will replace later with DB)
  const cartItems = [
    {
      id: 1,
      name: "Lavender Keychain",
      price: 120,
      quantity: 2,
      image: "https://picsum.photos/seed/lavender/200/200",
    },
    {
      id: 2,
      name: "Crochet Bunny Plush",
      price: 450,
      quantity: 1,
      image: "https://picsum.photos/seed/bunny/200/200",
    },
  ];

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  return (
    <div className="min-h-screen bg-[#FFFDF8] px-4 py-10">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-3">
        {/* LEFT - ITEMS */}
        <div className="lg:col-span-2 space-y-4">
          {/* HEADER */}
          <div className="rounded-3xl border border-[#E8DFD1] bg-white p-6">
            <h1 className="text-2xl font-bold text-[#2B2B2B]">Your Cart</h1>
            <p className="text-sm text-[#6F6A63]">
              Review your selected items before checkout
            </p>
          </div>

          {/* ITEMS */}
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 rounded-3xl border border-[#E8DFD1] bg-white p-4"
            >
              {/* IMAGE */}
              <div className="relative h-24 w-24 overflow-hidden rounded-2xl border border-[#F0E6D8]">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* INFO */}
              <div className="flex flex-1 flex-col justify-between">
                <div>
                  <h2 className="font-semibold text-[#2B2B2B]">{item.name}</h2>
                  <p className="text-sm text-[#6F6A63]">৳{item.price}</p>
                </div>

                {/* ACTIONS */}
                <div className="flex items-center justify-between">
                  {/* QTY */}
                  <div className="flex items-center gap-2">
                    <button className="rounded-full border border-[#E8DFD1] p-1">
                      <Minus size={14} />
                    </button>

                    <span className="min-w-6 text-center text-sm">
                      {item.quantity}
                    </span>

                    <button className="rounded-full border border-[#E8DFD1] p-1">
                      <Plus size={14} />
                    </button>
                  </div>

                  {/* DELETE */}
                  <button className="text-red-500 hover:text-red-600">
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* EMPTY STATE (optional fallback UI) */}
          {cartItems.length === 0 && (
            <div className="rounded-3xl border border-dashed border-[#CBB89D] bg-white p-10 text-center">
              <p className="text-[#6F6A63]">Your cart is empty</p>
              <Link
                href="/shop"
                className="mt-4 inline-block text-sm text-[#7A6A53] underline"
              >
                Continue shopping
              </Link>
            </div>
          )}
        </div>

        {/* RIGHT - SUMMARY */}
        <div className="space-y-4">
          {/* SUMMARY CARD */}
          <div className="rounded-3xl border border-[#E8DFD1] bg-white p-6">
            <h2 className="text-lg font-semibold text-[#2B2B2B]">
              Order Summary
            </h2>

            <div className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between text-[#6F6A63]">
                <span>Subtotal</span>
                <span>৳{subtotal}</span>
              </div>

              <div className="flex justify-between text-[#6F6A63]">
                <span>Shipping</span>
                <span>Free</span>
              </div>

              <div className="border-t pt-2 flex justify-between font-semibold">
                <span>Total</span>
                <span>৳{subtotal}</span>
              </div>
            </div>

            <button className="mt-6 w-full rounded-full bg-[#2B2B2B] py-3 text-sm font-medium text-white hover:bg-black">
              Checkout
            </button>

            <Link
              href="/shop"
              className="mt-3 block text-center text-sm text-[#7A6A53] underline"
            >
              Continue Shopping
            </Link>
          </div>

          {/* NOTE */}
          <div className="rounded-3xl border border-[#E8DFD1] bg-[#FFFDF8] p-5 text-xs text-[#6F6A63]">
            Secure checkout • Fast delivery • Handmade quality products ✨
          </div>
        </div>
      </div>
    </div>
  );
}
