const SinglyLinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

const SinglyLinkedList = class {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertNode(nodeData) {
        const node = new SinglyLinkedListNode(nodeData);

        if (this.head == null) {
            this.head = node;
        } else {
            this.tail.next = node;
        }

        this.tail = node;
    }
};

function printSinglyLinkedList(node) {
    let result = ""
    while (node != null) {
        result += node.data + " "
        node = node.next
    }

    return result.substring(0, result.length - 1)
}


exports.SinglyLinkedListNode = SinglyLinkedListNode
exports.SinglyLinkedList = SinglyLinkedList
exports.printSinglyLinkedList = printSinglyLinkedList