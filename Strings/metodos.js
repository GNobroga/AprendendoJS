`
   Principais métodos e propriedades
   
   replace()
   replaceAll()
   indexOf()
   includes()
   lastIndexOf()
   slice()
   substring()
   split()
   toLowerCase()
   toUpperCase()
   valueOf()
   trim()
   trimEnd()
   trimStart()
   padStart()
   padEnd()
   startsWith()
   endsWith()
   charAt()
   charCodeAt()
   length
`


"Gabriel".replace("b", "o") // Substitui um valor da String por outro.

"Gabriel Cardoso".indexOf("cardoso") // Retorna o index do valor informado, a primeira ocorrência.

"Gabriel Cardoso".lastIndexOf("cardoso") // Retorna o index do valor informado, a última ocorrência.

"Gabriel Cardoso".includes("Cardoso") // Retorna true ou false se o valor informado existe na String.

"Gabriel Cardoso".slice("inicio", "final") // Ele recorta uma String, permite passar parâmetro negativo.

"Gabriel Cardoso".substring("inicio", "final") // Ele recorta uma String, não aceita valor negativo.

" Gabriel Cardoso ".trim() // Remove os espaços em brancos/quebra de linha da String.

" Gabriel Cardoso ".trimStart() // Remove os espaços em brancos/quebra de linha da String no começo.
" Gabriel Cardoso ".trimEnd() // Remove os espaços em brancos/quebra de linha da String no final.

" Gabriel Cardoso ".padStart(20, "caracter") // Ele preenche caracteres a esquerda da String, o default é " ";


"Gabriel Cardoso".startsWith("palavra") // Verifica se uma String começa com um determinado caracter
"Gabriel Cardoso".endsWith("palavra") // Verifica se uma String termina com um determinado caracter

"Gabriel Cardoso".charAt(0) // Recupera um caracter de um determina posição


"Gabriel Cardoso".split() // Divide uma String com base em um caracter

"".at()
"".concat()
"".repeat()
