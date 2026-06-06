import ProductCard from "@/components/ProductCard";
import { getCategories } from "@/queries/categories";
import { getProducts } from "@/queries/product";
import DesktopFilters from "./_components/DesktopFilters";
import MobileFilters from "./_components/MobileFilters";
import Selector from "./_components/Selector";

export default async function ShopPage({ searchParams }) {
  const categories = await getCategories();

  const params = await searchParams;

  const category = params?.category || "";
  const sort = params?.sort || "newest";

  const products = await getProducts({
    category,
    sort,
  });

  return (
    <main>
      <section className="mx-auto max-w-7xl px-4 py-10">
        {/* MOBILE */}
        <div className="mb-6 flex justify-between lg:hidden">
          <MobileFilters categories={categories} />
          <p className="text-sm text-[#6F6A63]">{products.length} Products</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
          {/* DESKTOP FILTERS */}
          <DesktopFilters categories={categories} />

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

              <Selector />
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
