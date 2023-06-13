const { somaNumeros, ehPar, fibonacci } = require('./recursao');

test('soma dos números inteiros de 1 a 5', () => {
  expect(somaNumeros(5)).toBe(15);
});

test('soma dos números inteiros de 1 a 10', () => {
  expect(somaNumeros(10)).toBe(55);
});

test('verifica se 4 é um número par', () => {
  expect(ehPar(4)).toBe(true);
});

test('verifica se 7 é um número par', () => {
  expect(ehPar(7)).toBe(false);
});

test('sequência de Fibonacci para n = 6', () => {
  expect(fibonacci(6)).toBe(8);
});

test('sequência de Fibonacci para n = 9', () => {
  expect(fibonacci(9)).toBe(34);
});