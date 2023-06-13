// Implemente a função 'dobrarNumeros' que recebe um array de números
// e retorna um novo array com cada número dobrado.
function dobrarNumeros(numeros) {
    return squaredNumbers = numeros.map((numeros) => numeros * 2);
}

// Implemente a função 'somarValores' que recebe um array de números
// e retorna a soma de todos os valores.
function somarValores(numeros) {
    return numeros.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

// Implemente a função 'filtrarPares' que recebe um array de números
// e retorna um novo array contendo apenas os números pares.
function filtrarPares(numeros) {

    return numeros.filter((numeros) => numeros % 2 === 0);
}

module.exports = {
    dobrarNumeros,
    somarValores,
    filtrarPares
};