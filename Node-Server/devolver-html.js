const http = require("http");
const fs = require("fs");

`   

    Htpp - Serve para criar um servidor.

    Req - Informações do Client para o servidor.

    Res - Informações do Servidor para o client.

`;

http.createServer((request, response) => {

    response.writeHead(200, "Content-type: text-plain");

    const path = "./index.html";

    const rs = fs.createReadStream(path, "utf-8");

    let html = "";

    rs.on("data", (data) => {
        html += data;
    });


    rs.on("end", () => {
        
        const convertToTemplate = new Function("return `"+ html +"`");
        
        response.end(convertToTemplate.call(request));
        
    });




}).listen(3000);

console.log("Servidor rodadando: http://localhost:3000");