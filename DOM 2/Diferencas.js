`
    Diferença entre HTMLCollection e NodeList

    Toda sintaxe que começa com getElements retorna um HTMLCollection e ao contrário
    da NodeList ele é dinâmicoa, ou seja, ele altera o seu tamanho de acordo com a entrada
    de um novo conteúdo/elemento.

        Ex:
            document.getElementsByClassName();
            document.getElementsByTagName();

    document.querySelectorAll() // retorna uma NodeList e ela é estática, ou seja não é viva.

`;