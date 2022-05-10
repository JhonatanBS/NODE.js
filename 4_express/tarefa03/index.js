const express = require("express");
const app = express();
const users = require("./users");
const path = require("path");
const port = 5000;

const basePath = path.join(__dirname,"templates");

app.use("/",users);

app.use(express.static("public"));

app.get("/", (req,res)=>{
   res.sendFile(`${basePath}/index.html`);
});

app.listen(port,function(){
    console.log(`O servidor está rodando na porta ${port}`);
});



