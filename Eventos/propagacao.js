`
    Existem duas fases:
        Fase de captura // Começa do topo da hierarquia e vai até o nó
        Fase de bolha // Começa do nó e vai até o inicio da hierarquia

    A fase de captura padrão é a << Fase de bolha >>

    Alterando o forma de propagação de eventos:

        btn.addEventListener("click", callback, true ou false);

        false - Fase de bolha
        true - Fase de captura


`;