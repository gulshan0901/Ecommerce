'use client';

import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import BestSellers from '../components/BestSellers';
import RecentlyViewed from '../components/RecentlyViewed';

export default function Home() {
  return (
    <div>
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to Fashion Store</h1>
        <p className="text-lg text-gray-600">Discover the latest trends in men's and women's fashion</p>
      </section>

      <BestSellers />

      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.slice(0, 6).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <RecentlyViewed />

      <section className="mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative h-[400px] bg-gray-100 rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Men's Collection</h3>
                <a
                  href="/men"
                  className="inline-block bg-white text-gray-900 px-6 py-2 rounded-md hover:bg-gray-100 transition-colors"
                >
                  Shop Now
                </a>
              </div>
            </div>
          </div>
          <div className="relative h-[400px] bg-gray-100 rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Women's Collection</h3>
                <a
                  href="/women"
                  className="inline-block bg-white text-gray-900 px-6 py-2 rounded-md hover:bg-gray-100 transition-colors"
                >
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
