import React from 'react'

const ExchangeRate = ({ exchangeRate, fromCurrency, toCurrency }) => {
    return (
        <div className='exchange-rate'>
            <h3>Exchange Rate</h3>
            <h4>{exchangeRate}</h4>
            <p>{fromCurrency} to {toCurrency}</p>
        </div>
    )
}

export default ExchangeRate
