const { insertNodeAtPosition } = require('./insertNode')
const { SinglyLinkedList, SinglyLinkedListNode, printSinglyLinkedList } = require('./SinglyLinkedList')

test('it prints singly linked list', () => {
    // Setup
    let llist = new SinglyLinkedList();
    let list = [16, 13, 7]

    list.forEach( (value) => {
        llist.insertNode(value)
    })

    expect(printSinglyLinkedList(llist.head)).toBe("16 13 7")
})

test('it passes sample input 00', () => {
    // Setup
    let llist = new SinglyLinkedList();
    let list = [16, 13, 7]

    list.forEach( (value) => {
        llist.insertNode(value)
    })

    //test operation
    insertNodeAtPosition(llist.head, 1, 2)

    expect(printSinglyLinkedList(llist.head)).toBe("16 13 1 7")
})

test('it passes sample input 01', () => {
    // Setup
    let llist = new SinglyLinkedList();
    let list = [11, 9, 19, 10, 4]

    list.forEach( (value) => {
        llist.insertNode(value)
    })

    //test operation
    insertNodeAtPosition(llist.head, 20, 3)

    expect(printSinglyLinkedList(llist.head)).toBe("11 9 19 20 10 4")
})

test('it passes sample input 09', () => {
    // Setup
    let llist = new SinglyLinkedList();
    let list = [1, 2, 3, 4, 5, 6]

    list.forEach( (value) => {
        llist.insertNode(value)
    })

    //test operation
    insertNodeAtPosition(llist.head, 7, 5)

    expect(printSinglyLinkedList(llist.head)).toBe("1 2 3 4 5 7 6")
})