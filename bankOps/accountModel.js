const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, "Firstname field cannot be empty"],
  },
  lastname: {
    type: String,
    required: [true, "Lastname field cannot be empty"],
  },
  dateOpened: {
    type: Date,
    default: Date.now(),
  },
  stateOfOrigin: {
    type: String,
    required: [true, "State of origin field cannot be empty"],
  },
  email: {
    type: String,
    required: [true, "email field cannot be empty"],
  },
  yearOfBirth: {
    type: Number,
    required: [true, "Year of birth field cannot be empty"],
  },
  accountBalance: {
    type: Number,
    default: 0,
  },
  transactionHistory: {
    type: [{ amount: Number, date: Date }],
    default: [],
  },
});

const Account = mongoose.model("Account", accountSchema);
module.exports = Account;
