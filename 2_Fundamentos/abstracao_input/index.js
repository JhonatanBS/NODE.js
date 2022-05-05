const inquirer = require("inquirer");
const chalk = require("chalk");

inquirer.prompt([
    {
        name: "p1",
        message: "Qual a sua primeira nota? "
    },
    {
        name: "p2",
        message: "Qual a sua segunda nota? "
    }
]).then((answers)=>{

    console.log(answers);

    const media = (parseInt(answers.p1) + parseInt(answers.p2)) / 2;
    console.log(`A sua média é ${media}`);

    if(media >= 5)
        console.log(chalk.green("Excelente! Você foi aprovado."));  
    else
        console.log(chalk.red("Que pena! Você foi reprovado."))  
    
}).catch(err => console.log(err));