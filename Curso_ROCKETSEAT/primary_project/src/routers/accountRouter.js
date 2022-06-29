const router = require("express").Router();

const AccountController = require("../controllers/AccountController");

router.post("/account", AccountController.createAccount);
router.get("/statement/:cpf",AccountController.getAccount);

module.exports = router;
