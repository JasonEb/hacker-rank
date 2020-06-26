const {alternatingCharacters } = require('./alternatingCharacters')

test('it solves A', () => {
    let str = 'A'

    expect(alternatingCharacters(str)).toBe(0)
})

test('it solves AB', () => {
    let str = 'AB'

    expect(alternatingCharacters(str)).toBe(0)
})

test('it solves AA', () => {
    let str = 'AA'

    expect(alternatingCharacters(str)).toBe(1)
})

test('it solves AAA', () => {
    let str = 'AAA'

    expect(alternatingCharacters(str)).toBe(2)
})

test('it solves BAA', () => {
    let str = 'BAA'

    expect(alternatingCharacters(str)).toBe(1)
})

test('it solves AABAAB example case', () => {
    let str = 'AABAAB'

    expect(alternatingCharacters(str)).toBe(2)
})

test('it solves AAAA example case', () => {
    let str = 'AAAA'

    expect(alternatingCharacters(str)).toBe(3)
})

test('it solves ABABABAB example case', () => {
    let str = 'ABABABAB'

    expect(alternatingCharacters(str)).toBe(0)
})

test('it solves BABABA example case', () => {
    let str = 'BABABA'

    expect(alternatingCharacters(str)).toBe(0)
})

test('it solves AAABBB example case', () => {
    let str = 'AAABBB'

    expect(alternatingCharacters(str)).toBe(4)
})



