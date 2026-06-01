import ProductCard from "../../../../components/ProductCard";
const Products = async () => {
  const products = await getProducts();
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
            <ProductCard
              key={product._id?.toString()}
              product={{
                ...product,
                _id: product._id?.toString(),
                category: product.category?.toString?.(),
              }}
            />
          ))}

          {/* CUSTOM PRODUCT */}
          <div className="flex min-h-[620px] flex-col items-center justify-center rounded-3xl border border-dashed border-[#CBB89D] bg-[#FFFDF8] p-10 text-center">
            <div className="rounded-full bg-[#F5EFE4] p-6">
              <span className="text-4xl">✨</span>
            </div>

            <h3 className="mt-8 text-2xl font-semibold text-[#2B2B2B]">
              Build Your Own
            </h3>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#6F6A63]">
              Customize your perfect crochet product with unique colors, sizing,
              and personalized details.
            </p>

            <button className="mt-8 cursor-pointer rounded-full bg-[#7A6A53] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#665744]">
              Build Custom Order
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
