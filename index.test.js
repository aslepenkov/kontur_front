import { getArrays, encode, checkAnagram } from "./index";

const openAlph = "abcdefghijklmnopqrstuvwxyz";
const secureAlph = "pcabdefqiouwglthmxkjnvzrsy";
const secondSecureAlph = "hcgibkrwfalvmtnosqzduepjxy";

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
    [5, 10, 15],
  ]);
});

test("negative number", () => {
  expect(getArrays(-10)).toEqual([
    [-3, -6, -9],
    [-5, -10],
  ]);
});

test("string 'hello'", () => {
  expect(encode("hello", openAlph, secureAlph)).toEqual("qdwwt");
});

test("empty string", () => {
  expect(encode("", openAlph, secureAlph)).toEqual("");
});

test("numbers and spaces", () => {
  expect(encode("1 2", openAlph, secureAlph)).toEqual("1 2");
});

test("capital letters", () => {
  expect(encode("Hello", openAlph, secureAlph)).toEqual("Qdwwt");
});

test("the second variant of the encrypted alphabet", () => {
  expect(encode("Hello", openAlph, secondSecureAlph)).toEqual("Wbvvn");
});

test("punctuation marks", () => {
  expect(encode("Hello, World!", openAlph, secureAlph)).toEqual(
    "Qdwwt, Ztxwb!"
  );
});

test("anagrams to the word cat were checked", () => {
  expect(checkAnagram(["кот", "ток", "окт"])).toEqual(true);
});

test("checked anagrams to the word CARDBOARD", () => {
  expect(
    checkAnagram(["КАРТОН", "КАНТОР", "КОНТРА", "КОРНАТ", "КРАТОН", "ТРОНКА"])
  ).toEqual(true);
});

test("an empty array of anagrams could not be tested", () => {
  expect(checkAnagram([])).toEqual(false);
});

test("one word cannot be an anagram", () => {
  expect(checkAnagram(["КАРТОН"])).toEqual(false);
});

test("the length of the words matches, but the words are wrong", () => {
  expect(checkAnagram(["кот", "ооо", "ттт", "ккк"])).toEqual(false);
});

test("the correct letters are used, but the length of the words is different", () => {
  expect(checkAnagram(["кот", "ток", "окт", "коток"])).toEqual(false);
});
