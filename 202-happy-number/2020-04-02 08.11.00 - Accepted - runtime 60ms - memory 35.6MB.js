/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = (n)=> {
   const u = n.toString().split('').reduce(((ac,cv) => ac + Math.pow(cv,2)), 0);
    if (u === 1) return true;
    if (u === 4) return false;
    else return isHappy(u);
};