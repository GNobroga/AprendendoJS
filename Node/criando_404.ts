`

    O método use executa use a use verificando se encontra o elemento.
    Caso não encontre, é possível setar uma callback para fazer
    o envio de uma mensagem seguindo o exemplo abaixo:

`;

const server = express();


server.use(mainRoutes);

server.use((req: Request, res: Response) => {
    res.status(404).send("Página não encontrada");
});