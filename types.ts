export interface IngredientInfo {
  category: string;
  city: string;
  note: string;
}

export interface IngredientMap {
  [key: string]: IngredientInfo;
}

export interface RecipeIngredients {
  [ingredientName: string]: number;
}

export interface Recipe {
  id: string;
  name: string;
  tier: string;
  type: 'Potion' | 'Food';
  yield: number;
  ingredients: RecipeIngredients;
}

export interface CartItem {
  recipeId: string;
  amount: number; // Desired output amount
}

export interface LogisticsItem {
  name: string;
  rawTotal: number; // Total raw needed before RRR
  buyTotal: number; // Total to buy after 25% RRR
  category: string;
  note: string;
}

export interface CityLogistics {
  [city: string]: LogisticsItem[];
}