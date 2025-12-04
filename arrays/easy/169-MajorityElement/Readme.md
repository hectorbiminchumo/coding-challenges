# Majority Element

**Difficulty:** Easy  
**Topics:** Array, Hash Table, Boyer–Moore Voting

## Problem

Given an array of integers `nums`, return the majority element — the element that appears more than ⌊n / 2⌋ times. You may assume the majority element always exists in the array.

## Examples

- Input: [3,2,3] → Output: 3  
- Input: [2,2,1,1,1,2,2] → Output: 2

## Approaches

1. Hash Map (counting)
   - Count occurrences of each number.
   - Return the number whose count > n/2.
   - Simple and clear; uses extra space.

2. Boyer–Moore Voting Algorithm (recommended)
   - Maintain a candidate and a counter.
   - Iterate the array: if counter is 0 set candidate = current element; increment if element == candidate else decrement.
   - The candidate at the end is the majority element.
   - Linear time and O(1) space.

## Complexity

- Hash Map:
  - Time: O(n)
  - Space: O(n)
- Boyer–Moore:
  - Time: O(n)
  - Space: O(1)

## Edge cases

- Array length 1 → return the single element.
- All elements identical → returns that element.
- Problem statement guarantees a majority element, so no extra verification step required.

## Usage

See implementation: `MajorityElement.js`

Run from the problem folder:

```bash
cd arrays/easy/169-MajorityElement
node MajorityElement.js
```