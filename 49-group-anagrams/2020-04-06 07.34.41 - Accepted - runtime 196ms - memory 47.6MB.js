/**
 * @param {string[]} strs
 * @return {string[][]}
 */



const groupAnagrams = strs => {
   return Object.values(strs.reduce((g, s, k) => (g[k = s.split('').sort().join('')] = [...g[k] || [], s], g), {}));
};