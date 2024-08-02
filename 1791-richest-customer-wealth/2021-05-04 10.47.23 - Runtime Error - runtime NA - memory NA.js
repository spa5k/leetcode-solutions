/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  Math.max(...accounts.map((i) => a.reduce((b, c) => (b += c), 0)));
};