/* Módulo externo*/
const minimist = require("minimist");
/* Módulo interno*/
const fatorial = require("./fatorial").fatorial;

const args = minimist(process.argv.slice(2));

const numero = parseInt(args["numero"]);

console.log(fatorial(numero));

