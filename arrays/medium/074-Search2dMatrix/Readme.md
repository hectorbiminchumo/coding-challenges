# Search a 2D Matrix

**Difficulty:** Medium  
**Topics:** Binary Search, Arrays, Matrix

## Problem

Write an efficient algorithm that searches for a value `target` in an m x n integer matrix. The matrix has the following properties:
- Integers in each row are sorted in ascending order from left to right.
- The first integer of each row is greater than the last integer of the previous row.

Return `true` if `target` exists in the matrix, otherwise return `false`.

## Examples

- Input:
  ```
  matrix = [
    [1, 3, 5, 7],
    [10,11,16,20],
    [23,30,34,50]
  ], target = 3
  ```
  Output: `true`

- Input:
  ```
  matrix = [
    [1, 3, 5, 7],
    [10,11,16,20],
    [23,30,34,50]
  ], target = 13
  ```
  Output: `false`

## Approaches

1. Flattened binary search (recommended)
   - Treat the matrix as a sorted 1D array of size m * n.
   - Perform binary search on indices 0..m*n-1; map mid to matrix[row = Math.floor(mid / n)][col = mid % n].
   - Time: O(log(m * n)), Space: O(1).

2. Two-step binary search
   - Binary search on rows to find the candidate row (based on first/last elements).
   - Binary search within that row.
   - Time: O(log m + log n), Space: O(1).

## Complexity

- Time: O(log(m * n)) using the flattened approach (equivalently O(log m + log n) for two-step).  
- Space: O(1) — only constant extra variables used.

## Edge cases

- Empty matrix or matrix[0].length === 0 → return `false`.  
- Single row or single column → binary search still applies.  
- Target outside range of entire matrix → quick false check by comparing to matrix[0][0] and last element.

## Usage

See implementation: `SearchMatrix.js`

Run from its folder:

```bash
cd arrays/medium/074-Search2dMatrix
node SearchMatrix.js
```