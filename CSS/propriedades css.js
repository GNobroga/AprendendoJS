`
    Propriedades de Exibição CSS:

        visibility: hidden; - Similar ao display none, porém, o espaço do elemento se mantém.

        display: none, block, inline-block, contents

            contents - Remove o elemento de um fluxo e todo filho dele passa a ser filho do elemento acima.

        opacity: 0.5; 

            vai de 0 a 1

        transition: 0.5 all ease;

    
    Propriedade de Posicionamento:

        position: static, relative, fixed, absolute, sticky.

            static - Não é possível posicionar é o padrão.

            relative - Pode posicionar, não sai do fluxo padrão do documento.

            fixed - As propriedades, left, bottom, top, etc tem como base a viewport

            absolute - Tem como base o tamanho do elemento container que tenha um position diferente de static.

            sticky (Adesivo) - Ao chegar em um determinada posição ele fica fixo na tela. O
            espaço que ele ocupava permanece.

        z-index: valor;

    Propridades 3:

        overflow (Transbordar):

            Controla o que acontece quando um conteúdo é maior/ultrapassa que o espaço disponivel do elemento container.

            visible - Default value
            hidden - Esconde o que passar do container
            scroll - Adicionar um scroll
            auto - Adiciona scroll automaticamente

            overflow-y: value;
            overflow-x: value;


            overflow: hidden - Força um container a computar a altura dos elementos que utilizem
            a propriedade float.

        float:
            Permite com que um elemento flutue na página

            left
            right
            none - Default value
            
            Obs 1: Essa propriedade só funciona com position static ou relative.
            Obs 2: Conteúdo EX: textos, images não entram atrás de elementos flutuantes. Porém o container
            sim que contém esses conteúdos sim.

        clear:
            Serve para considerar elementos flutuantes (float)

            both - Ambos os lados
            right
            left
            
        box-sizing:

            border-box - Recalcula a margin e o padding do elemento, dando o valor exato.
            content-box - Default value
`;



