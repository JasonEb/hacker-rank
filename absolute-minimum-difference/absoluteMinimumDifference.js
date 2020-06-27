const minimumAbsoluteDifference = (arr) => {
    //sort array first. minimum difference means consecutive values should be the least difference.
    //this is greedy because we're leveraging that one aspect about consecutive number values. 
    //iterate through sorted list to find smaller absolute difference.
    arr = arr.sort((a,b)=> a-b)
    let min = arr[1] - arr[0]
    let i = 0

    for(i = 0; i < arr.length - 1; i++){
        min = Math.min(min, arr[i + 1] - arr[i])
    }

    return min
}

module.exports.minimumAbsoluteDifference = minimumAbsoluteDifference;