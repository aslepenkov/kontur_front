/**
 * Опишите функцию проверки  анаграмм checkAnagram(anagramArray).
 *
 * @param {Array.<string>} anagramArray - массив строк, которые нужно проверить.
 * @returns {boolean} true/false в зависимости от того можно ли все слова массива составить из одних и тех же букв
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

export { checkAnagram };
