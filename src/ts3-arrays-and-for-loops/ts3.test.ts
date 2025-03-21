import {
  createRecipeString,
  encryptString,
  generateAverage,
  generateHighscores,
  getFirstAndLastItems,
  moveFirstAndLastItems,
  removeEvenNumbers,
  reverseOrder,
  totalRange,
  totalScores,
} from "./challenge";

// REMOVE  FROM describe FUNCTION TO STOP SKIPPING TEST BLOCKS

const coaches = ["Andy", "Bex", "Calum", "Charlie", "Matt", "Ollie", "Sam"];
const items = ["Apple", "Orange", "Pear"];
const scores = [20, 40, 50, 60];
const ingredients = ["Bacon", "Lettuce", "Tomato"];
const ingredientsString = "Bacon+Lettuce+Tomato";
const itemString = "Apple+Orange+Pear";

describe("Testing createRecipeString()", () => {
  it("Should handle multiple inputs", () => {
    expect(createRecipeString(ingredients)).toEqual(ingredientsString);
    expect(createRecipeString(items)).toEqual(itemString);
  });

  it("Should handle a single item", () => {
    expect(createRecipeString(["hat"])).toBe("hat");
  });
});

describe("Testing getFirstAndLastItems()", () => {
  it("Should handle multiple inputs", () => {
    expect(getFirstAndLastItems(coaches)).toEqual(["Andy", "Sam"]);
    expect(getFirstAndLastItems(items)).toEqual(["Apple", "Pear"]);
  });
});

describe("Testing totalScores()", () => {
  it("Should handle single input", () => {
    expect(totalScores([10])).toBe(10);
    expect(totalScores([1000])).toBe(1000);
    expect(totalScores([45])).toBe(45);
  });

  it("Should handle multiple inputs", () => {
    expect(totalScores(scores)).toBe(170);
    expect(totalScores(Array(50).fill(2))).toBe(100);
    expect(totalScores(Array(90).fill(4))).toBe(360);
  });
});

describe("Testing totalRange()", () => {
  it("Should Total up the range of numbers", () => {
    expect(totalRange(5)).toBe(15);
    expect(totalRange(10)).toBe(55);
    expect(totalRange(50)).toBe(1275);
  });

  it("Should Total larger numbers", () => {
    expect(totalRange(200)).toBe(20100);
    expect(totalRange(2000)).toBe(2001000);
  });
});

describe("Testing moveFirstAndLastItems()", () => {
  it("Should handle multiple inputs", () => {
    expect(moveFirstAndLastItems(items)).toEqual(["Pear", "Apple", "Orange"]);
    expect(moveFirstAndLastItems(ingredients)).toEqual(["Tomato", "Bacon", "Lettuce"]);
  });
});

describe("Testing removeEvenNumbers()", () => {
  it("Should remove even numbers from array", () => {
    expect(removeEvenNumbers([2])).toEqual([]);
    expect(removeEvenNumbers([1])).toEqual([1]);
    expect(removeEvenNumbers([123456])).toEqual([]);
  });

  it("Should remove even numbers from a small array", () => {
    expect(removeEvenNumbers(scores)).toEqual([]);
    expect(removeEvenNumbers([1, 2, 3])).toEqual([1, 3]);
    expect(removeEvenNumbers([1553445, 442, 23313])).toEqual([1553445, 23313]);
  });

  it("Should remove even numbers from a large array", () => {
    expect(removeEvenNumbers(Array(100).fill(24))).toEqual([]);
    expect(removeEvenNumbers(Array(100).fill(1)).length).toBe(100);
    expect(removeEvenNumbers(Array(5505).fill(1)).length).toBe(5505);
  });

  it("Should return a new array", () => {
    expect(removeEvenNumbers(scores)).not.toBe(scores);
  });
});

describe("Testing generateAverage()", () => {
  it("Should calculate the average of different numbers", () => {
    expect(generateAverage([1, 2, 3, 4, 5, 6])).toBe(4);
    expect(generateAverage([50, 60, 30, 70])).toBe(53);
    expect(generateAverage([50, 60, 30, 70, 61])).toBe(54);
  });

  it("Should calculate the average of same numbers", () => {
    expect(generateAverage(Array(500).fill(56))).toBe(56);
    expect(generateAverage(Array(50).fill(1))).toBe(1);
  });

  it("Should handle an empty array", () => {
    expect(generateAverage([] as number[])).toBe(0);
  });
});

describe("Testing reverseOrder()", () => {
  it("Should not change a single item array", () => {
    expect(reverseOrder(["Pear"])).toEqual(["Pear"]);
    expect(reverseOrder(["Orange"])).toEqual(["Orange"]);
    expect(reverseOrder([45])).toEqual([45]);
  });

  it("Should return multiple item Array Reversed", () => {
    expect(reverseOrder(coaches)[0]).toBe("Sam");
    expect(reverseOrder(items)).toEqual(["Pear", "Orange", "Apple"]);
    expect(reverseOrder(["Pear", "Orange", "Apple"])).toEqual(items);
    expect(reverseOrder([1, 2, 3])).toEqual([3, 2, 1]);
  });

  it("Should return a new array", () => {
    expect(reverseOrder(items)).not.toBe(items);
    expect(reverseOrder(ingredients)).not.toBe(ingredients);
  });
});

describe("Testing generateHighscores()", () => {
  let players: string[], playerScores: number[], highscores: string[];
  beforeEach(() => {
    players = ["Andy", "Bex", "Calum"];
    playerScores = [60, 99, 71];
    highscores = ["P:1 Andy scored 60", "P:2 Bex scored 99", "P:3 Calum scored 71"];
  });

  it("Should format arrays with valid parameters", () => {
    expect(generateHighscores(players, playerScores)).toEqual(highscores);
    players.pop();
    playerScores.pop();
    highscores.pop();
    expect(generateHighscores(players, playerScores)).toEqual(highscores);
  });

  it("Should not lose any players", () => {
    expect(generateHighscores(Array(10).fill("A"), Array(10).fill(1)).length).toBe(10);
  });

  it("Should catch invalid parameters.", () => {
    players.pop();
    expect(generateHighscores(players, playerScores)).toBe("invalid inputs");
    expect(generateHighscores(["dave"], [1, 2])).toBe("invalid inputs");
    expect(generateHighscores([], [])).toBe("invalid inputs");
  });

  it("Should return a new Array", () => {
    expect(generateHighscores(players, playerScores)).not.toBe(players);
    expect(generateHighscores(players, playerScores)).not.toBe(playerScores);
  });
});

describe("Testing encryptString()", () => {
  it("Should NOT encrypt three letters", () => {
    expect(encryptString("hey")).toBe("hey");
    expect(encryptString("ola")).toBe("ola");
  });

  it("Should encrypt after three plus letters", () => {
    expect(encryptString("heya")).toBe("haey");
    expect(encryptString("disco")).toBe("dcios");
    expect(encryptString("cellardoor")).toBe("cldreaolro");
  });

  it("Should encrypt large words", () => {
    expect(encryptString("antidisestablishmentarianism")).toBe("aistlhnrnmndeaimtiitisbseaas");
    expect(encryptString("hippopotomonstrosesquippedaliophobia")).toBe("hpomsosielpbiototsqpdihipponreupaooa");
  });

  it("Should keep spaces between words", () => {
    expect(encryptString("keep it secret")).toBe("kpteee  cteisr");
    expect(encryptString("keep it safe.")).toBe("kpta.e  feise");
  });

  it("Should handle empty input", () => {
    expect(encryptString("")).toBe("");
  });
});
