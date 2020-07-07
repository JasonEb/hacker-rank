const jumpingOnClouds = (clouds) => {
    let jumps = 0
    //iterate through each cloud
    //test 2 step first, if it doesn't work step 1
    let i = 0
    let cloudsEnd = false
    let nextCloud = clouds[i + 2]

    while(i < clouds.length - 1) {
        nextCloud = clouds[i + 2]
        cloudsEnd = typeof nextCloud == 'undefined'

        if (nextCloud == 0 || cloudsEnd ) {
            i += 2
        } else {
            i += 1
        }
        
        jumps++
    }

    return jumps
}

module.exports.jumpingOnClouds = jumpingOnClouds