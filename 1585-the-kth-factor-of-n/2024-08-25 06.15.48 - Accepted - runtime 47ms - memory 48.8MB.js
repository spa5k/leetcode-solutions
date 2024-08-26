/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthFactor = function (n, k) {
    const factors = [];

    for (let i = 0; i <= n; i++) {
        if (n % i === 0) factors.push(i);
    }

    if (factors.length < k) {
        return -1;
    }

    return factors[k - 1];
};