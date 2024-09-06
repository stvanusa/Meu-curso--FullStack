//9. Verifique se um número armazenado na variável num é primo.
// Declaração e atribuição de valor à variável num
let num = 29;

function isPrimo(n) {

    if (n <= 1) return false;

    if (n <= 3) return true;

    if (n % 2 === 0 || n % 3 === 0) return false;

    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;

        return true;
    }


    if (isPrimo(num)) {
        console.log(num + ' é um número primo.');
    } else {
        console.log(num + ' não é um número primo.');
    }
}
