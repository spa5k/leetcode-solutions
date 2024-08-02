/**
 * @param {number[][]} grid
 * @return {number}
 */
const minPathSum=t=>{const e=t.length,n=t[0].length;for(let n=1;n<e;n++)t[n][0]+=t[n-1][0];for(let e=1;e<n;e++)t[0][e]+=t[0][e-1];for(let l=1;l<e;l++)for(let e=1;e<n;e++)t[l][e]+=Math.min(t[l-1][e],t[l][e-1]);return t[e-1][n-1]};