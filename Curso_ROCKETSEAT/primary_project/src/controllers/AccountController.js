const { v4 : uuidv4 } = require("uuid");

const  customers = [];

module.exports = class AccountController{

    static verifyCpf(request, response, next){
        const { cpf } = request.headers;
    
            const customer = customers.find(customer => customer.cpf === cpf);
    
            if(!customer){
                return response.status(400).json({
                    error: "O cpf não existe!"
                });
            }
    
            request.customer = customer;
    
            return next();
    }

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

    static getAccount(request,response){
        const { customer } = request;

        return response.status(200).json(customer.statement);
    }

    static depositAccount(request,response){
        const { description, amount } = request.body;

        const { customer } = request;

        const statementOperation = {
            description,
            amount,
            created_At: new Date(),
            type: "Credit"
        }

        customer.statement.push(statementOperation);

        response.status(201).json({
            message: "Depósito realizado com sucesso!"
        });
    }
}