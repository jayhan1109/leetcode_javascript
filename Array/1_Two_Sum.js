/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let obj = {};

  for (let i = 0; i < nums.length; i++) {
    let temp = target - nums[i];

    if (temp in obj) return [i, obj[temp]];

    obj[nums[i]] = i;
  }
};
