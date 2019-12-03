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
            <div className="page-converter__have">
              <div className="page-converter__label">I HAVE</div> 
              <input
                type="text"
                onChange={e => updateInputBid(e.target.value)}
                value={inputBid}
              />             
              <select
                name="bid"                              
                className="page-converter__select"
                onChange={e => updateSelectBid(e.target.value)}
              >
                {listCurrensies}
              </select>              
            </div>
            <div className="page-converter__want">
              <div className="page-converter__label">I'LL GET</div>
              <input
                type="text"
                onChange={e => updateInputAsk(e.target.value)}
                value={inputAsk}
              />
              <select
                name="ask"              
                className="page-converter__select"
                onChange={e => updateSelectAsk(e.target.value)}
              >
                {listCurrensies}
              </select>             
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return 'Loading......';
  }
}
