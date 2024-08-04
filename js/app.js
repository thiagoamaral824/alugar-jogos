let jogosAlugados= 0;

function alterarStatus(id) {
    let jogo = document.getElementById(`game-${id}`);
    let imagem = jogo.querySelector('.dashboard__item__img');
    let botao = jogo.querySelector('.dashboard__item__button');
    let nomeJogo = jogo.querySelector('.dashboard__item__name');

    if (imagem.classList.contains('dashboard__item__img--rented')) {
        if (confirm(`Você tem certeza que deseja devolver o jogo ${nomeJogo.textContent}?`)) {
            imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');

            botao.textContent = 'Alugar';
            jogosAlugados--;
        }
        
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        
        botao.textContent = 'Devolver';
        jogosAlugados++;
    }
    contarJogosAlugados();
}

document.addEventListener('DOMContentLoaded', function() {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contarJogosAlugados();
});

function contarJogosAlugados() {
    alert(`Total de jogos alugados: ${jogosAlugados}`);
}