//renda mensal do aluno, em centavos.
const rendaMensalEmCentavos = 100000;

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 59;

// Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). Se for igual a 18 mil reais, o aluno não deve pagar mais nada, pois já quitou a dívida.
const totalJaPagoPeloAluno = 1800000;

const totalASerPago = 1800000

if(mesesDecorridos > 60) {
    return console.log("Você não deve mais nada devido o prazo de 60 meses já terem passado!")
}

if(totalJaPagoPeloAluno >= totalASerPago) {
    return console.log("Você já quitou o curso da Cubos Academy!")
}

if(rendaMensalEmCentavos >= 200000) {
    return console.log(`O valor da parcela desse mês é R$ ${rendaMensalEmCentavos*0.18/100}`)
} 
if(rendaMensalEmCentavos < 200000) {
    return console.log(`O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois a renda do estudante está abaixo do valor mínimo de R$ 2000 reais.`)
}