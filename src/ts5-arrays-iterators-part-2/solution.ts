/* Foundation Challenges */

export const totalScoresArr = (scoresArr: number[]): number => {
  const totalScore = scoresArr.reduce((total, current) => (total += current), 0);

  return totalScore;
};

export const reverseString = (toReverse: string): string => {
  const stringArray = toReverse.split("");
  const stringReversed = stringArray.reverse();
  const stringJoined = stringReversed.join("");

  return stringJoined;
};

export const sortCharactersAlphabetically = (characterArr: string[]): string[] => {
  const lowerCaseChar = characterArr.map(character => character.toLowerCase());

  const sortedChar = lowerCaseChar.sort();

  return sortedChar;
};

/* Intermediate Challenges */

export const sortNumbersHighToLow = (numberArr: number[]): number[] => {
  const sortedNumbers = [...numberArr].sort((a, b) => {
    return b - a;
  });
  return sortedNumbers;
};

export const checkItemInStock = (toCheck: string): string => {
  const stockList = [
    "apple",
    "banana",
    "orange",
    "coconut",
    "strawberry",
    "lime",
    "grapefruit",
    "lemon",
    "kumquat",
    "blueberry",
    "melon",
  ];

  const index = stockList.indexOf(toCheck);

  let message = `Sorry ${toCheck} is not in stock.`;

  if (index >= 0) {
    message = `${toCheck} is in stock, it is on aisle ${index}.`;
  }

  return message;
};

export const checkPrimaryColours = (coloursArr: string[]): boolean => {
  const primaryColours = ["red", "blue", "yellow"];
  const colourCheck = coloursArr.every(colour => primaryColours.includes(colour));
  return colourCheck;
};

/* Advanced Challenges */

export const checkStringPalindrome = (stringOne: string): boolean => {
  const reversedString = reverseString(stringOne);
  const checkPalindrome = reversedString === stringOne;
  return checkPalindrome;
};

export const totalNestedScoresArr = (scoresArr: number[][]): number[] => {
  const score = scoresArr.map(scoreArr => totalScoresArr(scoreArr));

  return score;
};

/* Expert Challenges */

export const encryptString = (toEncrypt: string): string => {
  const encrypted = toEncrypt
    .split("")
    .reduce(
      (total, current, index) => {
        const remainder = index % 3;
        total[remainder].push(current);
        return total;
      },
      [[], [], []] as string[][]
    )
    .flat()
    .join("");

  return encrypted;
};
