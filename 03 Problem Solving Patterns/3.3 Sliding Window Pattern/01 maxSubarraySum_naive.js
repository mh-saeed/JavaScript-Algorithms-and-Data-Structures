/* 
Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n     consecutive elements in the array.

Expected Behavior:


maxSubarraySum([1,2,5,2,8,1,5],2) // 10
maxSubarraySum([1,2,5,2,8,1,5],4) // 17
maxSubarraySum([4,2,1,6],1) // 6
maxSubarraySum([4,2,1,6,2],4) // 13
maxSubarraySum([],4) // null

*/

// Solution Performance:
// Time Complexity - O(N^2)

function maxSubarraySum(arr, num) {
  if (num > arr.length) {
    return null;
  }

  var max = -Infinity;

  for (let i = 0; i <= arr.length - num; i++) {
    temp = 0;

    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }

    if (temp > max) {
      max = temp;
    }
  }

  return max;
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2));
