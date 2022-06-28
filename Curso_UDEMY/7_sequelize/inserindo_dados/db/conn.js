const {Sequelize} = require("sequelize");
const sequelize = new Sequelize("nodesequelize", "root","",{
    host: "localhost",
    dialect: "mysql"
});

try{
    sequelize.authenticate();
    console.log("Conectando com sucesso com o sequelize!");
}catch(err){
    console.log("Não foi possível conectar:", err);
}

module.exports = sequelize;