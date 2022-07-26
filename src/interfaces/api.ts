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
