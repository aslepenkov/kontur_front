import { checkAnagram } from "./index";

test("проверены анаграммы к слову кот", () => {
  expect(checkAnagram(["кот", "ток", "окт"])).toEqual(true);
});

test("проверены анаграммы к слову КАРТОН", () => {
  expect(
    checkAnagram(["КАРТОН", "КАНТОР", "КОНТРА", "КОРНАТ", "КРАТОН", "ТРОНКА"])
  ).toEqual(true);
});

test("пустой массив анаграмм не может быть проверен", () => {
  expect(checkAnagram([])).toEqual(false);
});

test("одно слово не может быть анаграммой", () => {
  expect(checkAnagram(["КАРТОН"])).toEqual(false);
});

test("длина слов совпадает, но слова неправильные", () => {
  expect(checkAnagram(["кот", "ооо", "ттт", "ккк"])).toEqual(false);
});

test("использованы правильные буквы, но длина слов разная", () => {
  expect(checkAnagram(["кот", "ток", "окт", "коток"])).toEqual(false);
});
