const caesarCipher = require('./ceaserCipher')

test('Takes a string and a shift factor and returns it with each character “shifted”', () => {
    expect(caesarCipher('Hello sir, good evening', 1)).toBe('Ifmmp tjs, hppe fwfojoh')
})

test('Works with negative keys', () => {
    expect(caesarCipher('Hello sir, good evening', -1)).toBe('Gdkkn rhq, fnnc dudmhmf')
})