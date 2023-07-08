function moveZeroes(nums) {
  let left = 0;
  let right = 0;

  while (right < nums.length) {
    if (nums[right] !== 0) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
    }
    right++;
  }

  while (left < nums.length) {
    nums[left] = 0;
    left++;
  }

  return nums;
}

// test case
const nums = [0, 1, 0, 3, 12];
const result = moveZeroes(nums);
console.log(result);
