const {createReadStream} = require("fs");
const server = require("http");

const PORT = 3000;

const mimetype = {
    css: "text/css",
    html: "text/html",
    png: "image/png",
    js: "application/javascript"
};

server.createServer((req, res) => {

    switch(req.url){

        case "/static/index.html":
            createReadStream("./static/index.html", "utf-8").pipe(res); // Lendo o arquivo localmente e jogando no Servidor.
            break;

        case "/static/style.css":
            createReadStream("./static/style.css", "utf-8").pipe(res);
            break;
        
        default:
            res.writeHead(404);
            res.end("Error 404 - Page not found");

    }


}).listen(PORT);


console.log("Servidor aberto na porta http://localhost:" + PORT);


"Propriedades do objeto req";

req.method // Exibe o método de envio
req.on("data"); // Recupera os dados
req.on("end");