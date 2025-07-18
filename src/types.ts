export interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
  brand: string;
  model: string;
  color: string;
  category: string;
  discount: number;
}

export interface Category {
  name: string;
  id: string;
}

export type Icon =
  | "add-line"
  | "search-line"
  | "arrow-down-s-line"
  | "close-line"
  | "check-line"
  | "pencil-line"
  | "delete-bin-6-line";
