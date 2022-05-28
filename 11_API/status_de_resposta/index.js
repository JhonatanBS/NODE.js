const express = require("express");
const app = express();

// Resposta do body
app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());

/* Rotas - Endpoints*/
app.post("/createproduct",(req,res)=>{
    const name = req.body.name;
    const price = req.body.price;

    if(!name){
        res.status(422).json({message: "O campo nome é obrigatório"});
    }
    console.log(name,price);

    res.status(201).json({message: `O produto ${name} custa ${price}R$`});
})

app.get("/", (req,res)=>{
    res.json({message: "Primeira rota criada com Sucesso"});
});

app.listen(3000);