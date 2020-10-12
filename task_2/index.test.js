import { encode } from "./index";

const openAlph = "abcdefghijklmnopqrstuvwxyz";
const secureAlph = "pcabdefqiouwglthmxkjnvzrsy";
const secondSecureAlph = "hcgibkrwfalvmtnosqzduepjxy";

test("строка 'hello'", () => {
  expect(encode("hello", openAlph, secureAlph)).toEqual("qdwwt");
});

test("пустая строка", () => {
  expect(encode("", openAlph, secureAlph)).toEqual("");
});

test("числа и пробелы", () => {
  expect(encode("1 2", openAlph, secureAlph)).toEqual("1 2");
});

test("заглавные буквы", () => {
  expect(encode("Hello", openAlph, secureAlph)).toEqual("Qdwwt");
});

test("второй вариант шифрованного алфавита", () => {
  expect(encode("Hello", openAlph, secondSecureAlph)).toEqual("Wbvvn");
});

test("знаки препинания", () => {
  expect(encode("Hello, World!", openAlph, secureAlph)).toEqual(
    "Qdwwt, Ztxwb!"
  );
});
