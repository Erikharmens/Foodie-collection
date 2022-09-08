export interface Product {
  id: number;
  title: string;
}

export interface RecipeItem {
  id: number;
  qty: number;
  unit: string;
}

export interface Recipe {
  id: number;
  title: string;
  items: RecipeItem[];
}

export interface StoredProduct {
  id: number;
  name: string;
  qty: number;
  unit: string;
}
