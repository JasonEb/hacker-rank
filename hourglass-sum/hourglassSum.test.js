const {hourglassSum, hourglassSubset} = require('./hourglassSum');

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

//hourglass subset test cases
test('extracts hourglass subset', () => {
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