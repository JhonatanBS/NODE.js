const fs = require("fs");

const antigoArquivo = "antigo.txt";
const novoArquivo = "novo.txt";

fs.rename(antigoArquivo, novoArquivo,function(err){
    if(err){
        console.log(err);
        return;
    }

    console.log(`O arquivo ${antigoArquivo} foi renomeado para ${novoArquivo}`);
})