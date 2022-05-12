const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const port = 5000;

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.use(express.static("public"));

const hbs = exphbs.create({
    partialsDir: ["views/partials"],
 });

 const header = {
    listOne: "Home",
    listTwo: "Serviços",
    listThree: "Lojas",
    listFour: "Contato"
};

const logo = {logo: "</j>"};

app.get("/", (req,res)=>{

   res.render("home",{logo,header});
});

app.get("/Servicos", (req,res)=>{

    const nav = "Servicos";

    res.render("lojas",{nav,header,logo});
});

app.get("/Lojas", (req,res)=>{

    const nav = "Lojas";

    res.render("lojas",{nav,header,logo});
});

app.get("/Contato", (req,res)=>{

    const nav = "Contato";

    res.render("contato",{nav,header,logo});
});

//Servidor
app.listen(port, ()=>{
    console.log(`Servidor funcionando na porta ${port}`);
})