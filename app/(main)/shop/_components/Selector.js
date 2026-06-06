"use client";

import { useRouter, useSearchParams } from "next/navigation";

const data = [
  { id: 1, title: "Newest", value: "newest" },
  { id: 2, title: "Oldest", value: "oldest" },
  { id: 3, title: "Price Low → High", value: "low" },
  { id: 4, title: "Price High → Low", value: "high" },
];

const Selector = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentSort = searchParams.get("sort") || "low";

  const handleChange = (value) => {
    const params = new URLSearchParams(searchParams.toString());

    params.set("sort", value);

    router.push(`/shop?${params.toString()}`);
  };

  return (
    <select
      value={currentSort}
      onChange={(e) => handleChange(e.target.value)}
      className="rounded-xl border border-[#E8DFD1] px-3 py-2 text-sm outline-none"
    >
      {data.map((d) => (
        <option key={d.id} value={d.value}>
          {d.title}
        </option>
      ))}
    </select>
  );
};

export default Selector;