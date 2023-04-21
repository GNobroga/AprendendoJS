`
    Express é um framework:

        - Possui um sistema de rotas completo;

        - Possibilita o tratamento de exceções dentro da aplicação;

        - Permite a integração de vários sistemas de templates que facilitam a criação de páginas web para suas aplicações;

        - Gerencia diferentes requisições HTTP com seus mais diversos verbos;

        - Feito para a criação rápida de aplicações utilizando um conjunto pequeno de arquivos e pastas;

    Utilizado para criação de servidores web.

    Instalar:

        npm install express 

        npm install @types/express

`;

import express, {Request, Response} from "express";


const server = express();

server.get("/", (req: Request, res: Response) => {

    res.send() // Enviar mensagem.
});


server.listen(3000); // A porta padrão é a 80, quando não especificamos a padrão devemos utilizar htpp://localhost:PORT



`
    Teoria das rotas

        alunos.b7web.com.br/suporte 

        alunos.b7web.com.br/suporte/contato

        alunos.b7web.com.br/media/logo.jpg

        Existem rotas estatiscas e dinâmicas.

`


