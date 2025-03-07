'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import toast from 'react-hot-toast';
import { Product, CartItem } from '../types/product';

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  total: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === product.id);
      if (existingItem) {
        return currentItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...currentItems, { ...product, quantity: 1 }];
    });
    
    // Show toast notification after state update
    const existingItem = items.find((item) => item.id === product.id);
    if (existingItem) {
      toast.success(`Added another ${product.name} to cart`);
    } else {
      toast.success(`${product.name} added to cart`);
    }
  };

  const removeFromCart = (productId: string) => {
    const itemToRemove = items.find(item => item.id === productId);
    setItems((currentItems) => currentItems.filter((item) => item.id !== productId));
    if (itemToRemove) {
      toast.success(`${itemToRemove.name} removed from cart`);
    }
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(productId);
      return;
    }
    const item = items.find(item => item.id === productId);
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
    if (item) {
      toast.success(`Updated ${item.name} quantity to ${quantity}`);
    }
  };

  const clearCart = () => {
    setItems([]);
    toast.success('Cart cleared');
  };

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
} 