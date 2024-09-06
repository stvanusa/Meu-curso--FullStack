//10. Calcule o fatorial de um número usando um laço while.
// Função para calcular o fatorial de um número usando while
function factorial(num) {
    if (num < 0) {
        return "Não é possível calcular o fatorial de um número negativo.";
    }

    let result = 1; 

    while (num > 1) {
        result *= num; 
        num--;         
    }
    return result; 
}

let num = 5;

console.log("O fatorial de " + num + " é " + factorial(num) + ".");