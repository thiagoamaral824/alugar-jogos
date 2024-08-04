# AluGames - Aluguel de Boardgames

## Introdução

O **AluGames** é um projeto para gerenciamento de aluguel de boardgames. Este sistema permite que os usuários aluguem e devolvam jogos de tabuleiro de maneira simples e intuitiva. O projeto é composto por uma interface em HTML/CSS e uma lógica interativa em JavaScript para alternar o status dos jogos entre "alugado" e "disponível".

Com **AluGames**, você pode:
- **Alugar** um jogo de tabuleiro: Clique no botão "Alugar" para marcar o jogo como alugado.
- **Devolver** um jogo de tabuleiro: Clique no botão "Devolver" para marcar o jogo como disponível novamente.

A interface foi projetada para ser clara e fácil de usar, com atualizações visuais que refletem o status atual de cada jogo.

## Funcionalidades

- **Alterar Status de Aluguel:** Permite que o usuário alugue ou devolva um boardgame.
- **Atualização de Interface:** A interface do usuário é atualizada para refletir o status atual do jogo.
- **Interface Intuitiva:** Design simples com botões para interação direta.

## Estrutura do Projeto

### Arquivos Principais

- **index.html**: Contém a estrutura HTML da aplicação.
- **css/main.css**: Contém os estilos CSS para a interface do usuário.
- **js/app.js**: Contém a lógica JavaScript para alterar o status dos jogos.

### HTML (index.html)

A estrutura HTML inclui:
- Uma imagem de logo.
- Uma seção com título e divisão visual.
- Uma lista de jogos, cada um com uma imagem, nome e botão para alugar/devolver.

### CSS (css/main.css)

Define os estilos para os elementos da interface, incluindo a lista de jogos, imagens e botões. As classes usadas ajudam a estilizar os estados dos botões e a aparência dos jogos alugados.

### JavaScript (js/app.js)

O arquivo JavaScript contém a seguinte função:
- **alterarStatus(id)**: Alterna o status de aluguel de um jogo. Atualiza a classe CSS da imagem e do botão com base no status atual do jogo.

## Como Usar

1. Abra o arquivo `index.html` em um navegador.
2. Clique no botão "Alugar" para um jogo disponível. O botão e a imagem do jogo mudarão para refletir o status de "alugado".
3. Clique no botão "Devolver" para um jogo que já está alugado. O botão e a imagem do jogo voltarão ao status de "disponível".

## Exemplo de Uso

Ao clicar no botão "Alugar" para o jogo "Monopoly", a imagem do jogo será atualizada para indicar que está alugado, e o botão mudará para "Devolver". Da mesma forma, ao clicar em "Devolver" para o jogo "Takenoko", a interface será atualizada para mostrar que o jogo está disponível novamente.
