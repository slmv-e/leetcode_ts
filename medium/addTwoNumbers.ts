/*
  You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
  You may assume the two numbers do not contain any leading zero, except the number 0 itself.

  Example 1:
  Input: l1 = [2,4,3], l2 = [5,6,4]
  Output: [7,0,8]
  Explanation: 342 + 465 = 807.

  Example 2:
  Input: l1 = [0], l2 = [0]
  Output: [0]

  Example 3:
  
  Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
  Output: [8,9,9,9,0,0,0,1]
*/

/*
  Solution:
    Time: O(n), where "n" is maximum length of input arrays
    Memory: O(n), where "n" is maximum length of input arrays
*/

import { ListNode } from '../datastructures/linkedList'

function addTwoNumbers(firstList: ListNode, secondList: ListNode): ListNode {
  const cutUnitDigit = (val: number) => Math.floor(val / 10)
  const resultNode = new ListNode((firstList.val + secondList.val) % 10)

  let tens = cutUnitDigit(firstList.val + secondList.val)
  let prevNode = resultNode
  let firstListCurrent = firstList.next
  let secondListCurrent = secondList.next

  while (firstListCurrent || secondListCurrent || tens) {
    const firstListValue = firstListCurrent?.val ?? 0
    const secondListValue = secondListCurrent?.val ?? 0
    const totalSum = firstListValue + secondListValue + tens
    const childNode = new ListNode(totalSum % 10)

    prevNode.next = childNode
    prevNode = childNode
    tens = cutUnitDigit(totalSum)

    if (firstListCurrent !== null) {
      firstListCurrent = firstListCurrent.next
    }

    if (secondListCurrent !== null) {
      secondListCurrent = secondListCurrent.next
    }
  }

  return resultNode
}
