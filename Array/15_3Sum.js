/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let threeSum = function (nums) {
  let result = [];

  if (nums.length < 3) return result;

  nums.sort((a, b) => a - b);

  for (let base = 0; base < nums.length - 2; base++) {
    while (nums[base] === nums[base - 1]) {
      base++;
    }

    let left = base + 1;
    let right = nums.length - 1;

    while (left < right) {
      let sum = nums[base] + nums[left] + nums[right];

      if (sum < 0) {
        left++;
      } else if (sum > 0) {
        right--;
      } else {
        result.push([nums[base], nums[left], nums[right]]);
        while (nums[left] === nums[left + 1]) left++;
        left++;
      }
    }
  }

  return result;
};
