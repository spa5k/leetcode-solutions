/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function(s) {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  //Just check next character value with current value if it is less than subtract from result else add to result;

  let result = 0;
  for (let i = 0; i < s.length - 1; i++) {
    if (map[s[i]] < map[s[i + 1]]) result += -map[s[i]];
    else result += map[s[i]];
  }
  result += map[s[s.length - 1]];
  return result;
};

// console.log(romanToInt('MCMXCIV'));
