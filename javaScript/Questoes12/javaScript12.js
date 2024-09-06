//12. Crie uma função chamada filterEvens que recebe um array de números como parâmetro e retorna um novo array contendo apenas os números pares.
function filterEvens(numbers) {
    
    return numbers.filter(number => number % 2 === 0);
}
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evens = filterEvens(array);

console.log("Números pares:", evens);