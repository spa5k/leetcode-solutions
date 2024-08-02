/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = (s) => {
  var lastWord = s.match(/\w+$/)[0];
  return lastWord.length;
};