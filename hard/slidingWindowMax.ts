import { Deque } from '../datastructures/deque'

function maxSlidingWindow(nums: number[], k: number): number[] {
  const output: number[] = []
  const deque = new Deque<number>()

  for (const [index, num] of nums.entries()) {
    while (!deque.isEmpty() && deque.front <= index - k) {
      deque.removeFront()
    }

    while (!deque.isEmpty() && nums[deque.back] < num) {
      deque.remove()
    }

    deque.push(index)

    if (index >= k - 1) {
      output.push(nums[deque.front])
    }
  }

  return output
}
