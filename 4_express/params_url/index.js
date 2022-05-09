const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

const basePath = path.join(__dirname,"templates");

app.get("/user/:id", (req, res)=>{
    const id = req.params.id;

    console.log(`Estamos buscando pelo usuário: ${id}`);

    res.sendFile(`${basePath}/users.html`);
});

app.get("/", (req, res)=>{
    res.sendFile(`${basePath}/index.html`);
});

app.listen(port, ()=>{
    console.log(`O servidor está rodando na porta: ${port}`);
});