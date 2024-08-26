/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function (input) {
    const map = new Map();

    let count = 1;

    for (const s of input) {
        if (map.has(s)) {
            count++;
            map.clear();
        }
        map.set(s, true);
    }
    return count;
};