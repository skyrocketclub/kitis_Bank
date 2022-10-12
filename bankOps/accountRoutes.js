const bankOps = require("./bankOps");
const accountOps = require("./../accountOps/accountOps");
const express = require("express");
const router = express.Router();

router.route("/").post(bankOps.createAccount);
router.route("/:id").get(accountOps.getAccount);

//alias route
router
  .route("/:id/account-balance")
  .get(accountOps.aliasAccountBalance, accountOps.getAccount);

module.exports = router;
