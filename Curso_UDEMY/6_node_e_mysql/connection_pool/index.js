const express = require("express");
const exphbs = require("express-handlebars");
const pool = require("./db/conn");

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

    pool.query(sql,function(err){
        if(err){
            console.log(err);
            return;
        }

        res.redirect("/");
    });
});

app.get("/books",(req,res)=>{
    const sql = "SELECT * FROM books";
  
    pool.query(sql, function(err, data){
      if(err){
          console.log(err);
          return;
      }
  
      const books = data;
      console.log(books);

      res.render("books",{books});
    });
  });

app.get("/", (req,res)=>{
    res.render("home");
});

app.use("/book/:id", (req,res)=>{

    const id = req.params.id;

    const sql = `SELECT * FROM books WHERE id=${id}`;

    pool.query(sql, function(err, data){
        if(err){
            console.log(err);
            return;
        }

        const book = data[0];

        res.render("book", {book});
    });
});

app.get("/books/edit/:id",(req,res)=>{
   const id = req.params.id;

   const sql = `SELECT * FROM books WHERE id=${id}`;

   pool.query(sql,function(err,data){
    if(err){
        console.log(err);
        return;
    }

    const editbook = data[0];

    res.render("editbook", {editbook})
   });
});

app.post("/books/updatebook",(req,res)=>{
    const id = req.body.id;
    const title = req.body.title;
    const pages = req.body.pages;

    const sql = `UPDATE books SET title='${title}', pages='${pages}' WHERE id='${id}'`;

    pool.query(sql, function(err){
        if(err){
            console.log(err);
            return;
        }

        res.redirect("/books");
    });
});

app.post("/books/remove/:id", (req,res)=>{
   const id = req.params.id;

   const sql = `DELETE FROM books WHERE id=${id}`;

   pool.query(sql,function(err){
    if(err){
        console.log(err);
        return;
    }

    res.redirect("/books");

   });
});


app.listen(3000,()=>{
    console.log("Servidor funcionando na porta 3000");
 });