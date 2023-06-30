
// 💡 **Question 3**

// Given an integer array nums sorted in **non-decreasing** order, return *an array of **the squares of each number** sorted in non-decreasing order*.

// **Example 1:**

// **Input:** nums = [-4,-1,0,3,10]

// **Output:** [0,1,9,16,100]

// **Explanation:** After squaring, the array becomes [16,1,0,9,100].

// After sorting, it becomes [0,1,9,16,100].

// To solve this problem in JavaScript, you can follow these steps:

// Initialize an empty result array to store the squared numbers.
// Iterate through each number in the input array nums.
// Square each number by multiplying it with itself, and push the squared number to the result array.
// Sort the result array in non-decreasing order using the Array.prototype.sort() method with a comparator function.
// Return the sorted result array.
// Here's the JavaScript code that implements the above steps:

// javascript

function sortedSquares(nums) {
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    const square = nums[i] * nums[i];
    result.push(square);
  }

  result.sort((a, b) => a - b);

  return result;
}

// Example usage
// const nums = [-4, -1, 0, 3, 10];
// const squaredArray = sortedSquares(nums);
// console.log(squaredArray); // Output: [0, 1, 9, 16, 100]
// The sortedSquares function takes an input array nums and returns the sorted array of squared numbers.
// In the code, we iterate through each number in nums, square it, and push the squared number to the result array. Then, we sort the result array using a comparator function (a, b) => a - b to ensure non-decreasing order. Finally, we return the sorted result array.

// When we run the code with the provided example, it will output [0, 1, 9, 16, 100], which is the expected result.







