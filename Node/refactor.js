`
    Refactor
`;


const fs = require("fs");


const text = `
    Olá eu sou o Goku
`;

fs.writeFile("path", text, error => {
    console.log(error);
});


"Criar arquivo JSON";

const Person = {
    nome: "Gabriel",
    idade: 21
};


"Verificar se o diretório ou arquivo existe";

if(!fs.existsSync("arquivo.js")) {

    fs.mkdir("dados", error => {
        console.log(error);
    });

    fs.writeFile("arquivo.json", JSON.stringify(Person), error => {
        console.log(error);
    });
}

"Leitura e Escrita de JSON";

    // Toda representação de String é necessário utilizar o encoding UTF-8

fs.readFile("path", "utf-8", (error, data) => {
    console.log(data);
})


const dataJson = require("path-do-json") // Faz leitura do arquivo JSON e já converter para objeto JavaScript.


fs.writeFile("path-json", JSON.stringify(dataJson), error => {
    console.log("dsadsd");
});