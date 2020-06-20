const countSwaps = (queue) => {
    //first scan queue to see if any number is more than 2 places away from their initial given value
    //then use bubble sort to count the number swaps

    let swaps = 0

    for(let i = 0; i < queue.length ; i++){
        let initialPos = queue[i] - 1
        if ((initialPos - i) > 2) {
            return "Too chaotic"
        }

        for (let j = Math.max(0, queue[i] - 2); j < i; j++){
            if (queue[j] > queue[i]) { 
                swaps++ 
            }
        }
    }



    // for(i = 0; i < queue.length - 1; i++) {
    //     for(let j = i + 1; j < queue.length; j++) {
    //         if (queue[i] > queue[j]) {
    //             swap(queue, i, j)
    //             swaps += 1
    //         }
    //     }
    // }
    
    console.log("queue sorted: ", queue)
    return swaps;
}



const swap = (queue, i, j) => {
    let b = queue[j]
    let tmp = queue[i]

    queue[i] = b
    queue[j] = tmp
}

module.exports.countSwaps = countSwaps