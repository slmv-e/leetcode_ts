/*
  Given a string s, find the length of the longest substring without repeating characters.

  Example 1:
  Input: s = "abcabcbb"
  Output: 3
  Explanation: The answer is "abc", with the length of 3.

  Example 2:
  Input: s = "bbbbb"
  Output: 1
  Explanation: The answer is "b", with the length of 1.

  Example 3:
  Input: s = "pwwkew"
  Output: 3
  Explanation: The answer is "wke", with the length of 3.
  Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

  Constraints:
  0 <= s.length <= 5 * 104
  s consists of English letters, digits, symbols and spaces.
*/

/*
  Solution:
    Time: O(n)
    Memory: O(n)
*/

function lengthOfLongestSubstring(chars: string): number {
  const charMap = new Map<string, number>()
  let maxLength = 0
  let leftIndex = 0

  for (let rightIndex = 0; rightIndex < chars.length; rightIndex++) {
    const currentChar = chars[rightIndex]
    const sameCharPrevIndex = charMap.get(currentChar)

    if (sameCharPrevIndex !== undefined && sameCharPrevIndex >= leftIndex) {
      leftIndex = sameCharPrevIndex + 1
    }

    maxLength = Math.max(rightIndex - leftIndex + 1, maxLength)
    charMap.set(currentChar, rightIndex)
  }

  return maxLength
}
