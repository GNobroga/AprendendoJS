`

    Organizando as rotas:

        - Criar uma pasta chamada routes

`

import {Router} from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
    res.send("Hello World");
});

router.get("/contato", (req: Request, res: Response) => {
    res.send("Hello World");
});


export default router;

`
    /////////////////////////////////

    Usando essas rotas criadas acima


    o use é um - middlewares

    Middleware:

        Funções de Middleware são funções que tem acesso ao 
        objeto de solicitação (req), o objeto de resposta (res), 
        e a próxima função de middleware no ciclo solicitação-resposta 
        do aplicativo. A próxima função middleware é comumente denotada 
        por uma variável chamada next.

        Funções de middleware podem executar as seguintes tarefas:

            Executar qualquer código.
            Fazer mudanças nos objetos de solicitação e resposta.
            Encerrar o ciclo de solicitação-resposta.
            Chamar a próxima função de middleware na pilha.
`

import mainRoutes from "./routes/index";

server.use(mainRoutes) // Inserindo as rotas, ele recebe dois argumentos, o primeiro é a base que por padrão é / e a segunda e o objeto.

server.use("/painel", painelRoutes);
