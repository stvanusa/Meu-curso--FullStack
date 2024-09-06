//Declarando nota do aluno
let nota = 60;
//usando switch para determinar  
switch (true) {
    case (nota >= 90):
        console.log("A");
        break;

    case (nota >= 80):
        console.log("B");
        break;

    case (nota >= 70):
        console.log("C");
        break;

    case (nota >= 60):
        console.log("D");
        break;
    default:
        console.log("F")
}
