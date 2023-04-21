const array = [1,5,10,"olá", true];

array.every(element => typeof element === "number"); // Verifica se todos os elementos satisfaz uma condição. Retorna true ou false.

array.some(element => typeof element === "number"); // Verifica se um elemento satisfaz uma condição. Retorna true ou false.

array.filter(element => typeof element === "number"); // Filtrar os elementos de um array com base uma condição. Retorna um novo array filtrado.

array.forEach(element => console.log(element)) // Executa algo para cada elemento do array. Retorna undefined.

array.map(element => element * 2) // Faz uma alteração nos elementos do Array. Retorna o array do mesmo tamanho modificado.

