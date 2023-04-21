const valores = [1,2,3,4,5,6,7,8,9,10];

valores.indexOf(5) // Retorna a posição do primeiro elemento que se desejar buscar.

valores.lastIndexOf(5) // Retorna a posição do último elemento que se deseja buscar.

valores.includes(5) // Verifica se o elemento existe dentro do Array.

valores.find((element) => element % 2 == 0) // Retorna do primeiro elemento que atenda a condição descrita.

valores.findIndex((element) => element % 2 == 0) // Retorna a posição do primeiro elemento que atenda a condição descrita.