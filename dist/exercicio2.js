"use strict";
// Passe 5 números para uma função e apresente o resultado da  soma dos números
function somarNumeros(n1, n2, n3, n4, n5) {
    let soma = n1 + n2 + n3 + n4 + n5;
    console.log(soma);
    return soma;
}
somarNumeros(1, 2, 3, 4, 5);
let vetorNumeros = [1, 2, 3, 4, 5];
function somarNumerosVetor(...vetor) {
    let soma = 0;
    vetor.forEach(function (elemento) {
        soma = soma + elemento;
    });
    console.log(`A soma dos elementos do vetor é: ${soma}`);
}
somarNumerosVetor(...vetorNumeros);
console.log(vetorNumeros.reduce((anterior, atual) => anterior + atual));
function soma(x, y) {
    return x + y;
}
let somaFlexa = (x, y) => x + y;
