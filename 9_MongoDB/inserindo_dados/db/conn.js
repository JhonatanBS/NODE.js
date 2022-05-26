const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017/testemongodb";

const client = new MongoClient(uri);

async function run(){
    try {
        await client.connect();
        console.log("Banco conectado com sucesso!");
    } catch (error) {
        console.log(`Erro ao conectar-se no banco` + error);
    }
}

run();

module.exports = client;