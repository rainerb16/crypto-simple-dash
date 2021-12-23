import React from "react";

const ExchangeRate = ({ exchangeRate, fromCurrency, toCurrency }) => {
  return (
    <div className='exchange-rate'>
      <h2>Exchange Rate :</h2>
      <h2>{exchangeRate}</h2>
      <p>{fromCurrency} to {toCurrency}</p>
    </div>
  );
};

export default ExchangeRate;
