import Image from "next/image";

const Navbar = () => {
  return (
    <header className="px-10 py-2 border-b border-[#E8DFD1] grid grid-cols-3">
      <div className="col-span-1">
        <Image
          src="/VeloraWord.png"
          alt="Velora logo"
          width={150}
          height={60}
        />
      </div>
      <nav className="col-span-1 flex justify-center text-[#2B2B2B] text-lg font-semibold">
        <ul className="flex gap-5 items-center">
          <li>Home</li>
          <li>Category</li>
          <li>Notice</li>
        </ul>
      </nav>
      <div className="col-span-1 flex justify-end border border-black">
        <button>hi</button>
      </div>
    </header>
  );
};

export default Navbar;
