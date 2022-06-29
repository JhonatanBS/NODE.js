const router = require("express").Router();

const AccountController = require("../controllers/AccountController");

router.post("/account", AccountController.createAccount);

module.exports = router;
