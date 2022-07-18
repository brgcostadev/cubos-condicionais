const idade = 11;
const possuiPatologia = false;
const altura = 180;
const ehEstudante = true;

if(idade < 12 || idade > 65 || possuiPatologia === true || altura < 150) {
    return console.log("ACESSO NEGADO")
}

if(ehEstudante === true || idade < 18) {
    return console.log("Meia entrada no valor de R$ 10")
}

console.log("Entrada inteira no valor de R$ 20")