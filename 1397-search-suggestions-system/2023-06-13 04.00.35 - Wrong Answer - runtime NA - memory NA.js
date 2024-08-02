/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function (products, searchWord) {
  products.sort();

  const ans = [];

  let l = 0;
  let r = products.length - 1;

  for (let i = 0; i < products.length; i++) {
    const res = [];
    let c = searchWord[i];

    while (products[l].charAt(i) < c) {
      l++;
    }
    while (products[r].charAt(i) > c) {
      r--;
    }
    for (let j = 0; j < 3 && l + j <= r; j++) {
      res.push(products[l + j]);
    }
    ans.push(res);
  }
  return ans;
};