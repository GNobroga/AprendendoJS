`

    Alguns métodos para se obter o prototype

`;

Object.hasOwnProperty("propriedade") // Verifica se a propriedade existe em um determinado objeto.

Object instanceof Classe // Verifica se um objeto é instância de uma determinada classe. Ele vai no prototype e verifica essa informação.

Object.prototype.isPrototypeOf("object") // Verifica se o objeto possui o mesmo prototype queo outro.

Object.getPrototypeOf("object") // Retorna o prototype do objeto.


Object.defineProperty("object", "nome da propriedade", { // Criar propriedades com configurações personalizadas.
    value: "",
    enumerable: false    
});

Object.setPrototypeOf("object", {

}); // No primeiro parâmetro vai o objeto e no segundo as coisas que irão pro prototype dele.