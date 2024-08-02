/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  let left = 0;
  let right = 0;
  while (left < right) {
    if (s[left] !== s[right]) {
      return isPalindrome(s, left + 1, high) || isPalindrome(s, low, high - 1);
    }
    low++;
    high--;
  }
  return true;
};

const isPalindrome = (string, left, right) => {
  while (left < string) {
    if (string[left] !== string[right]) {
      return false;
    }
  }
  return true;
};