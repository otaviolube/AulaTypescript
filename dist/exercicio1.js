"use strict";
//definir um array com os nomes  'Marcos', 'Luan', 'Bento', 'Ruan','João'
let arrayNomes = ['Marcos', 'Luan', 'Bento', 'Ruan', 'João'];
// varrear o array construido
function imprimirVetor(vetor) {
    vetor.forEach(function (elemento, index) {
        console.log(index, elemento);
    });
}
imprimirVetor(arrayNomes);
// alterar o nome do aluno Marcos para Marcos Silva
function substituirMarcos(vetor) {
    let index = vetor.indexOf("Marcos");
    vetor[index] = "Marcos Silva";
    imprimirVetor(vetor);
}
substituirMarcos(arrayNomes);
// acrescentar o aluno Rodrigo
arrayNomes.push('Rodrigo');
imprimirVetor(arrayNomes);
// excluir o ultimo aluno da lista
arrayNomes.pop();
imprimirVetor(arrayNomes);
// retirar o aluno Bento
function retirarBento(vetor) {
    let index = vetor.indexOf('Bento');
    vetor.splice(index, 1);
    imprimirVetor(vetor);
}
retirarBento(arrayNomes);
