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

    expect(instance.length).toBe(array.length)
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

    expect(instance.length).toBe(array.length - 2)
  })

  test('test method calls chain', () => {
    const instance = new Deque<number>()

    instance.push(40).push(50).push(60)
    instance.pushFront(30).pushFront(20).pushFront(10)

    expect(instance.length).toBe(6)

    expect(instance.back).toBe(60)
    expect(instance.front).toBe(10)
  })
})
