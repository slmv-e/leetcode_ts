import { Deque } from './deque'

describe('testing deque data structure', () => {
  test('test push method', () => {
    const instance = new Deque<number>()
    const pushItem = 0

    instance.push(pushItem)
    expect(instance.front).toBe(pushItem)
    expect(instance.back).toBe(pushItem)
  })

  test('test pushFront method', () => {
    const instance = new Deque<number>()
    const pushItem = 0

    instance.pushFront(pushItem)
    expect(instance.front).toBe(pushItem)
    expect(instance.back).toBe(pushItem)
  })

  test('test array parsing', () => {
    const array: number[] = [10, 20, 30, 40, 50, 60]

    const instance = new Deque<number>(array)

    expect(instance.front).toBe(array[0])
    expect(instance.back).toBe(array.at(-1))

    expect(instance.size).toBe(array.length)
  })

  test('test remove methods', () => {
    const array: number[] = [10, 20, 30, 40, 50, 60]

    const instance = new Deque<number>(array)
    const frontItem = instance.removeFront()
    const backItem = instance.remove()

    expect(frontItem).toBe(array[0])
    expect(backItem).toBe(array.at(-1))

    expect(instance.front).toBe(array[1])
    expect(instance.back).toBe(array.at(-2))

    expect(instance.size).toBe(array.length - 2)
  })
})
