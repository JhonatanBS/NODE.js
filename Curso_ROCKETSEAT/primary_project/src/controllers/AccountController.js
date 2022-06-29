const { v4 : uuidv4 } = require("uuid");

const  customers = [];

module.exports = class AccountController{

    static createAccount(request, response){

        
        const { cpf, name } = request.body;

        const cpfExists = customers.some(customer => customer.cpf === cpf);

        if(cpfExists){
            return response.status(400).json({
                error: "O Cpf já existe, tente outro!"
            });
        }

        customers.push({
            cpf,
            name,
            id: uuidv4(),
            statement: []
        });

        return response.status(201).json({
            message: "Conta criada com sucesso!"
        });
    }
}