//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "debito ou dinheiro";
let totalAPagar = 0

//valor da mercadoria (centavos)
const valorDoProduto = 13000;

if(tipoDePagamento == "credito") {
    totalAPagar = valorDoProduto* 0.95/100
    console.log("Valor a ser pago: R$ " + totalAPagar.toFixed(2))
}

if(tipoDePagamento == "cheque") {
    totalAPagar = valorDoProduto* 0.97/100
    console.log("Valor a ser pago: R$ " + totalAPagar.toFixed(2))
}

if(tipoDePagamento == "debito ou dinheiro") {
    totalAPagar = valorDoProduto* 0.90/100
    console.log("Valor a ser pago: R$ " + totalAPagar.toFixed(2))
}
