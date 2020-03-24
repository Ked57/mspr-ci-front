export type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  color?: string;
  logoUrl: string;
  vatType: string;
};

export const isProduct = (product: any): product is Product =>
  product &&
  typeof product.id === "string" &&
  typeof product.name === "string" &&
  typeof product.price === "number" &&
  typeof product.description === "string" &&
  typeof product.category === "string" &&
  typeof product.logoUrl === "string" &&
  typeof product.vatType === "string";

export type User = {
  auth_id: string;
  user_name: string;
};

export const isUser = (user: any): user is User =>
  user &&
  typeof user.auth_id === "string" &&
  typeof user.user_name === "string";

export type Cart = {
  createdAt: Date;
  products: { product: Product; quantity: number }[];
};

export type State = {
  user?: User;
  cart?: Cart;
  products: Product[];
};
