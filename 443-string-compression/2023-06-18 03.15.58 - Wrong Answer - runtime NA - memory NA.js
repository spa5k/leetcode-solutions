/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  const res = [];
  let left = 0;
  let right = 1;
  let currSum = 1;
  while (right <= chars.length) {
    if (chars[left] == chars[right]) {
      currSum += 1;
    } else {
      res.push(chars[left]);
      if (currSum !== 1) {
        const currSumStr = currSum.toString();
        for (let i = 0; i < currSumStr.length; i++) {
          res.push(currSumStr[i]);
        }
      }
      currSum = 1;
    }
    left++;
    right++;
  }
  return res;
};