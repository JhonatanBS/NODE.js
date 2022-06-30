const { v4 : uuidv4 } = require("uuid");

const  customers = [];

function getBalance(statement){
    let balance = statement.reduce((acc, operation) => {
        if(operation.type === "Credit"){
            return acc + operation.amount;
        }else {
            return acc - operation.amount;
        }
    });
     console.log(balance)
    return balance;
}

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

    static withdraw(request, response){
        const { amount } = request.body;

        const { customer } = request;
    
        const balance = getBalance(customer.statement);

        if( balance < amount ) {
            return response.status(400).json({
                message: "Insufficient funds!"
            });
        }

        const statementOperation = {
            amount,
            created_At: new Date(),
            type: "Debit",
            balanceTotal: balance - amount
        }

        customer.statement.push(statementOperation);

        return response.status(200).json({
            message: "Saque realizado com sucesso!"
        });
    }

    static dataAccount(request,response){
        const { customer } = request;

        const { data } = request.query;

        const dateFormat = new Date(data + " 00:00");

        const statement = customer.statement.filter((statement) => {
            return statement.created_At.toDateString() === new Date(dateFormat).toDateString()
        });

        return response.status(200).json(
            customer.statement
        )
    }

    static updateAccount(request, response){
        const { name } = request.body;

        const { customer } = request;

        customer.name = name;

        return response.status(200).json({
            message: "Conta atualizada com sucesso!",
            customer
        });
    }

    static removeAccount(request, response){
        const { customer } = request;

        customers.splice(customer,2);

        return response.status(200).json({
            message: "Conta excluída com sucesso!"
        });
    }

    static showDeposit(request, response){
        const { customer } = request;

        const balance = getBalance(customer.statement);

        return response.status(200).json(balance);
    }

    static ShowAccount(request, response){
        
        return response.status(200).json(customers);
    }
}