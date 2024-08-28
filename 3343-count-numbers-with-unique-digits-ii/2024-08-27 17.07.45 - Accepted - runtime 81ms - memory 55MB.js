/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var numberCount = function (a, b) {
    let count = 0;

    for (let i = a; i <= b; i += 1) {
        const str = String(i);
        const set = new Set([...str]);

        if (set.size === str.length) {
            count += 1;
        }
    }

    return count;
};