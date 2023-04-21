`
    Há 12 tipos diferentes de "nós" no DOM HTML
    (elemento, atributo, texto, comentário, etc)
    Um elemento é só tum tipo específico de nó.
`;

`Para navegar entre os nós: `;

    Node
        .parentNode
        .parentElement
        .nextSibling
        .previousSibling
        .nextElementSibling
        .previousElementSibling

    Node 
        .childNodes // Retorna qualquer nó << NodeList >>
        .children // Retorna apenas nós de elementos << HTMLCollection >>
        .firstChild // Obter o primeiro filho de um nó
        .firstElementChild // Obter o primeiro filho do tipo nó element
        .lastChild // Obter o último filho do nó
        .lastElementChild // Obter o último filho do tipo nó element
        .hasChildNodes() // Verifica se o nó possui filhos 

`Adicionar nós: `;
    Node 
        .prepend()
        .append()
    
    Node 
        .appendChild()
        .insertBefore()
        .cloneNode() // Clonar um nó qualquer

    Node
        .after() // Da pra passar vários valores como parâmetro
        .before() // Da pra passar vários valores como parâmetro
    
    Element 
        .insertAdjacentElement()
            `
                Valores de posições para o InsertAdjacentHTML: beforebegin, afterbegin, beforeend, afterend;
            `
        .insertAdjacentHTML() 
            `
                Valores de posições para o InsertAdjacentHTML: beforebegin, afterbegin, beforeend, afterend;
            `
        .insertAdjacentText()
            `
            Valores de posições para o InsertAdjacentText: beforebegin, afterbegin, beforeend, afterend;
            `

`Remover nós:`;

    Node 
        .replaceChild() // Substitui um elemento nó por outro novoFilho velhoFilho
        .removeChild() // Remove um elemento nó pai
        .remove()

`Criar nós: `;

    document 
        .createElement() // Criar nó element
        .createAttribute() // Criar um nó atributo
        .createTextNode()
        .write()

`Setar e obter atributo`;
    Node 
        .setAttributeNode("atributo Node criado com createAttribute") // Setar Atributo
        .setAttribute("atributo", "valor") // Setar Atributo