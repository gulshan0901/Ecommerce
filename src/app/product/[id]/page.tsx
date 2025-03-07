'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { products } from '../../../data/products';
import { Product } from '../../../types/product';
import { useCart } from '../../../hooks/useCart';
import { useRecentlyViewed } from '../../../hooks/useRecentlyViewed';
import RecentlyViewed from '../../../components/RecentlyViewed';

export default function ProductDetail() {
  const params = useParams();
  const id = params?.id as string;
  const { addToCart } = useCart();
  const { addToRecentlyViewed } = useRecentlyViewed();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const foundProduct = products.find((p) => p.id === id);
    if (foundProduct) {
      setProduct(foundProduct);
    }
  }, [id]);

  useEffect(() => {
    if (product) {
      addToRecentlyViewed(product);
    }
  }, [product, addToRecentlyViewed]);

  if (!product) {
    return (
      <div className="text-center py-16">
        <h1 className="text-2xl font-semibold text-gray-900">Product not found</h1>
      </div>
    );
  }

  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative h-[500px]">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
            <p className="text-xl font-semibold text-gray-900 mb-6">
              ${product.price.toFixed(2)}
            </p>
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Product Description</h2>
              <p className="text-gray-600">{product.description}</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Product Details</h2>
              <ul className="space-y-2">
                <li>
                  <span className="font-semibold">Category:</span>{' '}
                  <span className="capitalize">{product.category}</span>
                </li>
                <li>
                  <span className="font-semibold">ID:</span> {product.id}
                </li>
              </ul>
            </div>
            <button
              onClick={() => addToCart(product)}
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors cursor-pointer mt-6"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 pb-8">
        <RecentlyViewed />
      </div>
    </div>
  );
} 