const hourglassSum = (arr) => {
    return arr
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