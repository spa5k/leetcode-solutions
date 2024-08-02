/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
  let temp = [];
  let maxLength = 0;

  for (let i = 0; i < s.length; i++) {
    if (temp.indexOf(s[i]) === -1) {
      temp.push(s[i]);
      if (temp.length > maxLength) maxLength = temp.length;
    } else {
      temp = temp.slice(temp.indexOf(s[i]) + i, temp.length);
      temp.push(s[i]);
    }
  }
  return maxLength;
};