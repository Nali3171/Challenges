/* JS4 builds on the previous challenges and adds the use of Array iterators, Arrays, For Loops, Conditionals (If, else, switch)
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
 * A function that takes an array of Booleans and then removes the false values from the given array.
 * It should create a new array only consisting of the true values.
 *
 * @param {boolean[]} booleanArr [true, true, false, false, true]
 * @return {boolean[]} [true, true, true]
 */

export const removeFalseValues = (booleanArr: Boolean[]: boolean[]) => {
  const trueValues = booleanArr.filter(boolean => boolean);
  return trueValues;
};

    

/**
 * A function that takes an array of numbers that are between 0 and 1.
 * The function needs to create a new array with the numbers converted into a percentage
 *
 * @param {number[]} numbersArr [1, .5, .7, .25]
 * @return {string[]} ["100%", "50%", "70%", "25%"]
 */

export const createPercentageList = (numbersArr: number[]): string[] => {
  const converted = numbersArr.map(number => `${number * 100}%`);
    return converted;
};


/**
 * A function that takes an array of possessions and a name.
 * The functions needs to create a new array with the name prefixed to each item.
 *
 * @param {string[]} possessionsArr ["shoes", "jacket", "belt"]
 * @param {string} name "disco"
 * @return {string[]} ["disco shoes", "disco jacket", "disco belt"]
 */

export const createListOfPossessions = (
  possessionsArr:string[],
  name: string, //object 
): string[] => {
    const newArr = possessionsArr.map(possession => name + " " + possession);
    return newArr;
  };

/* Intermediate Challenges */

/**
 * Have a look at the String method split()
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
 *
 * You may need to use it below.
 */

/**
 * A function that takes a string of numbers joined with a "+" and returns an array of those numbers.
 * The strings will need to be converted into numbers.
 * e.g 1 instead of "1"
 *
 * @param {string} numberString - "1+2+3+4+5"
 * @return {number[]} [1, 2, 3, 4, 5]
 */

export const convertStringToNumbersArray = (numberString: string): number[] => {
 const numArray = numberString.split('+').map(number => Number(number));
 return numArray;

};


/**
 * A function that takes a string of numbers joined with a "+" and creates a new array based on if the number is even or odd.
 * Every number in the string will need to checked.
 *
 * @param {string} numberString - "1+2+3+4+5"
 * @return {string[]} ['odd', 'even', 'odd', 'even', 'odd']
 */

export const createOddEvenArray = (numberString: string): string[] => {
    const numberArray = convertStringToNumbersArray(numberString);
    const oddEvenArray = numberArray.map(number => (number % 2 === 0 ? "even" : "odd"));
    return oddEvenArray;
  };

/**
 * A function that takes an array of book titles and a search term.
 * The function needs to remove any book titles that do not include the search term.
 *
 * @param {string[]} booksArr ["JavaScript: The Definitive Guide", "JavaScript: The Good Parts", "The Google story", "React for Dummies"]
 * @param {string} - searchTerm - "Google"
 * @return {string[]} - ["The Google story"]
 */

export const filterBooksBySearch = (
  booksArr: string[], 
  searchTerm: string,
): string[] => {
  const searchResult = booksArr.filter(book => book.includes(searchTerm));
  return searchResult;
};


/* Advanced Challenges */

/**
 * A function that takes a list, cleans each item and joins them with a +.
 * When it "cleans" it removes whitespace and makes sure the string is lowercase.
 *
 * This function is failing the tests can you figure out why?
 * The bug is within the function, the tests are fine.
 * Can you get it to pass the tests?
 *
 * @param {string[]} stringArr ["  dIsco", " ShOes "]
 * @return {string} "disco+shoes"
 */

export const formatStringArray = (stringArr: string[]) => {
 const cleanedString = stringArr.map(string =>{
  const cleanStr = string.trim().toLowerCase();
  return cleanStr;
 });
 const joinedString = cleanedString.join("+");

 return joinedString;
};

/**
 * A function that takes a string, cleans it and formats it based on a condition.
 *
 * It will need to remove anything that is NOT a letter from the string.
 * - e.g numbers, punctuation, whitespace.
 *
 * If the index of the letter is even the letter needs to be Uppercase.
 * If the index of the letter is odd the letter needs to be Lowercase.
 *
 * @param {string} string " 22 $$He LL--O!%^& "
 * @return {string[]} [ 'H', 'e', 'L', 'l', 'O' ]
 */

export const formatString = (string: string): string[] => {
   const cleanStr = string.replace(/[^\w]|[\s\d]/gi, "");
  const formatString = cleanStr
    .split("")
    .map((letter, index) => (index % 2 === 0 ? letter.toUpperCase() : letter.toLowerCase()));
  return formatString;
};

/**
 * Expert Challenges
 */

/**
 * A function that takes an array and FizzBuzzes it.
 *
 * It should remove anything from the given array that is NOT a POSITIVE number or a POSITIVE number as a STRING.
 *
 * If we were given [-1, "disco", "3", 5, "15", 2, 0]
 * We would be left with this ["3", 5, "15", 2]
 *
 * It then needs to create a NEW array from this clean array based on the conditions below:
 *
 * For multiples of three replace the number with "Fizz".
 * For multiples of five replace the number with "Buzz".
 * For numbers which are multiples of both three and five replace the number with "FizzBuzz".
 * All the other numbers need to be strings.
 *
 * @param {*[]} mixedArray [-1, "disco", "3", 5, "15", 2, 0]
 * @return {string[]} [ "Fizz", "Buzz", "FizzBuzz", "2" ]
 */

export const fizzBuzz = (mixedArray: any[]): string[] => {
  const positiveNumberArray = mixedArray.filter((item: any) => Number(item) && item > 0) as string[] | number[];

  const fizzBuzz = positiveNumberArray.map(number => {
    let string = "";

    if (!(+number % 3)) string += "Fizz";
    if (!(+number % 5)) string += "Buzz";

    return string || number.toString();
  });

  return fizzBuzz;
};
