const router = require("express").Router();

const AccountController = require("../controllers/AccountController");

router.post("/account", AccountController.createAccount);
router.get("/statement",AccountController.verifyCpf, AccountController.getAccount);
router.post("/deposit",AccountController.verifyCpf, AccountController.depositAccount);
router.post("/withdraw", AccountController.verifyCpf, AccountController.withdraw)
router.get("/statement/date",AccountController.verifyCpf, AccountController.dataAccount);

module.exports = router;
