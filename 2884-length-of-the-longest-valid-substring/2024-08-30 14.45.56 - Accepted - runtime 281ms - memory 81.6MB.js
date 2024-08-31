/**
 * @param {string} word
 * @param {string[]} forbidden
 * @return {number}
 */
var longestValidSubstring = function (word, forbidden) {
    const forbiddenSet = new Set();
    for (let f of forbidden) {
        forbiddenSet.add(f);
    }

    let max = 0;

    for (let start = 0, end = 0; end < word.length; end++) {
        for (let k = end; k > Math.max(end - 10, start - 1); k--) {
            if (forbiddenSet.has(word.substring(k, end + 1))) {
                start = k + 1;
            }
        }
        max = Math.max(max, end - start + 1);
    }
    return max;
};