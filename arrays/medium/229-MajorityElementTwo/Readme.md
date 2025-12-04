# Majority Element II

**Difficulty:** Medium  
**Topics:** Array, Hash Table, Boyer–Moore Voting (generalized)

## Problem

Given an integer array `nums`, return all elements that appear more than ⌊n / 3⌋ times. The algorithm should run in linear time and, ideally, use constant extra space.

## Examples

- Input: [3,2,3] → Output: [3]  
- Input: [1,1,1,3,3,2,2,2] → Output: [1,2]  
- Input: [1,2] → Output: [1,2]

## Approaches

1. Hash Map (counting)
   - Count frequencies using a map.
   - Return keys with count > n/3.
   - Simple and clear; uses O(n) extra space.

2. Boyer–Moore Voting (generalized for k = 3)
   - Maintain up to two candidate values and their counts.
   - First pass: update candidates and counts using the voting rules.
   - Second pass: verify which candidates actually appear > n/3 times.
   - Time: O(n), Space: O(1) (excluding output).

## Complexity

- Hash Map:
  - Time: O(n)
  - Space: O(n)
- Boyer–Moore (generalized):
  - Time: O(n)
  - Space: O(1) extra

## Edge cases

- Empty array -> return [].
- Array length < 3 -> return distinct elements.
- All elements identical -> return the single element.

## Usage

See implementation: `MajorityElementTwo.js`

Run from the problem folder:

```bash
cd arrays/medium/229-MajorityElementTwo
node MajorityElementTwo.js
```