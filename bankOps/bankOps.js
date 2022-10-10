const Account = require("./accountModel");
const { query } = require("express");

exports.createAccount = async (req, res) => {
  //   console.log(20942);
  console.log(req.body);
  try {
    //this creates the account in the mongoDB Atlas

    const newAccount = await Account.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        account: newAccount,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err,
    });
  }
};
