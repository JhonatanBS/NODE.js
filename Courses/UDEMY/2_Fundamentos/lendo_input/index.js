const readLine = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

readLine.question("Qual é o seu nome?", (nome)=>{
    console.log("O meu nome é %s ", nome);
    readLine.close();
});
