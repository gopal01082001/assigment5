
// 💡 **Question 7**

// Suppose an array of length n sorted in ascending order is **rotated** between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

// - [4,5,6,7,0,1,2] if it was rotated 4 times.
// - [0,1,2,4,5,6,7] if it was rotated 7 times.

// Notice that **rotating** an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

// Given the sorted rotated array nums of **unique** elements, return *the minimum element of this array*.

// You must write an algorithm that runs in O(log n) time.

// **Example 1:**

// **Input:** nums = [3,4,5,1,2]

// **Output:** 1

// **Explanation:**

// The original array was [1,2,3,4,5] rotated 3 times.

// To find the minimum element in a sorted rotated array with unique elements, you can use a modified binary search algorithm. The basic idea is to divide the array into two parts and check which part contains the minimum element.

// Here's the algorithm in JavaScript:

// javascript
// Copy code
function findMin(nums) {
  let left = 0;
  let right = nums.length - 1;

  // If the array is not rotated, return the first element
  if (nums[right] > nums[left]) {
    return nums[left];
  }

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    // Check if the mid element is greater than the next element
    if (nums[mid] > nums[mid + 1]) {
      return nums[mid + 1];
    }

    // Check if the mid element is smaller than the previous element
    if (nums[mid] < nums[mid - 1]) {
      return nums[mid];
    }

    // If the mid element is greater than the leftmost element,
    // the minimum element is in the right part of the array
    if (nums[mid] > nums[left]) {
      left = mid + 1;
    } else {
      // If the mid element is smaller than the rightmost element,
      // the minimum element is in the left part of the array
      right = mid - 1;
    }
  }

  // If no minimum element is found, return the leftmost element
  return nums[left];
}

// Example usage:
const nums = [3, 4, 5, 1, 2];
const min = findMin(nums);
console.log(min); // Output: 1
// The algorithm starts by checking if the array is not rotated (i.e., the rightmost element is greater than the leftmost element). If this condition is true, it means the array is sorted in ascending order, and the first element is the minimum.

// If the array is rotated, the algorithm uses binary search to find the minimum element. It compares the middle element with its adjacent elements to determine if it's the minimum. If not, it adjusts the left and right pointers based on whether the mid element is greater or smaller than the leftmost element.

// The algorithm continues the binary search until the left and right pointers meet, at which point the minimum element is found.

// The time complexity of this algorithm is O(log n) since it performs binary search on the rotated array.