const router = require("express").Router();

/* Verbos http: 

   - get => Ler dados
   - post => Receber dados
   - put => Atualizar dados
   - patch => Atualiza dados específicos
   - delete => Remove dados
   
*/

router.get("/", (request, response) => {
    return response.status(200).json({
              message: " Hello World Ignite"
    })
});

router.post("/register", (request, response) => {
    return response.status(200).json([
        { id: "1"}, "name", "email", "senha"
    ])
});

router.put("/edit/:id", (request, response) => {
    const { id } = request.params;
    console.log(id);

    return response.status(200).json(
        { id: "50", name: "Paulo", email: "paulo@gmail.com", senha: "123teste"}
    )
});

router.patch("/edit/:id", (request, response) => {
    const { id } = request.params;
    console.log(id);

    return response.status(200).json(
        { id: "20", name: "Paulo", email: "paulo@gmail.com", senha: "123teste"}
    )
});

router.delete("/remove/:id", (request, response) => {
    const { id } = request.params;
    console.log(id);
    
    return response.status(200).json(
        { id: "50", name: "Paulo", email: "paulo@gmail.com", senha: "123teste"},
        //{ id: "23", name: "Maria", email: "maria@gmail.com", senha: "123teste"} removida
    )
});

module.exports = router;