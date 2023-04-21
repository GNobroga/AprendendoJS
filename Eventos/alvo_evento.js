`

    A diferença entre o Target e o CurrentTarget é que o
    CurrentTarget é o element no qual foi atrelado o evento ou função
    de evento.

`;

document.addEventListener("click", function(event){

    event.currentTarget // É o elemento que recebeu a função callback do evento.
    
});