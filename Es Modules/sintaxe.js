`
    Sintaxes para trabalhar com módulos

    Porque usar?
        Manutenção
        Namespacing
        Reutilização


    ES Modules:
        Export/Import

    
    <script src="script.js" type="module"></script>   
    
`;

export default nome
import nome from "caminho.js"

export nome
import {nome} from "caminho.js" // Extrair a função do modulo.


export {
    nome,
    idade
}

import {nome} from "caminho.js" // Extrair a função do modulo.

