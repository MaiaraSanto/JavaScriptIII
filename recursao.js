//calcula a soma dos números inteiros de 1 a n
function somaNumeros(n) {
  if (n == 1) {
    return 1;
  } else {
    return n + somaNumeros(n - 1);
  }
}
console.log(somaNumeros(6));

// Retorna o número se ele é par ou não
function ehPar(num) {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
console.log(ehPar(4));

// Calcula a sequência de Fibonacci para um dado número
function fibonacci(x) {
  if(x <3) return 1;
  return fibonacci(x -1) + fibonacci (x -2)
  
}
 console.log(fibonacci(9))


module.exports = { somaNumeros, ehPar, fibonacci };