const alternatingCharacters = (str) => {
    let count = 0


    while( str.length > 1) {
        let i = 1
        let c1 = str[0]
        let c2 = str[i]

        if (c1 == c2) {
            while(c1 == c2) {
                i++
                count++
                c2 = str[i]
            }
            
        } 
        str = str.substring(i, str.length)
    }


    return count
}

module.exports.alternatingCharacters = alternatingCharacters

