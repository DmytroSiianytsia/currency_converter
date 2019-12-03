import React from 'react';
import './CurrencyConverter.css';

export default function CurrencyConverter(props) { 
  const {
    listExchangeRates,
    updateSelectBid,
    updateInputBid,
    updateSelectAsk,
    updateInputAsk,
    inputBid,
    inputAsk,
  } = props;

  if (listExchangeRates) {
    const listCurrensies = listExchangeRates.map(item => (      
      <option value={item[1]} key={item[0]}>{item[0]}</option>
    ));
   
    return (
      <div className="page-converter">
        <div className="content">
          <div className="page-converter__converter">
            <div className="my">
              <select
                name="bid"              
                className="bid"
                onChange={e => updateSelectBid(e.target.value)}
              >
                {listCurrensies}
              </select>
              <input
                type="text"
                onChange={e => updateInputBid(e.target.value)}
                value={inputBid}
              />
            </div>
            <div className="want">
              <select
                name="ask"              
                className="ask"
                onChange={e => updateSelectAsk(e.target.value)}
              >
                {listCurrensies}
              </select>
              <input
                type="text"
                onChange={e => updateInputAsk(e.target.value)}
                value={inputAsk}
              />
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return 'Loading......';
  }
}
