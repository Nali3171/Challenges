/* Foundation Challenges */

const firstName = "John";
const lastName = "Smith";

export const createFullName = (): string => {
  const returnString = firstName + " " + lastName;

  return returnString;
};

const largeNumber1 = 100;
const largeNumber2 = 200;

export const findLargestNumber = (): number => {
  if (largeNumber1 > largeNumber2) {
    return largeNumber1;
  } else {
    return largeNumber2;
  }
};

const addNumber1 = 12;
const addNumber2 = 24;

export const addNumbers = (): number => {
  const sum = addNumber1 + addNumber2;

  return sum;
};

/* Intermediate Challenges */

const password = "thisIsMyVeryLongPassword123456789";

export const findLengthOfPassword = (): number => {
  const lengthOfString = password.length;

  return lengthOfString;
};

const thing = "I am a thing";

export const findType = (): string => {
  const thingType = typeof thing;

  if (thingType === "string") {
    return "This is a string";
  } else if (thingType === "number") {
    return "This is a number";
  } else if (thingType === "boolean") {
    return "This is a boolean";
  } else {
    return "I don't know what this thing is";
  }
};

const nameTagOption = "Timothy";

export const getIsValidOnNameTag = (): boolean => {
  const firstLetterOfName = nameTagOption.substring(0, 1);
  const isValidName = nameTagOption.length <= 8 && firstLetterOfName === firstLetterOfName.toUpperCase();

  return isValidName;
};

/* Advanced Challenges */

const stringToConvert = "14.45";

export const convertStringToNumber = (): number => {
  const convertedString = parseFloat(stringToConvert);

  return convertedString;
};

const stringWithUppercaseLetters = "I Am A String With Uppercase Letters";

export const getHasUppercaseLetters = (): boolean => {
  const regex = /([A-Z])/g;
  const hasUpperCaseLetters = regex.test(stringWithUppercaseLetters);

  return hasUpperCaseLetters;
};

/* Expert Challenges */

const pascalCaseVariableName = "IWantToBeSnakeCase";

export const convertPascalCaseToSnakeCase = (): string => {
  const splitWords = pascalCaseVariableName.split(/(?=[A-Z])/);
  const joinedWordsWithUnderscores = splitWords.join("_");
  const snakeCase = joinedWordsWithUnderscores.toLowerCase();

  return snakeCase;
};
