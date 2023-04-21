`

    Módulos no NodeJS: Importando

`;


const fs = require("fs");

fs.writeFile("arquivo.txt", "mesdjsadasdad", error => {
    if(error != null) throw error;
    console.log("Saved!");
});