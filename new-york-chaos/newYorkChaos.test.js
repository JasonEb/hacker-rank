const {countSwaps} = require('./newYorkChaos')

test('solves first example case', () => {
    let line = [2,1,5,3,4]

    expect(countSwaps(line)).toBe(3)
});

test('solves example too chaotic case', () => {
    let line = [2, 5, 1, 3, 4]

    expect(countSwaps(line)).toBe("Too chaotic")
});

test('solves case 11', () => {
    let line = [1, 2, 5, 3, 4, 7, 8, 6]

    expect(countSwaps(line)).toBe(4)
});

test('solves sample test case 1 test 2', () => {
    let line = [1, 2, 5, 3, 7, 8, 6, 4]

    expect(countSwaps(line)).toBe(7)
});

