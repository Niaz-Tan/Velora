import ProductCard from "./ProductCard";
const products = [
  {
    id: 1,
    name: "Minimal Leather Pouch",
    price: "$42",
    image: "https://picsum.photos/seed/pouch1/800/800",
    description:
      "Elegant handcrafted pouch designed for modern everyday carry.",
    colors: ["#2B2B2B", "#8B7355", "#D9C7A8"],
    isNew: true,
  },

  {
    id: 2,
    name: "Urban Travel Pack",
    price: "$58",
    image: "https://picsum.photos/seed/pouch2/800/800",
    description: "Clean functional design with premium durable materials.",
    colors: ["#4A4A4A", "#C4A484", "#E8DFD1"],
    isNew: false,
  },

  {
    id: 3,
    name: "Classic Utility Bag",
    price: "$64",
    image: "https://picsum.photos/seed/pouch3/800/800",
    description:
      "Minimal silhouette crafted for everyday versatility and comfort.",
    colors: ["#000000", "#8A6A44", "#F5EFE4"],
    isNew: true,
  },
];
const Products = () => {
  return (
    <section className="px-4 py-14">
      <div className="mx-auto max-w-7xl">
        {/* HEADING */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold text-[#2B2B2B] md:text-4xl">
            You’ll love these…
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#6F6A63] md:text-base">
            Carefully designed essentials made to combine timeless aesthetics
            with everyday practicality.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}

          {/* CUSTOM PRODUCT */}
          <div className="flex min-h-155 flex-col items-center justify-center rounded-3xl border border-dashed border-[#CBB89D] bg-[#FFFDF8] p-10 text-center">
            <div className="rounded-full bg-[#F5EFE4] p-6">
              <span className="text-4xl">✨</span>
            </div>

            <h3 className="mt-8 text-2xl font-semibold text-[#2B2B2B]">
              Build Your Own
            </h3>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#6F6A63]">
              Customize your perfect pouch with unique colors, compartments,
              materials, and personalized details.
            </p>

            <button className="mt-8 rounded-full bg-[#7A6A53] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#665744] cursor-pointer">
              Build Custom Pouch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
