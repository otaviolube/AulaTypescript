/*
Exercício	3:

Criei uma função para calcular o desconto que um cliente terá.
O primeiro parâmetro é o valor da compra. O segundo parâmetro será o valor  do desconto.
Se o valor a pagar com desconto for entre 90 reais e 100 reais, o cliente terá  mais um desconto de 5%.
Se o valor a pagar com desconto for maior que 100 reais, o cliente terá mais  um desconto de 10%.

Apresente o valor que o cliente irá pagar
*/

export default function calcularDesconto(valorCompra: number, descontoInicial: number):number {
    let valorTotal = valorCompra - descontoInicial;
    let descontoAdicional = 0;

    if(valorTotal >= 90 && valorTotal <= 100){
        descontoAdicional = 0.05*valorTotal;
    }else if(valorTotal > 100){
        descontoAdicional = 0.1*valorTotal;
    }

    let valorFinal = valorTotal - descontoAdicional;

    console.log(`O valor final da compra é: R$ ${valorFinal}`)

    return valorFinal;
}

calcularDesconto(460, 100);