/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = (s) => {
  return (s.match(/(\w+)\s*$/) || [, ""])[1].length;
};