const { retornaDiaSemana, retornaPrecoProduto, retornaCategoriaProduto } = require('./switch');

test('dia da semana correspondente ao número 1', () => {
    expect(retornaDiaSemana(1)).toBe('Domingo');
});

test('dia da semana correspondente ao número 4', () => {
    expect(retornaDiaSemana(4)).toBe('Quarta-feira');
});

test('dia da semana correspondente ao número 9 (inválido)', () => {
    expect(retornaDiaSemana(9)).toBe('Número inválido');
});

//

test('preço do produto com código "A"', () => {
    expect(retornaPrecoProduto('A')).toBe(10.99);
});

test('preço do produto com código "B"', () => {
    expect(retornaPrecoProduto('B')).toBe(5.99);
});

test('preço do produto com código "D" (inválido)', () => {
    expect(retornaPrecoProduto('D')).toBe('Código inválido');
});

//
test('categoria do tipo de produto "Eletrônicos"', () => {
    expect(retornaCategoriaProduto('Eletrônicos')).toBe('Tecnologia');
});