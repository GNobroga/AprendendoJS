`
    É possível acessar e alterar o conteúdo de 
    um atributo de uma Tag HTML apenas pelo Element.<nome atributo>

    Alguns atributos deverá ser acessado utilizando Element.html<nome Atirbuto>

    Para acessar o atributo class Element.className

`;

const input = document.querySelector("input");
const label = document.querySelector("label");

input.value // Acessando a propriedade value do Input 
input.disabled // Acessando a propriedade para desabilitar um Input 
input.placeholder // Acessando a propriedade placeholder de um Input
input.readonly // Acessando a propriedade readonly de um Input

label.htmlFor // Acessando a propriedade For do label
