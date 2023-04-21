`

    Métodos interessantes do objeto window.
`;

window.alert() // Exibe uma alerta
window.confirm() // Exibe um confirme que retorna True ou False

window.open("url") // Abre uma nova aba com o endereço específicado

window.close() // Fecha a página, ele só fecha se abrir com o método open.

window.print() // Abre a janela de print


"Alguns métodos para Scroll";

window.scrollTo(x, y) // Scrolla até uma posição específicada.

window.scrollBy(x, y) // Ele soma ao Scroll que já existe.

pageXOffset // retorna o tanto que foi scrollado, ou seja, a  posição do scroll.

pageYOffset // retorna o tanto que foi scrollado, ou seja, a  posição do scroll.

"Principais eventos";

window.addEventListener("load", callback) // Assim que a página carregar dispara o evento

window.addEventListener("DOMContentLoaded", callback) // É disparado com a estrutura do DOM é carregada

window.addEventListener("resize", callback) // Monitora mudanças no tamanho da viewport

window.addEventListener("scroll", callback) // Monitora mudanças no Scroll

window.addEventListener("unload", callback) // Monitora quando o browser é fechado

window.addEventListener("beforeunload", callback) // Monitora quando o browser é fechado


