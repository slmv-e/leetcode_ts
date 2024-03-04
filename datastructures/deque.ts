class DequeNode<T> {
  constructor(
    public value: T,
    public prev: DequeNode<T> | null,
    public next: DequeNode<T> | null,
  ) {}
}

export class Deque<T> {
  private head: DequeNode<T> | null
  private tail: DequeNode<T> | null
  private size: number

  constructor(inputArray: T[] = []) {
    this.head = null
    this.tail = null
    this.size = 0

    inputArray.forEach((item) => {
      this.push(item)
    })
  }

  static fromArray<T>(inputArray: T[]) {
    return new Deque<T>(inputArray)
  }

  get length(): number {
    return this.size
  }

  get front(): T | undefined {
    return this.head?.value
  }

  get back(): T | undefined {
    if (this.size === 1) {
      return this.head?.value
    }

    return this.tail?.value
  }

  public isEmpty(): boolean {
    return this.size === 0
  }

  public push(item: T) {
    if (this.size === 0) {
      this.head = new DequeNode(item, null, null)
    } else if (this.size === 1) {
      this.tail = new DequeNode(item, this.head, null)
      if (this.head !== null) this.head.next = this.tail
    } else {
      const newNode = new DequeNode(item, this.tail, null)

      if (this.tail !== null) {
        this.tail.next = newNode
      }

      this.tail = newNode
    }

    this.size++
    return this
  }

  public pushFront(item: T) {
    if (this.size === 0) {
      this.head = new DequeNode(item, null, null)
    } else if (this.size === 1) {
      this.tail = this.head
      this.head = new DequeNode(item, null, this.head)
    } else {
      const newNode = new DequeNode(item, null, this.head)

      if (this.head !== null) {
        this.head.prev = newNode
      }

      this.head = newNode
    }

    this.size++
    return this
  }

  public remove(): T | undefined {
    if (this.isEmpty()) return undefined

    if (this.size === 1) {
      const node = this.head
      this.head = null
      return node?.value
    }

    const node = this.tail

    if (
      this.tail === null ||
      this.head === null ||
      node === null ||
      node.prev === null
    )
      return undefined

    if (this.size === 2) {
      this.tail = this.head.next = null
    } else {
      this.tail = node.prev
      this.tail.next = null
    }

    this.size--
    return node.value
  }

  public removeFront(): T | undefined {
    if (this.isEmpty()) return undefined

    const node = this.head

    if (node === null || node.next === null) return undefined

    this.head = node.next
    this.head.prev = null

    this.size--
    return node.value
  }
}
