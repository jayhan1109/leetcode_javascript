/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let volume = 0;
  let left = 0;
  let right = height.length - 1;
  let leftmax = height[left];
  let rightmax = height[right];

  while (left < right) {
    leftmax = Math.max(height[left], leftmax);
    rightmax = Math.max(height[right], rightmax);

    if (leftmax > rightmax) {
      volume += rightmax - height[right];
      right--;
    } else {
      volume += leftmax - height[left];
      left++;
    }

    console.log(volume);
  }

  return volume;
};
