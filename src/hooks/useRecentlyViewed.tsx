'use client';

import { useState, useEffect, useCallback } from 'react';
import { Product } from '../types/product';

const MAX_RECENT_ITEMS = 4;

export function useRecentlyViewed() {
  const [recentItems, setRecentItems] = useState<Product[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('recentlyViewed');
    if (stored) {
      setRecentItems(JSON.parse(stored));
    }
  }, []);

  const addToRecentlyViewed = useCallback((product: Product) => {
    setRecentItems((current) => {
      const filtered = current.filter((item) => item.id !== product.id);
      const updated = [product, ...filtered].slice(0, MAX_RECENT_ITEMS);
      localStorage.setItem('recentlyViewed', JSON.stringify(updated));
      return updated;
    });
  }, []);

  return {
    recentItems,
    addToRecentlyViewed,
  };
} 