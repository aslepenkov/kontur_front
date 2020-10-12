import getArrays from "./index";

test("number 3", () => {
  expect(getArrays(3)).toEqual([[3], []]);
});

test("number 5", () => {
  expect(getArrays(5)).toEqual([[3], [5]]);
});

test("number 0", () => {
  expect(getArrays(0)).toEqual([[], []]);
});

test("number 15", () => {
  expect(getArrays(15)).toEqual([
    [3, 6, 9, 12, 15],
    [5, 10, 15]
  ]);
});

test("отрицательный number", () => {
  expect(getArrays(-10)).toEqual([
    [-3, -6, -9],
    [-5, -10]
  ]);
});
