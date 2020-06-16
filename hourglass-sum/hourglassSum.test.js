const {hourglassSum, hourglassSubset} = require('./hourglassSum');

//hourglass subset test cases
test('extracts hourglass subset at 0, 0', () => {
    let arr = [
        [-9,-9,-9,1,1,1],
        [0,-9,0,4,3,2],
        [-9,-9,-9,1,2,3],
        [0,  0,  8,  6, 6, 0],
        [0,  0,  0, -2, 0, 0],
        [0,  0,  1,  2, 4, 0]
    ]

    expect(hourglassSubset(arr, 0, 0)).toEqual([-9, -9, -9, -9, -9, -9, -9])
});

test('extracts hourglass subset at 3, 3', () => {
    let arr = [
        [-9,-9,-9,1,1,1],
        [0,-9,0,4,3,2],
        [-9,-9,-9,1,2,3],
        [0,  0,  8,  6, 6, 0],
        [0,  0,  0, -2, 0, 0],
        [0,  0,  1,  2, 4, 0]
    ]

    expect(hourglassSubset(arr, 3, 3)).toEqual([6, 6, 0, 0, 2, 4, 0])
});

// main case
test('solves example case', () => {
    let arr = [
        [-9,-9,-9,1,1,1],
        [0,-9,0,4,3,2],
        [-9,-9,-9,1,2,3],
        [0,  0,  8,  6, 6, 0],
        [0,  0,  0, -2, 0, 0],
        [0,  0,  1,  2, 4, 0]
    ]

    expect(hourglassSum(arr)).toBe(28)
});

