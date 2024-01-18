const calculator = require('./calculator')

test('Adds two numbers', () => {
    expect(calculator.add(3,5)).toBe(8)
})

test('Substracts two numbers', () => {
    expect(calculator.subtract(5,3)).toBe(2)
})

test('Divides two numbers', () => {
    expect(calculator.divide(8,4)).toBe(2)
})

test('Multiplies two numbers', () => {
    expect(calculator.multiply(8,4)).toBe(32)
})
