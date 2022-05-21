const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("toughts","root", "123456789",{
    host: "localhost",
    dialect: "mysql"
});

try{
   sequelize.authenticate();
   console.log("Conectado com o banco de dados")
}catch(err){
   console.log(`Erro ao conectar-se ao banco de dados: ${err}`)
}

module.exports = sequelize;