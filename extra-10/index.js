const caractere = 1;

if(caractere === "a" || caractere === "e" || caractere === "i" || caractere === "o" || caractere === "u") {
   return console.log("Vogal minúscula")
}

if(caractere === "A" || caractere === "E" || caractere === "I" || caractere === "O" || caractere === "U") {
   return console.log("Vogal maiúscula")
}

if(Number.isFinite(caractere)) {
   return console.log("Isso é um número!")
}

console.log("É uma consoante")