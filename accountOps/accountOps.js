const Account = require("./../bankOps/accountModel");
const { query } = require("express");
const APIFeatures = require("./../utils/apiFeatures");

//get account balance
//defining a middleware that handles that particular request
exports.aliasAccountBalance = (req, res, next) => {
  req.query.fields = "accountBalance";
  next();
};

exports.getAccountBalance = async (req, res) => {
  console.log(req.query);
  try {
    const features = new APIFeatures(
      Account.findById(req.params._id),
      req.query
    ).limitFields();
    const account = await features.query;
    console.log(account);
    const [details] = account;
    const { accountBalance, _id } = details;

    res.status(200).json({
      status: "success",
      data: accountBalance,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

/*
use limit in the middle ware to get specific fields ...alone

*/
