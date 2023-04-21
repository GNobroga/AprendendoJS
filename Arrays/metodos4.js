const valores = [1,2,3,4,5,6,7,8,9,10];

valores.push(10) // Adiciona um elemento no Array e retorna a posição dele.

valores.pop() // Retorna e deleta o último elemento do Array.

valores.shift() // Retorna e deleta o primeiro elemento do Array.

valores.unshift(1,4,5) // Insere no inicio do Array e retorna o número de elementos

valores.slice(1, 2) // Para recortar um Array, não altera o original.

valores.splice(2, 4, "Gabriel") // Modifica o Array e retorna os elementos removidos. Altera o original.