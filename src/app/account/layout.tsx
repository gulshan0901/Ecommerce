'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../hooks/useAuth';

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (!user && !window.location.pathname.includes('/account/login') && !window.location.pathname.includes('/account/register')) {
      router.push('/account/login');
    }
  }, [user, router]);

  // Don't show loading state for login/register pages
  if (!user && !window.location.pathname.includes('/account/login') && !window.location.pathname.includes('/account/register')) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  );
} 