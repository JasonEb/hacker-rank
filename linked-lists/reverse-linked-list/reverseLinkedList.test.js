const { reverseLinkedList } = require('./reverseLinkedList')

test('it passes example input', () => {
    let list = [1,2,3,4]
    let result = reverseLinkedList("test")

    expect(result).toBe("4 3 2 1")
})