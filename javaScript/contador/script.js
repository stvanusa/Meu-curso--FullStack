// script.js
document.addEventListener('DOMContentLoaded', () => {

    const valorSpan = document.getElementById('valor');
    const btnIncrementar = document.getElementById('btnIncrementar');
    const btnDecrementar = document.getElementById('btnDecrementar');
    const btnResetar = document.getElementById('btnResetar');

    let valor = 0;

    function atualizarValor() {
        valorSpan.textContent = valor;
    }

    btnIncrementar.addEventListener('click', () => {
        valor++;
        atualizarValor();
    });

    btnDecrementar.addEventListener('click', () => {
        valor--;
        atualizarValor();
    });

    btnResetar.addEventListener('click', () => {
        valor = 0;
        atualizarValor();
    });

    atualizarValor();
});