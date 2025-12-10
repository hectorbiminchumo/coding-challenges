# Contains Duplicate

**Difficulty:** Easy  
**Topics:** Array, Hash Table, Sorting

## Problem

Given an integer array `nums`, return `true` if any value appears at least twice in the array, and return `false` if every element is distinct.

## Examples

- Input: `[1,2,3,1]` → Output: `true`  
- Input: `[1,2,3,4]` → Output: `false`  
- Input: `[1,1,1,3,3,4,3,2,4,2]` → Output: `true`

## Approaches

1. Hash Set (recommended)
   - Iterate through `nums`, add each value to a Set.
   - If a value already exists in the Set, return `true`.
   - Otherwise return `false` after the loop.
   - Time: O(n), Space: O(n).

2. Sorting
   - Sort the array and check adjacent elements for equality.
   - Time: O(n log n), Space: O(1) extra (or O(log n) depending on sort implementation).

## Complexity

- Hash Set:
  - Time: O(n)
  - Space: O(n)
- Sorting:
  - Time: O(n log n)
  - Space: O(1) extra (implementation dependent)

## Edge cases

- Empty array → `false`.  
- Single-element array → `false`.  
- Large arrays with duplicates early can return quickly.

## Usage

See implementation: `ContainsDuplicate.js`

Run from the problem folder:

```bash
cd arrays/easy/217-ContainsDuplicate
node ContainsDuplicate.js
```