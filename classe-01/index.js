const jogada1 = "tesoura"
const jogada2 = "papel"

if((jogada1 === jogada2)) {
    return console.log("Empate")
}

if(jogada1 === "pedra" && jogada2 === "tesoura") {
    return console.log("Jogada vencedora 1: Pedra")
}

if(jogada2 === "pedra" && jogada2 === "tesoura") {
    return console.log("Jogada vencedora 2: Pedra")
}

if(jogada1 === "papel" && jogada2 === "pedra") {
    return console.log("Jogada vencedora 1: Papel")
}

if(jogada2 === "papel" && jogada1 === "pedra") {
    return console.log("Jogada vencedora 2: Papel")
}

if(jogada1 === "tesoura" && jogada2 === "papel") {
    return console.log("Jogada vencedora 1: Tesoura")
}

if(jogada2 === "tesoura" && jogada1 === "papel") {
    return console.log("Jogada vencedora 2: Tesoura")
}