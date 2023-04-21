`
    O que são Objetos:

        Tipo de dados que armazena coleção de dados
        (chave / valor).
    

    Tudo no JavaScript é Objeto 

    Por trás dos panos o JavaScript cria um objeto com os tipos primitivos 
    e acessa as propriedades desses objetos para se obter o valor.

        Ex:
            const string = new String("Gabriel");

            string.valueOf // Eu pego o valor desse Objeto

            const string2 = "Gabriel"

            console.log(string2)

            por trás dos panos o JavaScript acessa o string2.valueOf

`;

const obj1 = { // Criar um Objeto Literal
    nome: "Gabriel"
};

const obj2 = new Object(); // Criar um objeto pelo construtor

const string = new String("Gabriel") // Criando uma string pelo construtor

const number = new Number("145") // Criando um numero pelo construtor

