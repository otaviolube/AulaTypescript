function somar(x: number, y:number): number {
    return x + y;
}

let myAdd = function(x: number, y: number): void {
    console.log(`A soma é: ${x+y}`);
}

function imprimirNomeCompleto(nome: string, meio: string, sobrenome?: string): string {
    let nomeCompleto: string;
    if(sobrenome){
        nomeCompleto = nome + ' ' + meio + ' ' + sobrenome;
    }else{
        nomeCompleto = nome + ' ' + meio;
    }

    console.log(nomeCompleto);
    return nomeCompleto;
}

imprimirNomeCompleto('Elys', 'Santos', 'Silva');

console.log(`Resultado da função somar: ${somar(10,20)}`);

myAdd(10,20);