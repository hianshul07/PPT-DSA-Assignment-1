function findErrorNums(nums) {
  const unique = new Set();
  let duplicate = 0;
  let missing = 0;

  for (let num of nums) {
    if (unique.has(num)) {
      duplicate = num;
    }
    unique.add(num);
    missing += num;
  }

  const expectedSum = (nums.length * (nums.length + 1)) / 2;
  missing = expectedSum - (missing - duplicate);

  return [duplicate, missing];
}

// test case
const nums = [1, 2, 2, 4];
const result = findErrorNums(nums);
console.log(result);
