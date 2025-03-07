export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: 'men' | 'women';
  description: string;
};

export type CartItem = Product & {
  quantity: number;
};

export type Order = {
  id: string;
  items: CartItem[];
  total: number;
  customerInfo: {
    name: string;
    email: string;
    address: string;
  };
  status: 'pending' | 'completed' | 'cancelled';
  createdAt: Date;
}; 