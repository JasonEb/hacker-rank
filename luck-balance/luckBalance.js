const luckBalance = (k, contests) => {
    //sort contests by value (first property)
    //iterate and add appropriately
    let luck = 0
    contests.sort((a,b) => b[0]-a[0])

    contests.forEach((contest) => {
        //unimportant contests are free

        if (contest[1] == 0 ) {
            luck += contest[0]
        } else {
        //important contests logic
            if ( k > 0 ) {
                luck += contest[0]
                k -= 1
            } else {
                luck -= contest[0]
            }
        }
    })

    return luck
}

module.exports.luckBalance = luckBalance