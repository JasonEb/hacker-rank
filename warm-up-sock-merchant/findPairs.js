/* 
https://www.hackerrank.com/challenges/sock-merchant/problem
*/ 

function findPairs(arr) {
    //create a key-value object
    //iterate through arr, and count each id 
    // go through object entries and divide by 2
    let socksMap = {}
    let result = 0

    //collect sock counts
    arr.forEach((sockId) => {
        //if sockId doesn't exist, initialize entry to 1
        //else add 1 

        if (sockId in socksMap) {
            socksMap[sockId] += 1
        } else {
            socksMap[sockId] = 1
        }
    })

    //iterate through each sockMap key and examine counts by dividing by 2
    //dividing by 2 should be the number of pairs

    for (const sockId in socksMap) {
        result += Math.floor(socksMap[sockId] / 2);
    }

    return result;
}

module.exports = findPairs;