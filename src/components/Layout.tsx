'use client';

import Link from 'next/link';
import { useCart } from '../hooks/useCart';
import { useAuth } from '../hooks/useAuth';
import Footer from './Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  const { items } = useCart();
  const { user } = useAuth();
  const itemCount = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold text-gray-800">
                Fashion Store
              </Link>
              <div className="ml-10 space-x-8">
                <Link href="/men" className="text-gray-600 hover:text-gray-900">
                  Men
                </Link>
                <Link href="/women" className="text-gray-600 hover:text-gray-900">
                  Women
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <Link
                href={user ? '/account' : '/account/login'}
                className="text-gray-600 hover:text-gray-900"
              >
                {user ? 'My Account' : 'Login'}
              </Link>
              <Link
                href="/cart"
                className="relative p-2 text-gray-600 hover:text-gray-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <main className="flex-grow bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
} 