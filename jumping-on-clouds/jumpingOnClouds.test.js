const { jumpingOnClouds } = require('./jumpingOnClouds')

test('it passes basic input with 0 0', () =>{
    let clouds = [0, 0]
    let result = jumpingOnClouds(clouds)
    expect(result).toBe(1)
})

test('it passes basic input with 1 0', () =>{
    let clouds = [0, 1]
    let result = jumpingOnClouds(clouds)
    expect(result).toBe(1)
})

test('it passes basic input with 0 1 0', () =>{
    let clouds = [0, 1, 0]
    let result = jumpingOnClouds(clouds)
    expect(result).toBe(1)
})

test('it passes example input', () =>{
    let clouds = [0, 1, 0, 0, 0, 1, 0]
    let result = jumpingOnClouds(clouds)
    expect(result).toBe(3)
})

test('it passes sample input 0', () =>{
    let clouds = [0, 0, 1, 0, 0, 1, 0]
    let result = jumpingOnClouds(clouds)
    expect(result).toBe(4)
})

test('it passes sample input 1', () =>{
    let clouds = [0, 0, 0, 0, 1, 0]
    let result = jumpingOnClouds(clouds)
    expect(result).toBe(3)
})