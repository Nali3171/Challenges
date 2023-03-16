import {
  addNumbers,
  convertPascalCaseToSnakeCase,
  convertStringToNumber,
  createFullName,
  findLargestNumber,
  findLengthOfPassword,
  findType,
  getHasUppercaseLetters,
  getIsValidOnNameTag,
} from "./challenge";

test("createFullName() tests", () => {
  expect(createFullName()).toBe("John Smith");
});

test("findLargestNumber() tests", () => {
  expect(findLargestNumber()).toBe(200);
});

test("addNumbers() tests", () => {
  expect(addNumbers()).toBe(36);
});

test("findLengthOfPassword() tests", () => {
  expect(findLengthOfPassword()).toBe(33);
});

test("findType() tests", () => {
  expect(findType()).toBe("This is a string");
});

test("getIsValidOnNameTag() tests", () => {
  expect(getIsValidOnNameTag()).toBe(true);
});

test("convertStringToNumber() tests", () => {
  expect(convertStringToNumber()).toBe(14.45);
});

test("getHasUppercaseLetters() tests", () => {
  expect(getHasUppercaseLetters()).toBe(true);
});

test("convertPascalCaseToSnakeCase() tests", () => {
  expect(convertPascalCaseToSnakeCase()).toBe("i_want_to_be_snake_case");
});
