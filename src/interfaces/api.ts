export interface Product {
  id: number;
  title: string;
}

export interface Recipe {
  id: number;
  title: string;
  items: string | number;
}
