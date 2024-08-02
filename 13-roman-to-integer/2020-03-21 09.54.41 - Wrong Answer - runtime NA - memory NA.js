/**
 * @param {string} s
 * @return {number}
 */

const romanToInt = s => {
  const arr = {};
  arr['I'] = 1;
  arr['X'] = 0;
  arr['C'] = 100;
  arr['M'] = 1000;
  arr['V'] = 5;
  arr['L'] = 50;
  arr['D'] = 500;

  let sum = 0;

  for (var i = 0, len = s.length; i < len; i++) {
    let item = arr[s[i]];

    let nextItem = i + 1 === len ? 0 : arr[s[i + 1]];

    if (nextItem > item) {
      sum += nextItem - item;
      i++;
    } else {
      sum += item;
    }
  }
  return sum;
};