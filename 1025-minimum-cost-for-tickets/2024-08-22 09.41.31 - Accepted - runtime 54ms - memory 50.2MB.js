/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function (days, costs) {
    const lastDay = days[days.length - 1];

    const dp = new Array(lastDay + 1).fill(-1);

    const isTravelNeeded = {};

    for (let day of days) {
        isTravelNeeded[day] = true;
    }

    function solve(currentDay) {
        if (currentDay > days[days.length - 1]) {
            return 0;
        }

        if (!isTravelNeeded[currentDay]) {
            return solve(currentDay + 1);
        }

        if (dp[currentDay] != -1) {
            return dp[currentDay];
        }

        const oneDay = costs[0] + solve(currentDay + 1);
        const sevenDay = costs[1] + solve(currentDay + 7);
        const thirtyDay = costs[2] + solve(currentDay + 30);

        return (dp[currentDay] = Math.min(oneDay, sevenDay, thirtyDay));
    }

    return solve(1);
};