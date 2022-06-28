const fs = require("fs");

if(!fs.existsSync("./minhaPasta")){
    console.log("Não existe essa pasta!");
    fs.mkdirSync("minhaPasta")
}else if(fs.existsSync("./minhaPasta")){
    console.log("A pasta já existe");
}