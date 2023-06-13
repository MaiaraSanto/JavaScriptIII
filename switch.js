//Verifica o dia da semana correspondente a um número
function retornaDiaSemana(number) {
    switch (number) {
        case 1:
            return "Domingo";
            break;
        case 2:
            return "Segunda-feira";
            break;
        case 3:
            return "Terça-feira";
            break;
        case 4:
            return "Quarta-feira";
            break;
        case 5:
            return "Quinta-feira";
            break;
        case 6:
            return "Sexta-feira";
            break;
        case 7:
            return "Sábado";
            break;

        default:
            return 'Número inválido';
    }

};

console.log(retornaDiaSemana(1))

// Verifica o preço do produto com base no código de produto
function retornaPrecoProduto(code) {
    switch (code) {
        case 'A':
            return 10.99;
            break;

        case 'B':
            return 5.99;
            break;
        case 'C':
            return 7.5;
            break;
        default:
            return 'Código inválido';
    }

};
console.log(retornaPrecoProduto('A'))

//Verifica a categoria de um produto com base no tipo de produto
function retornaCategoriaProduto(type) {
    switch (type) {
        case 'Eletrônicos':
            return "Tecnologia";
            break;

        case 'Roupas':
            return "Moda";
            break;
        case 'Alimentos':
            return "Alimentação";
        default:
            return "Categoria desconhecida";
    }
};
console.log(retornaCategoriaProduto('Eletrônicos'))

module.exports = { retornaDiaSemana, retornaPrecoProduto, retornaCategoriaProduto };