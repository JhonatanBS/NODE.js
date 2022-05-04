const inquirer = require("inquirer");
const chalk = require("chalk");

inquirer.prompt([
    {
        name: "nome",
        message: "Qual é o seu nome? "
    },
    {
        name: "idade",
        message: "Qual é sua idade? "
    }
]).then(resposta =>{
    console.log(resposta);
    console.log(chalk.black.bgYellow(`Meu nome é ${resposta.nome} e tenho ${resposta.idade} de idade.`))
}).catch((err)=> console.log(err));

