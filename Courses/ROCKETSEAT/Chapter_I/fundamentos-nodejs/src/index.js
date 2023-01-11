
const express = require("express");

const app = express();
const port = 3333;

// Rotas
const Router = require("./routes/userRouter");

app.use("/users", Router);

app.listen(port);