'use client';

import { CartProvider } from '../hooks/useCart';
import { AuthProvider } from '../hooks/useAuth';
import { Toaster } from 'react-hot-toast';
import Layout from './Layout';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <CartProvider>
        <Layout>{children}</Layout>
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 2000,
            style: {
              background: '#333',
              color: '#fff',
            },
            success: {
              style: {
                background: '#22c55e',
              },
            },
          }}
        />
      </CartProvider>
    </AuthProvider>
  );
} 