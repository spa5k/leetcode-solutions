/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function (envelopes) {
    let dp = [];

    envelopes.sort((a, b) => {
        if (a[0] === b[0]) {
            return b[1] - a[1];
        } else {
            return a[0] - b[0];
        }
    });

    for (let [_, h] of envelopes) {
        let left = 0;
        let right = dp.length;

        while (left < right) {
            let mid = Math.floor((left + right) / 2);

            if (dp[mid] < h) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        if (left == dp.length) {
            dp.push(h);
        } else {
            dp[left] = h;
        }
    }

    return dp.length;
};