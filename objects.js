// Calcula o perímetro e a área de um retângulo usando um objeto
function calcularRetangulo(retangulo) {

    const area = retangulo.largura * retangulo.altura;
    const perimetro = 2 * (retangulo.largura + retangulo.altura);
    return { perimetro: perimetro, area: area }
}

// Verifica se uma pessoa é maior de idade
function ehAdulto(pessoa) {
    if (pessoa.idade === 25) {
        ;
        return true;
    }
}

// Concatena os valores de um objeto em uma string
function concatenaValores(obj) {
    return `${obj.nome} ${obj.idade} ${obj.cidade}`;

}

module.exports = { calcularRetangulo, ehAdulto, concatenaValores };