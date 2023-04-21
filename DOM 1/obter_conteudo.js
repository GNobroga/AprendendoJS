`
    Element.textContent:
        O textContent funciona de forma muito semelhante ao innerText, porém, 
        retornando todo o conteúdo de texto, incluindo o texto oculto pelo css,
        bem como as quebras de linha (\n). Utilizamos o textContent quando queremos
        buscar todo o texto disponível no elemento.

    Element.innerHTML: 
        O innerHTML pode ser usado para inserção de tags, textos e imagens
        em uma página web, gerando um risco de segurança. Parecido com um
        cross-site scripting, mas inofensivo, pois o HTML5 especifica que
        uma tag <script> inserida via innerHTML em uma página web não deve
        ser executada. Entretanto, existem formas de executar JavaScript
        sem usar <script>, portanto, ainda há um risco de segurança ao
        utilizar o innerHTML. Por esta razão, recomenda-se não utilizar
        o innerHTML para inserção de texto puro.

    Element.innerText:
        Retorna apenas o texto. Ele ignora todas as tags HTML que estão 
        dentro do elemento, mas ainda assim, “entende” o css do elemento, retornando 
        apenas textos visíveis. Utiliza-se quando queremos buscar apenas o texto visível
        disponível no elemento.

`