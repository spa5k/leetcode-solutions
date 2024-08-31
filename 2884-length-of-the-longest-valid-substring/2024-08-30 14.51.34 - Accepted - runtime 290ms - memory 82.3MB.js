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
    let start = 0;

    for (let end = 0; end < word.length; end++) {
        for (let k = end; k > Math.max(end - 10, start - 1); k--) {
            let currentSubstring = word.substring(k, end + 1);

            if (forbiddenSet.has(currentSubstring)) {
                start = k + 1;
                break;
            }
        }

        let currentLength = end - start + 1;
        max = Math.max(max, currentLength);
    }
    return max;
};