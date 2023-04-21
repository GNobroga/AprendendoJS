`
O que são Eventos:
    
    . Seguir um link
    . Submeter um formulário
    . Carregar uma página ou recurso do servidor.
    . Digiar um texto
    . Mover o mouse...

Event handlers:

    Uma função que é executada quando um evento acontece.

Dispardor de eventos:

    É o elemento que disparou o evento. Ou seja, o elemento ao qual foi
    atrelado o event handler.

Event handler - DOM Level 0

    <button onclick="funcao()" id="btn">
        Clique
    </button>

        ou 

    const btn = document.querySelector("button");

    btn.onclick = funcao

Event handler - DOM Level 2

    const btn = document.querySelector("button");
    btn.addEventListener(evento, funcao, fase);

`;