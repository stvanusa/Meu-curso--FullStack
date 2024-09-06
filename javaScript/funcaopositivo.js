//3-Crie uma funçao que verifique se um número é positivo ou negativo

function verificarNumero(numero) {
    let resultado = numero
    if (numero >= 0) {
        reultado = "Numero Positivo"
    }
    else {
        resultado = "Numero Negativo"
    }
    return resultado
}
console.log(verificarNumero(-9)) 
