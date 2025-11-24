# Search Insert Position

**Difficulty:** Easy  
**Topics:** Binary Search, Arrays

## Problem

Given a sorted array of distinct integers `nums` and a target value `target`, return the index if the target is found.  
If not, return the index where it would be inserted in order.

You must write an algorithm with O(log n) runtime complexity.

## Example

- Input: nums = [1,3,5,6], target = 5  
  Output: 2

- Input: nums = [1,3,5,6], target = 2  
  Output: 1

- Input: nums = [1,3,5,6], target = 7  
  Output: 4

- Input: nums = [1,3,5,6], target = 0  
  Output: 0

## Approach

Use binary search:
1. Maintain two pointers `left = 0` and `right = nums.length - 1`.
2. While `left <= right`, compute `mid = Math.floor((left + right) / 2)`.
3. If `nums[mid] === target`, return `mid`.
4. If `nums[mid] < target`, search the right half by `left = mid + 1`.
5. Otherwise search the left half by `right = mid - 1`.
6. If not found, `left` will be the insertion index — return `left`.

This method finds the target or its insertion index in O(log n) time.

## Complexity

- Time: O(log n) — binary search halves the search space each iteration.  
- Space: O(1) — uses a constant number of variables.

## Edge cases

- Empty array -> return 0.
- Target smaller than all elements -> return 0.
- Target greater than all elements -> return nums.length.

## Solution

See implementation: `SearchInsertPosition.js`