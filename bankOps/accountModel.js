const mongoose = require("mongoose");
const validator = require("validator");

const accountSchema = new mongoose.Schema({
  name: {
    firstname: {
      type: String,
      required: [true, "Firstname field cannot be empty"],
      validate: [validator.isAlpha, "Firstname must only contain letters..."],
    },
    lastname: {
      type: String,
      required: [true, "Last name field cannot be empty"],
      validate: [validator.isAlpha, "Lastname must only contain letters..."],
    },
    middlename: {
      type: String,
      default: "",
      required: [true, "Middle name field cannot be empty"],
      validate: [validator.isAlpha, "Lastname must only contain letters..."],
    },
  },
  dateOpened: {
    type: Date,
    default: Date.now(),
  },
  stateOfOrigin: {
    type: String,
    required: [true, "State of origin field cannot be empty"],
    validate: [
      validator.isAlpha,
      "State of Origin must only contain letters...",
    ],
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
    default: 1000,
    required: true,
    min: [1000, "Minimum Deposit of N 1000 required"],
  },
  accountType: {
    type: String,
    default: "savings",
    enum: {
      values: ["savings", "current"],
      message: "Account can only be either savings or current",
    },
  },
  transactionHistory: [
    {
      amount: { type: Number, default: 1000, required: true },
      date: { type: Date, default: Date.now() },
    },
  ],
  ATM: {
    type: Boolean,
    default: false,
  },
});

const Account = mongoose.model("Account", accountSchema);
module.exports = Account;
