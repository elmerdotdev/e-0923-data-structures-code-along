const ListNode = require('./ListNode')

class SLL {
  constructor() {
    this.head = null // represent the beginning of the list
    this.size = 0 // keep track of how many nodes in the list
  }

  isEmpty() {
    return this.head === null
  }

  clear() {
    this.head = null
    this.size = 0
  }

  length() {
    let len = 0
    let runner = this.head

    while (runner) {
      len++
      runner = runner.next
    }

    return len
  }

  insertAtFront(data) {
    const newNode = new ListNode(data)
    newNode.next = this.head
    this.head = newNode
    this.size++
    return this
  }

  insertAtBack(data) {
    const newNode = new ListNode(data)

    if (this.isEmpty()) {
      this.head = newNode
    } else {
      let runner = this.head

      while (runner.next) {
        runner = runner.next
      }

      runner.next = newNode
    }
    this.size++
  }

  removeHead() {
    // removing the first node of the list
    if (this.isEmpty()) {
      return null
    }

    const oldHead = this.head
    this.head = oldHead.next
    this.size--
    return `Removed previous head node: ${oldHead.data}`
  }

  removeBack() {
    if (this.isEmpty()) {
      return null
    }

    if (this.size === 1) {
      const removedNode = this.head
      this.clear()
      return removedNode.data
    }

    let runner = this.head

    while (runner.next.next) {
      runner = runner.next
    }

    const removedNode = runner.next
    runner.next = null
    this.size--
    return removedNode.data
  }

  contains(value) {
    let runner = this.head

    while (runner) {
      if (runner.data === value) {
        return true
      }
      runner = runner.next
    }

    return false
  }

  removeVal(value) {
    if (this.isEmpty()) {
      return null
    }

    if (this.head.data === value) {
      this.removeHead()
      return true
    }

    let runner = this.head

    while (runner.next !== null) {
      if (runner.next.data === value) {
        runner.next = runner.next.next
        this.size--
        return true
      }
      runner = runner.next
    }

    return false
  }

  toArray() {
    let arr = []
    let runner = this.head

    while (runner) {
      arr.push(runner.data)
      runner = runner.next
    }

    return arr
  }

  print() {
    let runner = this.head
    const nodes = []

    while (runner !== null) {
      nodes.push(runner.data)
      runner = runner.next
    }

    return nodes.join(' -> ')
  }
}

// instantiate SLL class
const list = new SLL()
list.insertAtFront(10)
list.insertAtFront(20)
list.insertAtFront(30)
list.insertAtFront(40)
list.insertAtFront(50)
console.log(list.print()) // 50 -> 40 -> 30 -> 20 -> 10
console.log(list.removeHead()) // remove 50
console.log(list.print()) // 40 -> 30 -> 20 -> 10
console.log(list.contains(60)) // false
console.log(list.removeVal(30)) // true
console.log(list.print()) // 40 -> 20 -> 10
list.insertAtBack(5)
console.log(list.print()) // 40 -> 20 -> 10 -> 5
console.log(`Removed last node: ${list.removeBack()}`)
console.log(list.print()) // 40 -> 20 -> 10
console.log(list.toArray()) // [40, 20, 10]