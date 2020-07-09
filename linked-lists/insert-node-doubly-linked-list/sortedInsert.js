const { printDoublyLinkedList, DoublyLinkedListNode } = require('./DoublyLinkedList')

const sortedInsert = (head, data) => {
    //traverse sorted linked list until
    //target value is < than probe node
    //let that be A - B node
    //insert C node to make A - C - B
    //update prev and next accordingly

    let aNode = head
    let bNode = head
    let cNode = new DoublyLinkedListNode(data)

    //traverse to find middle value
    //then handle edge cases where...

    if (cNode.data < aNode.data) {
        //if inserted data is the FIRST node, C node becomes head
        head = cNode

        //Set C - A connection
        cNode.next = aNode
        aNode.prev = cNode
    } else {

        //traversal needed for normal case
        while(aNode.next != null) {

            if(cNode.data < aNode.next.data ) {
                bNode = aNode.next
                break;
            }
            aNode = aNode.next
        }

        //2.) if inserted data is the last node, C becomes tail
        if (aNode.next == null) {
            //Set A - C Connection
            aNode.next = cNode
            cNode.prev = aNode
        } else {
        // normal case
            aNode.next = cNode
            cNode.prev = aNode

            cNode.next = bNode
            bNode.prev = cNode
        }
    }    

    return head
}

exports.sortedInsert = sortedInsert