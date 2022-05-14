const express = require("express");
const exphbs = require("express-handlebars");
const mysql = require("mysql");

const app = express();

app.use(express.urlencoded({
    extended:true
}));

app.use(express.json());

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.use(express.static("public"));

app.post("/books/insertbook", (req,res)=>{
    const title = req.body.title;
    const pages = req.body.pages;

    console.log(req.body);

    const sql = `INSERT INTO books(title,pages) VALUES('${title}',${pages})`;

    conn.query(sql,function(err){
        if(err){
            console.log(err);
            return;
        }

        res.redirect("/");
    });
});

app.get("/", (req,res)=>{
    res.render("home");
});

const conn = mysql.createConnection({
   host: "localhost",
   user: "root",
   password: "",
   database: "nodemysql"
});

conn.connect(function(err){
    if(err){
        console.log(err);
        return;
    }

    console.log("Conectado no Mysql");

    app.listen(3000,()=>{
        console.log("Servidor funcionando na porta 3000");
     });
})

