import estudante from "./tipos/estudante";

//Trabalhando com vetores

let vetorNumeros: Array<number> = [1, 2, 3];

let outroVetor: Array<number> = [10, 20, 30, 10, 90, 29, 0, 90];

vetorNumeros.splice(2, 1, ...outroVetor);

console.log(vetorNumeros);

let vetorStrings: Array<string> = [];

let Elys: estudante = {
  nome: "Elys",
  email: "Elys@algumacoisa.com.br",
  matricula: "23455",
  idade: 18,
};

let vetorEstudantes: Array<estudante> = [];

vetorEstudantes.push(Elys);

vetorStrings.push("otavio");

let vetorEstudantesEgressos: estudante[] = [];

function imprimirElementosVetor(vetor: any): void {
  for (let i = 0; i < vetor.length; i++) {
    console.log(vetor[i]);
  }
}

function imprimirElementosVetorV2(vetor: estudante[]): void {
  vetor.forEach(function (e) {
    console.log(e);
  });
}

//vetorEstudantes.pop();

imprimirElementosVetor(vetorNumeros);

imprimirElementosVetorV2(vetorEstudantes);
