function containsDuplicate(nums) {
  const unique = new Set();

  for (let num of nums) {
    if (unique.has(num)) {
      return true;
    }
    unique.add(num);
  }

  return false;
}

// test case
const nums = [1, 2, 3, 1];
const result = containsDuplicate(nums);
console.log(result);
