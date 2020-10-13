/**
 * The function must accept any integer as arguments and return two arrays of numbers.
 *
 * @param {number} number specified integer
 * @returns {Array. <Array. <number>, Array. <number>>} The first array must contain numbers from 0 to the specified number, which are divisible by 3,
 * in the second - all numbers from 0 to a given number that are divisible by 5.
 * @example
 *
 * getArrays (5)
 * // => [[3], [5]]
 */
function getArrays(number) {
  const arrSize = number < 0 ? -number + 1 : number + 1;

  let initArray = [...Array(arrSize).keys()];

  return initArray
    .map((e) => (number < 0 ? -e : e))
    .reduce(
      (acc, val) => {
        if (val === 0) return acc;
        if (val % 3 === 0) acc[0].push(val);
        if (val % 5 === 0) acc[1].push(val);
        return acc;
      },
      [[], []]
    );
}

/**
 * Describe the encode (text, openAlph, secureAlph) substitution encryption function.
 *
 * For encryption, you must replace each character of the open alphabet
 * the corresponding closed alphabet character.
 * If non-alphabetic characters are found in the text, they should be left unchanged.
 *
 * @param {string} text - the text to be encrypted
 * @param {string} openAlph - open alphabet
 * @param {string} secureAlph - encrypted alphabet
 * @returns {string} encrypted text
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

/**
 * Describe the function of checking anagrams checkAnagram (anagramArray).
 *
 * @param {Array. <string>} anagramArray is an array of strings to check.
 * @returns {boolean} true / false depending on whether all words of the array can be composed of the same letters
 * @example
 *
 * checkAnagram(["КАРТОН", "КАНТОР", "КОНТРА"]);
 * // true
 * checkAnagram(["КАРТОН", "КАНТОР", "РАПТОР"]);
 * // false
 */
function checkAnagram(anagramArray) {
  if (anagramArray === null) return false;

  if (anagramArray.length <= 1) return false;

  const notSameLength = (word, i, arr) => word.length !== arr[0].length;
  if (anagramArray.some(notSameLength)) return false;

  const hasOddChars = (word, i, arr) => {
    const chars = word.split("");
    return arr
      .map((w) => {
        for (const c of chars) {
          if (w.split("").indexOf(c) === -1) return false;
        }
        return true;
      })
      .some((hasOdd) => !hasOdd);
  };
  if (anagramArray.some(hasOddChars)) return false;

  return true;
}

export { getArrays, encode, checkAnagram };
