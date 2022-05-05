const http = require("http");

const port = 3000;

const server = http.createServer((req,res)=>{
    res.write("Bem vindo ao modulo HTTP");
    res.end();
});

server.listen(port, ()=>{
    console.log(`Servidor funcionando na porta: ${port}`);
})

