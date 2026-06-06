import ProductCard from "@/components/ProductCard";
import { getCategories } from "@/queries/categories";
import { getProducts } from "@/queries/product";
import MobileFilters from "./_components/MobileFilters";

export default async function ShopPage() {
  const categories = await getCategories();
  const products = await getProducts();
  return (
    <main>
      <section className="mx-auto max-w-7xl px-4 py-10">
        {/* MOBILE FILTER */}
        <div className="mb-6 flex justify-between lg:hidden">
          <MobileFilters categories={categories} />

          <p className="text-sm text-[#6F6A63]">{products.length} Products</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
          {/* DESKTOP SIDEBAR */}
          <aside className="hidden lg:block rounded-3xl border border-[#E8DFD1] bg-white p-6 h-fit sticky top-24">
            <h3 className="mb-6 text-lg font-semibold text-[#2B2B2B]">
              Filters
            </h3>

            <div>
              <h4 className="mb-3 font-medium">Categories</h4>

              <div className="space-y-3">
                {categories.map((category) => (
                  <label
                    key={category._id}
                    className="flex items-center gap-3 text-sm text-[#6F6A63]"
                  >
                    <input type="checkbox" />
                    {category.name}
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* PRODUCTS */}
          <div>
            <div className="mb-6 flex items-center justify-between rounded-3xl border border-[#E8DFD1] bg-white px-4 py-3">
              <p className="text-sm text-[#6F6A63]">
                Showing{" "}
                <span className="font-semibold text-[#2B2B2B]">
                  {products.length}
                </span>{" "}
                products
              </p>

              <select className="rounded-xl border border-[#E8DFD1] px-3 py-2 text-sm outline-none">
                <option>Newest</option>
                <option>Best Selling</option>
                <option>Price Low → High</option>
                <option>Price High → Low</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4 xl:grid-cols-3">
              {products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
