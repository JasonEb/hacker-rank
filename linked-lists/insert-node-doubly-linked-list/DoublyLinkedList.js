const DoublyLinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
        this.prev = null;
    }
};

const DoublyLinkedList = class {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertNode(nodeData) {
        let node = new DoublyLinkedListNode(nodeData);

        if (this.head == null) {
            this.head = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
        }

        this.tail = node;
    }
};

function printDoublyLinkedList(node) {
    let result = ""
    while (node != null) {
        result += node.data + " "
        node = node.next
    }

    return result.substring(0, result.length - 1)
}

exports.DoublyLinkedList = DoublyLinkedList
exports.DoublyLinkedListNode = DoublyLinkedListNode
exports.printDoublyLinkedList