function twoSum(nums, target) {
  
  const numIndices = new Map();

  for (let i = 0; i < nums.length; i++) {
    numIndices.set(nums[i], i);
  }

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (numIndices.has(complement) && numIndices.get(complement) !== i) {
      return [i, numIndices.get(complement)];
    }
  }
  return [];
}

// test case
const nums = [2, 7, 11, 15];
const target = 13;
const result = twoSum(nums, target);
console.log(result);
