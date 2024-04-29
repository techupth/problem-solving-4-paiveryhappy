function pivotIndex(nums) {
  let totalSum = 0;
  let leftSum = 0;

  nums.forEach((element) => {
    totalSum += element;
  });

  for (let i = 0; i < nums.length; i++) {
    if (totalSum - leftSum - nums[i] === leftSum) {
      console.log(i);
    }
    leftSum += nums[i];
  }
  console.log(-1);
}

pivotIndex([1, 7, 3, 6, 5, 6]);
pivotIndex([1, 2, 3]);
