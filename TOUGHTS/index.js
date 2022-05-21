const express = require("express");
const exphbs = require("express-handlebars");
const session = require("express-session");
const FileStore = require("session-file-store")(session);
const flash = require("express-flash");

const app = express();

const conn = require("./db/conn");

// Template engine
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

// Receber os dados do body
app.use(express.urlencoded({
    extended:true
}));

app.use(express.json());

// Arquivos estáticos: CSS
app.use(express.static("public"));

//session middleware
app.use(
    session({
      name: 'session',
      secret: 'nosso_secret',
      resave: false,
      saveUninitialized: false,
      store: new FileStore({
        logFn: function () {},
        path: require('path').join(require('os').tmpdir(), 'sessions'),
      }),
      cookie: {
        secure: false,
        maxAge: 3600000,
        expires: new Date(Date.now() + 3600000),
        httpOnly: true,
      },
    }),
);

// set session to res
app.use((req,res,next)=>{
  
    if(req.session.userid){
        res.locals.session = req.session;
    }

    next();
})

conn
   .sync()
   .then(() => {
       app.listen(3000);
   })
   .catch((err)=> console.log(err));