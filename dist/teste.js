"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Trabalhando com vetores
let vetorNumeros = [1, 2, 3];
let outroVetor = [10, 20, 30, 10, 90, 29, 0, 90];
vetorNumeros.splice(2, 1, ...outroVetor);
console.log(vetorNumeros);
let vetorStrings = [];
let Elys = {
    nome: "Elys",
    email: "Elys@algumacoisa.com.br",
    matricula: "23455",
    idade: 18,
};
let vetorEstudantes = [];
vetorEstudantes.push(Elys);
vetorStrings.push("otavio");
let vetorEstudantesEgressos = [];
function imprimirElementosVetor(vetor) {
    for (let i = 0; i < vetor.length; i++) {
        console.log(vetor[i]);
    }
}
function imprimirElementosVetorV2(vetor) {
    vetor.forEach(function (e) {
        console.log(e);
    });
}
//vetorEstudantes.pop();
imprimirElementosVetor(vetorNumeros);
imprimirElementosVetorV2(vetorEstudantes);
