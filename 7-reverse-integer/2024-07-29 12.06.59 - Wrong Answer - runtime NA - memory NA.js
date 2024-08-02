/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    const str = x.toString().split("").reverse().join("");
    return parseInt(str)
};