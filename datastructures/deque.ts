export class Deque<T> {
  private head: number
  private tail: number
  private readonly items: Record<number, T>

  constructor(inputArray: T[] = []) {
    this.head = 1
    this.tail = 0
    this.items = {}

    inputArray.forEach((item) => {
      this.push(item)
    })
  }

  static fromArray<T>(inputArray: T[]) {
    return new Deque<T>(inputArray)
  }

  get size(): number {
    return this.head - this.tail - 1
  }

  get front(): T {
    return this.items[this.tail + 1]
  }

  get back(): T {
    return this.items[this.head - 1]
  }

  public isEmpty(): boolean {
    return this.size === 0
  }

  public push(item: T) {
    this.items[this.head] = item
    this.head++

    return this
  }

  public pushFront(item: T) {
    if (this.isEmpty()) {
      this.push(item)
    } else {
      this.items[this.tail] = item
      this.tail--
    }

    return this
  }

  public remove(): T | undefined {
    if (this.isEmpty()) return undefined

    this.head--
    const item = this.items[this.head]
    delete this.items[this.head]

    if (this.isEmpty()) this.resetHeadAndTail()

    return item
  }

  public removeFront(): T | undefined {
    if (this.isEmpty()) return undefined

    this.tail++
    const item = this.items[this.tail]
    delete this.items[this.tail]

    if (this.isEmpty()) this.resetHeadAndTail()

    return item
  }

  private resetHeadAndTail() {
    this.head = 1
    this.tail = 0
  }
}
