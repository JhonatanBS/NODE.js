const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

const users = require("./users");

// Ler o body
app.use(
    express.urlencoded({
        extended:true,
    })
);

app.use(express.json());

app.use("/users", users);

app.use(express.static("public"));

app.get("/", (req, res)=>{
    res.sendFile(`${basePath}/index.html`);
});

app.listen(port, ()=>{
    console.log(`O servidor está rodando na porta: ${port}`);
});