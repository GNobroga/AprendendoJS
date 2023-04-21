`

    Leitura de Streams (Fluxo)

        Com Stream os dados são carregados sob demanda, o que faz consumir
    menos recursos da máquina.

        É necessário trabalhar com eventos para monitorar os passos.

`;

const fs = require("fs");

const readStream = fs.createReadStream("path-arquivo", "UTF-8"); // É uma função assíncrona

readStream.once("data", data => { // Executa apenas uma vez
    console.log(data);
});

readStream.on("data", data => { // Essa função executa a cada salto com uma parte dos dados carregados
    console.log(data);
});

readStream.on("end", () => {
    console.log("FIM");
});

"Write Streams";

const writeStream = fs.createWriteStream("path-arquivo", "UTF-8");

writeStream.write("conteudo");


"Utilizar ReadSteam em conjunto com WriteStream";

const ws = fs.createWriteStream("path-file", "utf-8");
const rs = fs.createReadStream("path-file", "utf-8");

rs.on("data", data => {
    ws.write(data);
});


"Trabalhar com o pipe tem o mesmo efeito de utilizar writeStream e  readStream em conjunto";

// Faz ligação entre um Stream write e read

readStream.pipe(writeStream); // Clone do arquivo feito.

// Todo pipe retorna um Stream  logo: 

readStream.pipe(writeStream).on("finish", () => {
    console.log("Finalizou!");
});


