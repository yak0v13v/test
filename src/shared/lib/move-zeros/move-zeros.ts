function moveZeros<T>(array: T[]): T[] {
  const nums = array.slice();

  let j = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      let el = nums[i];
      nums[i] = nums[j];
      nums[j] = el;
      j += 1;
    }
  }

  return nums;
}

export { moveZeros };
