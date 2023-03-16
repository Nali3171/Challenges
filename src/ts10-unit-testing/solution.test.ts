import { checkLarger, filterByLength, greet, reduceNumbers, sumTwoNumbers } from "./ts10";

test.skip("Should return correct string", () => {
  expect(greet()).toBe("Hello, nice to meet you");
});

test.skip("Should add two numbers together", () => {
  expect(sumTwoNumbers(1, 2)).toBe(3);
  expect(sumTwoNumbers(3, 7)).toBe(10);
  expect(sumTwoNumbers(4, 1)).toBe(5);
});

test.skip("Should return string based on which number is larger", () => {
  expect(checkLarger(5, 5)).toBe("Both numbers are equal");
  expect(checkLarger(5, 1)).toBe("5 is bigger than 1");
  expect(checkLarger(1, 5)).toBe("5 is bigger than 1");
});

test.skip("Should return new array of names based on length", () => {
  expect(filterByLength(["Paul", "Calum", "Rebecca"])).toMatchObject(["Paul", "Calum"]);
  expect(filterByLength(["Johnathan", "Sylvester", "Charlie"])).toBe("Sorry, no valid names supplied");
  expect(filterByLength(["Tom", "Dick", "Harry"])).toMatchObject(["Tom", "Dick", "Harry"]);
});

test.skip("Should reduce all numbers correctly", () => {
  expect(reduceNumbers([255, 230, 30], 10)).toMatchObject([245, 220, 20]);
  expect(reduceNumbers([40, 30, 20], 50)).toMatchObject([0, 0, 0]);
  expect(reduceNumbers([300, 310, 320], 40)).toMatchObject([255, 255, 255]);
});
