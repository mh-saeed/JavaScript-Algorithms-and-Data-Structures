// Binary Search
// Write a function called binarySearch which accepts a sorted array and
// a value and returns the index at which the value exists. Otherwise, return -1.

// Time Complexity - O(log n)

function binarySearch(arr, value) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (arr[middle] === value) return middle;

    if (value > arr[middle]) {
      left = middle + 1;
    } else right = middle - 1;
  }
  return -1;
}

console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 103));

console.log(
  binarySearch([5, 6, 10, 14, 18, 30, 37, 40, 44, 79, 84, 86, 98, 99], 10)
); // 2
console.log(
  binarySearch([5, 10, 16, 34, 37, 40, 44, 64, 84, 86, 95, 98, 99], 95)
); // 10
console.log(
  binarySearch([5, 6, 13, 14, 18, 64, 79, 84, 86, 95, 96, 98, 99], 100)
); // -1
