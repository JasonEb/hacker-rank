const { sortedInsert } = require('./sortedInsert')
const { DoublyLinkedList, printDoublyLinkedList } = require('./DoublyLinkedList')

test('it passes first example', ()=>{
    // Setup
    let llist = new DoublyLinkedList();
    let list = [1, 3, 4, 10]

    list.forEach( (value) => {
        llist.insertNode(value)
    })

    //test operation
    sortedInsert(llist, 5)

    expect(printDoublyLinkedList(llist.head)).toBe("1 3 4 5 10")    
})