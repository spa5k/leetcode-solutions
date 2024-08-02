/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
  let b = 0;
  let l = 0;
  let o = 0;
  let n = 0;
  let a = 0;
  for (const i of text) {
    if (i == "b") b++;
    if (i == "a") a++;
    if (i == "l") l++;
    if (i == "o") o++;
    if (i == "n") n++;
  }

  l = Math.floor(l / 2);
  o = Math.floor(o / 2);

  const min = Math.min;
  return min(b, min(a, min(l, min(o, b))));
};