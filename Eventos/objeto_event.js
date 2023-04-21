`
    O objeto de evento

        Seja com DOM 0 ou DOM 2, os handlers (funções atreladas à eventos)
        recebem por parâmetro um objeto do tipo evento. Para ter acesso à 
        esse objeto, basta dar um nome ao parâmetro.

`

document.addEventListener("click", function(event){
    event.stopPropagation() // Vai para a propagação do evento, ou seja, a fase de borbulha ou captura.
    
});