# Two Sum

## Problem Statement
Given an array of integers `nums` and an integer `target`, return the indices of the two numbers that add up to the target. You may assume that each input has exactly one solution, and you cannot use the same element twice.

**Example:**
```
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: nums[0] + nums[1] = 2 + 7 = 9
```

## Solution Approach

### Two Pointer Technique (Current Implementation)
The solution uses the two-pointer approach:
- Initialize two pointers: `left` at the start and `right` at the end of the array
- Calculate the sum of elements at both pointers
- If sum equals target, return the indices
- If sum is greater than target, move the right pointer left (decrease sum)
- If sum is less than target, move the left pointer right (increase sum)

**Time Complexity:** O(n)  
**Space Complexity:** O(1)

**Note:** This approach requires the array to be sorted.

## Code

```javascript
const TwoSum = (nums, target) => {
  let left = 0
  let right = nums.length - 1

  while(left < right) {
    const sum = nums[left] + nums[right]
    if(sum > target) {
      right--
    } else if (sum < target) {
      left++
    } else {
      return [left, right]
    }
  }
  return []
}
```

## Usage

```javascript
console.log(TwoSum([2,7,11,15], 9))  // Output: [0, 1]
```

## Alternative Approaches

### Hash Map (for unsorted arrays)
```javascript
const TwoSumHashMap = (nums, target) => {
  const map = new Map()
  
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]
    if (map.has(complement)) {
      return [map.get(complement), i]
    }
    map.set(nums[i], i)
  }
  
  return []
}
```

**Time Complexity:** O(n)  
**Space Complexity:** O(n)

## LeetCode
[Two Sum - LeetCode Problem #1](https://leetcode.com/problems/two-sum/)
