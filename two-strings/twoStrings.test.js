const {twoStrings} = require('./twoStrings');

test('it solves the example yes case', () => {
    expect(twoStrings("hello","world")).toBe('YES')
})

test('it solves the example no case', () => {
    expect(twoStrings("hi","world")).toBe('NO')
})

test('it solves sample test case 1 pair 1', () => {
    expect(twoStrings("wouldyoulikefries","abcabcabcabcabcabc")).toBe('NO')
})
