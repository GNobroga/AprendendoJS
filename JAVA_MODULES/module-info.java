open module { // Abre o modulo para reflection
}

module name {
    exports pacotes...// Exportar algo
    requires modulo...// Requerer algo
    requires transitive // É uma dependencia que será transmitido por pai
    exports pacote to modulo, ...;
    opens pacote // abre um pacote para reflexão

    requires modulo;
    provides interface with implementacaoInterface;
}