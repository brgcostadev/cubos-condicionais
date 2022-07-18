const aposentada = false;
const portadoraDeDoenca = false;
const totalDeRendimentos = 3000000; //emCentavos

if(aposentada === true && totalDeRendimentos) {
    return console.log("ISENTA")
}

if(portadoraDeDoenca === true) {
    return console.log("ISENTA")
}

if(totalDeRendimentos < 28559.70){
    return console.log("VAZA LEAO! JA TA DIFICIL SEM VOCE")
}

console.log("PEGA LEAO")