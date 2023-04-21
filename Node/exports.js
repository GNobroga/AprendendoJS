`
    CommonJS = Exports;

    Por padrão o module.exports é um objeto.

    Para informar o Node que quero utilizar ES Modules utiliza-se nomes
    de arquivos.mjs  ou colocar um propriedade no package.json "type": "module"


    Variáveis para pegar caminho da pasta e arquivo:

        __dirname
        __filename


`

const VALUE = 2000;

// Exportar 1
module.exports = VALUE;

// Exportar 2
exports.name = "Value";

// Importar 
const value = require("path");


