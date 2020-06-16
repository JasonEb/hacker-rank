const findPairs = require('./findPairs');
const solution = require('./solution');

test('finds pairs with ar = [1,2,1,2,1,3,2]', () => {
    let ar = [1,2,1,2,1,3,2]; 

    expect(findPairs(ar)).toBe(2);
});

test('finds pairs with input [10, 20, 20, 10, 10, 30, 50, 10, 20]', () => {
    let ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]; 

    expect(findPairs(ar)).toBe(3);
});

test('solves main sample test', () => {
    let sampleInput = "9 \n 10 20 20 10 10 30 50 10 20"

    expect(solution(sampleInput)).toBe(3);
});

//add second test sample
//Todo: add reading text files 