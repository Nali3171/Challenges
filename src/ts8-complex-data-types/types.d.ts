type Employee = { name: string; quote: string; yearsEmployed: number; isManagement: boolean };

type Manager = Employee & { isManagement: true };

type Product = { name: string; price: number; hasFreeShipping: boolean; quantity: number };

type CompleteProduct = Product & { totalPrice: number };

type LargeMeal = {
  id: number;
  name: string;
  ingredients: string[];
  country: string;
  timeStamp: number;
  userCreated: string;
};

type LeanMeal = { id: number; name: string; ingredients: string[]; country: string };

type OptionalMeal = {
  id: number;
  name: string;
  ingredients: string[];
  country: string;
  isVegetarian?: boolean;
  timeToCook?: number;
};

type MandatoryMeal = OptionalMeal & { isVegetarian: boolean; timeToCook: number };

type CocktailResponse = {
  idDrink: number;
  strDrink: string;
  strCategory: string;
  strAlcoholic: string;
  strInstructions: string;
  strIngredient1: string | null;
  strIngredient2: string | null;
  strIngredient3: string | null;
  strIngredient4: string | null;
  strIngredient5: string | null;
  strIngredient6: string | null;
  [key: string]: string | number | null;
};

type Cocktail = {
  id: number;
  drink: string;
  category: string;
  alcoholic: string;
  instructions: string;
  ingredients: string[];
};
