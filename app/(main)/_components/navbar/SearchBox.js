import { Search } from "lucide-react";

const SearchBox = () => {
  return (
    <div className="flex items-center rounded-full border border-[#E8DFD1] px-4 py-2">
      <Search size={18} className="text-gray-500" />

      <input
        type="text"
        placeholder="Search products..."
        className="ml-2 w-full md:w-44 bg-transparent text-sm outline-none"
      />
    </div>
  );
};

export default SearchBox;
