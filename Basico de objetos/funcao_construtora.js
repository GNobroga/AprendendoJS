`
    Função construtora:

       Quando utilizamos o "new" ele cria um objeto vazio por trás dos panos
       e como o "this" é dinâmico dentro de uma function expression ele atribui
       esse objeto a esse this que criará propriedades dinâmica.
`;


function Pessoa(nome, idade){
    this.nome = "Gabriel";
    this.idade = 21;
}

const p = new Pessoa("Gabriel", 21);