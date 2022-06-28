const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("toughts","root", "",{
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