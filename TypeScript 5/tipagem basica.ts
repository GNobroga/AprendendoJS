


const button1 = document.querySelector("button")!; // Estou dizendo que o elemento não é nulo
const button2 = document.querySelector("button") as HTMLButtonElement; // Uilizando alias
 // Tipando e avisando que será o This.

const evento: (this: HTMLElement, e: MouseEvent) => void = (e) => { // o This é oculto, mas ele é o primeiro parâmetro de uma função.
    console.log("sdjhshd")
}

button1.addEventListener("click", evento);

// Curto circuito 

const value = null;

const valueOk = value || "não ok"; // Será o valor for null ou undefined será atribuido "não ok";


"Eventos customizados";

const eventName = "sla";
const event = new Event(eventName) // Criando um evento, posso por o nome que eu quiser como parâmetro
const customEvent = new CustomEvent("nome", {}) // Criar evento passando informações
button2.dispatchEvent(event)   // Dispatch - Despacho de evento, ou seja, dispara um evento nesse elemento.
button2.addEventListener(eventName, evento as EventListener) // É necessário colocar um ouvinte para executar uma ação quando o evento é disparado.


export default "";