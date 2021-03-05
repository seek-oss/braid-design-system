/* eslint-disable no-param-reassign */
const method = 'round';
export default function round(number, precision) {
  if (typeof number !== 'number') {
    throw new TypeError('Expected value to be a number');
  }

  if (precision === Infinity) {
    return number;
  }

  if (!Number.isInteger(precision)) {
    throw new TypeError('Expected precision to be an integer');
  }

  const isRoundingAndNegative = method === 'round' && number < 0;
  if (isRoundingAndNegative) {
    number = Math.abs(number);
  }

  let exponent;
  [number, exponent] = `${number}e`.split('e');
  let result = Math[method](`${number}e${Number(exponent) + precision}`);

  [number, exponent] = `${result}e`.split('e');
  result = Number(`${number}e${Number(exponent) - precision}`);

  if (isRoundingAndNegative) {
    result = -result;
  }

  return result;
}
