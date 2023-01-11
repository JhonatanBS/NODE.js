const fs = require("fs");

console.log("Partida iniciada");

// Modo Síncrono
fs.writeFileSync("arquivo.txt", "Bem vindo ao node.js");

console.log("Partida Finalizada");