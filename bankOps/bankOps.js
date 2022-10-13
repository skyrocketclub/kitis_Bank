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

exports.getAllAccounts = async (req, res) => {
  console.log(req.param);
  try {
    const accounts = await Account.find();

    res.status(201).json({
      status: "success",
      NumberOfAccounts: accounts.length,
      data: {
        accounts,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err,
    });
  }
};

exports.getAccount = async (req, res) => {
  //   console.log(req.params.id);
  try {
    const account = await Account.findById(req.params.id);
    res.status(201).json({
      status: "success",
      data: {
        account,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err,
    });
  }
};

exports.updateAccount = async (req, res) => {
  try {
    const account = await Account.findByIdAndUpdate(req.params.id, req.body, {
      new: true, //this returns the modified document
      runValidators: true,
    });
    res.status(201).json({
      status: "success",
      data: {
        account,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err,
    });
  }
};

exports.deleteAccount = async (req, res) => {
  try {
    const account = await Account.findByIdAndDelete(req.params.id);
    res.status(201).json({
      status: "success",
      message: "account successfully deleted",
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err,
    });
  }
};
