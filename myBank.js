'use strict';

const prompt = require('prompt-sync')({ sigint: true });
// const prompt = ps();

// const replaceTemplate = require("./starter/modules/replaceTemplates");
// const dollarToNaira = require('./Bank Project/modules/dollarToNaira');

const verifyNumber = arg => {
  return isNaN(arg) === true ? false : true;
};

//defining the base class
class Account {
  #pin;
  #balance;
  #dollarBalance;

  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    //defining private variables
    this.#balance = 0;
    this.#dollarBalance = 0;

    console.log(`Welcome ${this.firstName}, to Kitis Bank`);
    console.log('Kindly Insert your four sigit security pin');
    this.setSecurityPin();
  }

  getBalance() {
    return this.#balance;
  }

  //This function basically returns the amount in dollar that is to be paid
  getDollarRate(dollar) {
    const rate = dollarToNaira();
    let naira = dollar * rate;
    return naira;
  }

  #setPin(pin) {
    this.#pin = pin;
  }

  setSecurityPin() {
    let pinOne = Number(prompt('Kindly enter a four digit pin: '));
    if (verifyNumber(pinOne) === true) {
      let pinTwo = Number(prompt('Kindly enter the pin a second time: '));
      if (pinOne === pinTwo) {
        console.log('PIN SUCCESSFULLY CREATED!');
        this.#setPin(pinOne);
      } else {
        console.log('The PINS do not match, please try again!');
        this.setSecurityPin();
      }
    } else {
      console.log('Invalid Pin, Please try again');
      this.setSecurityPin();
    }
  }
}

const ugo = new Account('Ugochukwu', 'Nwankiti');
