const {countValleys} = require('./countingValleys')

test('it solves example case', () => {
    let path = "UDDDUDUU"

    expect(countValleys(path)).toBe(1)
})