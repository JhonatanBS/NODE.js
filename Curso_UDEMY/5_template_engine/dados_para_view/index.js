const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const port = 3000;

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.get("/", (req,res)=>{

   const user = {
     name: "Jhonatan",
     surname: "Santos",
     age: 29
   } 

   res.render("home", {user});
});

app.listen(port, ()=>{
    console.log(`O servidor está funcionando na porta ${port}`);
})