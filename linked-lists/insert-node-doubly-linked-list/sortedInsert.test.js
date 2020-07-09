const { sortedInsert } = require('./sortedInsert')
const { DoublyLinkedList, printDoublyLinkedList } = require('./DoublyLinkedList')

test('it passes sample input 01', ()=>{
    // Setup
    let llist = new DoublyLinkedList();
    let list = [2, 3, 4]

    list.forEach( (value) => {
        llist.insertNode(value)
    })

    //test operation
    let head = sortedInsert(llist.head, 1)

    expect(printDoublyLinkedList(head)).toBe("1 2 3 4")    
})

test('it passes sample input 07', ()=>{
    // Setup
    let llist = new DoublyLinkedList();
    let list = [1, 2, 3]

    list.forEach( (value) => {
        llist.insertNode(value)
    })

    //test operation
    sortedInsert(llist.head, 4)

    expect(printDoublyLinkedList(llist.head)).toBe("1 2 3 4")    
})

test('it passes sample input 00', ()=>{
    // Setup
    let llist = new DoublyLinkedList();
    let list = [1, 3, 4, 10]

    list.forEach( (value) => {
        llist.insertNode(value)
    })

    //test operation
    sortedInsert(llist.head, 5)

    expect(printDoublyLinkedList(llist.head)).toBe("1 3 4 5 10")    
})

