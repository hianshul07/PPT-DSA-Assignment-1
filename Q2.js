function removeElement(nums, val) {
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
}

// test case
const nums = [3, 2, 2, 3];
const val = 3;
const result = removeElement(nums, val);
console.log(result);
console.log(nums);
