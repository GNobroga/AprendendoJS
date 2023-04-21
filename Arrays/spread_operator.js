`
    O Spread operator é declarado com ...args, ele serve para espalhar o conteúdo de
    um Array.
`;

const valores = [1,2,3,4,5,6,7,8,9,10];


function somar(){
   return Array.from(arguments).reduce((p, c) => p + c);
}

somar(...valores) // Utilizando o Spread operator para espalhar o conteúdo do Array.