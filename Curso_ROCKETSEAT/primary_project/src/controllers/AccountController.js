const { v4 : uuidv4 } = require("uuid");

const  customers = [];

module.exports = class AccountController{

    static createAccount(request, response){

        
        const { cpf, name } = request.body;

        const id = uuidv4();

        customers.push({
            cpf,
            name,
            id,
            statement: []
        });

        return response.status(201).json({
            message: "Conta criada com sucesso!"
        });
    }
}