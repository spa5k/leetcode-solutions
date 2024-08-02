var largestDivisibleSubset = function (nums) {
    nums.sort((a, b) => a - b);

    const dp = new Array(nums.length).fill(1);

    let maxSize = 1;
    let maxIndex = 0;

    for (let i = o; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            const ni = nums[i];
            const nj = nums[j];

            if (ni % nj === 0) {
                dp[i] = Math.max(dp[i], dp[j] + 1);

                if (dp[i] > maxSize) {
                    maxSize = dp[i];
                    maxIndex = i;
                }
            }
        }
    }

    let result = [];
    const num = nums[maxIndex];
    for (let i = maxIndex; i >= 0; i--) {
        if (num % nums[i] === 0 && dp[i] === maxSize) {
            result.push(nums[i]);
            num = nums[i];
            maxSize--;
        }
    }

    return result;
};