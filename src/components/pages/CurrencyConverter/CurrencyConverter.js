import React from 'react';
import './CurrencyConverter.css';

export default function CurrencyConverter(props) {
  const {
    listExchangeRates,
    updateSelectBid,
    updateInputBid,
    updateSelectAsk,
    updateInputAsk,
    selectAsk,
    selectBid,
    inputBid,
    inputAsk,
  } = props;

  if (listExchangeRates) {   
    const listCurrensies = listExchangeRates.sort().map(item => (      
      <option
        value={item[1]}        
        key={item[0]}
      >
        {item[0]}
      </option>
    ));

    return (
      <div className="page-converter">
        <div className="content">
          <h2 className="page-converter__title">CURRENCY CONVERTER</h2>
          <h3 className="page-converter__subtitle">Based on exchange rate of central bank</h3>
          <div className="converter">
            <div className="converter__header">
              <span>I HAVE</span>
              <span>I'LL GET</span>
            </div>
            <div className="converter__wrapper">
              <div className="converter__have">
                <select
                  name="bid"
                  className="converter__select"
                  onChange={e => updateSelectBid(e.target.value)}
                  value={selectBid}
                >
                  {listCurrensies}
                </select>
                <input
                  className="converter__input"
                  type="text"
                  onChange={e => updateInputBid(e.target.value)}
                  value={inputBid} 
                  placeholder="0"                 
                />
              </div>
              <div className="converter__midle">
                <img className="converter__img" src="./images/vector.svg" alt="arows" />
              </div>
              <div className="converter__want">
                <select
                  name="ask"
                  className="converter__select"
                  onChange={e => updateSelectAsk(e.target.value)}
                  value={selectAsk}
                >
                  {listCurrensies}
                </select>
                <input
                  className="converter__input"
                  type="text"
                  onChange={e => updateInputAsk(e.target.value)}
                  value={inputAsk}  
                  placeholder="0"                
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return 'Loading......';
  }
}
