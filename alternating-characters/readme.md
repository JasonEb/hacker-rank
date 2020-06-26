# Alternating Characters

*You are given a string containing characters A and B only. Your task is to change it into a string such that there are no matching adjacent characters. To do this, you are allowed to delete zero or more characters in the string.

Your task is to find the minimum number of required deletions.*

Initial implementation relied on a recursive solution to whittle down the string and examine its contents. Tricky, but it was more intuitive to work with. 

```
const alternatingCharacters = (str, count = 0) => {
    //recursively go through str, examine if the next character needs to be 'deleted' 

    if(str.length < 2) {
        return count 
    }

    let i = 1
    let c1 = str[0]
    let c2 = str[i]
    let newStr = ''

    if (c1 == c2) {
        while(c1 == c2) {
            i++
            count++
            c2 = str[i]
        }
        
    } 
    newStr = str.substring(i, str.length)

    return alternatingCharacters(newStr, count) 
}
```

This passed all cases, but ran into runtime errors due to  longer strings that were over 10000 characters long. Due to the recursive solution, this broke the call stack limit of the interpreter. Thus an iterative solution was preferred because it uses less memory. Adapting it to an iterative while loop only needed to leverage the base case and preserve most of the logic. 

```
const alternatingCharacters = (str) => {
    let count = 0
    //iteratively go through str, examine if the next character needs to be 'deleted' 

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
```