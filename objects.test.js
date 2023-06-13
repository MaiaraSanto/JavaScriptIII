const { calcularRetangulo, ehAdulto, concatenaValores } = require('./objects');

test('calcula o perímetro e a área de um retângulo', () => {
    const retangulo = {
        largura: 5,
        altura: 8,
    };
    
    expect(calcularRetangulo(retangulo)).toEqual({ perimetro: 26, area: 40 });
});

//

test('verifica se uma pessoa é maior de idade', () => {
    const pessoa = {
        nome: 'John',
        idade: 25,
        cidade: 'New York',
    };
    
    expect(ehAdulto(pessoa)).toBe(true);
});

//

test('concatena os valores do objeto em uma string', () => {
    const obj = {
        nome: 'Bob',
        idade: 35,
        cidade: 'London',
    };
    
    expect(concatenaValores(obj)).toBe('Bob 35 London');
});