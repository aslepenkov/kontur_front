/**
 * Функция должна принимать в качестве аргументов любое целое число и возвращать два массива чисел.
 *
 * @param {number} number заданное целое число
 * @returns {Array.<Array.<number>, Array.<number>>} В первый массив должны попасть числа от 0 до заданного числа,которые делятся на 3,
 * во второй - все числа от 0 до заданного числа,которые делятся на 5.
 * @example
 *
 * getArrays(5)
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

export default getArrays;
