const fs = require("fs");

console.log("Partida iniciada");

// Modo Assíncrono
fs.writeFile("arquivo.txt", "Bem vindo ao curso de Node.js", ()=>{
    setTimeout(function(){
        console.log("Arquivo criado com sucesso");
    }, 1500);
});

console.log("Partida Finalizada");