export type Address = {
  id: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  isDefault: boolean;
};

export type User = {
  id: string;
  name: string;
  email: string;
  addresses: Address[];
};

export type UserCredentials = {
  email: string;
  password: string;
}; 