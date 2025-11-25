# Plus One

**Difficulty:** Easy  
**Topics:** Array, Math

## Problem

Given a non-empty array of decimal digits representing a non-negative integer, add one to the integer and return the resulting array of digits. The most significant digit is at the head of the list, and each element is in the range 0-9.

## Examples

- Input: [1, 2, 3] -> Output: [1, 2, 4]  
- Input: [4, 3, 2, 1] -> Output: [4, 3, 2, 2]  
- Input: [9] -> Output: [1, 0]  
- Input: [9, 9] -> Output: [1, 0, 0]

## Approach

Start from the least significant digit (end of the array):
1. Increment the current digit.
2. If it becomes less than 10, return the array (no carry).
3. If it becomes 10, set it to 0 and continue to the next more significant digit.
4. If all digits become 0 (e.g., [9,9,...,9]), insert `1` at the front.

This modifies the input array in-place and uses only a constant amount of extra space.

## Complexity

- Time: O(n) — in the worst case you visit all digits (when all digits are 9).  
- Space: O(1) additional space (the result is produced in-place; unshifting a single leading 1 is O(1) extra).

## Edge cases

- Empty input -> treated as returning [1] (current implementation handles this by unshifting 1).  
- Leading zeros are not expected in valid input.  
- Large arrays work same as small ones; performance is linear.

## Usage

Run the solution file:

```bash
cd arrays/easy/066-PlusOne
node PlusOne.js
```

## Solution

See implementation: `PlusOne.js`