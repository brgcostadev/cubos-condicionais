//valor do produto comprado.
const valorDoProduto = 2000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 200;

const valorParcelas = valorDoProduto / quantidadeDoParcelamento

const quantParcelasPagamento = quantidadeDoParcelamento - (valorPago / valorParcelas)

if(valorPago < valorDoProduto) {
    console.log(`Restam ${quantParcelasPagamento} parcelas de R$ ${valorParcelas}`)
} else {
    console.log(`O valor total já foi pago`)
}