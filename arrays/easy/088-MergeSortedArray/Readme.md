# Merge Sorted Array

**Difficulty:** Easy  
**Topics:** Array, Two Pointers, In-place

## Problem

Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.  
- nums1 has a length of m + n, where the first m elements denote the valid elements and the last n elements are set to 0 and should be ignored.  
- nums2 has a length of n.

Modify nums1 in-place to contain the merged sorted array.

## Examples

- Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3  
  Output: nums1 = [1,2,2,3,5,6]

- Input: nums1 = [1], m = 1, nums2 = [], n = 0  
  Output: nums1 = [1]

- Input: nums1 = [0], m = 0, nums2 = [1], n = 1  
  Output: nums1 = [1]

## Approach

Use three pointers and fill nums1 from the end to avoid overwriting:
1. Let p1 = m - 1 (last valid in nums1), p2 = n - 1 (last in nums2), write = m + n - 1.
2. While p2 >= 0:
   - If p1 >= 0 and nums1[p1] > nums2[p2], set nums1[write] = nums1[p1--].
   - Else set nums1[write] = nums2[p2--].
   - Decrement write.
3. When loop ends, nums1 contains the merged sorted array.

This works in-place and avoids extra arrays by writing from the back.

## Complexity

- Time: O(m + n) — each element from nums1 and nums2 is processed at most once.  
- Space: O(1) extra space — in-place modification.

## Edge cases

- n = 0 -> nums1 unchanged.  
- m = 0 -> copy nums2 into nums1.  
- Duplicate values handled naturally by comparisons.

## Usage

See implementation: `MergeSortedArray.js`  
Run from its folder:
```bash
cd arrays/easy/088-MergeSortedArray
node MergeSortedArray.js
```