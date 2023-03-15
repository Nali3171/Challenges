/* Foundation Challenges */

export const getEmployeeQuotes = (employeeArr: Employee[]): string[] => {
  const employeeQuotes = employeeArr.map(employee => {
    return employee.quote;
  });

  return employeeQuotes;
};

export const getTheManagers = (employeeArr: Employee[]): Manager[] => {
  const managerArr = employeeArr.filter(employee => {
    return employee.isManagement;
  });

  return managerArr as Manager[];
};

export const getNumberOfKeys = (object: object): number => {
  const keys = Object.keys(object);
  const numberOfKeys = keys.length;

  return numberOfKeys;
};

/* Intermediate Challenges */

export const findMostExpensiveItem = (shoppingBasketArr: Product[]): Product => {
  const sortedArray = shoppingBasketArr.sort((a, b) => b.price - a.price);

  return sortedArray[0];
};

export const setTotalPrice = (shoppingBasketArr: Product[]): CompleteProduct[] => {
  const shoppingBasketWithTotals = shoppingBasketArr.map(item => {
    const newItem = { ...item, totalPrice: 0 };
    const totalPrice = newItem.price * newItem.quantity;
    newItem.totalPrice = totalPrice;
    return newItem;
  });

  return shoppingBasketWithTotals;
};

export const totalShoppingBasket = (shoppingBasketArr: CompleteProduct[]): number => {
  const total = shoppingBasketArr.reduce((previous, current) => {
    return previous + current.totalPrice;
  }, 0);

  return total;
};

/* Advanced Challenges */

export const getImportantKeys = (mealsArr: LargeMeal[]): LeanMeal[] => {
  const cleanedMealArr = mealsArr.map(meal => {
    const newMeal = {
      id: meal.id,
      name: meal.name,
      ingredients: meal.ingredients,
      country: meal.country,
    };
    return newMeal;
  });

  return cleanedMealArr;
};

export const setImportantKeys = (mealsArr: OptionalMeal[]): MandatoryMeal[] => {
  const cleanedMealsArr = mealsArr.map(meal => {
    const newMeal = { ...meal };
    if (!newMeal.hasOwnProperty("isVegetarian")) {
      newMeal.isVegetarian = false;
    }

    if (!newMeal.hasOwnProperty("timeToCook")) {
      newMeal.timeToCook = 15;
    }

    return newMeal;
  });

  return cleanedMealsArr as MandatoryMeal[];
};

/* Expert Challenges */

export const cleanCocktailResponseData = (cocktailData: CocktailResponse[]): Cocktail[] => {
  const cleanCocktailData = cocktailData.map(cocktail => {
    const cleanCocktail: Cocktail = {
      id: cocktail.idDrink,
      drink: cocktail.strDrink,
      category: cocktail.strCategory,
      alcoholic: cocktail.strAlcoholic,
      instructions: cocktail.strInstructions,
      ingredients: [],
    };
    for (const key in cocktail) {
      const element = cocktail[key];
      if (key.includes("strIngredient") && element && typeof element === "string") {
        cleanCocktail.ingredients.push(element);
      }
    }

    return cleanCocktail;
  });

  return cleanCocktailData;
};
