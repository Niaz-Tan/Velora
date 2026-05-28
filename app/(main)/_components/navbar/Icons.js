import { Bell, ShoppingCart, User } from "lucide-react";

export default function Icons() {
  return (
    <div className="hidden md:flex items-center gap-2">
      <button className="p-2 rounded-full hover:bg-[#F7F2EA] transition relative">
        <ShoppingCart size={19} />
        <span className="absolute -top-1 -right-1 text-[10px] bg-black text-white w-4 h-4 flex items-center justify-center rounded-full">
          2
        </span>
      </button>

      <button className="p-2 rounded-full hover:bg-[#F7F2EA] transition">
        <Bell size={19} />
      </button>

      <button className="p-2 rounded-full border border-[#E6DDCE] hover:bg-[#F7F2EA] transition">
        <User size={19} />
      </button>
    </div>
  );
}
