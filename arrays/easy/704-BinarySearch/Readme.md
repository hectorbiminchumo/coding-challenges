# Binary Search

## Problem Statement
Given a sorted array of integers `nums` and an integer `target`, return the index of the target if it is in the array, otherwise return `-1`.

You must write an algorithm with **O(log n)** runtime complexity.

**Example:**
```
Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4

Input: nums = [-1,0,3,5,9,12], target = 13
Output: -1
Explanation: 13 does not exist in nums so return -1
```

## Solution Approach

### Binary Search Algorithm (Current Implementation)
The solution uses the classic binary search approach:
- Initialize two pointers: `left` at the start and `right` at the end of the array
- Calculate the middle index: `mid = Math.floor((left + right) / 2)`
- Compare the middle element with the target:
  - If `nums[mid]` equals target, return `mid`
  - If `nums[mid]` is less than target, search the right half (`left = mid + 1`)
  - If `nums[mid]` is greater than target, search the left half (`right = mid - 1`)
- If the loop ends without finding the target, return `-1`

**Time Complexity:** O(log n) - The search space is halved in each iteration  
**Space Complexity:** O(1) - Only uses constant extra space

## Code

```javascript
const BinarySearch = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}
```

## Usage

```javascript
console.log(BinarySearch([-1, 0, 3, 5, 9, 12], 9))   // Output: 4
console.log(BinarySearch([-1, 0, 3, 5, 9, 12], 13))  // Output: -1
console.log(BinarySearch([5], 5))                     // Output: 0
console.log(BinarySearch([2, 5], 0))                  // Output: -1
```

## How It Works (Example)

Given `nums = [-1, 0, 3, 5, 9, 12]` and `target = 9`:

```
Iteration 1: left = 0, right = 5, mid = 2, nums[2] = 3 (< 9) → left = 3
Iteration 2: left = 3, right = 5, mid = 4, nums[4] = 9 (= 9) → return 4
```

## Key Points

- ✅ The array **must be sorted** for binary search to work
- ✅ Much faster than linear search for large datasets (O(log n) vs O(n))
- ✅ Commonly used in:
  - Database indexing
  - Finding elements in large sorted datasets
  - Implementing lower/upper bounds in data structures

## Alternative Approaches

### Recursive Binary Search
```javascript
const BinarySearchRecursive = (nums, target, left = 0, right = nums.length - 1) => {
  if (left > right) {
    return -1;
  }

  const mid = Math.floor((left + right) / 2);

  if (nums[mid] === target) {
    return mid;
  } else if (nums[mid] < target) {
    return BinarySearchRecursive(nums, target, mid + 1, right);
  } else {
    return BinarySearchRecursive(nums, target, left, mid - 1);
  }
}
```

**Time Complexity:** O(log n)  
**Space Complexity:** O(log n) - Due to recursion stack

## LeetCode
[Binary Search - LeetCode Problem #704](https://leetcode.com/problems/binary-search/)
