"use client";

import Image from "next/image";
import Link from "next/link";

export default function OrdersPage() {
  const orders = [
    {
      id: "ORD-1001",
      status: "Delivered",
      date: "2026-06-08",
      total: 760,
      items: [
        {
          name: "Lavender Keychain",
          image: "https://picsum.photos/seed/lavender/200/200",
        },
        {
          name: "Crochet Bunny Plush",
          image: "https://picsum.photos/seed/bunny/200/200",
        },
      ],
    },
    {
      id: "ORD-1002",
      status: "Processing",
      date: "2026-06-09",
      total: 120,
      items: [
        {
          name: "Mini Flower Keychain",
          image: "https://picsum.photos/seed/flower/200/200",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFFDF8] px-4 py-10">
      <div className="mx-auto max-w-5xl space-y-6">
        {/* HEADER */}
        <div className="rounded-3xl border border-[#E8DFD1] bg-white p-6">
          <h1 className="text-2xl font-bold text-[#2B2B2B]">My Orders</h1>
          <p className="text-sm text-[#6F6A63]">
            Track your purchase history and delivery status
          </p>
        </div>

        {/* ORDERS LIST */}
        <div className="space-y-4">
          {orders.map((order) => (
            <div
              key={order.id}
              className="rounded-3xl border border-[#E8DFD1] bg-white p-5"
            >
              {/* TOP ROW */}
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="font-semibold text-[#2B2B2B]">{order.id}</h2>
                  <p className="text-xs text-[#6F6A63]">{order.date}</p>
                </div>

                <span
                  className={`w-fit rounded-full px-3 py-1 text-xs font-medium ${
                    order.status === "Delivered"
                      ? "bg-green-100 text-green-700"
                      : order.status === "Processing"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {order.status}
                </span>
              </div>

              {/* ITEMS */}
              <div className="mt-4 flex flex-wrap gap-3">
                {order.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 rounded-2xl border border-[#F0E6D8] bg-[#FFFDF8] p-2"
                  >
                    <div className="relative h-12 w-12 overflow-hidden rounded-xl">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <span className="text-sm text-[#2B2B2B]">{item.name}</span>
                  </div>
                ))}
              </div>

              {/* FOOTER */}
              <div className="mt-4 flex items-center justify-between border-t border-[#F0E6D8] pt-4">
                <span className="text-sm text-[#6F6A63]">Total</span>

                <span className="font-semibold text-[#2B2B2B]">
                  ৳{order.total}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* EMPTY STATE */}
        {orders.length === 0 && (
          <div className="rounded-3xl border border-dashed border-[#CBB89D] bg-white p-10 text-center">
            <p className="text-[#6F6A63]">No orders yet</p>
            <Link
              href="/shop"
              className="mt-4 inline-block text-sm text-[#7A6A53] underline"
            >
              Start shopping
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
