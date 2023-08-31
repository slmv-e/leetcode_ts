/*
  Write a function to find the longest common prefix string amongst an array of strings.
  If there is no common prefix, return an empty string "".

  Example 1:
  Input: strs = ["flower","flow","flight"]
  Output: "fl"

  Example 2:
  Input: strs = ["dog","racecar","car"]
  Output: ""
  Explanation: There is no common prefix among the input strings.

  Constraints:
  1 <= strs.length <= 200
  0 <= strs[i].length <= 200
  strs[i] consists of only lowercase English letters.
*/

/*
  Solution:
    Time: O(n * k), where n - words array length, k - length of longest word
    Memory: O(1)
*/

function longestCommonPrefix(words: string[]): string {
  return words.reduce((output, word) => {
    let prefix = output
    while (!word.startsWith(prefix)) {
      prefix = prefix.slice(0, -1)
    }
    return prefix
  }, words[0])
}
