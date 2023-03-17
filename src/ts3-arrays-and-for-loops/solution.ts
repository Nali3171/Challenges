/* Foundation Challenges */

export const createRecipeString = (ingredientsArr: string[]): string => {
  const recipeString = ingredientsArr.join("+");
  return recipeString;
};

export const getFirstAndLastItems = (itemsArr: string[]): string[] => {
  const first = itemsArr[0];
  const last = itemsArr[itemsArr.length - 1];
  return [first, last];
};

export const totalScores = (scoreArr: number[]): number => {
  let total = 0;
  for (let index = 0; index < scoreArr.length; index++) {
    total += scoreArr[index];
  }
  return total;
};

/* Intermediate Challenges */

export const totalRange = (rangeMax: number): number => {
  let total = 0;
  for (let index = 0; index <= rangeMax; index++) {
    total += index;
  }
  return total;
};

export const moveFirstAndLastItems = (itemsArr: string[]): string[] => {
  const result = [...itemsArr];
  const lastItem = result.pop();
  if (lastItem) {
    result.unshift(lastItem);
  }
  return result;
};

export const removeEvenNumbers = (numberArr: number[]): number[] => {
  const oddNumbers = [];
  for (let index = 0; index < numberArr.length; index++) {
    let current = numberArr[index];
    if (current % 2 !== 0) {
      oddNumbers.push(current);
    }
  }
  return oddNumbers;
};

/* Advanced Challenges*/

export const generateAverage = (numberArr: number[]): number => {
  const total = totalScores(numberArr);
  const average = total / numberArr.length;
  return Math.round(average) || 0;
};

export const reverseOrder = (toReverseArr: any[]): any[] => {
  const reversed = [];
  for (let index = toReverseArr.length - 1; index >= 0; index--) {
    reversed.push(toReverseArr[index]);
  }
  return reversed;
};

/* Expert Challenges */

export const generateHighscores = (playersArr: string[], scoresArr: number[]): string[] | "invalid inputs" => {
  if (playersArr.length !== scoresArr.length || !playersArr.length) return "invalid inputs";
  const scores: string[] = [];
  while (scores.length !== playersArr.length) {
    const index = scores.length;
    const message = `P:${index + 1} ${playersArr[index]} scored ${scoresArr[index]}`;
    scores.push(message);
  }

  return scores;
};

export const encryptString = (toEncrypt: string): string => {
  const encryptArray: string[][] = [[], [], []];

  for (let index = 0; index < toEncrypt.length; index++) {
    const placementIndex = index % 3;
    const letter = toEncrypt[index];
    encryptArray[placementIndex].push(letter);
  }

  return encryptArray.flat().join("");
};
