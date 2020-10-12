/**
 * Опишите функцию шифрования методом подстановки encode(text, openAlph, secureAlph).
 *
 * Для шифрования необходимо каждый символ открытого алфавита заменять
 *  соответствующим символом закрытого алфавита.
 *  Если в тексте встречаются небуквенные символы, то их нужно оставлять без изменения.
 *
 * @param {string} text - текст, который нужно зашифровать
 * @param {string} openAlph - открытый алфавит
 * @param {string} secureAlph - шифрованный алфавит
 * @returns {string} зашифрованный текст
 * @example
 *
 * encode(
 * "Jeb's on the Mun!",
 * "abcdefghijklmnopqrstuvwxyz",
 * "rsyxuqldnmzvpofceiwktjgabh",
 * );
 * // "Mus'w fo kdu Pto!"
 */
function encode(text, openAlph, secureAlph) {
  if (openAlph.length !== secureAlph.length)
    throw new Error("openAlph and secureAlph lenght must be equal");

  return text
    .split("")
    .map((char) => {
      const isUpperCase = char !== char.toLowerCase();
      const index = openAlph.split("").indexOf(char.toLowerCase());

      if (index === -1) return char;

      const encodedChar = isUpperCase
        ? secureAlph[index].toUpperCase()
        : secureAlph[index];

      return encodedChar;
    })
    .join("");
}

export { encode };
