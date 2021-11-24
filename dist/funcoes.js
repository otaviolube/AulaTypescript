"use strict";
function somar(x, y) {
    return x + y;
}
let myAdd = function (x, y) {
    console.log(`A soma é: ${x + y}`);
};
function imprimirNomeCompleto(nome, meio, sobrenome) {
    let nomeCompleto;
    if (sobrenome) {
        nomeCompleto = nome + ' ' + meio + ' ' + sobrenome;
    }
    else {
        nomeCompleto = nome + ' ' + meio;
    }
    console.log(nomeCompleto);
    return nomeCompleto;
}
imprimirNomeCompleto('Elys', 'Santos', 'Silva');
console.log(`Resultado da função somar: ${somar(10, 20)}`);
myAdd(10, 20);
