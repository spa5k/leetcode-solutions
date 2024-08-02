var countGoodSubstrings = function (s) {
  let res = 0;
  const map = {};
  for (let i = 0; i < s.length; i++) {
    if (i > 2 && map[s[i - 3]] - 1 === 0) {
      delete map[s[i - 3]];
    }
    if (map[s[i]]) {
      map[s[i]]++;
    } else {
      map[s[i]] = 1;
    }

    if (Object.keys(map).length === 3) {
      res++;
    }
  }
  return res;
};