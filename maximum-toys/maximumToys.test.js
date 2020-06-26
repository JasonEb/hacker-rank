const {maximumToys} = require('./maximumToys')

test('it solves first sample input', () => {
    let wallet = 7
    let prices = [1, 2 , 3, 4]
    expect(maximumToys(prices, wallet)).toBe(3)
});

test('it solves first sample input', () => {
    let wallet = 50
    let prices = [1, 12, 15, 111, 200, 1000, 10]
    expect(maximumToys(prices, wallet)).toBe(4)
});