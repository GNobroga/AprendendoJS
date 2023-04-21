`
    É a capacidade de uma função enxerga as variáveis que estão ao seu redor,
    ou seja, acima do seu escôpo.
`;


const p = function(){
    let contador = 0;
    return function incrementa(){
        console.log(contador);
        contador++;
    }
}

let fnc = p();

fnc(); // contador 0
fnc();  // contador 1
