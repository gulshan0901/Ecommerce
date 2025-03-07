'use client';

import { useRecentlyViewed } from '../hooks/useRecentlyViewed';
import ProductCard from './ProductCard';

export default function RecentlyViewed() {
  const { recentItems } = useRecentlyViewed();

  if (recentItems.length === 0) {
    return null;
  }

  return (
    <section className="mt-16">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Recently Viewed</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {recentItems.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
} 