`
    Representação do operador rest operator: ...
    Ele funciona em parâmetros de função.
`;

function teste(...args){ // Rest operator, ele deve ser colocado no último parâmetro da função.
    args.forEach((x) => console.log(x));
}