'use client';

import { products } from '../../data/products';
import ProductCard from '../../components/ProductCard';

export default function WomenPage() {
  const womenProducts = products.filter((product) => product.category === 'women');

  return (
    <div>
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Women's Collection</h1>
        <p className="text-lg text-gray-600">Discover our latest women's fashion items</p>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {womenProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
} 