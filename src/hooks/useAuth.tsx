'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { User, UserCredentials } from '../types/user';

interface AuthContextType {
  user: User | null;
  login: (credentials: UserCredentials) => Promise<void>;
  logout: () => void;
  register: (credentials: UserCredentials & { name: string }) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock user data for demo
const MOCK_USER: User = {
  id: '1',
  name: 'John Doe',
  email: 'john@example.com',
  addresses: [
    {
      id: '1',
      street: '123 Main St',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      country: 'USA',
      isDefault: true,
    },
  ],
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = async (credentials: UserCredentials) => {
    // Mock login - in real app, make API call
    if (credentials.email === MOCK_USER.email) {
      setUser(MOCK_USER);
    } else {
      throw new Error('Invalid credentials');
    }
  };

  const logout = () => {
    setUser(null);
  };

  const register = async (credentials: UserCredentials & { name: string }) => {
    // Mock registration - in real app, make API call
    setUser({
      id: Math.random().toString(),
      name: credentials.name,
      email: credentials.email,
      addresses: [],
    });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
} 