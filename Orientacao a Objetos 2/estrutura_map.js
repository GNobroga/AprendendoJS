`

    Map e WeekMap

    É um conjunto de chave de valor.

`;

const map = new Map();
const map2 = new Map([["nome", "Gabriel"], ["idade", 21]]);

map.set("chave", "valor"); // Inserir um elemento, posso utilizar qualquer coisa como chave.

map.get("chave") // Obter o elemento

map.keys() // Retorna as chaves

map.has() // Verifica se a propriedad existe

map.values() // Retorna os valores

map.entries() // Retorna objeto contendo chave e valor

map.size(); // Retorna o tamanho


// WeakMap

const weakMap = new WeakMap(); // Chave pode ser qualquer coisa, exceto numeros.

weakMap.set() // Adicionar elemento
weakMap.has() // Verifica chave
weakMap.delete() // Deleta elemento
weakMap.get() // Obter elemento