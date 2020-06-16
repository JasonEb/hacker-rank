const findPairs = require('./findPairs');

function solution(input) {
    result = 0

    //parse string into array
    let arr = input
    .split("\n")[1]
    .split(" ")
    .map ( (x) => parseInt(x) )

    result = findPairs(arr)
    return result
}

module.exports = solution;