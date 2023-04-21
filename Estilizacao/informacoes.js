`
    Propriedade style

        let prop = elemento.style.propriedade

        elemento.style.propriedade = "valor";

    Objeto classList:

        .add()
        .remove()    
        .toggle()
        .className
    
    Estilos computados:

        window.getComputedStyle(element) // Mostra todos os estilos de um elemento.
    
    
    Tamanho e posição no documento de um elemento:

        elemento.offsetHeight // É a altura do elemento
        elemento.offsetWidth // É a largura do elemento
        elemento.offsetLeft // É relacionado a posição do elemento no documento
        elemento.offsetTop // É relacionado a posição do elemento no documento


    Posição de um elemento em relação a viewport:

        elemento.getBoundingClientRect().
            bottom // Distância do altura do elemento até o 0 da viewport
            left
            right
            top
            width
            height

`;