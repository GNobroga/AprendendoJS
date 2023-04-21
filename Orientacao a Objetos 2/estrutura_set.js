`
    Set e WeakSet

    A ideia do Weak é passar elementos que são referências de memória, justamente
    para que seja limpo.
`;

const set1 = new Set() // Possui valores únicos

set1.add() // Adicionar
set1.size // Tamanho
set1.delete() // Deletar 
set1.has(6)
set1.keys();
set1.values();
set1.clear();
set1.forEach();

const set2 = new WeakSet() // Não é possível utilizar tipos primitivos nele.

set2.add()
set2.has()
set2.delete()
