var productExceptSelf = function (nums) {
  let result = [];
  let left = [];
  let right = [];
  let p = 1;
  let q = 1;

  left.push(1);
  right.push(1);

  for (let i = 0; i < nums.length - 1; i++) {
    p *= nums[i];
    left.push(p);
  }

  for (let j = nums.length - 1; j > 0; j--) {
    q *= nums[j];
    right.unshift(q);
  }

  for (let i = 0; i < left.length; i++) {
    result.push(left[i] * right[i]);
  }

  return result;
};
