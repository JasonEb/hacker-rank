const { SinglyLinkedList, SinglyLinkedListNode, printSinglyLinkedList } = require('./SinglyLinkedList')

const insertNodeAtPosition = (head, data, position) => {
    //find subnode A by going to sub position 
    //connect subNode to newNode C
    //connect newNode to pastNode B
    // A - B, C => A - C - B

    let aNode = head.next

    //find subnode
    for(let i = 0; i < position - 2; i++) {
        //if node list ends, exit
        if (typeof aNode.next == 'undefined') {
            break;
        }

        aNode = aNode.next
    }

    //setup newNode and pastNode
    let bNode = aNode.next 
    let cNode = new SinglyLinkedListNode(data)

    //arrange nodes together
    aNode.next = cNode
    cNode.next = bNode

    return head
}

exports.insertNodeAtPosition = insertNodeAtPosition