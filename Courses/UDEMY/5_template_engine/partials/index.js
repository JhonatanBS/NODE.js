const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const port = 3000;

const hbs = exphbs.create({
   partialsDir: ["views/partials"],
});

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.get("/post", (req,res)=>{
   const posts = [
      {
       title: "Aprendendo JavaScript",
       category: "Javascript",
       pages: 255,
       comments: 10
      },
      {
         title: "Aprendendo Python",
         category: "Python",
         pages: 255,
         comments: 10
      },
      {
         title: "Aprendendo PHP",
         category: "PHP",
         pages: 255,
         comments: 10
      }
   ];

   res.render("blog", {posts});
});

app.get("/dashboard", (req,res)=>{
   
   const materiais = ["Lápis", "caneta", "caderno", "borracha", "apontador"];

   res.render("dashboard", {materiais});
});

app.get("/biblioteca", (req,res)=>{

   const livro = {
     title: "Aprendendo Node.js",
     category: "Programação",
     pages: 520,
     year: 2022,
   }

   res.render("livros", {livro})
});

app.get("/", (req,res)=>{

   const user = {
     name: "Jhonatan",
     surname: "Santos",
     age: 29
   } 
   
   const auth = false;

   res.render("home", {user:user , auth});
});

app.listen(port, ()=>{
    console.log(`O servidor está funcionando na porta ${port}`);
})