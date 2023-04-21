`
    O que é:

        Node JS é um JavaScript runtime construído em cima do Chrome's V8
        Javascript engine.

        É uma ferramente que nos permite executar código JavaScript fora
        do ambiente do browser, pois utiliza o motor de renderização do chrome
        (V8) sem a "casca" deste browser.

        Usos:

            - Criar ferramentas de linhas de comandos;
            - Criar códigos no servidor (listener de rotas);
            - Acessar diversos banco de dados;
            - Interagir com o sistema de arquivos;
    
    Módulos:
         
        Cada arquivo cria seu próprio mundo (Não há conflito de nomes de variáveis e funções);


    CommonJS:
        
        const mod = require("module")

        exports.foo = "bar"

        // OU

        module.exports = "bar"
    
    ESModule:

        import {foo} from "module.mjs"

        export const foo = "bar"
        export default function (...) {...}
        export class ClassName { ... }
    
    Podemos instalar módulos:

        - Disponíveis no node
        - Instaldos via NPM
        - Customizados

    Objeto global:

        Tudo que existe no objeto global, como objetos, valores e métodos, podem
        ser usados de qualquer lugar da aplicação sem que tenhamos que importar nada.
    
    Objeto process:
        
        Informações sobre o processo atual e permite interagir com este processo.

        - Obter o ID do processo;
        - Obter a versão do node;
        - Recuperar informações de ambiente;
        - Ler variáveis de ambiente;
        - Comunicar com o terminal;
        - Recuperar argumentos passados quando executamos o node


`;