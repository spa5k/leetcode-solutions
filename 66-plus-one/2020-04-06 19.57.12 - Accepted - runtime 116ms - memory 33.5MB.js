/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = (digits) => {
  for (var i = digits.length - 1; i >= 0; i--) {
    if (++digits[i] > 9) digits[i] = 0;
    else return digits;
  }
  return [1, ...digits];
};