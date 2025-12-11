# Group Anagrams

**Difficulty:** Medium  
**Topics:** Hash Table, Strings, Sorting

## Problem

Given an array of strings, group the anagrams together. Return the groups in any order. An anagram is a word formed by rearranging the letters of another, using all the original letters exactly once.

## Examples

- Input: ["eat","tea","tan","ate","nat","bat"]  
  Output: [["eat","tea","ate"],["tan","nat"],["bat"]]

- Input: [""]  
  Output: [[""]]

- Input: ["a"]  
  Output: [["a"]]

## Approaches

1. Sort-keys (common, easy)
   - For each string, sort its characters to produce a key.
   - Use a hash map: key → list of original strings.
   - Push string into map[key]. Return map values.
   - Time: O(n * k log k) where n is number of strings and k average string length.

2. Count-keys (faster for fixed alphabet)
   - For each string, count character frequencies and serialize the counts into a key (e.g., "a#1#b#0#...").
   - Use a hash map same as above.
   - Time: O(n * k), Space: O(n * k).

## Complexity

- Time:
  - Sorting method: O(n * k log k)
  - Counting method: O(n * k)
- Space: O(n * k) for the output and map storage.

## Edge cases

- Empty input array → return [].
- Strings of length 0 (empty string) → grouped together.
- Mixed-case or non-lowercase input → normalize if needed (problem usually uses lowercase).

## Usage

See implementation: `GroupAnagrams.js`

Run from the problem folder:

```bash
cd arrays/medium/49-GroupAnagrams
node GroupAnagrams.js
```