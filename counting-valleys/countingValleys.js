const countValleys = (path) => {
    let seaLevel = 0
    let valleys = 0
    let valleyBegin = false

    //iterate through path
    //if seaLevel goes below 0, then begin valley
    //once seaLevel goes above 0, close valley and add 1
    for (let step of path) {
        if (step == 'U') {
            seaLevel += 1
        } else if (step == 'D'){
            seaLevel -= 1
        }

        //check for valley
        if (seaLevel < 0 && valleyBegin == false) {
            valleyBegin = true
        }


        if (seaLevel >= 0) {
            if (valleyBegin == true){
                valleys += 1
                valleyBegin = false
            }
        }
    }
    return valleys;
}

module.exports.countValleys = countValleys;