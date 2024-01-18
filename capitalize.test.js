const capitalize = require('./capitalize')

test ('Capitalizes first letter of a string', () => {
    expect(capitalize('faraday')).toBe('Faraday')
});