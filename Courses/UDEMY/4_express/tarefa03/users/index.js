const express = require("express");
const path = require("path");
const router = express.Router();

const basePath = path.join(__dirname,"../templates");

router.use(express.static("public"));

router.get("/flex", (req,res)=>{
   res.sendFile(`${basePath}/flex.html`);
});

module.exports = router;

