import ProductCard from "@/components/ProductCard";

export default function ProductGrid({ products }) {
  return (
    <div className="grid grid-cols-2 gap-4 xl:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
}
