const Pet = require("../models/Pet");

module.exports = class PetController{
    // create a pet
    static async create(req,res){
        res.json({message: "Deu certo!"});
    }
}