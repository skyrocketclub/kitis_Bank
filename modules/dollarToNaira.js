const fetch = require('node-fetch');

module.exports = async () => {
  let naira;
  try {
    //we await the promise
    const exchangeRate = await fetch(
      'https://v6.exchangerate-api.com/v6/0f00d3f42c6e664cca5691cc/latest/USD'
    );

    //we also await the promise to get the json
    const data = await exchangeRate.json();
    // console.log(data);

    naira = data.conversion_rates.NGN;
  } catch (err) {
    console.log(err);
  }
  console.log(naira);
  return naira;
};

// getNairaPerDollar();
