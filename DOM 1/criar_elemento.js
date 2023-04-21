const container = document.querySelector(".container");
const child = container.querySelector("container div");
const div = document.createElement("div"); // Criar elemento HTML

container.insertBefore(div, child); // Inserir elemento antes do Child - Filho

Element.firstChild // Para obter o primeiro filho de um elemento, aceita Nós de texto.
Element.firstElementChild // Para obter o primeiro filho de um Elemento, não aceita Nós de texto.
