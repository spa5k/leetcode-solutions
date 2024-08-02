var maxProfit = function (prices) {
  let left = 0;
  let right = 0;
  let mProfit = 0;

  for (let index = 0; index < prices.length - 1; index++) {
    let currentProfitt = prices[right] - prices[left];
    if (prices[left] > prices[right]) {
      left = right;
      right++;
    }
    mProfit = Math.max(currentProfitt, mProfit);
    right++;
  }
  return mProfit;
};