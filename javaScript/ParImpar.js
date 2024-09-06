
//Escreva um programa que verifiquelet se o numero é par ou impar
// Solicita ao usuário um número
let numero = prompt("Digite um número:");

// Converte a entrada para um número inteiro
numero = parseInt(numero);

// Verifica se a entrada é um número válido
if (!isNaN(numero)) {
    // Verifica se o número é par ou ímpar
    if (numero % 2 === 0) {
        console.log(`O número ${numero} é par.`);
    } else {
        console.log(`O número ${numero} é ímpar.`);
    }
} else {
    console.log("Entrada inválida. Por favor, insira um número válido.");
}