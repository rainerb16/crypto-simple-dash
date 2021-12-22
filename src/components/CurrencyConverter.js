import React from "react";
import ExchangeRate from "./ExchangeRate";
import { useState } from "react";
import axios from "axios";

const CurrencyConverter = () => {
  const currencies = ["- Select -", "BTC", "ETH", "USD", "XRP", "LTC", "ADA"];
  const [choosePrimaryCurrency, setChosenPrimaryCurrency] = useState(null);
  const [chooseSecondaryCurrency, setChosenSecondaryCurrency] = useState(null);
  const [amount, setAmount] = useState(1);
  const [exchangeRate, setExchangeRate] = useState(0)
  const [result, setResult] = useState(0)
  
  // console.log(choosePrimaryCurrency);
  // console.log(chooseSecondaryCurrency);


  const convert = () => {
    var axios = require("axios").default;

    var options = {
      method: 'GET',
      url: 'https://alpha-vantage.p.rapidapi.com/query',
      params: {from_currency: choosePrimaryCurrency, function: 'CURRENCY_EXCHANGE_RATE', to_currency: chooseSecondaryCurrency},
      headers: {
        'x-rapidapi-host': 'alpha-vantage.p.rapidapi.com',
        'x-rapidapi-key': 'a553b9dc4bmsh3d5614f5392609fp15061cjsn7f9a4ef533f5'
      }
    };

    axios.request(options).then(function (response) {
      console.log(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate']);
      setExchangeRate(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate'])
      setResult(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate'] * amount)
    }).catch(function (error) {
      console.error(error);
    });
  }
  

  return (
    <div className="currency-converter">
      <h2>Currency Converter</h2>

      <div className="input-box">
        <table>
          <tbody>
            <tr>
              <td>From Currency:</td>
              <td>
                <input
                  type="number"
                  name="currency-amount-1"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </td>
              <td>
                <select
                  value={choosePrimaryCurrency}
                  name="currency-option-1"
                  className="currency-options"
                  onChange={(e) => setChosenPrimaryCurrency(e.target.value)}
                >
                  {currencies.map((currency, i) => (
                    <option key={i}>{currency}</option>
                  ))}
                </select>
              </td>
            </tr>

            <tr>
              <td>To Currency:</td>
              <td>
                <input type="number" name="currency-amount-2" value={result} disabled={true} />
              </td>
              <td>
                <select
                  value={chooseSecondaryCurrency}
                  name="currency-option-2"
                  className="currency-options"
                  onChange={(e) => setChosenSecondaryCurrency(e.target.value)}
                >
                  {currencies.map((currency, i) => (
                    <option key={i}>{currency}</option>
                  ))}
                </select>
              </td>
            </tr>
          </tbody>
        </table>

        <button id='convert-btn' onClick={convert}>Convert</button>
      </div>
      <ExchangeRate
        exchangeRate={exchangeRate}
        fromCurrency={choosePrimaryCurrency}
        toCurrency={chooseSecondaryCurrency}
      />
    </div>
  );
};

export default CurrencyConverter;
