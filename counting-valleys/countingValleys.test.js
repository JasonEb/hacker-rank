const {countValleys} = require('./countingValleys')

test('it solves example case', () => {
    let path = "UDDDUDUU"

    expect(countValleys(path)).toBe(1)
})

test('it solves 2nd example case', () => {
    let path = "DDUUDDUDUUUD"

    expect(countValleys(path)).toBe(2)
})
