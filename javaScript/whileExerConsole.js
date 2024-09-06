let opcao = 0
while(opcao !== 3){
    console.log("Menu:");
    console.log("1.Dizer Olá:");
    console.log("2.Dizer Tchau:");
    console.log("Sair");

    opcao = parseInt("Escolha uma opção");
    
    if (opcao === 1){
        console.log("Olá!");
    }
    else if(opcao === 2){
        console.log("Tchau!")
    }
    else if (opcao === 3){
        console.log("Saindo...")
    }
    else{
        console.log("Opção inválida,tente novamente.")
    }
        
}