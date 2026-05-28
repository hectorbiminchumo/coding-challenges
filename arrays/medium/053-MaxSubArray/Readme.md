# Maximum Subarray

**Difficulty:** Medium  
**Topics:** Array, Dynamic Programming, Kadane's Algorithm

## Problem

Given an integer array `nums`, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

## Examples

- Input: `[-2,1,-3,4,-1,2,1,-5,4]` → Output: `6`  
  Explanation: subarray `[4,-1,2,1]` has the largest sum = 6.

- Input: `[1]` → Output: `1`  
- Input: `[-1,-2,-3]` → Output: `-1`

## Approaches

1. Kadane's Algorithm (recommended)
   - Iterate once maintaining `currentSum` and `maxSum`.
   - For each number x: `currentSum = Math.max(x, currentSum + x)` and `maxSum = Math.max(maxSum, currentSum)`.
   - Linear time, constant extra space.

2. Divide and Conquer
   - Recursively compute max subarray in left, right, and crossing the middle.
   - Merges results to get global maximum.
   - Time: O(n log n).

3. Dynamic Programming (explicit)
   - dp[i] = max subarray sum ending at i.
   - dp[i] = max(nums[i], dp[i-1] + nums[i]); track global max.
   - Equivalent to Kadane with O(n) time.

## Complexity

- Time: O(n) using Kadane's algorithm.  
- Space: O(1) extra (in-place variables). If using explicit DP array: O(n) space.

## Edge cases

- All negative numbers → algorithm should return the largest (least negative) value.  
- Single-element array → return that element.  
- Problem usually guarantees at least one element; handle empty input if needed.

## Usage

See implementation: `MaxSubArray.js`

Run from the problem folder:

```bash
cd arrays/medium/053-MaxSubArray
node MaxSubArray.js
```

this is a test