var twoSum = function (nums, target) {
  for (let i = 0; i <= nums.length; i++) {
    for (let j = i + 1; j <= nums.length; j++) {
      let sum = nums[i] + nums[j];
      if (sum == target) {
        return [i, j];
      }
    }
  }
};

console.log(twoSum([1, 2, 3, 5, 6], 5));
