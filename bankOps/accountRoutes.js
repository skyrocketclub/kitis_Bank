const bankOps = require("./bankOps");
const express = require("express");
const router = express.Router();

router.route("/").post(bankOps.createAccount);

module.exports = router;
