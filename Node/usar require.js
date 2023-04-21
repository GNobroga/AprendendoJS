`

    Ler arquivo com require();

`;

const https = require("https") // Responsável por fazer conexões https

const options = {
    hostname: "url",
    port: 443,
    path: "/cursos/index.html",
    method: "GET"
}

const request = https.request(options, (res) => {
    res.setEnconding("UTF-8");

    res.on("data", data => { // Como é uma stream podemos setar eventos com on
        console.log(data);
    })

}) // Fazer uma requisição para algo.


request.end() // Finalizar a requisição. 