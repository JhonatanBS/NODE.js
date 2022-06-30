const router = require("express").Router();

const AccountController = require("../controllers/AccountController");

router.post("/account", AccountController.createAccount);
router.get("/statement",AccountController.verifyCpf, AccountController.getAccount);
router.post("/deposit",AccountController.verifyCpf, AccountController.depositAccount);
router.post("/withdraw", AccountController.verifyCpf, AccountController.withdraw)
router.get("/statement/date",AccountController.verifyCpf, AccountController.dataAccount);
router.put("/account",AccountController.verifyCpf, AccountController.updateAccount);
router.delete("/remove",AccountController.verifyCpf, AccountController.removeAccount);
router.get("/all", AccountController.ShowAccount);
router.get("/balance", AccountController.verifyCpf, AccountController.showDeposit);

module.exports = router;
