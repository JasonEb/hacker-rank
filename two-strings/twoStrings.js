const twoStrings = (a, b) => {
    //iterate through both strings, collecting all substrings into their own map
    //iterate through keys, and if one exists, return YES
    let characters = new Set()
    let i = 0
    let result = 'NO'

    for(i = 0; i < a.length; i++ ) {
        characters.add(a[i])
    }

    for(i = 0; i < b.length; i++ ) {
         if (characters.has(b[i])) { result = 'YES' }
    }

    return result;
}

module.exports.twoStrings = twoStrings;