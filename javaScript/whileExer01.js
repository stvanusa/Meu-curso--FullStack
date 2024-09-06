//Exemplo usando o break e continue;
//== compara valor
//===compara valor e tipo
let contador = 0
while (contador <10){
    contador++;
    if(contador===5){
        continue;//pula o resto do código
    }
    if(contador===8){
        break;//interrompe o laço
    }
    console.log("O contador é:",contador);
}