`
    Pasta pública e arquivos estáticos

    Passos:

        1 - Criar uma pasta chamada public
        2 - Colocar os arquivos dentro dela separados em pastas Ex: images
        3 - Tornar a pasta pública: express.static("nomeDaPasta");

    
    express.static("nomeDaPasta") // Ele procura a pasta no diretório relativo. Devido a isso torna-se necessário utilizar o caminho absoluto para se evitar erros.
`;

const path = require("path");


server.use(express.static(path.join(__dirname, "public")); // Torna a pasta acessível

server.use("/static", express.static('public')); // Acessar a partir de uma base