const bankOps = require("./bankOps");
const accountOps = require("./../accountOps/accountOps");
const express = require("express");
const router = express.Router();

router.route("/").post(bankOps.createAccount); //create an account
router.route("/").get(bankOps.getAllAccounts); //get all the accounts
router
  .route("/:id")
  .get(bankOps.getAccount)
  .patch(bankOps.updateAccount)
  .delete(bankOps.deleteAccount); //get an account by ID

//alias route
router
  .route("/:id/account-balance")
  .get(accountOps.aliasAccountBalance, accountOps.getAccountBalance);

module.exports = router;
