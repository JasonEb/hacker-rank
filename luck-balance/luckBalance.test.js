const {luckBalance} = require('./luckBalance')

test('it passes example case 1 w/ k = 2', () => {
    let contests = [[5,1],[1,1],[4,0]]
    let k = 2

    expect(luckBalance(k, contests)).toBe(10)
})

test('it passes example case 1 w/ k = 1', () => {
    let contests = [[5,1],[1,1],[4,0]]
    let k = 1

    expect(luckBalance(k, contests)).toBe(8)
})

test('it passes sample input', () => {
    let contests = [[5,1],[2,1],[1,1],[8,1],[10,0],[5,0]]
    let k = 3

    expect(luckBalance(k, contests)).toBe(29)
})