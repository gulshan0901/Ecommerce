import { products } from '../data/products';
import ProductCard from './ProductCard';

// In a real app, you would have a way to track best sellers
// For now, we'll just show the first 4 products
const bestSellers = products.slice(0, 4);

export default function BestSellers() {
  return (
    <section className="mt-16">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Best Sellers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {bestSellers.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
} 