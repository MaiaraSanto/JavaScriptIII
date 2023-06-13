// Converte uma string para um número inteiro
function convertToInt(string) {

    if (/^(\-|\+)?([0-9]+|Infinity)$/.test(string))
        return Number(string);            
}
console.log(convertToInt('42'));
console.log(typeof convertToInt('42'));

// Converte um número inteiro para uma string
function convertToString(number) {
    return string = number + ''
}
console.log(convertToString(-10))
console.log(typeof convertToString(-10))

// Converte um valor para um booleano
function convertToBoolean(value) {

    return Boolean (value)
}
console.log(convertToBoolean('123'))
console.log(typeof convertToBoolean('123'))

module.exports = { convertToInt, convertToString, convertToBoolean };