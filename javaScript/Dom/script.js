//Selecionar elemento do DOM
let titulo = document.getElementById('titulo');
let itemList = document.getElementById('item-list');
let novoItemInput = document.getElementById('novo-item');
let adicionarBtn = document.getElementById('adicionar-btn');
let removerBtn = document.getElementById('remover-btn');

//Função para adicionar um novo item a lista
function adicionarItem() {

    let novoItemTexto = novoItemInput.value;
    if (novoItemTexto !== '') {
    let novoItem = document.createElement('li');
    novoItem.textContent = novoItemTexto;
    itemList.appendChild(novoItem);
    novoItemInput.value =''; // Limpar o campo de input
    }
    
    } 
    // Função para remover o último item da lista 
    function removerItem () {
     let ultimoItem = itemList.lastElementChild; 
        if (ultimoItem) { 
            itemList.removeChild(ultimoItem); 
    
    }
    
    }
    // Adicionando ouvintes de eventos aos botões 
    adicionarBtn.addEventListener('click', adicionarItem); 
    removerBtn.addEventListener('click', removerItem);
    // Mudando o título da página
    
    titulo.textContent = ' Minha Lista de Compras';