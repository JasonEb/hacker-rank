const { minimumAbsoluteDifference } = require('./absoluteMinimumDifference')

test('it passes example case', ()=>{
    let arr = [-2, 2, 4]
    expect(minimumAbsoluteDifference(arr)).toBe(2)
})