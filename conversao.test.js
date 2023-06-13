const { convertToInt, convertToString, convertToBoolean } = require('./conversao');

test('converte a string "42" para o número inteiro 42', () => {
    expect(convertToInt('42')).toBe(42);
});

test('converte a string "-10" para o número inteiro -10', () => {
    expect(convertToInt('-10')).toBe(-10);
});

// 

test('converte o número inteiro 123 para a string "123"', () => {
    expect(convertToString(123)).toBe('123');
});

test('converte o número inteiro -5 para a string "-5"', () => {
    expect(convertToString(-5)).toBe('-5');
});

//

test('converte o valor 0 para o booleano false', () => {
    expect(convertToBoolean(0)).toBe(false);
});

test('converte a string "true" para o booleano true', () => {
    expect(convertToBoolean('true')).toBe(true);
});