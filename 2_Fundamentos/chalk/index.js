const chalk = require("chalk");

const nota = 10;
const aprovado = chalk.green;
const reprovado = chalk.red;

if(nota >= 5) 
   console.log(aprovado("Parabéns! Você está aprovado."));
else 
   console.log(reprovado("Que pena! Você foi reprovado."));