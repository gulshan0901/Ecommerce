'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '../../hooks/useAuth';

export default function AccountPage() {
  const router = useRouter();
  const { user, logout } = useAuth();

  useEffect(() => {
    if (!user) {
      router.push('/account/login');
    }
  }, [user, router]);

  if (!user) {
    return null;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">My Account</h1>
        <button
          onClick={logout}
          className="text-red-600 hover:text-red-700"
        >
          Logout
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Profile Information</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-600 text-sm">Name</label>
              <p className="text-gray-900">{user.name}</p>
            </div>
            <div>
              <label className="block text-gray-600 text-sm">Email</label>
              <p className="text-gray-900">{user.email}</p>
            </div>
          </div>
          <Link
            href="/account/edit-profile"
            className="mt-4 inline-block text-blue-600 hover:text-blue-700"
          >
            Edit Profile
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Shipping Addresses</h2>
          {user.addresses.length > 0 ? (
            <div className="space-y-4">
              {user.addresses.map((address) => (
                <div key={address.id} className="border-b pb-4 last:border-0">
                  {address.isDefault && (
                    <span className="text-sm text-blue-600 mb-2 block">Default Address</span>
                  )}
                  <p className="text-gray-900">{address.street}</p>
                  <p className="text-gray-600">
                    {address.city}, {address.state} {address.zipCode}
                  </p>
                  <p className="text-gray-600">{address.country}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">No addresses added yet.</p>
          )}
          <Link
            href="/account/addresses"
            className="mt-4 inline-block text-blue-600 hover:text-blue-700"
          >
            Manage Addresses
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 md:col-span-2">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Orders</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left border-b">
                  <th className="pb-2">Order ID</th>
                  <th className="pb-2">Date</th>
                  <th className="pb-2">Total</th>
                  <th className="pb-2">Status</th>
                  <th className="pb-2"></th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr className="text-gray-600">
                  <td className="py-3">No orders yet</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
          <Link
            href="/account/orders"
            className="mt-4 inline-block text-blue-600 hover:text-blue-700"
          >
            View All Orders
          </Link>
        </div>
      </div>
    </div>
  );
} 