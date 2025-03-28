import {
  cleanCocktailResponseData,
  findMostExpensiveItem,
  getEmployeeQuotes,
  getImportantKeys,
  getNumberOfKeys,
  getTheManagers,
  setImportantKeys,
  setTotalPrice,
  totalShoppingBasket,
} from "./challenge";

// REMOVE .skip FROM describe FUNCTION TO STOP SKIPPING TEST BLOCKS

const mockEmployeeData = [
  {
    name: "Edith Gibson",
    quote: "Your body is precious. It is our vehicle for awakening. Treat it with care.",
    yearsEmployed: 14,
    isManagement: true,
  },
  {
    name: "Adam Holmes",
    quote: "I detest life-insurance agents; they always argue that I shall some day die, which is not so.",
    yearsEmployed: 1,
    isManagement: false,
  },
  {
    name: "Fenton Perry",
    quote:
      "The Fifth Amendment is an old friend and a good friend. It is one of the great landmarks in man's struggle to be free of tyranny, to be decent and civilized.",
    yearsEmployed: 19,
    isManagement: false,
  },
  {
    name: "Adelaide Owens",
    quote: "Columbus found a world, and had no chart save one that Faith deciphered in the skies.",
    yearsEmployed: 9,
    isManagement: false,
  },
  {
    name: "Adison Crawford",
    quote: "Only learn to seize good fortune, for good fortune is always here.",
    yearsEmployed: 7,
    isManagement: true,
  },
];

describe("getEmployeeQuotes() tests", () => {
  it("Should return an array of just the quote from the data provided", () => {
    expect(getEmployeeQuotes(mockEmployeeData)).toStrictEqual([
      "Your body is precious. It is our vehicle for awakening. Treat it with care.",
      "I detest life-insurance agents; they always argue that I shall some day die, which is not so.",
      "The Fifth Amendment is an old friend and a good friend. It is one of the great landmarks in man's struggle to be free of tyranny, to be decent and civilized.",
      "Columbus found a world, and had no chart save one that Faith deciphered in the skies.",
      "Only learn to seize good fortune, for good fortune is always here.",
    ]);
  });
  it("Should return an empty array if given a empty array", () => {
    expect(getEmployeeQuotes([])).toStrictEqual([]);
  });
});

describe("getTheManagers() tests", () => {
  it("Should return an array containing only employees where isManagement is true", () => {
    expect(getTheManagers(mockEmployeeData)).toStrictEqual([
      {
        name: "Edith Gibson",
        quote: "Your body is precious. It is our vehicle for awakening. Treat it with care.",
        yearsEmployed: 14,
        isManagement: true,
      },
      {
        name: "Adison Crawford",
        quote: "Only learn to seize good fortune, for good fortune is always here.",
        yearsEmployed: 7,
        isManagement: true,
      },
    ]);
  });
  it("Should return an empty array if given a empty array", () => {
    expect(getEmployeeQuotes([])).toStrictEqual([]);
  });
});

describe("getNumberOfKeys() tests", () => {
  const object1 = { a: 1, b: 2 };
  const object2 = { a: 1, b: 2, c: 3, d: 4 };
  const object3 = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 };

  it("Should accurately count the number of keys", () => {
    expect(getNumberOfKeys(object1)).toBe(2);
    expect(getNumberOfKeys(object2)).toBe(4);
    expect(getNumberOfKeys(object3)).toBe(6);
  });
});

const mockShoppingBasket = [
  {
    name: "jeans",
    price: 30,
    hasFreeShipping: false,
    quantity: 2,
  },
  {
    name: "hoodie",
    price: 35,
    hasFreeShipping: false,
    quantity: 1,
  },
  {
    name: "pants",
    price: 5,
    hasFreeShipping: true,
    quantity: 5,
  },
  {
    name: "socks",
    price: 5,
    hasFreeShipping: true,
    quantity: 1,
  },
  {
    name: "shirt",
    price: 20,
    hasFreeShipping: false,
    quantity: 3,
  },
];

const mockShoppingBasketWithTotals = [
  {
    name: "hoodie",
    price: 35,
    hasFreeShipping: false,
    quantity: 1,
    totalPrice: 35,
  },
  {
    name: "jeans",
    price: 30,
    hasFreeShipping: false,
    quantity: 2,
    totalPrice: 60,
  },
  {
    name: "shirt",
    price: 20,
    hasFreeShipping: false,
    quantity: 3,
    totalPrice: 60,
  },
  {
    name: "pants",
    price: 5,
    hasFreeShipping: true,
    quantity: 5,
    totalPrice: 25,
  },
  {
    name: "socks",
    price: 5,
    hasFreeShipping: true,
    quantity: 1,
    totalPrice: 5,
  },
];

describe("findMostExpensiveItem() tests", () => {
  it("Should return the most expensive item which is a hoodie", () => {
    expect(findMostExpensiveItem(mockShoppingBasket)).toStrictEqual({
      name: "hoodie",
      price: 35,
      hasFreeShipping: false,
      quantity: 1,
    });
  });
});

describe("setTotalPrice() tests", () => {
  it("Should not modify original array of objects", () => {
    expect(setTotalPrice(mockShoppingBasket)).not.toStrictEqual(mockShoppingBasket);
  });

  it("Should accurately total each shopping item", () => {
    expect(setTotalPrice(mockShoppingBasket).sort((a, b) => a.price - b.price)).toStrictEqual(
      mockShoppingBasketWithTotals.sort((a, b) => a.price - b.price)
    );
  });

  it("Should return an empty array if given a empty array", () => {
    expect(getEmployeeQuotes([])).toStrictEqual([]);
  });
});

describe("totalShoppingBasket() tests", () => {
  it("Should accurately total all objects", () => {
    expect(totalShoppingBasket(mockShoppingBasketWithTotals)).toBe(185);
  });
});

describe("getImportantKeys() tests", () => {
  const mealsArr = [
    {
      id: 10,
      name: "Tikka Masala",
      ingredients: ["rice", "tomato", "chicken", "curry powder"],
      country: "India",
      timeStamp: 1612177931682,
      userCreated: "johnnyboiXX",
    },
    {
      id: 11,
      name: "Grilled Cheese",
      ingredients: ["bread", "cheese", "butter"],
      country: "America",
      timeStamp: 1612112931682,
      userCreated: "glorfindelrox",
    },
    {
      id: 12,
      name: "Gourmet Burger",
      ingredients: ["beef mince", "onion", "mustard", "salt", "pepper"],
      country: "America",
      timeStamp: 1612177917682,
      userCreated: "iAmTonyHawk",
    },
  ];

  const resultsArr = [
    {
      id: 10,
      name: "Tikka Masala",
      ingredients: ["rice", "tomato", "chicken", "curry powder"],
      country: "India",
    },
    {
      id: 11,
      name: "Grilled Cheese",
      ingredients: ["bread", "cheese", "butter"],
      country: "America",
    },
    {
      id: 12,
      name: "Gourmet Burger",
      ingredients: ["beef mince", "onion", "mustard", "salt", "pepper"],
      country: "America",
    },
  ];

  it("Should not modify the original array", () => {
    expect(getImportantKeys(mealsArr)).not.toStrictEqual(mealsArr);
  });

  it("Should remove unneeded keys from the objects", () => {
    expect(getImportantKeys(mealsArr)[0]).toStrictEqual(resultsArr[0]);
  });

  it("Should alter every item in the array", () => {
    const result = getImportantKeys(mealsArr);

    if (!result.length) {
      throw new Error();
    }

    result.forEach((el, index) => {
      expect(el).toStrictEqual(resultsArr[index]);
    });
  });

  it("Should return an empty array if given a empty array", () => {
    expect(getEmployeeQuotes([])).toStrictEqual([]);
  });
});

describe("setImportantKeys() tests", () => {
  const mealsArr = [
    {
      id: 10,
      name: "Tikka Masala",
      ingredients: ["rice", "tomato", "chicken", "curry powder"],
      country: "India",
      timeToCook: 60,
    },
    {
      id: 11,
      name: "Grilled Cheese",
      ingredients: ["bread", "cheese", "butter"],
      country: "America",
      isVegetarian: true,
    },
    {
      id: 12,
      name: "Gourmet Burger",
      ingredients: ["beef mince", "onion", "mustard", "salt", "pepper"],
      country: "America",
      isVegetarian: false,
      timeToCook: 45,
    },
  ];

  const resultsArr = [
    {
      id: 10,
      name: "Tikka Masala",
      ingredients: ["rice", "tomato", "chicken", "curry powder"],
      country: "India",
      isVegetarian: false,
      timeToCook: 60,
    },
    {
      id: 11,
      name: "Grilled Cheese",
      ingredients: ["bread", "cheese", "butter"],
      country: "America",
      isVegetarian: true,
      timeToCook: 15,
    },
    {
      id: 12,
      name: "Gourmet Burger",
      ingredients: ["beef mince", "onion", "mustard", "salt", "pepper"],
      country: "America",
      isVegetarian: false,
      timeToCook: 45,
    },
  ];

  it("Should not modify the original array", () => {
    expect(setImportantKeys(mealsArr)).not.toStrictEqual(mealsArr);
  });

  it("should not modify existing values", () => {
    expect(setImportantKeys(mealsArr)[0].timeToCook).toBe(60);
    expect(setImportantKeys(mealsArr)[1].isVegetarian).toBe(true);
    expect(setImportantKeys(mealsArr)[2].timeToCook).toBe(45);
    expect(setImportantKeys(mealsArr)[2].isVegetarian).toBe(false);
  });

  it("Should match this exact array of objects", () => {
    expect(setImportantKeys(mealsArr)).toStrictEqual(resultsArr);
  });

  it("Should return an empty array if given a empty array", () => {
    expect(getEmployeeQuotes([])).toStrictEqual([]);
  });
});

describe("cleanCocktailResponseData() tests", () => {
  const mockCocktailData = [
    {
      idDrink: 12768,
      strDrink: "Frappé",
      strCategory: "Coffee / Tea",
      strAlcoholic: "Non alcoholic",
      strInstructions:
        "Mix together. Blend at highest blender speed for about 1 minute. Pour into a glass and drink with a straw. Notes: This works best if everything is cold (if you make fresh coffee, mix it with the milk and let it sit in the fridge for 1/2 hour. If it is not frothy, add more milk, or even just some more milk powder. The froth gradually turns to liquid at the bottom of the glass, so you will find that you can sit and drink this for about 1/2 hour, with more iced coffee continually appearing at the bottom. Very refreshing.",
      strIngredient1: "Coffee",
      strIngredient2: "Milk",
      strIngredient3: "Sugar",
      strIngredient4: null,
      strIngredient5: null,
      strIngredient6: null,
    },
    {
      idDrink: 11422,
      strDrink: "Godchild",
      strCategory: "Ordinary Drink",
      strAlcoholic: "Alcoholic",
      strInstructions: "Shake all ingredients well with cracked ice, strain into a champagne flute, and serve.",
      strIngredient1: "Vodka",
      strIngredient2: "Amaretto",
      strIngredient3: "Heavy cream",
      strIngredient4: null,
      strIngredient5: null,
      strIngredient6: null,
    },
    {
      idDrink: 11288,
      strDrink: "Cuba Libre",
      strCategory: "Ordinary Drink",
      strAlcoholic: "Alcoholic",
      strInstructions: "Build all ingredients in a Collins glass filled with ice. Garnish with lime wedge.",
      strIngredient1: "Light rum",
      strIngredient2: "Lime",
      strIngredient3: "Coca-Cola",
      strIngredient4: null,
      strIngredient5: null,
      strIngredient6: null,
    },
    {
      idDrink: 12101,
      strDrink: "Rusty Nail",
      strCategory: "Ordinary Drink",
      strAlcoholic: "Alcoholic",
      strInstructions:
        "Pour the Scotch and Drambuie into an old-fashioned glass almost filled with ice cubes. Stir well. Garnish with the lemon twist.",
      strIngredient1: "Scotch",
      strIngredient2: "Drambuie",
      strIngredient3: "Lemon peel",
      strIngredient4: null,
      strIngredient5: null,
      strIngredient6: null,
    },
  ];

  it("Should not mutate the original array", () => {
    expect(cleanCocktailResponseData(mockCocktailData)).not.toStrictEqual(mockCocktailData);
  });

  it("Should add an array for the ingredients", () => {
    expect(Array.isArray(cleanCocktailResponseData(mockCocktailData)[0].ingredients)).toBe(true);
  });

  it("Should match given structure", () => {
    expect(cleanCocktailResponseData(mockCocktailData)).toStrictEqual([
      {
        id: 12768,
        drink: "Frappé",
        category: "Coffee / Tea",
        alcoholic: "Non alcoholic",
        instructions:
          "Mix together. Blend at highest blender speed for about 1 minute. Pour into a glass and drink with a straw. Notes: This works best if everything is cold (if you make fresh coffee, mix it with the milk and let it sit in the fridge for 1/2 hour. If it is not frothy, add more milk, or even just some more milk powder. The froth gradually turns to liquid at the bottom of the glass, so you will find that you can sit and drink this for about 1/2 hour, with more iced coffee continually appearing at the bottom. Very refreshing.",
        ingredients: ["Coffee", "Milk", "Sugar"],
      },
      {
        id: 11422,
        drink: "Godchild",
        category: "Ordinary Drink",
        alcoholic: "Alcoholic",
        instructions: "Shake all ingredients well with cracked ice, strain into a champagne flute, and serve.",
        ingredients: ["Vodka", "Amaretto", "Heavy cream"],
      },
      {
        id: 11288,
        drink: "Cuba Libre",
        category: "Ordinary Drink",
        alcoholic: "Alcoholic",
        instructions: "Build all ingredients in a Collins glass filled with ice. Garnish with lime wedge.",
        ingredients: ["Light rum", "Lime", "Coca-Cola"],
      },
      {
        id: 12101,
        drink: "Rusty Nail",
        category: "Ordinary Drink",
        alcoholic: "Alcoholic",
        instructions:
          "Pour the Scotch and Drambuie into an old-fashioned glass almost filled with ice cubes. Stir well. Garnish with the lemon twist.",
        ingredients: ["Scotch", "Drambuie", "Lemon peel"],
      },
    ]);
  });

  it("Should return an empty array if given a empty array", () => {
    expect(getEmployeeQuotes([])).toStrictEqual([]);
  });
});
