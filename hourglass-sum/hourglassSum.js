const hourglassSum = (arr) => {
    //iterate through i to j, up to 4
    //keep track of max sum
    let maxSum = Number.NEGATIVE_INFINITY

    for (let i = 0; i < 4; i++){
        for (let j = 0; j < 4; j++){
            let sum = hourglassSubset(arr, i, j).reduce( (acc, cur) => acc + cur)
            if (sum > maxSum) { 
                maxSum = sum;
             }
        }
    }

    return maxSum
}

const hourglassSubset = (arr, i, j) => {
    // follows the form
    /*
        a b c
          d
        e f g
    */

    let a = arr[i][j]
    let b = arr[i][j+1]
    let c = arr[i][j+2]

    let d = arr[i+1][j+1]

    let e = arr[i+2][j]
    let f = arr[i+2][j+1]
    let g = arr[i+2][j+2]

    return [a, b, c, d, e, f, g];
}

module.exports.hourglassSum = hourglassSum;
module.exports.hourglassSubset = hourglassSubset;