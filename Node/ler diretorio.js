`
    Ler um diretório
`;

"File System"

const fs = require("fs"); // É um módulo que já vem com o Node para manipulação do Sistema de arquivos

    "Lendo diretórios";
fs.readdir // É assíncro para ler diretório
fs.readdirSync // É síncrono para ler diretório

fs.readdir("path", (error, files) => {
    if(error) throw Error;

    console.log(files);
});

    "Lendo arquivos";
fs.readFile // É assíncro para ler arquivos
fs.readFileSync // É sincrono para ler arquivos


fs.readFile("path", "utf-8", (error, data) => {
    if(error) throw error;

    console.log(data);
});


const file = fs.readFileSync("path", "utf-8");

    "Lendo buffers - É o tipo de dado para representação de arquivos binários";

fs.readFile("banner.jpg", (error, data) => {
    console.log(data);
});


"Verifica se o arquivo ou diretório existe"

fs.existsSync();


"Path";

const path = require("path") // Módulo bastante utilizado para manipular caminhos

path.basename(__filename) // Retorna o nome do arquivo sem o caminho completo.

"Váriaveis para se obter o caminho absoluto";

__filename // Caminho até o arquivo, está na mesma hierarquia do global

__dirname // Caminho até o diretório, está na mesma hierarquia do global

"Contenar diretório"

path.join(__dirname, "static", rota);


"Ver extensao do arquivo"

path.join.extname(rota);
