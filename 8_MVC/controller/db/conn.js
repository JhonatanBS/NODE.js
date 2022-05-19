const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("nodemvc","root", "123456789",{
    host: "localhost",
    dialect: "mysql"
});

try{
   sequelize.authenticate();
   console.log(`Banco conectado com sucesso`);
}catch(error){
    console.log(`Erro ao conectar ao banco: ${error}`);
}

module.exports = sequelize;
