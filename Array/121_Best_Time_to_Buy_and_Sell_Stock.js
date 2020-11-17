var maxProfit = function (prices) {
  let maxDiff = Number.MIN_VALUE;
  let min = Number.MAX_VALUE;

  for (num of prices) {
    if (num < min) {
      min = num;
    } else {
      maxDiff = Math.max(maxDiff, num - min);
    }
  }

  return maxDiff === Number.MIN_VALUE ? 0 : maxDiff;
};
