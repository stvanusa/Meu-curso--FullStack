let opcao = 0
while(opcao !== 3){
    opcao = Number(prompt(("Escolha uma opção\n1 - dsfsdf\n 2 - dilsjflsd\n 3 - Sair")));
    
    if (opcao === 1){
        alert("Olá!");
    }
    else if(opcao === 2){
        alert("Tchau!")
    }
    else if (opcao === 3){
        alert("Saindo...")
    }
    else{
        alert("Opção inválida,tente novamente.")
    }
        
}