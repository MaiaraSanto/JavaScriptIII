const { dobrarNumeros, filtrarPares, somarValores } = require('./highorder');

test('filtrarPares', () => {
    expect(filtrarPares([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
    expect(filtrarPares([0, 1, 2, 3, 4, 5])).toEqual([0, 2, 4]);
    expect(filtrarPares([])).toEqual([]);
});

// Testes
test('somarValores', () => {
    expect(somarValores([1, 2, 3])).toEqual(6);
    expect(somarValores([-1, 0, 5])).toEqual(4);
    expect(somarValores([])).toEqual(0);
});

test('dobrarNumeros', () => {
    expect(dobrarNumeros([1, 2, 3])).toEqual([2, 4, 6]);
    expect(dobrarNumeros([-1, 0, 5])).toEqual([-2, 0, 10]);
    expect(dobrarNumeros([])).toEqual([]);
});