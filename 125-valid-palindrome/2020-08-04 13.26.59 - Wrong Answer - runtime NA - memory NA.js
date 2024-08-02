/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    return s.split('').reverse().join('') == s
};