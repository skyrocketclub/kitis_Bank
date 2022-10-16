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

//practising Aggregation Pipeline...
/*
  Aim of the stats:
  1.  availableCash {Do not include the money of Current Account}
  2.  Number of Active accounts
  3.  Most Afflent Customer

  //EXTRA TASK FOR THE FUTURE
  4. Array that shows the net available cash in the bank per month...

  STEPS IN WHICH THE STAGES SHOULD OCCUR:
  MAtch: get accounts that the types $ne:"current"
  $group:
    Available Cash
    Number of active savings accounts: $sum:1
  $sort: sort in order of the account balance and get the most affluent customers...

*/
exports.getBankStats = async (req, res) => {
  // console.log(req.query);
  try {
    const stats = await Account.aggregate([
      {
        $match: { accountType: { $ne: "current" } },
      },
      {
        $sort: { accountalance: 1 }, //sorting according to those with the highest account
      },
      {
        $group: {
          _id: null,
          availableCashAggregate: { $sum: "$accountBalance" },
          activeSavingsAccounts: { $sum: 1 },
          affluentCustomers: { $push: "$name" },
        },
      },
    ]);

    res.status(200).json({
      status: "success",
      data: {
        stats,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err,
    });
  }
};
