/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let y= x.toString().split('').reverse().join('');
    return y
};