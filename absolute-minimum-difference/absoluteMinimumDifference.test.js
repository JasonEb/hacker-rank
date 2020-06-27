const { minimumAbsoluteDifference } = require('./absoluteMinimumDifference')

test('it passes example case', ()=>{
    let arr = [-2, 2, 4]
    expect(minimumAbsoluteDifference(arr)).toBe(2)
})

test('it passessample input 1', ()=>{
    let arr = [-59,-36,-13,1,-53,-92,-2,-96,-54,75]

    expect(minimumAbsoluteDifference(arr)).toBe(1)
})

test('it passessample input 2', ()=>{
    let arr = [1, -3, 71, 68, 17]

    expect(minimumAbsoluteDifference(arr)).toBe(3)
})