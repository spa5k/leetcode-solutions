var countGoodSubstrings = function (s) {
  let res = 0;
  const map = {};
  for (let index = 0; index < s.length; index++) {
    if (index > 2) {
      const x = map[s[index - 3]] - 1;
      if (x === 0) {
        delete map[s[index - 3]];
      }
    }
    if (map[s[index]] !== undefined) {
      map[s[index]]++;
    } else {
      map[s[index]] = 1;
    }

    if (Object.keys(map).length === 3) {
      res++;
    }
  }
  return res;
};