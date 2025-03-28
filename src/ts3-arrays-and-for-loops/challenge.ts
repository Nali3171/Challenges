/* JS3 builds on the previous challenges and adds the use of Arrays, For Loops, Conditionals (If, else, switch)
 *  & calling your own functions.
 */

/* 
  All challenges in this repository are separated into four levels: Foundation, Intermediate, Advanced and Expert.
  The expectation is to complete all Foundation level challenges, with Intermediate and upwards pushing your knowledge
  and may require you to google things in order to solve them. If you find an answer online somewhere, be kind and
  share it with the group!
*/
 
/* Foundation Challenges */

/**
 * A function that creates a a Recipe string from a given array of Ingredients.
 * Each ingredient will be joined with a +.
 *
 * @param {string[]} ingredientsArr ["Bacon","Lettuce","Tomato"]
 * @return {string} "Bacon+Lettuce+Tomato"
 */

export const createRecipeString = (ingredientsArr: string[]): string => {
  const recipeString = ingredientsArr.join("+");
  return recipeString;
};

/**
 * A function that takes Array of Items and returns a NEW ARRAY with the first and last item in it.
 *
 * @param {string[]} itemsArr ["Tony","John","Dave"]
 * @return {string[]} ["Tony","Dave"]
 */

export const getFirstAndLastItems = (itemsArr: string[]): string[] => {
  const firstName = itemsArr[0];
  const lastItem = itemsArr[itemsArr.length -1] ;
  return [firstName, lastItem];
};


/**
 * A function that takes an array of scores and returns the sum of all scores by looping through the array.
 *
 * @param {number[]} scoreArr [1,2,3]
 * @return {number} 6
 */

export const totalScores = (scoreArr: number[]): number => {
let total = 0 ;
for(let index = 0; index <scoreArr.length; index++){
  total += scoreArr[index];
}
return total;
};

/* Intermediate Challenges */

/**
 * A function that takes an number and returns the total of the range of numbers between 0 and the given number.
 * e.g. 10 => 0+1+2+3+4+5+6+7+8+9+10 = 55.
 *
 * @param {number} rangeMax 10
 * @return {number} 55
 */

export const totalRange = (rangeMax: number): number => {
   let rangeArr = 0;
   for(let i = 0; i <= rangeMax; i++){
    rangeArr += i;
   }
  return rangeArr; 
};

/**
 * A function that takes an array and returns a NEW ARRAY where the last item has been moved to the front of the array and removed from the back.
 *
 * @param {string[]} itemsArr ["Tony","John","Dave"]
 * @return {string[]} ["Dave","Tony","John"]
 */

export const moveFirstAndLastItems = (itemsArr: string[]): string[] => { // first do a deep copy
  const result = [...itemsArr];
const lastItem = result.pop(); 
if(lastItem){
  result.unshift(lastItem);
}
return result;
};


/**
 * Read this article on how to clone an array.
 * https://www.samanthaming.com/tidbits/35-es6-way-to-clone-an-array/
 *
 * From here on you should not be mutating the input array. Clone it first and then mutate / manipulate.
 */

/**
 * A function that takes an array of numbers and returns a NEW ARRAY with only the odd numbers from the given array. It should not mutate the input array.
 *
 * @param {number[]} numberArr [1,1,8,1,1,8]
 * @return {number[]} [1,1,1,1]
 */

export const removeEvenNumbers = (numberArr: number[]): number[] => {
  const oddNumber = [];
  for (let i =0 ; i < numberArr.length, i++){
    let currentNumber = numberArr[i];
    if(currentNumber % 2 !== 0){
      oddNumber.push(currentNumber);
    }
  }
  return oddNumber;
};

/* Advanced Challenges */

/**
 * A function that takes an array of numbers. It returns the average from the given array.
 * The result should be rounded to the nearest whole number.
 *
 * @param {number[]} numberArr [1,2,3]
 * @return {number} 2
 */

export const generateAverage = (numberArr: number[]): number => {
  const total = totalScores(numberArr);
  const avg = total / numberArr.length;
  return Math.round(avg) ||0;
};

/**
 * A function that uses a loop to reverse the order of an Array. It should return a NEW ARRAY and not Mutate the original array.
 *
 * @param {number[]} toReverseArr [1,2,3]
 * @return {number} [3,2,1]
 */

export const reverseOrder = (toReverseArr: any[]): any[] => { //.map()
  const reverseArr = [];
  for (let i=toReverseArr.length -1; i>=0; i--){
    reverseArr.push(toReverseArr[i]);
  }
  return reverseArr;
  
};

/* Expert Challenges */

/**
 * Given two arrays, The first being an array of players and the second being their corresponding scores. Loop through them and generate a new array matching the format below.
 *
 * ["P:INDEX PLAYER scored HIGHSCORE","P:INDEX PLAYER scored HIGHSCORE","P:INDEX PLAYER scored HIGHSCORE"]
 *
 * P:INDEX will start from 1. e.g P:1 not P:0
 *
 * If the inputs are not the same size or empty return "invalid inputs"
 *
 * @param {string[]} playersArr ["Tony","John","Dave"]
 * @param {number[]} scoresArr [45,55,66]
 * @return {string[]} ["P:1 Tony scored 45","P:2 John scored 55","P:3 Dave scored 66"]
 */

export const generateHighscores = (playersArr: string[], scoresArr: number[]): string[] | "invalid inputs" => {
  if(playersArr.length !== scoresArr.length || !playersArr.length) return "invalid inputs";

    const scores = string[] = [];  //creates an empty array
    while (scores.length !== playersArr.length){
      const i = scores.length;
      const message = `P:${index + 1} ${playersArr[index]} scored ${scoresArr[index]}`;
      scores.push(message);
    }

  return scores;
};

/**
 * A function that takes a string and creates a simple encrypted message.
 *
 * The string will be broken into 3 lists.
 * The first three letters will go into their own list.
 * The next three letters will follow this pattern.
 * Joining the first three letters in each of their list.
 * The rest of the letters will follow this pattern.
 * Each list will be joined together and returned as an encrypted message.
 *
 * The word "encrypted" would be broken into:
 *
 * ["e", "r", "t"]
 * ["n", "y", "e"]
 * ["c", "p", "d"]
 *
 * and joined together as ert + nye + cpd to give a final string of "ertnyecpd"
 *
 * @param {string} toEncrypt "encrypted"
 * @return {string} "ertnyecpd"
 */

export const encryptString = (toEncrypt: string): string => {
  const encryptArray : string[][] = [[], [], []];
 
  for( let i =0; i<toEncrypt.length; i++){
    const placementIndex = i % 3;
    const letter = toEncrypt [i];
    encryptArray[placementIndex].push(letter);
  }
  return encryptArray.flat().join("");
};
