export type Product = {
  name: string;
  unitPrice: number;
  description: string;
  category: string;
  color: string;
  logoUrl: string;
  vatType: string;
};

export type User = {
  auth_id: string;
  user_name: string;
};

export type Cart = {
  createdAt: Date;
  products: { product: Product; quantity: number }[];
};

export type State = {
  user?: User;
  cart?: Cart;
  products: Product[];
};
