// Módulos Externos
const inquirer = require("inquirer");
const chalk = require("chalk");

// Módulos internos
const fs = require("fs");

operation();

function operation(){
    inquirer.prompt([
        {
        type: "list",
        name: "action",
        message: "O que você deseja fazer?",
        choices: ["Criar Conta", "Consultar Saldo", "Depositar", "Sacar", "Sair"],
        }
    ]).then((answer)=>{
        const action = answer["action"];

        if(action === "Criar Conta"){
            createAccount();
        }
    })
      .catch((err)=>console.log(err));
}

// Create an ACCOUNT
function createAccount(){
    console.log(chalk.bgGreen.black("Parabéns por escolher o nosso Banco!"));
    console.log(chalk.green("Defina as opções da sua conta a seguir"));
}